/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
// Слайдер
var swiper = new Swiper('.swiper', {
  // Прокрутка
  loop: false,
  // Точки
  pagination: {
    el: '.swiper-pagination'
  },
  // Навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // Находим body и rangeText

var range = document.querySelector("#rangeText"),
    big = document.querySelector("#bigText"); // Изменение велечины текста

range.addEventListener("change", function (event) {
  big.style.fontSize = this.value + "px";
}); // Смена контраста текста по тегам

var img = document.getElementsByTagName('img');
var link = document.getElementsByTagName("a");
var span = document.getElementsByTagName("span");
var p = document.getElementsByTagName("p");
var h4 = document.getElementsByTagName('h4');
var h3 = document.getElementsByTagName('h3'); // Смена контраста бг по тегам по классам

var btn = document.querySelector('.visiBtn');
var card = document.querySelectorAll('.card');
var slide = document.querySelectorAll('.feedback__content');
var elements = document.querySelectorAll('.title'); // Убираем бг у секций

var heroSection = document.querySelector('.hero__content');
var findSection = document.querySelector('.find__content');
var body = document.querySelector('#bigText'); // Функция изменения цвета

btn.addEventListener('click', function () {
  // смена цвета бг 
  body.classList.toggle('visi'); // убираем бг у секций

  heroSection.classList.toggle('bgnone');
  findSection.classList.toggle('bgnone'); // проходимся циклом по всем тегам и классам

  for (var i = 0; i < img.length; i++) {
    img[i].classList.toggle('imgnone');
  }

  for (var i = 0; i < slide.length; i++) {
    slide[i].classList.toggle('visi');
  }

  for (var i = 0; i < h3.length; i++) {
    h3[i].classList.toggle('test');
  }

  for (var i = 0; i < h4.length; i++) {
    h4[i].classList.toggle('test');
  }

  for (var i = 0; i < card.length; i++) {
    card[i].classList.toggle('visi');
  }

  for (var i = 0; i < p.length; i++) {
    p[i].classList.toggle('test');
  }

  for (var i = 0; i < span.length; i++) {
    span[i].classList.toggle('test');
  }

  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle('test');
  }

  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle('test');
  }
}); // Липкая шапка

var header = document.querySelector('.header__top'); // Событие скрола

document.addEventListener('scroll', headerFixed); // Функция добавления класса при скроле

function headerFixed() {
  if (window.scrollY > 30) {
    header.classList.add('header__top_bg');
  } else {
    header.classList.remove('header__top_bg');
  }
}
/******/ })()
;
//# sourceMappingURL=main.js.map