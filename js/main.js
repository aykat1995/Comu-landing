'use strict'

// Выпадающий список навигации 

let navList = document.querySelectorAll('.nav__list__li'); //Список элементов навигации

navList.forEach((link) => {
  link.addEventListener('click', (e) => {
  
    if (!e.target.classList.contains('drop-down')) return;
    e.preventDefault();

    let link = e.target;
    let dropDown = link.nextSibling.nextSibling;

    link.classList.toggle('active');
    dropDown.classList.toggle('active');

    document.addEventListener( 'click', (e) => {
      const withinBoundaries = e.composedPath().includes(link);
     
      if ( ! withinBoundaries ) {
        link.classList.remove('active')
        dropDown.classList.remove('active')
      }
    })
  })
})

// Бургер-меню

let burger = document.querySelector('.menu-burger');
let nav = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
})

