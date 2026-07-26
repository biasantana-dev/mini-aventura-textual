const textoTitulo = document.getElementById('titulo');
const imgCenario = document.getElementById('cenario');
const textoNarrativa = document.getElementById('narrativa');
const boxBotoes = document.getElementById('box-botoes');
const botao1 = document.getElementById('btn1');
const botao2 = document.getElementById('btn2');
const textoBtn1 = document.getElementById('escolha-1');
const textoBtn2 = document.getElementById('escolha-2');
const Reiniciar = document.getElementById('box-reiniciar');
const btnReiniciar = document.getElementById('btn-reiniciar');

let estadoAtual = 'inicio';

const cenaInicial = {
   titulo: 'Saguão da Corporação Nexus',
   imagem: 'img/saguão.jpg',
   narrativa: 'Os alarmes da corporação Nexus estão soando. Você está no saguão principal com o pendrive no bolso. Os guardas estão bloqueando a saída principal.',
   escolha1: 'Fugir pelos becos escuros do subsolo.',
   escolha2: 'Subir pelo elevador de serviço em direção aos telhados.'
};

const cenaBeco = {
   titulo: 'O Beco Escuro',
   imagem: 'img/beco-escuro.jpg',
   narrativa: 'O subsolo é úmido e mal iluminado. No meio do caminho, você dá de cara com membros de uma gangue cibernética local bloqueando a passagem.',
   escolha1: 'Tentar negociar entregando seus créditos (dinheiro).',
   escolha2: 'Sacar sua arma e tentar abrir caminho à força.'
};

const cenaTelhado = {
   titulo: 'Os Telhados',
   imagem: 'img/telhado.jpg',
   narrativa: 'A chuva bate forte no telhado. Você precisa pular para o prédio vizinho, mas um drone de segurança está patrulhando a área.',
   escolha1: 'Tentar hackear o drone rapidamente.',
   escolha2: 'Esperar o drone virar e tentar correr e pular.'
};

const final1 = {
   titulo: 'MISSÃO CUMPRIDA!',
   imagem: 'img/missao-cumprida.jpg',
   narrativa: 'Você consegue despistar as ameaças, alcança o ponto de extração e entrega os dados.',
};

const final2 = {
   titulo: 'GAME OVER',
   corTitulo: '#ff003c',
   imagem: 'img/game-over-beco.jpg',
   narrativa: 'A gangue não aceita sua intimidação. Você é cercada e o pendrive é roubado.'

}

const final3 = {
   titulo: 'GAME OVER!',
   corTitulo: '#ff003c',
   imagem: 'img/game-over-telhado.jpg',
   narrativa: 'Você escorrega na borda molhada ao tentar fugir do drone e acaba sendo capturada pela segurança da Nexus.'
}

function carregarCena(cenaAtual) {
   textoTitulo.innerText = cenaAtual.titulo;
   imgCenario.src = cenaAtual.imagem;
   textoNarrativa.innerText = cenaAtual.narrativa;

   if (cenaAtual.corTitulo) {
      textoTitulo.style.color = cenaAtual.corTitulo;
   } else {
      textoTitulo.style.color = '#00F2EA';
   }

   if (cenaAtual.escolha1) {
      boxBotoes.style.display = 'flex';
      Reiniciar.style.display = 'none';
      textoBtn1.innerText = cenaAtual.escolha1;
      textoBtn2.innerText = cenaAtual.escolha2;
   } else {
      boxBotoes.style.display = 'none';
      Reiniciar.style.display = 'flex';
   }
}

carregarCena(cenaInicial);

botao1.addEventListener('click', () => {
   if (estadoAtual === 'inicio') {
      estadoAtual = 'beco';
      carregarCena(cenaBeco);
   } else if (estadoAtual === 'beco') {
      estadoAtual = 'final1';
      carregarCena(final1);
   } else if (estadoAtual === 'telhado') {
      estadoAtual = 'final1';
      carregarCena(final1);
   }
});

botao2.addEventListener('click', () => {
   if (estadoAtual === 'inicio') {
      estadoAtual = 'telhado';
      carregarCena(cenaTelhado);
   } else if (estadoAtual === 'beco') {
      estadoAtual = 'final2';
      carregarCena(final2);
   } else if (estadoAtual === 'telhado') {
      estadoAtual = 'final3';
      carregarCena(final3);
   }
});

btnReiniciar.addEventListener('click', () => {
   estadoAtual = 'inicio';
   carregarCena(cenaInicial);
});