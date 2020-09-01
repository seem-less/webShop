module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client-config.js":
/*!**************************!*\
  !*** ./client-config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst clientConfig = {\n  siteUrl: \"http://localhost:3000\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (clientConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQtY29uZmlnLmpzP2UzNmEiXSwibmFtZXMiOlsiY2xpZW50Q29uZmlnIiwic2l0ZVVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQURRLENBQXJCO0FBSWVELDJFQUFmIiwiZmlsZSI6Ii4vY2xpZW50LWNvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNsaWVudENvbmZpZyA9IHtcbiAgICBzaXRlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRDb25maWc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client-config.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./components/Nav.js\");\nvar _jsxFileName = \"/home/seem/Documents/BlackSeedSite/woo-next/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Header = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSCxDQU5EOztBQVFlQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIlxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdi8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Layout = props => {\n  return __jsx(\"div\", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"title\", null, \"Blackseed site\")), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), props.children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFNBQ0ksbUJBQ0ksTUFBQyxnREFBRCxRQUNJLHNDQURKLENBREosRUFJSSxNQUFDLCtDQUFELE9BSkosRUFLS0EsS0FBSyxDQUFDQyxRQUxYLENBREo7QUFTSCxDQVZEOztBQVllRixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJyBcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsYWNrc2VlZCBzaXRlPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/seem/Documents/BlackSeedSite/woo-next/components/Nav.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Nav = () => {\n  return __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-dark bg-primary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"collapse navbar-collapse\",\n    id: \"navbarColor01\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    className: \"navbar-nav mr-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    className: \"nav-item active\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 21\n    }\n  }, \"Home \", __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 59\n    }\n  }, \"(current)\"))), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 21\n    }\n  }, \"Features\")), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 21\n    }\n  }, \"Pricing\")), __jsx(\"li\", {\n    className: \"nav-item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, \"About\")), __jsx(\"li\", {\n    className: \"nav-item dropdown\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"nav-link dropdown-toggle\",\n    \"data-toggle\": \"dropdown\",\n    href: \"#\",\n    role: \"button\",\n    \"aria-haspopup\": \"true\",\n    \"aria-expanded\": \"false\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, \"Dropdown\"), __jsx(\"div\", {\n    className: \"dropdown-menu\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \"Action\"), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, \"Another action\"), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \"Something else here\"), __jsx(\"div\", {\n    className: \"dropdown-divider\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }), __jsx(\"a\", {\n    className: \"dropdown-item\",\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, \"Separated link\"))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcz9hMTMzIl0sIm5hbWVzIjpbIk5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLEdBQUcsR0FBRyxNQUFNO0FBQ2QsU0FDSTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBMEMsTUFBRSxFQUFDLGVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBd0IsUUFBSSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBc0M7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdEMsQ0FESixDQURBLEVBSUE7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixRQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQUpBLEVBT0E7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUF3QixRQUFJLEVBQUMsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBUEEsRUFVQTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxVQUFiO0FBQXdCLFFBQUksRUFBQyxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosQ0FWQSxFQWFBO0FBQUksYUFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQywwQkFBYjtBQUF3QyxtQkFBWSxVQUFwRDtBQUErRCxRQUFJLEVBQUMsR0FBcEU7QUFBd0UsUUFBSSxFQUFDLFFBQTdFO0FBQXNGLHFCQUFjLE1BQXBHO0FBQTJHLHFCQUFjLE9BQXpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQTZCLFFBQUksRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFFQTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQTZCLFFBQUksRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZBLEVBR0E7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUE2QixRQUFJLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIQSxFQUlBO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKQSxFQUtBO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBNkIsUUFBSSxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEEsQ0FGSixDQWJBLENBREosQ0FESixDQURKO0FBOEJILENBL0JEOztBQWlDZUEsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5hdiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJDb2xvcjAxXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhvbWUgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkZlYXR1cmVzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5QcmljaW5nPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5Ecm9wZG93bjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPkFjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TZXBhcmF0ZWQgbGluazwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Product = props => {\n  const {\n    product\n  } = props;\n  return __jsx(\"div\", {\n    className: \"card col-3 mb-3\"\n  }, __jsx(\"h3\", {\n    className: \"card-header\"\n  }, product.name), __jsx(\"img\", {\n    src: product.images[0].src,\n    alt: product.name\n  }), __jsx(\"div\", {\n    className: \"card-body\"\n  }, __jsx(\"h6\", {\n    className: \"card-subtitle text-center\"\n  }, product.price), __jsx(\"a\", {\n    href: \"\",\n    className: \"btn btn-primary\"\n  }, \"View\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QuanM/OWQwNiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0IiwibmFtZSIsImltYWdlcyIsInNyYyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUlDLEtBQUQsSUFBVztBQUV2QixRQUFNO0FBQUNDO0FBQUQsTUFBWUQsS0FBbEI7QUFDQSxTQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQTZCQyxPQUFPLENBQUNDLElBQXJDLENBREosRUFFSTtBQUFLLE9BQUcsRUFBRUQsT0FBTyxDQUFDRSxNQUFSLENBQWUsQ0FBZixFQUFrQkMsR0FBNUI7QUFBaUMsT0FBRyxFQUFFSCxPQUFPLENBQUNDO0FBQTlDLElBRkosRUFHSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUEyQ0QsT0FBTyxDQUFDSSxLQUFuRCxDQURKLEVBRUk7QUFBRyxRQUFJLEVBQUMsRUFBUjtBQUFXLGFBQVMsRUFBQztBQUFyQixZQUZKLENBSEosQ0FESjtBQVVILENBYkQ7O0FBZWVOLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUHJvZHVjdCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3Qge3Byb2R1Y3R9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC0zIG1iLTNcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlc1swXS5zcmN9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LWNlbnRlclwiPntwcm9kdWN0LnByaWNlfTwvaDY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlZpZXc8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Product */ \"./components/Product.js\");\n/* harmony import */ var _client_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client-config */ \"./client-config.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Index = props => {\n  const {\n    products\n  } = props;\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, __jsx(\"div\", {\n    className: \"product-container\"\n  }, products.length ? products.map(product => __jsx(_components_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: product.id,\n    product: product\n  })) : ''));\n};\n\nIndex.getInitialProps = async () => {\n  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(`${_client_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].siteUrl}/getProducts`);\n  const productsData = await res.json();\n  return {\n    products: productsData\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJwcm9kdWN0cyIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImZldGNoIiwiY2xpZW50Q29uZmlnIiwic2l0ZVVybCIsInByb2R1Y3RzRGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUtDLEtBQUYsSUFBYTtBQUV2QixRQUFNO0FBQUNDO0FBQUQsTUFBYUQsS0FBbkI7QUFFQSxTQUNBLE1BQUMsMERBQUQsUUFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0tDLFFBQVEsQ0FBQ0MsTUFBVCxHQUNHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYUMsT0FBTyxJQUFJLE1BQUMsMkRBQUQ7QUFBUyxPQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsRUFBdEI7QUFBMEIsV0FBTyxFQUFHRDtBQUFwQyxJQUF4QixDQURILEdBRUcsRUFIUixDQURKLENBREE7QUFTSCxDQWJEOztBQWVBTCxLQUFLLENBQUNPLGVBQU4sR0FBd0IsWUFBWTtBQUNoQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FBRSxHQUFFQyxzREFBWSxDQUFDQyxPQUFRLGNBQXpCLENBQXZCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ssSUFBSixFQUEzQjtBQUVBLFNBQU07QUFDRlgsWUFBUSxFQUFFVTtBQURSLEdBQU47QUFHSCxDQVBEOztBQVNlWixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RcIlxuXG5pbXBvcnQgY2xpZW50Q29uZmlnIGZyb20gXCIuLi9jbGllbnQtY29uZmlnXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgSW5kZXggPSAoIHByb3BzICkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHtwcm9kdWN0c30gPSBwcm9wcztcbiAgICBcbiAgICByZXR1cm4oXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9eyBwcm9kdWN0IH0gLz4pXG4gICAgICAgICAgICApIDogJyd9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2NsaWVudENvbmZpZy5zaXRlVXJsfS9nZXRQcm9kdWN0c2ApO1xuICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0RhdGFcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/style.css\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });