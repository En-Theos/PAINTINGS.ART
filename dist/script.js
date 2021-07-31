/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");

window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(".popup-design", ".button-design");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(".popup-consultation", ".button-consultation");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(".popup-gift", ".fixed-gift", true);
});

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
function modal(selModal, selButton, destoy = false) {
  document.querySelectorAll(selButton).forEach(button => {
    button.addEventListener('click', () => {
      codeShow(selModal);
      window.removeEventListener('scroll', showModalByScroll);

      if (destoy) {
        button.remove();
      }
    });
  });
  window.addEventListener('scroll', showModalByScroll);
  setTimeout(() => {
    let display;
    document.querySelectorAll("[data-modal]").forEach(item => {
      if (window.getComputedStyle(item).display == "block") {
        display = "block";
      }
    });

    if (!display) {
      codeShow(".popup-consultation");
    }
  }, 60000);
  const modalWindow = document.querySelector(selModal);
  modalWindow.addEventListener('click', event => {
    if (event.target && event.target == modalWindow || event.target.classList.contains("popup-close")) {
      codeHide(selModal);
    }
  });
}

function codeShow(selModal) {
  document.querySelector(selModal).style.display = "block";
  document.querySelector(selModal).classList.add("animated", "fadeInDown");
  document.querySelector(selModal).classList.remove("fadeInUp");
  document.body.style.overflow = "hidden";
  document.documentElement.style.marginRight = div.offsetWidth - div.clientWidth + "px";
}

function codeHide(selModal) {
  document.querySelector(selModal).classList.add("animated", "fadeInUp");
  document.querySelector(selModal).classList.remove("fadeInDown");
  setTimeout(() => {
    document.querySelector(selModal).style.display = "none";
  }, 1000);
  document.body.style.overflow = "";
  document.documentElement.style.marginRight = "";
}

function showModalByScroll() {
  const scrollFull = document.documentElement.scrollHeight - 1;
  const scrollDo = document.documentElement.clientHeight + document.documentElement.scrollTop;

  if (scrollFull <= scrollDo) {
    document.querySelector(".fixed-gift").click();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

const div = document.createElement("div");
div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;
document.body.append(div);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map