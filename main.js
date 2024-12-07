/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz8xNTUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles.css\n");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contact: () => (/* binding */ Contact)\n/* harmony export */ });\nconst Contact = (function() {\n    const load = () => {\n        const contactBody = document.createElement(\"div\");\n        contactBody.classList.add(\"contactbody\");\n        content.appendChild(contactBody);\n\n        const headline = document.createElement(\"h2\");\n        headline.textContent = \"Contact Us\";\n        headline.classList.add(\"contact\");\n        contactBody.appendChild(headline);\n        \n        const contactInformation = [\n            {name: \"Contact\", details: [\"Telephone: +60 2390 7584\", \"Email: catamari_restaurant@catamari.meow\"]},\n            {name: \"Address\", details: [\"390 Purring Meow\", \"Kuching, Sarawak\", \"Malaysia\"]},\n            {name: \"Hours\", details: [\"Monday: 10:00AM - 8:00PM\", \"Tuesday: 10:00AM - 8:00PM\", \"Wednesday: Closed for Meownovations\", \n                                    \"Thursday: 10:00AM - 8:00PM\", \"Friday: 10:00AM - 10:00PM\", \"Saturday: 9:00AM - 10:00PM\", \"Sunday: 9:00AM - 10:00PM\"]}\n        ]\n\n        contactInformation.forEach((contact) => {\n            const container = document.createElement(\"ul\");\n            container.classList.add(\"contact\");\n            contactBody.appendChild(container);\n\n            const header = document.createElement(\"h3\");\n            header.textContent = `${contact.name}`;\n            header.classList.add(\"contact\");\n            contactBody.appendChild(header);\n\n            contact.details.forEach((line) => {\n                const info = document.createElement(\"li\");\n                info.textContent = `${line}`;\n                contactBody.appendChild(info);\n                info.classList.add(\"contact\");\n            })\n        });\n\n \n    };\n\n    return { load };\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1HQUFtRztBQUNoSCxhQUFhLCtFQUErRTtBQUM1RixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxLQUFLO0FBQzNDO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQ29udGFjdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhY3RCb2R5LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Ym9keVwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Qm9keSk7XG5cbiAgICAgICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICBjb250YWN0Qm9keS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWN0SW5mb3JtYXRpb24gPSBbXG4gICAgICAgICAgICB7bmFtZTogXCJDb250YWN0XCIsIGRldGFpbHM6IFtcIlRlbGVwaG9uZTogKzYwIDIzOTAgNzU4NFwiLCBcIkVtYWlsOiBjYXRhbWFyaV9yZXN0YXVyYW50QGNhdGFtYXJpLm1lb3dcIl19LFxuICAgICAgICAgICAge25hbWU6IFwiQWRkcmVzc1wiLCBkZXRhaWxzOiBbXCIzOTAgUHVycmluZyBNZW93XCIsIFwiS3VjaGluZywgU2FyYXdha1wiLCBcIk1hbGF5c2lhXCJdfSxcbiAgICAgICAgICAgIHtuYW1lOiBcIkhvdXJzXCIsIGRldGFpbHM6IFtcIk1vbmRheTogMTA6MDBBTSAtIDg6MDBQTVwiLCBcIlR1ZXNkYXk6IDEwOjAwQU0gLSA4OjAwUE1cIiwgXCJXZWRuZXNkYXk6IENsb3NlZCBmb3IgTWVvd25vdmF0aW9uc1wiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGh1cnNkYXk6IDEwOjAwQU0gLSA4OjAwUE1cIiwgXCJGcmlkYXk6IDEwOjAwQU0gLSAxMDowMFBNXCIsIFwiU2F0dXJkYXk6IDk6MDBBTSAtIDEwOjAwUE1cIiwgXCJTdW5kYXk6IDk6MDBBTSAtIDEwOjAwUE1cIl19XG4gICAgICAgIF1cblxuICAgICAgICBjb250YWN0SW5mb3JtYXRpb24uZm9yRWFjaCgoY29udGFjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgY29udGFjdEJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7Y29udGFjdC5uYW1lfWA7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgICAgICAgICBjb250YWN0Qm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgICAgICBjb250YWN0LmRldGFpbHMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IGAke2xpbmV9YDtcbiAgICAgICAgICAgICAgICBjb250YWN0Qm9keS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICAgICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbG9hZCB9O1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cat.jpg */ \"./src/assets/cat.jpg\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\nconst Home = (function() {\n    const load = () => {\n        const homeBody = document.createElement(\"div\");\n        homeBody.classList.add(\"homebody\");\n        content.appendChild(homeBody);\n        const textBody = document.createElement(\"div\");\n        textBody.classList.add(\"hometext\");\n        homeBody.appendChild(textBody);\n        const imageBody = document.createElement(\"div\");\n        imageBody.classList.add(\"homeimg\");\n        homeBody.appendChild(imageBody);\n\n\n        const headline = document.createElement(\"h2\");\n        headline.classList.add(\"home\");\n        headline.textContent = \"Only the best seafood for the best of felines.\";\n        textBody.appendChild(headline);\n\n        const paragraph = document.createElement(\"p\");\n        paragraph.classList.add(\"home\");\n        paragraph.textContent = \"Discover a world of flavour beneath at your toe-beans. You'll be sure to come back purr more.\";\n        textBody.appendChild(paragraph);\n\n        const button = document.createElement(\"button\");\n        button.classList.add(\"home\");\n        button.textContent = \"Order .Today\";\n        textBody.appendChild(button);\n        button.addEventListener(\"click\", e => {\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.Display.clearPage();\n            _menu_js__WEBPACK_IMPORTED_MODULE_1__.Menu.load();\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.Display.changeContext(\"menu\");\n        });    \n    \n        const image = document.createElement(\"img\");\n        image.classList.add(\"home\");\n        image.src = _assets_cat_jpg__WEBPACK_IMPORTED_MODULE_2__;\n        imageBody.appendChild(image);\n    };\n\n    return { load };\n})();\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQU87QUFDbkIsWUFBWSwwQ0FBSTtBQUNoQixZQUFZLDhDQUFPO0FBQ25CLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQUc7QUFDdkI7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFa0M7QUFDRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEhvbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob21lQm9keS5jbGFzc0xpc3QuYWRkKFwiaG9tZWJvZHlcIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUJvZHkpO1xuICAgICAgICBjb25zdCB0ZXh0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRleHRCb2R5LmNsYXNzTGlzdC5hZGQoXCJob21ldGV4dFwiKTtcbiAgICAgICAgaG9tZUJvZHkuYXBwZW5kQ2hpbGQodGV4dEJvZHkpO1xuICAgICAgICBjb25zdCBpbWFnZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbWFnZUJvZHkuY2xhc3NMaXN0LmFkZChcImhvbWVpbWdcIik7XG4gICAgICAgIGhvbWVCb2R5LmFwcGVuZENoaWxkKGltYWdlQm9keSk7XG5cblxuICAgICAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG4gICAgICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJPbmx5IHRoZSBiZXN0IHNlYWZvb2QgZm9yIHRoZSBiZXN0IG9mIGZlbGluZXMuXCI7XG4gICAgICAgIHRleHRCb2R5LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcblxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIkRpc2NvdmVyIGEgd29ybGQgb2YgZmxhdm91ciBiZW5lYXRoIGF0IHlvdXIgdG9lLWJlYW5zLiBZb3UnbGwgYmUgc3VyZSB0byBjb21lIGJhY2sgcHVyciBtb3JlLlwiO1xuICAgICAgICB0ZXh0Qm9keS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciAuVG9kYXlcIjtcbiAgICAgICAgdGV4dEJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIERpc3BsYXkuY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICBNZW51LmxvYWQoKTtcbiAgICAgICAgICAgIERpc3BsYXkuY2hhbmdlQ29udGV4dChcIm1lbnVcIik7XG4gICAgICAgIH0pOyAgICBcbiAgICBcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY2F0O1xuICAgICAgICBpbWFnZUJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBsb2FkIH07XG59KSgpO1xuXG5pbXBvcnQgY2F0IGZyb20gXCIuL2Fzc2V0cy9jYXQuanBnXCI7XG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst Display = (function() {\n    const content = document.getElementById(\"content\");\n    let context = \"home\";\n\n    const getContext = () => context;\n    const changeContext = (newContext) => context = newContext;\n\n    _home_js__WEBPACK_IMPORTED_MODULE_1__.Home.load();\n\n    const homeButton = document.getElementById(\"home\");\n    homeButton.addEventListener(\"click\", e => {\n        if (context !== \"home\") {\n            clearPage();\n            _home_js__WEBPACK_IMPORTED_MODULE_1__.Home.load();\n            context = 'home';\n        };\n    });\n\n    const menuButton = document.getElementById(\"menu\");\n    menuButton.addEventListener(\"click\", e => {\n        if (context !== \"menu\") {\n            clearPage();\n            _menu_js__WEBPACK_IMPORTED_MODULE_2__.Menu.load();\n            context = 'menu';\n        };\n    });\n\n    const contactButton = document.getElementById(\"contact\");\n    contactButton.addEventListener(\"click\", e => {\n        if (context !== \"contact\") {\n            clearPage();\n            _contact_js__WEBPACK_IMPORTED_MODULE_3__.Contact.load();\n            context = 'contact';\n        };\n    });\n\n\n    \n    const clearPage = () => {\n        content.replaceChildren();\n    }\n\n    return { clearPage, getContext, changeContext }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0I7QUFDVztBQUNBO0FBQ007O0FBRWhDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksMENBQUk7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBDQUFJO0FBQ2hCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQ0FBSTtBQUNoQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQU87QUFDbkI7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmV4cG9ydCBjb25zdCBEaXNwbGF5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgbGV0IGNvbnRleHQgPSBcImhvbWVcIjtcblxuICAgIGNvbnN0IGdldENvbnRleHQgPSAoKSA9PiBjb250ZXh0O1xuICAgIGNvbnN0IGNoYW5nZUNvbnRleHQgPSAobmV3Q29udGV4dCkgPT4gY29udGV4dCA9IG5ld0NvbnRleHQ7XG5cbiAgICBIb21lLmxvYWQoKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGlmIChjb250ZXh0ICE9PSBcImhvbWVcIikge1xuICAgICAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICBIb21lLmxvYWQoKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSAnaG9tZSc7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gXCJtZW51XCIpIHtcbiAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICAgICAgTWVudS5sb2FkKCk7XG4gICAgICAgICAgICBjb250ZXh0ID0gJ21lbnUnO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IFwiY29udGFjdFwiKSB7XG4gICAgICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgICAgIENvbnRhY3QubG9hZCgpO1xuICAgICAgICAgICAgY29udGV4dCA9ICdjb250YWN0JztcbiAgICAgICAgfTtcbiAgICB9KTtcblxuXG4gICAgXG4gICAgY29uc3QgY2xlYXJQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNsZWFyUGFnZSwgZ2V0Q29udGV4dCwgY2hhbmdlQ29udGV4dCB9XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\nconst Menu = (function() {\n    const load = () => {\n        const menuBody = document.createElement(\"div\");\n        menuBody.classList.add(\"menubody\");\n        content.appendChild(menuBody);\n\n        const headline = document.createElement(\"h2\");\n        headline.textContent = \"Menu\";\n        headline.classList.add(\"menu\");\n        menuBody.appendChild(headline);\n\n        const menuItems = [\n            {name: \"Crispy Catamari\", description: \"Squid rings fried in a layer of deliciously seasoned batter.\", price: \"10.00€\"},\n            {name: \"Seafood Purrito\", description: \"Classic burrito filled with beans, rice, cod, and tomato salsa.\", price: \"15.50€\"},\n            {name: \"Shrimp Catciatore\", description: \"Shrimp prepared in peppered tomato sauce and onions.\", price: \"13.20€\"},\n            {name: \"Salmon Catlet\", description: \"Slices of salmon garnished with lemon and chive butter.\", price: \"17.00€\"},\n            {name: \"Avocato Fajita\", description: \"Squid rings fried in a layer of deliciously seasoned batter.\", price: \"10.50€\"},\n            {name: \"Surf n Meow\", description: \"Fillet mignon paired with red lobster and a side of asparagus.\", price: \"24.20€\"}\n        ]\n\n        menuItems.forEach((item) => {\n            const foodContainer = document.createElement(\"div\");\n            menuBody.appendChild(foodContainer);\n\n            const foodName = document.createElement(\"h3\");\n            foodName.textContent = `${item.name}`;\n            foodName.classList.add(\"menu\");\n            foodContainer.appendChild(foodName);\n\n            const foodDescription = document.createElement(\"p\");\n            foodDescription.textContent = `${item.description}`;\n            foodDescription.classList.add(\"menu\");\n            foodContainer.appendChild(foodDescription);\n\n            const foodPrice = document.createElement(\"b\");\n            foodPrice.textContent = `${item.price}`;\n            foodPrice.classList.add(\"menu\");\n            foodContainer.appendChild(foodPrice);\n        }\n    )\n    };\n\n    return { load };\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsc0hBQXNIO0FBQ25JLGFBQWEseUhBQXlIO0FBQ3RJLGFBQWEsZ0hBQWdIO0FBQzdILGFBQWEsK0dBQStHO0FBQzVILGFBQWEscUhBQXFIO0FBQ2xJLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsVUFBVTtBQUNoRDtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1lbnUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtZW51Qm9keS5jbGFzc0xpc3QuYWRkKFwibWVudWJvZHlcIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUJvZHkpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgICAgICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICAgICAgbWVudUJvZHkuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiBcIkNyaXNweSBDYXRhbWFyaVwiLCBkZXNjcmlwdGlvbjogXCJTcXVpZCByaW5ncyBmcmllZCBpbiBhIGxheWVyIG9mIGRlbGljaW91c2x5IHNlYXNvbmVkIGJhdHRlci5cIiwgcHJpY2U6IFwiMTAuMDDigqxcIn0sXG4gICAgICAgICAgICB7bmFtZTogXCJTZWFmb29kIFB1cnJpdG9cIiwgZGVzY3JpcHRpb246IFwiQ2xhc3NpYyBidXJyaXRvIGZpbGxlZCB3aXRoIGJlYW5zLCByaWNlLCBjb2QsIGFuZCB0b21hdG8gc2Fsc2EuXCIsIHByaWNlOiBcIjE1LjUw4oKsXCJ9LFxuICAgICAgICAgICAge25hbWU6IFwiU2hyaW1wIENhdGNpYXRvcmVcIiwgZGVzY3JpcHRpb246IFwiU2hyaW1wIHByZXBhcmVkIGluIHBlcHBlcmVkIHRvbWF0byBzYXVjZSBhbmQgb25pb25zLlwiLCBwcmljZTogXCIxMy4yMOKCrFwifSxcbiAgICAgICAgICAgIHtuYW1lOiBcIlNhbG1vbiBDYXRsZXRcIiwgZGVzY3JpcHRpb246IFwiU2xpY2VzIG9mIHNhbG1vbiBnYXJuaXNoZWQgd2l0aCBsZW1vbiBhbmQgY2hpdmUgYnV0dGVyLlwiLCBwcmljZTogXCIxNy4wMOKCrFwifSxcbiAgICAgICAgICAgIHtuYW1lOiBcIkF2b2NhdG8gRmFqaXRhXCIsIGRlc2NyaXB0aW9uOiBcIlNxdWlkIHJpbmdzIGZyaWVkIGluIGEgbGF5ZXIgb2YgZGVsaWNpb3VzbHkgc2Vhc29uZWQgYmF0dGVyLlwiLCBwcmljZTogXCIxMC41MOKCrFwifSxcbiAgICAgICAgICAgIHtuYW1lOiBcIlN1cmYgbiBNZW93XCIsIGRlc2NyaXB0aW9uOiBcIkZpbGxldCBtaWdub24gcGFpcmVkIHdpdGggcmVkIGxvYnN0ZXIgYW5kIGEgc2lkZSBvZiBhc3BhcmFndXMuXCIsIHByaWNlOiBcIjI0LjIw4oKsXCJ9XG4gICAgICAgIF1cblxuICAgICAgICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBtZW51Qm9keS5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgICAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgICAgICAgICAgZm9vZE5hbWUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtpdGVtLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgICAgICBmb29kRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiXCIpO1xuICAgICAgICAgICAgZm9vZFByaWNlLnRleHRDb250ZW50ID0gYCR7aXRlbS5wcmljZX1gO1xuICAgICAgICAgICAgZm9vZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgICAgICAgICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuICAgICAgICB9XG4gICAgKVxuICAgIH07XG5cbiAgICByZXR1cm4geyBsb2FkIH07XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/assets/cat.jpg":
/*!****************************!*\
  !*** ./src/assets/cat.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beca18b5dbeb9aadf819.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;