/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ (() => {



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vars__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_1__);


var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  } // And if we need scrollbar

});
var range = document.querySelector("#rangeText"),
    big = document.querySelector("#bigText");
range.addEventListener("change", function (event) {
  big.style.fontSize = this.value + "px";
}); // document.body.style.background = "#ccc";

var img = document.getElementsByTagName('img');
var link = document.getElementsByTagName("a");
var span = document.getElementsByTagName("span");
var p = document.getElementsByTagName("p");
var h4 = document.getElementsByTagName('h4');
var h3 = document.getElementsByTagName('h3');
var btn = document.querySelector('.visiBtn');
var card = document.querySelectorAll('.card');
var slide = document.querySelectorAll('.feedback__content');
var elements = document.querySelectorAll('.title');
var heroSection = document.querySelector('.hero__content');
var findSection = document.querySelector('.find__content');
var body = document.querySelector('#bigText');
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
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map