import vars from './_vars';
import './_functions';

const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
});

let range = document.querySelector("#rangeText"),
  big = document.querySelector("#bigText");

range.addEventListener("change", function (event) {
  big.style.fontSize = this.value + "px";
});

// document.body.style.background = "#ccc";


let img = document.getElementsByTagName('img');
let link = document.getElementsByTagName("a");
let span = document.getElementsByTagName("span");
let p = document.getElementsByTagName("p");
let h4 = document.getElementsByTagName('h4');
let h3 = document.getElementsByTagName('h3');

let btn = document.querySelector('.visiBtn');
let card = document.querySelectorAll('.card');
let slide = document.querySelectorAll('.feedback__content');
let elements = document.querySelectorAll('.title');

let heroSection = document.querySelector('.hero__content');
let findSection = document.querySelector('.find__content');
let body = document.querySelector('#bigText');



btn.addEventListener('click', function () {

  body.classList.toggle('visi');

  
  heroSection.classList.toggle('bgnone');
  findSection.classList.toggle('bgnone');


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
})