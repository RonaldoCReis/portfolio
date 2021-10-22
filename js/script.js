function initMenu(){
  function menuHamburguer() {
    const item = document.getElementById("listaItens");
    if (item.style.display === "block") {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  }
  const botaoMenu = document.querySelector('.hamburguer');
  botaoMenu.addEventListener('click', menuHamburguer);
  const itemLista = document.querySelectorAll('#listaItens li');

  function fecharMenu(){
    const item = document.getElementById("listaItens");
    if(window.matchMedia('(max-width: 700px)').matches){
      item.style.display = "none";
    }
  }

  itemLista.forEach((item) =>{
    item.addEventListener('click', fecharMenu)
  });
}
initMenu();


function initCarrosel(){
  const setaProximo = document.querySelector('#carrosel-right');
  const setaAnterior = document.querySelector('#carrosel-left');
  const carrosel = document.querySelectorAll('.carrosel-item');
  let carroselIndex = 0;

  function ativarProximo(){
    carrosel.forEach((item) =>{
      item.classList.remove('ativo');
    });
    carroselIndex++
    if(carroselIndex > --carrosel.length){
      carroselIndex = 0;
    }
    carrosel[carroselIndex].classList.add('ativo');
  }

  function ativarAnterior(){
    carrosel.forEach((item) =>{
      item.classList.remove('ativo');
    });
    carroselIndex--
    if(carroselIndex < 0){
      carroselIndex = --carrosel.length;
    }
    carrosel[carroselIndex].classList.add('ativo');
  }

  setaProximo.addEventListener('click', ativarProximo);
  setaAnterior.addEventListener('click', ativarAnterior);
}
initCarrosel();

function initPlanetas(){
  const planetas = document.querySelectorAll('.js-planeta');

  function girarPlaneta(){
    event.target.classList.toggle('planeta-girar');
  };

  planetas.forEach((planeta) =>{
    planeta.addEventListener('click', girarPlaneta);
  });
}
initPlanetas();


function initModal(){
const nome = document.querySelector('.nome');
const modal = document.querySelector('.modal');
const fechar = document.querySelector('.modal-fechar');
function toggleModal(){
  modal.classList.toggle('modal-ativo');
}
function fecharModal () {
  if (event.target === modal) {
    modal.classList.remove('modal-ativo');
  }
}

fechar.addEventListener('click', toggleModal)
nome.addEventListener('click', toggleModal);
window.addEventListener('click', fecharModal);
}
initModal();

var lazyLoad = new LazyLoad({
  elements_selector: ".lazy",
});