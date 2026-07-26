const textoTitulo = document.getElementById('titulo');
const imgCenario = document.getElementById('cenario');
const textoNarrativa = document.getElementById('narrativa');
const botao1 = document.getElementById('btn1');
const botao2 = document.getElementById('btn2'); 
const textoBtn1 = document.getElementById('escolha-1');
const textoBtn2 = document.getElementById('escolha-2');


const cenaInicial = {
   titulo: 'Saguão da Corporação Nexus',
   imagem: 'img/saguão.jpg',
   narrativa: 'Os alarmes da corporação Nexus estão soando. Você está no saguão principal com o pendrive no bolso. Os guardas estão bloqueando a saída principal.',
   escolha1: 'Fugir pelos becos escuros do subsolo.',
   escolha2: 'Subir pelo elevador de serviço em direção aos telhados.'
}; 

function carregarCena(cenaAtual) {
   textoTitulo.innerText = cenaAtual.titulo;
   imgCenario.src = cenaAtual.imagem;
   textoNarrativa.innerText = cenaAtual.narrativa;
   textoBtn1.innerText = cenaAtual.escolha1;
   textoBtn2.innerText = cenaAtual.escolha2;
}

carregarCena(cenaInicial);

botao1.addEventListener('click', () => {
   console.log('Fugindo pelo beco!');
});

botao2.addEventListener('click', () => {
   console.log('Subindo para o telhado!');
});