//TAB NAVIGATION

function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();


// ACCORDION LIST

function initAccordion(){

  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = 'ativo'

  // teste de validação do accordionList
  if (accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
  
    function activeAccordion(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }

}
initAccordion();


// SOFT SCROll INTO LINKS
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); // Pegando elementos que comecem com #

  function scrollToSection(event){
    event.preventDefault(); // previne o comportamento padrão do evento
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const top = section.offsetTop;
    
    // Forma primaria de dar um scroll suave.
    section.scrollIntoView({
      behavior: "smooth",
      block: 'start', // alinha o bloco ao inicio
    });

    
    //Forma alternativa
    // recebe dois parametos sendo estes as coordenadas x e y.
    // quando usado options como argumento, passa a ser um objeto.
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  })
}
initScrollSuave();

//ANIMAÇÃO AO SCROLL
function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll(){
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // calcula distancia entre o elemento e o topo
      const isSectionVisible = (sectionTop - windowMetade) < 0; // realizou o calculo e fez a validação
      if (isSectionVisible) {
        section.classList.add('ativo');
      }
    })
  }

  window.addEventListener("scroll", animaScroll); 
}
initAnimacaoScroll();
