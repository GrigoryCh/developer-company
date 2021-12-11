"use strict";
const element = document.querySelector('.cards__link');
const item = document.querySelector('.cards__body');
element.addEventListener('click', function (event) {
   element.classList.add('_active');
   if (item.classList.contains('_hidden')) {
   item.classList.remove('_hidden');
   }
   event.preventDefault();
  });