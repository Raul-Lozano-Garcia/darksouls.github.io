window.addEventListener("load", () => { 
  let hamburger = document.querySelector('#toggle');
  let bars = document.querySelector('.fa-bars');
  let times = document.querySelector('.fa-times');
  let menu = document.querySelector('nav');
  let bod = document.querySelector('#header');

  hamburger.addEventListener('click', ()=> {
    bars.classList.toggle('activo');
    times.classList.toggle('activo');
    menu.classList.toggle('activo');
  })

  $('table').stacktable();
});