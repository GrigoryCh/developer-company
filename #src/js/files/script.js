"use strict";
//===Параллакс====================================================================================================

var scrollPosition = 0;
document.addEventListener('scroll', function(){
var scrollPosition = 0 - scrollY/2;
  document.querySelector('.header-secondary__image').style.transform = 'translateY('+scrollPosition+'px)';
});
const element = document.querySelector('.cards__link');
const item = document.querySelector('.cards__body');
element.addEventListener('click', function (event) {
   element.classList.add('_active');
   if (item.classList.contains('_hidden')) {
   item.classList.remove('_hidden');
   }
   event.preventDefault();
  });