/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"14 March 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n    const menuBtn = document.querySelector(\".menu\");\r\n    const menu = document.querySelector(\"menu\");\r\n    const closeBtn = menu.querySelector(\".close-btn\");\r\n    const menuItems = menu.querySelectorAll(\"ul a\");\r\n    const scroll = document.querySelector(\"main a\");\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle(\"active-menu\");\r\n    };\r\n\r\n    menuBtn.addEventListener(\"click\", handleMenu);\r\n    closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n    const smoothScrolling = (element) => {\r\n        let anchor = element.hash.substring(1);\r\n        let href = document.getElementById(anchor);\r\n        href.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n    };\r\n\r\n    menuItems.forEach((item) => {\r\n        item.addEventListener(\"click\", (event) => {\r\n            handleMenu();\r\n            event.preventDefault();\r\n            smoothScrolling(item);\r\n        });\r\n    });\r\n\r\n    scroll.addEventListener(\"click\", (event) => {\r\n        event.preventDefault();\r\n        smoothScrolling(scroll);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst modal = () => {\r\n    const modal = document.querySelector(\".popup\");\r\n    let modalContent = document.querySelector(\".popup-content\");\r\n    const closeBtn = modal.querySelector(\".popup-close\");\r\n    const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n    let step = 0;\r\n    let idInterval;\r\n    const modalAnimation = () => {\r\n        let d = (window.innerWidth - modalContent.offsetWidth) * 0.5 + 50;\r\n\r\n        step++;\r\n\r\n        idInterval = requestAnimationFrame(modalAnimation);\r\n        if (step < d) {\r\n            modalContent.style.left = step + \"px\";\r\n        } else {\r\n            cancelAnimationFrame(idInterval);\r\n        }\r\n    };\r\n\r\n    buttons.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            modalContent = document.querySelector(\".popup-content\");\r\n            modal.style.display = \"block\";\r\n            if (window.innerWidth > 768) {\r\n                modalContent.style.left = -modalContent.offsetWidth + \"px\";\r\n                requestAnimationFrame(modalAnimation);\r\n            }\r\n        });\r\n    });\r\n\r\n    closeBtn.addEventListener(\"click\", () => {\r\n        modal.style.display = \"none\";\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst tabs = () => {\r\n    const tabPanel = document.querySelector(\".service-header\");\r\n    const tabs = document.querySelectorAll(\".service-header-tab\");\r\n    const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n    tabPanel.addEventListener(\"click\", (e) => {\r\n        const tabBtn = e.target.closest(\".service-header-tab\");\r\n\r\n        if (tabBtn) {\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add(\"active\");\r\n                    tabContent[index].classList.remove(\"d-none\");\r\n                } else {\r\n                    tab.classList.remove(\"active\");\r\n                    tabContent[index].classList.add(\"d-none\");\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n    const timerDays = document.getElementById(\"timer-days\");\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n    const getTimeRemain = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemain = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemain / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemain / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemain / 60) % 60);\r\n        let seconds = Math.floor(timeRemain % 60);\r\n\r\n        return { timeRemain, days, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemain();\r\n\r\n        let addZero = (number) => {\r\n            if (number.toString().length < 2) {\r\n                return `0${number}`;\r\n            } else {\r\n                return number;\r\n            }\r\n        };\r\n\r\n        timerDays.textContent = addZero(getTime.days);\r\n        timerHours.textContent = addZero(getTime.hours);\r\n        timerMinutes.textContent = addZero(getTime.minutes);\r\n        timerSeconds.textContent = addZero(getTime.seconds);\r\n    };\r\n\r\n    let idInterval = setInterval(() => {\r\n        if (getTimeRemain().timeRemain > 0) {\r\n            updateClock();\r\n        } else {\r\n            clearInterval(idInterval);\r\n            timerDays.textContent = \"00\";\r\n            timerHours.textContent = \"00\";\r\n            timerMinutes.textContent = \"00\";\r\n            timerSeconds.textContent = \"00\";\r\n        }\r\n    }, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validation = () => {\r\n    const form2Message = document.getElementById(\"form2-message\");\r\n\r\n    const inputText = document.querySelectorAll(\"form input[type='text']\");\r\n    const inputEmail = document.querySelectorAll(\"form input[type='email']\");\r\n    const inputPhone = document.querySelectorAll(\"form input[type='tel']\");\r\n    const inputNumber = document.querySelectorAll(\".calc-block input\");\r\n\r\n    const validationText = /[^а-я\\- ]+/i;\r\n    const validationEmail = /[^a-z\\@\\-\\_\\.\\!\\~\\*\\']+/i;\r\n    const validationPhone = /[^0-9\\(\\)\\-]+/i;\r\n    const validationNumber = /[^0-9]+/i;\r\n\r\n    const manyDash = /(\\-+)/g;\r\n    const manySpace = /(\\s+)/g;\r\n    const edgeDash = /^\\-|\\-$/g;\r\n    const edgeSpace = /^\\s+|\\s+$/g;\r\n\r\n    inputText.forEach((input) => {\r\n        input.addEventListener(\"input\", (event) => {\r\n            event.target.value = event.target.value.replace(validationText, \"\");\r\n        });\r\n    });\r\n\r\n    inputEmail.forEach((input) => {\r\n        input.addEventListener(\"input\", (event) => {\r\n            event.target.value = event.target.value.replace(validationEmail, \"\");\r\n        });\r\n    });\r\n\r\n    inputPhone.forEach((input) => {\r\n        input.addEventListener(\"input\", (event) => {\r\n            event.target.value = event.target.value.replace(validationPhone, \"\");\r\n        });\r\n    });\r\n\r\n    form2Message.addEventListener(\"input\", (event) => {\r\n        event.target.value = event.target.value.replace(validationText, \"\");\r\n    });\r\n\r\n    inputNumber.forEach((input) => {\r\n        input.addEventListener(\"input\", (event) => {\r\n            event.target.value = event.target.value.replace(validationNumber, \"\");\r\n        });\r\n    });\r\n\r\n    inputText.forEach((input) => {\r\n        input.addEventListener(\"blur\", (event) => {\r\n            event.target.value = event.target.value\r\n                .replace(manyDash, \"-\")\r\n                .replace(manySpace, \" \")\r\n                .replace(edgeDash, \"\")\r\n                .replace(edgeSpace, \"\");\r\n            let capitalizeLetterFunc = (match) => match.toUpperCase();\r\n            event.target.value = event.target.value.toLowerCase();\r\n            event.target.value = event.target.value.replace(/^[а-я]{1}|\\s{1}[а-я]{1}/gi, capitalizeLetterFunc);\r\n        });\r\n    });\r\n\r\n    inputEmail.forEach((input) => {\r\n        input.addEventListener(\"blur\", (event) => {\r\n            event.target.value = event.target.value\r\n                .replace(manyDash, \"-\")\r\n                .replace(manySpace, \" \")\r\n                .replace(edgeDash, \"\")\r\n                .replace(edgeSpace, \"\");\r\n        });\r\n    });\r\n\r\n    inputPhone.forEach((input) => {\r\n        input.addEventListener(\"blur\", (event) => {\r\n            event.target.value = event.target.value\r\n                .replace(manyDash, \"-\")\r\n                .replace(manySpace, \" \")\r\n                .replace(edgeDash, \"\")\r\n                .replace(edgeSpace, \"\");\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;