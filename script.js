const $ = (id) => document.getElementById(id);
let paginaAtual = 0;
let audioOn = false;
let state = loadState();

function emptyState(){
  return { pacotes: ALBUM_CONFIG.pacotesIniciais, inventario:{}, coladas:{}, repetidas:0, quizzes:{}, gameFases:{} };
}
function loadState(){
  const raw = localStorage.getItem(ALBUM_CONFIG.storageKey);
  if(!raw){ const s=emptyState(); saveState(s); return s; }
  try { return {...emptyState(), ...JSON.parse(raw)}; } catch(e){ return emptyState(); }
}
function saveState(s=state){ localStorage.setItem(ALBUM_CONFIG.storageKey, JSON.stringify(s)); }
function play(id){ if(!audioOn && id !== 'audioClick') return; const a=$(id); if(a){ const volumes={audioFundo:.10,audioPacote:.22,audioFicha:.18,audioColar:.16,audioClick:.12,audioDetalhes:.16,audioPagina:.14}; a.pause(); a.currentTime=0; a.volume = volumes[id] ?? .16; a.play().catch(()=>{}); } }
function tocarClique(){ play('audioClick'); }
function imgSrc(id){ return `figurinhas/figurinha-${String(id).padStart(2,'0')}.webp`; }
function fig(id){ return FIGURINHAS.find(f=>f.id===id); }
function temDisponivel(id){ return (state.inventario[id]||0)>0; }
function estaColada(id){ return !!state.coladas[id]; }
function atualizarStatus(){
  $('pacotesTopo').textContent=state.pacotes;
  $('totalPacotes').textContent=state.pacotes;
  $('totalColadas').textContent=Object.keys(state.coladas).length;
  $('totalDisponiveis').textContent=Object.entries(state.inventario).reduce((a,[id,q])=>a+(state.coladas[id]?0:q),0);
  $('totalRepetidas').textContent=state.repetidas||0;
}
function render(){
  state=loadState();
  const left = PAGINAS[paginaAtual];
  const right = PAGINAS[paginaAtual+1];
  $('paginaAtualLabel').textContent = `Página ${paginaAtual+1}`;
  $('tituloPagina').textContent = left?.titulo || '';
  renderPagina($('paginaEsquerda'), left);
  renderPagina($('paginaDireita'), right);
  atualizarStatus();
}
function renderPagina(el,p){
  if(!p){ el.innerHTML=''; return; }
  if(p.tipo==='capa'){
    el.innerHTML = `<div class="capaBox"><div><h1>${ALBUM_CONFIG.titulo}</h1><p>${ALBUM_CONFIG.subtitulo}</p><p>${p.texto}</p><button class="btn-dourado" onclick="abrirPacoteModal()">Abrir pacotes iniciais</button></div></div>`; return;
  }
  if(p.tipo==='contracapa'){
    el.innerHTML = `<div class="contraBox"><div><h2>Contracapa</h2><p>${p.texto}</p><p><b>Projeto:</b> fertilizantes orgânicos, horta pedagógica e educação ambiental.</p></div></div>`; return;
  }
  const cards = p.figurinhas.map(id=>renderSlot(id)).join('');
  el.innerHTML = `<h2>${p.titulo}</h2><p>${p.texto}</p><div class="grade">${cards}</div>`;
}
function renderSlot(id){
  const f=fig(id), col=estaColada(id), disp=temDisponivel(id);
  if(col){
    return `<div class="slot colada" onclick="abrirFicha(${id})"><span class="num">${String(id).padStart(2,'0')}</span><img src="${imgSrc(id)}" alt="${f.titulo}"><h3>${f.titulo}</h3><button type="button">Ver ficha</button></div>`;
  }
  if(disp){
    return `<div class="slot disponivel"><span class="num">${String(id).padStart(2,'0')}</span><div class="placeholder">Disponível<br>${String(id).padStart(2,'0')}</div><h3>${f.titulo}</h3><button type="button" onclick="colar(${id})">Colar figurinha</button></div>`;
  }
  return `<div class="slot"><span class="num">${String(id).padStart(2,'0')}</span><div class="placeholder">?</div><h3>${f.titulo}</h3><button type="button" onclick="abrirPacoteModal()">Buscar</button></div>`;
}
function colar(id){
  tocarClique();
  if(!temDisponivel(id) || estaColada(id)) return;
  state.inventario[id]--; state.coladas[id]=true; saveState(); play('audioColar'); render();
}
function abrirFicha(id){
  if(!estaColada(id)) return;
  const f=fig(id); play('audioFicha'); play('audioDetalhes');
  $('conteudoFicha').innerHTML = `<div class="fichaConteudo"><img src="${imgSrc(id)}" alt="${f.titulo}"><div class="fichaTexto"><span class="tag">Figurinha ${String(id).padStart(2,'0')}</span><h2>${f.titulo}</h2><p><b>Resumo:</b> ${f.resumo}</p><p>${f.detalhes}</p><button class="btn-dourado" onclick="fecharModal('modalFicha')">Fechar ficha</button></div></div>`;
  abrirModal('modalFicha');
}
function abrirModal(id){ $(id).classList.add('ativo'); $(id).setAttribute('aria-hidden','false'); }
function fecharModal(id){ $(id).classList.remove('ativo'); $(id).setAttribute('aria-hidden','true'); }
function abrirPacoteModal(){
  $('avisoPacote').innerHTML = `Você tem <b>${state.pacotes}</b> pacote(s). Cada pacote entrega <b>${ALBUM_CONFIG.figurinhasPorPacote}</b> figurinhas.`;
  $('resultadoPacote').innerHTML=''; abrirModal('modalPacote');
}
function sortearFigurinha(){
  const faltando = FIGURINHAS.filter(f=>!state.coladas[f.id]).map(f=>f.id);
  const base = faltando.length ? faltando : FIGURINHAS.map(f=>f.id);
  return base[Math.floor(Math.random()*base.length)];
}
function abrirPacote(){
  if(state.pacotes<=0){ $('avisoPacote').textContent='Você não tem pacotes. Ganhe pacotes nos simulados ou figurinhas no game.'; return; }
  state.pacotes--; play('audioPacote');
  const ganhos=[];
  for(let i=0;i<ALBUM_CONFIG.figurinhasPorPacote;i++){
    const id=sortearFigurinha(); ganhos.push(id);
    if(state.coladas[id]) state.repetidas=(state.repetidas||0)+1;
    else state.inventario[id]=(state.inventario[id]||0)+1;
  }
  saveState(); atualizarStatus(); render();
  $('avisoPacote').innerHTML='Pacote aberto! Cole as figurinhas disponíveis no álbum.';
  $('resultadoPacote').innerHTML=ganhos.map(id=>`<div class="mini-card"><img src="${imgSrc(id)}"><b>${String(id).padStart(2,'0')}</b><p>${fig(id).titulo}</p></div>`).join('');
}
function mudarPagina(delta){
  paginaAtual = Math.max(0, Math.min(PAGINAS.length-1, paginaAtual+delta));
  if(paginaAtual%2===1 && paginaAtual < PAGINAS.length-1) paginaAtual += delta>0 ? 1 : -1;
  play('audioPagina'); render();
}
function renderQuizHome(){
  $('quizArea').innerHTML = `<div class="quiz-list">${SIMULADOS.map(s=>`<div class="quiz-item"><h3>${s.titulo}</h3><p>${state.quizzes[s.id]?'Recompensa já recebida.':'10 questões com recompensa.'}</p><button onclick="abrirSimulado('${s.id}')">${state.quizzes[s.id]?'Revisar':'Responder'}</button></div>`).join('')}</div>`;
  abrirModal('modalQuiz');
}
function abrirSimulado(id){
  const s=SIMULADOS.find(x=>x.id===id);
  $('quizArea').innerHTML = `<h3>${s.titulo}</h3><form id="quizForm">${s.perguntas.map((p,i)=>`<div class="pergunta"><b>${i+1}. ${p[0]}</b>${p[1].map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${op}</label>`).join('')}</div>`).join('')}<div class="quiz-actions"><button class="btn-dourado" type="submit">Finalizar simulado</button><button type="button" onclick="renderQuizHome()">Voltar</button></div></form><div id="quizMsg"></div>`;
  $('quizForm').onsubmit=(ev)=>{ev.preventDefault(); finalizarSimulado(s);};
}
function finalizarSimulado(s){
  let acertos=0;
  s.perguntas.forEach((p,i)=>{ const v=document.querySelector(`input[name=q${i}]:checked`); if(v && Number(v.value)===p[2]) acertos++; });
  let msg = `Resultado: ${acertos}/10 acertos. `;
  if(state.quizzes[s.id]) msg += 'A recompensa deste simulado já foi recebida.';
  else { const bonus = acertos===10 ? 2 : 1; state.pacotes += bonus; state.quizzes[s.id]={acertos,bonus,data:new Date().toISOString()}; saveState(); atualizarStatus(); msg += `Você ganhou ${bonus} pacote(s).`; }
  $('quizMsg').innerHTML = `<div class="msg">${msg}</div>`;
}
function abrirGame(){ window.location.href='game/index.html'; }
function init(){
  $('btnPrev').onclick=()=>mudarPagina(-2); $('btnNext').onclick=()=>mudarPagina(2);
  $('btnPrevTopo').onclick=()=>mudarPagina(-2); $('btnNextTopo').onclick=()=>mudarPagina(2);
  $('btnCapa').onclick=()=>{paginaAtual=0;render();};
  $('btnQuiz').onclick=renderQuizHome; $('btnGame').onclick=abrirGame;
  $('btnPacoteTopo').onclick=abrirPacoteModal; $('btnAbrirTopo').onclick=abrirPacoteModal; $('btnAbrirLateral').onclick=abrirPacoteModal;
  $('btnAbrirPacote').onclick=abrirPacote; $('fecharPacote').onclick=()=>fecharModal('modalPacote'); $('fecharFicha').onclick=()=>fecharModal('modalFicha'); $('fecharQuiz').onclick=()=>fecharModal('modalQuiz');
  $('btnAudio').onclick=()=>{ audioOn=!audioOn; $('btnAudio').textContent=`Som: ${audioOn?'ON':'OFF'}`; const f=$('audioFundo'); if(audioOn){f.volume=.10; f.play().catch(()=>{});} else f.pause(); };
  document.addEventListener('click',e=>{ if(e.target.tagName==='BUTTON') tocarClique(); });
  render();
}
init();
