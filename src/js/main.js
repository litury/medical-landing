// Слайдер
const swiper = new Swiper('.swiper', {
  // Прокрутка
  loop: false,
  // Точки
  pagination: {
    el: '.swiper-pagination',
  },
  // Навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Находим body и rangeText
let range = document.querySelector("#rangeText"),
  big = document.querySelector("#bigText");
// Изменение велечины текста
range.addEventListener("change", function (event) {
  big.style.fontSize = this.value + "px";
});

// Смена контраста текста по тегам
let img = document.getElementsByTagName('img');
let link = document.getElementsByTagName("a");
let span = document.getElementsByTagName("span");
let p = document.getElementsByTagName("p");
let h4 = document.getElementsByTagName('h4');
let h3 = document.getElementsByTagName('h3');
// Смена контраста бг по тегам по классам
let btn = document.querySelector('.visiBtn');
let card = document.querySelectorAll('.card');
let slide = document.querySelectorAll('.feedback__content');
let elements = document.querySelectorAll('.title');
// Убираем бг у секций
let heroSection = document.querySelector('.hero__content');
let findSection = document.querySelector('.find__content');
let body = document.querySelector('#bigText');

// Функция изменения цвета
btn.addEventListener('click', function () {
  // смена цвета бг 
  body.classList.toggle('visi');

  // убираем бг у секций
  heroSection.classList.toggle('bgnone');
  findSection.classList.toggle('bgnone');

  // проходимся циклом по всем тегам и классам
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

// Липкая шапка
const header = document.querySelector('.header__top')
// Событие скрола
document.addEventListener('scroll', headerFixed);

// Функция добавления класса при скроле
function headerFixed() {
  if (window.scrollY > 30) {
    header.classList.add('header__top_bg');
  } else {
    header.classList.remove('header__top_bg');
  }
}
