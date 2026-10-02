const imagem = document.querySelector('#imagem-hero');

function trocarImagem() {
  if (window.innerWidth <= 600) {
    imagem.src = 'imagens/Apontando-pra-cima.webp';
  } else {
    imagem.src = 'imagens/Homem-apontando.webp';
  }
}

trocarImagem();
window.addEventListener('resize', trocarImagem);