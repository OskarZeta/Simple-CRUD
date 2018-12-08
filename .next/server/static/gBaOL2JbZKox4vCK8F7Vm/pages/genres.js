module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = ["ul.jsx-1781777380{list-style-type:none;}", "th.jsx-1781777380{text-align:left;font-size:14px;padding:5px;background:#e8eef4;}", ".table.jsx-1781777380{border-collapse:collapse;width:100%;}", ".table__wrapper.jsx-1781777380{width:95%;margin:20px auto;padding:0px 20px 30px 20px;border:2px solid #6d86cd;border-radius:10px;overflow-y:auto;}", ".table__wrapper--edit.jsx-1781777380{width:95%;margin:20px auto;padding:0;border:none;border-radius:0;max-height:50vh;overflow-y:auto;}", ".table__name.jsx-1781777380{position:relative;top:0px;left:-20px;margin:0;padding:10px 20px;width:calc(100% + 40px);font-size:18px;background:#6d86cd;color:white;}", ".table__cell.jsx-1781777380{border:2px solid #cdd2d8;padding:3px 5px;}", ".table__delete.jsx-1781777380,.table__edit.jsx-1781777380,.table__add.jsx-1781777380{background:#dc3545;border:none;border-radius:5px;width:100%;color:white;padding:4px 0;margin-top:5px;font-size:12px;cursor:pointer;-webkit-transition:0.2s;transition:0.2s;}", ".table__add.jsx-1781777380{background:#4c6dcb;width:100px;padding:5px 0;margin:10px 0;}", ".table__edit.jsx-1781777380{background:#17a2b8;margin-top:0;font-size:12px;}", ".table__delete.jsx-1781777380:hover,.table__edit.jsx-1781777380:hover,.table__add.jsx-1781777380:hover{opacity:0.8;}", ".table__delete.jsx-1781777380:active{background:#ad2936;}", ".table__edit.jsx-1781777380:active{background:#0f7989;}", ".table__add.jsx-1781777380:active{background:#3a56a7;}"];
_defaultExport.__hash = "1781777380";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = ["ul.jsx-2130102378{list-style-type:none;margin:0;padding:0;}", ".form-add.jsx-2130102378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:90%;margin:20px auto;font-size:14px;}", ".form-add__label.jsx-2130102378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:10px;}", ".form-add__name.jsx-2130102378{width:25%;margin-right:10px;}", ".form-add__input.jsx-2130102378{-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;}", "select.form-add__input.jsx-2130102378{border:1px solid black;-webkit-transition:0.1s;transition:0.1s;cursor:pointer;}", "select.form-add__input.jsx-2130102378:hover{border:1px solid grey;}", ".form-add__selected.jsx-2130102378{margin-left:calc(25% + 10px);margin-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".form-add__selected-item.jsx-2130102378{display:inline-block;background:#48b3f7;color:white;font-weight:bold;border-radius:5px;padding:2px 8px;margin:2px;cursor:pointer;-webkit-transition:0.2s;transition:0.2s;}", ".form-add__selected-item.jsx-2130102378:hover{background:#2891d4;}", ".form-add__btns.jsx-2130102378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".form-add__submit.jsx-2130102378,.form-add__close.jsx-2130102378{width:160px;height:30px;color:white;cursor:pointer;border:none;border-radius:5px;-webkit-transition:0.2s;transition:0.2s;}", ".form-add__submit.jsx-2130102378{background:#28a745;}", ".form-add__submit.jsx-2130102378:hover{background:#2dbe4e;}", ".form-add__submit.jsx-2130102378:active{background:#218b39;}", ".form-add__close.jsx-2130102378{background:#dc3545;}", ".form-add__close.jsx-2130102378:hover{background:#fb3a4c;}", ".form-add__close.jsx-2130102378:active{background:#c62f3e;}", "textarea.jsx-2130102378{min-height:100px;resize:none;}", ".form-add__link.jsx-2130102378{margin-left:5px;}"];
_defaultExport.__hash = "2130102378";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getGenresQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addGenreQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateGenreQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeGenreQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAuthorsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAuthorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateAuthorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeAuthorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getBooksQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addBookQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateBookQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeBookQuery; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  mutation RemoveBook($id: ID!) {\n    removeBook(id: $id) {\n      id\n      name\n      author {\n        id\n        name\n      }\n      genres {\n        id\n        name\n      }\n      description\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  mutation UpdateBook(\n    $id: ID!\n    $name: String!\n    $authorId: ID!\n    $genreIds: [ID]\n    $description: String\n  ) {\n    updateBook(\n      id: $id\n      name: $name\n      authorId: $authorId\n      genreIds: $genreIds\n      description: $description\n    ) {\n      id\n      name\n      author {\n        id\n        name\n      }\n      genres {\n        id\n        name\n      }\n      description\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  mutation AddBook(\n    $name: String!\n    $authorId: ID!\n    $genreIds: [ID]\n    $description: String\n  ) {\n    addBook(\n      name: $name\n      authorId: $authorId\n      genreIds: $genreIds\n      description: $description\n    ) {\n      name\n      author {\n        name\n      }\n      genres {\n        name\n      }\n      description\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  {\n    books {\n      id\n      name\n      author {\n        id\n        name\n        biography\n      }\n      genres {\n        id\n        name\n      }\n      description\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  mutation RemoveAuthor($id: ID!) {\n    removeAuthor(id: $id) {\n      id\n      name\n      born\n      died\n      birthplace\n      genres {\n        id\n        name\n      }\n      influencedAuthors {\n        id\n        name\n      }\n      biography\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  mutation UpdateAuthor(\n    $id: ID!\n    $name: String!\n    $born: String\n    $died: String\n    $birthplace: String\n    $genreIds: [ID]\n    $influenceIds: [ID]\n    $biography: String\n  ) {\n    updateAuthor(\n      id: $id\n      name: $name\n      born: $born\n      died: $died\n      birthplace: $birthplace\n      genreIds: $genreIds\n      influenceIds: $influenceIds\n      biography: $biography\n    ) {\n      id\n      name\n      born\n      died\n      birthplace\n      genres {\n        id\n        name\n      }\n      influencedAuthors {\n        id\n        name\n      }\n      biography\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  mutation AddAuthor(\n    $name: String!\n    $born: String\n    $died: String\n    $birthplace: String\n    $genreIds: [ID]\n    $influenceIds: [ID]\n    $biography: String\n  ) {\n    addAuthor(\n      name: $name\n      born: $born\n      died: $died\n      birthplace: $birthplace\n      genreIds: $genreIds\n      influenceIds: $influenceIds\n      biography: $biography\n    ) {\n      name\n      born\n      died\n      birthplace\n      genres {\n        name\n      }\n      influencedAuthors {\n        name\n      }\n      biography\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  {\n    authors {\n      id\n      name\n      born\n      died\n      birthplace\n      genres {\n        id\n        name\n      }\n      influencedAuthors {\n        id\n        name\n      }\n      biography\n      books {\n        id\n        name\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation RemoveGenre($id: ID!) {\n    removeGenre(id: $id) {\n      name\n      description\n      relatedGenres {\n        name\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation UpdateGenre(\n    $id: ID!\n    $name: String!\n    $description: String!\n    $relatedGenreIds: [ID]\n  ) {\n    updateGenre(\n      id: $id\n      name: $name\n      description: $description\n      relatedGenreIds: $relatedGenreIds\n    ) {\n      id\n      name\n      description\n      relatedGenres {\n        id\n        name\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation AddGenre(\n    $name: String!\n    $description: String!\n    $relatedGenreIds: [ID]\n  ) {\n    addGenre(\n      name: $name\n      description: $description\n      relatedGenreIds: $relatedGenreIds\n    ) {\n      name\n      description\n      relatedGenres {\n        name\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    genres {\n      id\n      name\n      description\n      relatedGenres {\n        id\n        name\n        description\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var getGenresQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var addGenreQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2());
var updateGenreQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3());
var removeGenreQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject4());
var getAuthorsQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject5()); // const getAuthorQuery = gql`
//   query getAuthor($id: ID!) {
//     author(id: $id) {
//       id
//       name
//       born
//       died
//       birthplace
//       genres {
//         id
//         name
//       }
//       influencedAuthors {
//         id
//         name
//       }
//       biography,
//       books {
//         id
//         name
//       }
//     }
//   }
// `;

var addAuthorQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject6());
var updateAuthorQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject7());
var removeAuthorQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject8());
var getBooksQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject9());
var addBookQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject10());
var updateBookQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject11());
var removeBookQuery = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject12());


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




var EmptyTable = function EmptyTable(_ref) {
  var name = _ref.name,
      size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-".concat(_styles_table_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    colSpan: size,
    className: "jsx-".concat(_styles_table_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].__hash) + " " + "table__cell"
  }, "No ".concat(name, " yet")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: _styles_table_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].__hash,
    css: _styles_table_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (EmptyTable);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./frontend/styles/popup.js
var _defaultExport = [".popup.jsx-581459254{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".popup__wrapper.jsx-581459254{background:white;margin:auto;min-width:600px;width:80%;border-radius:5px;}", ".popup__btn.jsx-581459254{background:#17a2b8;border:none;border-radius:5px;width:100%;color:white;padding:4px 0;font-size:12px;}"];
_defaultExport.__hash = "581459254";
/* harmony default export */ var popup = (_defaultExport);
// CONCATENATED MODULE: ./frontend/components/Popup/Popup.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Popup_Popup =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    return _this;
  }

  _createClass(Popup, [{
    key: "clickHandler",
    value: function clickHandler(e) {
      if (e) {
        e.preventDefault();

        if (e.target.classList.contains('popup') || e.target.classList.contains('form-add__close')) {
          e.stopPropagation();
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
      } else {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //className="popup__btn"
      return external_react_default.a.createElement("div", {
        className: "jsx-".concat(popup.__hash)
      }, external_react_default.a.createElement("div", {
        onClick: function onClick() {
          _this2.clickHandler();
        },
        className: "jsx-".concat(popup.__hash)
      }, this.props.trigger), this.state.isOpen && external_react_default.a.createElement("div", {
        onClick: function onClick(e) {
          _this2.clickHandler(e);
        },
        className: "jsx-".concat(popup.__hash) + " " + "popup"
      }, external_react_default.a.createElement("div", {
        className: "jsx-".concat(popup.__hash) + " " + "popup__wrapper"
      }, this.props.children)), external_react_default.a.createElement(style_default.a, {
        styleId: popup.__hash,
        css: popup
      }));
    }
  }]);

  return Popup;
}(external_react_["Component"]);

;
/* harmony default export */ var components_Popup_Popup = __webpack_exports__["a"] = (Popup_Popup);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header(_ref) {
  var id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-702544043" + " " + "menu__header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-702544043" + " " + "menu"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-702544043" + " " + ("menu__item" + (id == 1 ? " menu__item--active" : "") || "")
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/books"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-702544043" + " " + ("menu__item" + (id == 2 ? " menu__item--active" : "") || "")
  }, "Books")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/authors"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-702544043" + " " + ("menu__item" + (id == 3 ? " menu__item--active" : "") || "")
  }, "Authors")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/genres"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-702544043" + " " + ("menu__item" + (id == 4 ? " menu__item--active" : "") || "")
  }, "Genres"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "702544043",
    css: [".menu.jsx-702544043{background:linear-gradient(to right,#afbec9,#f8f9fa);padding:0;margin:0 0 0 40px;}", ".menu__item.jsx-702544043{-webkit-text-decoration:none;text-decoration:none;color:black;display:inline-block;padding:10px;margin-right:10px;background:white;font-weight:bold;}", ".menu__item--active.jsx-702544043{background:#17a2b8;color:white;position:relative;top:10px;}", ".menu__header.jsx-702544043{margin-bottom:40px;}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);




var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_2___default.a({
  //uri: `http://localhost:3000/graphql`
  uri: "https://oskarzeta-crud.herokuapp.com:80/graphql"
}); //console.log(process.env.PORT);

/* harmony default export */ __webpack_exports__["a"] = (function (ClientComponent) {
  return function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
      client: client
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientComponent, null));
  };
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




var Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1009958510" + " " + "layout"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1009958510"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1009958510"
  })), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1009958510",
    css: ["body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\", \"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}", "*{box-sizing:border-box;outline:none;}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WithCRU = function WithCRU(FormComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class2, _Component);

      function _class2() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", _this.props.defaultState);

        return _this;
      }

      _createClass(_class2, [{
        key: "selectHandler",
        value: function selectHandler(e, fields) {
          if (e.target.value !== "") {
            var array;

            switch (fields) {
              case "authors":
                array = new Set(this.state.influenceIds);
                array.add(e.target.value);
                this.setState({
                  influenceIds: array
                });
                break;

              case "author":
                array = e.target.value;
                this.setState({
                  authorId: array
                });
                break;

              case "genres":
                array = new Set(this.state.genreIds);
                array.add(e.target.value);
                this.setState({
                  genreIds: array
                });
                break;

              default:
                throw new Error("wrong fields type");
            }
          }
        }
      }, {
        key: "mapFromCache",
        value: function mapFromCache(ids, client, type, style) {
          var _this2 = this;

          var dataType;

          switch (type) {
            case "authors":
            case "author":
              dataType = "Author";
              break;

            case "genres":
              dataType = "Genre";
              break;

            case "books":
              dataType = "Book";
              break;
          }

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-".concat(style.__hash)
          }, ids.length === 0 || ids[0].length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-".concat(style.__hash) + " " + "form-add__selected"
          }, "No ", type) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
            className: "jsx-".concat(style.__hash) + " " + "form-add__selected"
          }, ids.map(function (id) {
            if (id.length > 0) {
              var data = client.cache.data.data["".concat(dataType, ":").concat(id)];
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
                key: id,
                className: "jsx-".concat(style.__hash)
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
                onClick: function onClick() {
                  return _this2.clickHandler(id, type);
                },
                className: "jsx-".concat(style.__hash) + " " + "form-add__selected-item"
              }, data.name));
            } else return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              key: id,
              className: "jsx-".concat(style.__hash)
            }, "No ", type, " selected");
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            styleId: style.__hash,
            css: style
          }));
        }
      }, {
        key: "mapOptions",
        value: function mapOptions(dataArray, idsArray) {
          if (idsArray.length && idsArray[0]) {
            var sortedArray = dataArray.slice(0);
            sortedArray.sort(function (el) {
              if (!!idsArray.find(function (id) {
                return el.id === id;
              })) {
                return -1;
              } else return 1;
            });
            return sortedArray.map(function (el) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                key: el.id,
                value: el.id
              }, el.name);
            });
          } else {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
              value: ""
            }, "make selection"), dataArray.map(function (el) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
                key: el.id,
                value: el.id
              }, el.name);
            }));
          }
        }
      }, {
        key: "clickHandler",
        value: function clickHandler(id, fields) {
          var array;

          switch (fields) {
            case "authors":
              array = new Set(this.state.influenceIds);
              array.delete(id);
              this.setState({
                influenceIds: array
              });
              break;

            case "author":
              this.setState({
                authorId: ""
              });
              break;

            case "genres":
              array = new Set(this.state.genreIds);
              array.delete(id);
              this.setState({
                genreIds: array
              });
              break;

            default:
              throw new Error("wrong fields type");
          }
        }
      }, {
        key: "changeHandler",
        value: function changeHandler(e) {
          if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
            var stateObj = {};
            stateObj[e.target.name] = e.target.value;
            this.setState(stateObj);
          }
        }
      }, {
        key: "_fieldsCheck",
        value: function _fieldsCheck(type) {
          switch (type) {
            case "book":
              if (!this.state.name.trim()) {
                alert('Enter name');
              } else if (!this.state.authorId) {
                alert('Enter author');
              } else if (this.state.genreIds.size === 0) {
                alert('Select genres');
              } else return true;

              break;

            case "author":
            case "genre":
              if (!this.state.name.trim()) {
                alert('Enter name');
              } else return true;

              break;

            default:
              throw new Error('Wrong data type');
          }
        }
      }, {
        key: "submitHandler",
        value: function submitHandler(e) {
          e.preventDefault();

          switch (this.props.formType) {
            case "add-genre":
              if (this._fieldsCheck("genre")) {
                this.props.addGenreQuery({
                  variables: {
                    name: this.state.name,
                    description: this.state.description,
                    relatedGenreIds: Array.from(this.state.genreIds)
                  }
                });
                this.setState(_objectSpread({}, this.props.defaultState));
              }

              break;

            case "edit-genre":
              if (this._fieldsCheck("genre")) {
                this.props.updateGenreQuery({
                  variables: {
                    id: this.state.id,
                    name: this.state.name,
                    description: this.state.description,
                    relatedGenreIds: Array.from(this.state.genreIds)
                  }
                });
              }

              break;

            case "add-author":
              if (this._fieldsCheck("author")) {
                this.props.addAuthorQuery({
                  variables: {
                    name: this.state.name,
                    genreIds: Array.from(this.state.genreIds),
                    influenceIds: Array.from(this.state.influenceIds),
                    biography: this.state.biography
                  }
                });
                this.setState(_objectSpread({}, this.props.defaultState));
              }

              break;

            case "edit-author":
              if (this._fieldsCheck("author")) {
                this.props.updateAuthorQuery({
                  variables: {
                    id: this.state.id,
                    name: this.state.name,
                    genreIds: Array.from(this.state.genreIds),
                    influenceIds: Array.from(this.state.influenceIds),
                    biography: this.state.biography
                  }
                });
              }

              break;

            case "add-book":
              if (this._fieldsCheck("book")) {
                this.props.addBookQuery({
                  variables: {
                    name: this.state.name,
                    authorId: this.state.authorId,
                    genreIds: Array.from(this.state.genreIds),
                    description: this.state.description
                  }
                });
                this.setState(_objectSpread({}, this.props.defaultState));
              }

              break;

            case "edit-book":
              if (this._fieldsCheck("book")) {
                this.props.updateBookQuery({
                  variables: {
                    id: this.state.id,
                    name: this.state.name,
                    authorId: this.state.authorId,
                    genreIds: Array.from(this.state.genreIds),
                    description: this.state.description
                  }
                });
              }

              break;

            default:
              throw new Error("wrong form type!");
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FormComponent, {
            selectHandler: function selectHandler(e, fields) {
              return _this3.selectHandler(e, fields);
            },
            clickHandler: function clickHandler(id, fields) {
              return _this3.clickHandler(id, fields);
            },
            changeHandler: function changeHandler(e) {
              return _this3.changeHandler(e);
            },
            submitHandler: function submitHandler(e) {
              return _this3.submitHandler(e);
            },
            mapFromCache: function mapFromCache(ids, client, type, style) {
              return _this3.mapFromCache(ids, client, type, style);
            },
            mapOptions: this.mapOptions,
            wrapProps: this.state,
            formType: this.props.formType
          });
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["a"] = (WithCRU);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var WithDelete = function WithDelete(ButtonComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "deleteHandler",
        value: function deleteHandler(id, queryName) {
          var query = this.props[queryName];
          var modal = window.confirm("Are you sure that you want to delete this entry?");

          if (modal) {
            query({
              variables: {
                id: id
              }
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonComponent, {
            deleteHandler: function deleteHandler(id, queryName) {
              _this.deleteHandler(id, queryName);
            }
          });
        }
      }]);

      return _class;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["a"] = (WithDelete);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./frontend/components/Header/Header.js
var Header = __webpack_require__(10);

// EXTERNAL MODULE: ./frontend/components/WithData/WithData.js
var WithData = __webpack_require__(11);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(4);

// EXTERNAL MODULE: ./frontend/queries/queries.js
var queries = __webpack_require__(6);

// EXTERNAL MODULE: ./frontend/styles/table.js
var table = __webpack_require__(1);

// EXTERNAL MODULE: ./frontend/components/Popup/Popup.js + 1 modules
var Popup = __webpack_require__(9);

// EXTERNAL MODULE: ./frontend/components/WithCRU/WithCRU.js
var WithCRU = __webpack_require__(14);

// EXTERNAL MODULE: ./frontend/styles/form_add.js
var form_add = __webpack_require__(2);

// CONCATENATED MODULE: ./frontend/components/GenreForm/GenreForm.js








var GenreForm_GenreForm = function GenreForm(_ref) {
  var selectHandler = _ref.selectHandler,
      clickHandler = _ref.clickHandler,
      changeHandler = _ref.changeHandler,
      submitHandler = _ref.submitHandler,
      mapFromCache = _ref.mapFromCache,
      mapOptions = _ref.mapOptions,
      wrapProps = _ref.wrapProps,
      client = _ref.client,
      formType = _ref.formType;
  var genreIds = Array.from(wrapProps.genreIds);
  return external_react_default.a.createElement("div", {
    className: "jsx-".concat(form_add["a" /* default */].__hash)
  }, external_react_default.a.createElement("section", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add"
  }, external_react_default.a.createElement("label", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__label"
  }, external_react_default.a.createElement("span", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__name"
  }, "Name"), external_react_default.a.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "enter name",
    value: wrapProps.name,
    onChange: function onChange(e) {
      changeHandler(e);
    },
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__input"
  })), external_react_default.a.createElement("label", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__label"
  }, external_react_default.a.createElement("span", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__name"
  }, "Description"), external_react_default.a.createElement("textarea", {
    name: "description",
    placeholder: "enter description",
    value: wrapProps.description,
    onChange: function onChange(e) {
      changeHandler(e);
    },
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__input"
  })), external_react_default.a.createElement("label", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__label"
  }, external_react_default.a.createElement("span", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__name"
  }, "Related genres"), external_react_default.a.createElement("select", {
    onChange: function onChange(e) {
      selectHandler(e, "genres");
    },
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__input"
  }, external_react_default.a.createElement(external_react_apollo_["Query"], {
    query: queries["f" /* getGenresQuery */]
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (loading) return external_react_default.a.createElement("option", {
      disabled: true,
      className: "jsx-".concat(form_add["a" /* default */].__hash)
    }, "Loading genres...");
    return mapOptions(data.genres, genreIds);
  }))), mapFromCache(genreIds, client, "genres", form_add["a" /* default */]), external_react_default.a.createElement("div", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__btns"
  }, external_react_default.a.createElement("button", {
    onClick: function onClick(e) {
      submitHandler(e);
    },
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__submit"
  }, formType === "edit-genre" ? "Save changes" : "Create genre"), external_react_default.a.createElement("button", {
    className: "jsx-".concat(form_add["a" /* default */].__hash) + " " + "form-add__close"
  }, "Close"))), external_react_default.a.createElement(style_default.a, {
    styleId: form_add["a" /* default */].__hash,
    css: form_add["a" /* default */]
  }));
};

/* harmony default export */ var components_GenreForm_GenreForm = (Object(external_react_apollo_["compose"])(external_react_apollo_["withApollo"], Object(external_react_apollo_["graphql"])(queries["f" /* getGenresQuery */], {
  name: "getGenresQuery"
}), Object(external_react_apollo_["graphql"])(queries["c" /* addGenreQuery */], {
  name: "addGenreQuery",
  options: {
    refetchQueries: [{
      query: queries["f" /* getGenresQuery */]
    }]
  }
}), Object(external_react_apollo_["graphql"])(queries["l" /* updateGenreQuery */], {
  name: "updateGenreQuery",
  options: {
    refetchQueries: [{
      query: queries["f" /* getGenresQuery */]
    }]
  }
}))(Object(WithCRU["a" /* default */])(Object(external_react_apollo_["withApollo"])(GenreForm_GenreForm))));
// EXTERNAL MODULE: ./frontend/components/EmptyTable/EmptyTable.js
var EmptyTable = __webpack_require__(8);

// CONCATENATED MODULE: ./frontend/components/GenresTableEdit/GenresTableEdit.js







var GenresTableEdit_GenresTableEdit = function GenresTableEdit(_ref) {
  var id = _ref.id;
  return external_react_default.a.createElement("div", {
    className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__wrapper table__wrapper--edit"
  }, external_react_default.a.createElement(external_react_apollo_["Query"], {
    query: queries["f" /* getGenresQuery */]
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data,
        client = _ref2.client;
    if (loading) return external_react_default.a.createElement("div", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, "Loading genres...");
    if (error) return external_react_default.a.createElement("div", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, "Error! $", error.message);
    var source = data.genres.find(function (genre) {
      return genre.id === id;
    });
    return external_react_default.a.createElement("table", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table"
    }, external_react_default.a.createElement("tbody", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, external_react_default.a.createElement("tr", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, external_react_default.a.createElement("th", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "Genre name"), external_react_default.a.createElement("th", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "Related genres"), external_react_default.a.createElement("th", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "Description")), source.length === 0 ? external_react_default.a.createElement(EmptyTable["a" /* default */], {
      name: "genres",
      size: "3"
    }) : external_react_default.a.createElement("tr", {
      key: source.id,
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, external_react_default.a.createElement("td", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, source.name), source.relatedGenres.length === 0 ? external_react_default.a.createElement("td", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "no related genres") : external_react_default.a.createElement("td", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, external_react_default.a.createElement("table", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, external_react_default.a.createElement("tbody", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, source.relatedGenres.map(function (relatedGenre) {
      return external_react_default.a.createElement("tr", {
        key: relatedGenre.id,
        className: "jsx-".concat(table["a" /* default */].__hash)
      }, external_react_default.a.createElement("td", {
        className: "jsx-".concat(table["a" /* default */].__hash)
      }, relatedGenre.name));
    })))), external_react_default.a.createElement("td", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, source.description))));
  }), external_react_default.a.createElement(style_default.a, {
    styleId: table["a" /* default */].__hash,
    css: table["a" /* default */]
  }));
};

/* harmony default export */ var components_GenresTableEdit_GenresTableEdit = (GenresTableEdit_GenresTableEdit);
// EXTERNAL MODULE: ./frontend/components/WithDelete/WithDelete.js
var WithDelete = __webpack_require__(15);

// CONCATENATED MODULE: ./frontend/components/GenresTable/GenresTable.js











var GenresTable_GenresTable = function GenresTable(_ref) {
  var deleteHandler = _ref.deleteHandler;
  return external_react_default.a.createElement("div", {
    className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__wrapper"
  }, external_react_default.a.createElement("h2", {
    className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__name"
  }, "Genres"), external_react_default.a.createElement(Popup["a" /* default */], {
    trigger: external_react_default.a.createElement("button", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__add"
    }, "Add genre")
  }, external_react_default.a.createElement("div", {
    className: "jsx-".concat(table["a" /* default */].__hash)
  }, external_react_default.a.createElement(components_GenreForm_GenreForm, {
    formType: "add-genre",
    defaultState: {
      name: "",
      genreIds: new Set(),
      description: ""
    }
  }))), external_react_default.a.createElement(external_react_apollo_["Query"], {
    query: queries["f" /* getGenresQuery */],
    fetchPolicy: "network-only"
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data,
        client = _ref2.client;
    if (loading) return external_react_default.a.createElement("div", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, "Loading genres...");
    if (error) return external_react_default.a.createElement("div", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, "Error! $", error.message);
    var source = data.genres;
    return external_react_default.a.createElement("table", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table"
    }, external_react_default.a.createElement("tbody", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, external_react_default.a.createElement("tr", {
      className: "jsx-".concat(table["a" /* default */].__hash)
    }, external_react_default.a.createElement("th", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "Genre name"), external_react_default.a.createElement("th", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "Related genres"), external_react_default.a.createElement("th", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "Description"), external_react_default.a.createElement("th", {
      className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
    }, "Actions")), source.length === 0 ? external_react_default.a.createElement(EmptyTable["a" /* default */], {
      name: "genres",
      size: "4"
    }) : source.map(function (genre) {
      return external_react_default.a.createElement("tr", {
        key: genre.id,
        className: "jsx-".concat(table["a" /* default */].__hash)
      }, external_react_default.a.createElement("td", {
        className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
      }, genre.name), genre.relatedGenres.length === 0 ? external_react_default.a.createElement("td", {
        className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
      }, "no related genres") : external_react_default.a.createElement("td", {
        className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
      }, external_react_default.a.createElement("table", {
        className: "jsx-".concat(table["a" /* default */].__hash)
      }, external_react_default.a.createElement("tbody", {
        className: "jsx-".concat(table["a" /* default */].__hash)
      }, genre.relatedGenres.map(function (relatedGenre) {
        return external_react_default.a.createElement("tr", {
          key: relatedGenre.id,
          className: "jsx-".concat(table["a" /* default */].__hash)
        }, external_react_default.a.createElement("td", {
          className: "jsx-".concat(table["a" /* default */].__hash)
        }, relatedGenre.name));
      })))), external_react_default.a.createElement("td", {
        className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
      }, genre.description), external_react_default.a.createElement("td", {
        className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__cell"
      }, external_react_default.a.createElement(Popup["a" /* default */], {
        trigger: external_react_default.a.createElement("button", {
          className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__edit"
        }, "Edit")
      }, external_react_default.a.createElement("div", {
        className: "jsx-".concat(table["a" /* default */].__hash)
      }, external_react_default.a.createElement(components_GenresTableEdit_GenresTableEdit, {
        id: genre.id
      }), external_react_default.a.createElement(components_GenreForm_GenreForm, {
        formType: "edit-genre",
        defaultState: {
          id: genre.id,
          name: genre.name,
          genreIds: new Set(genre.relatedGenres.map(function (genre) {
            return genre.id;
          })),
          description: genre.description
        }
      }))), external_react_default.a.createElement("button", {
        onClick: function onClick(id, queryName) {
          deleteHandler(genre.id, "removeGenreQuery");
        },
        className: "jsx-".concat(table["a" /* default */].__hash) + " " + "table__delete"
      }, external_react_default.a.createElement("span", {
        className: "jsx-".concat(table["a" /* default */].__hash)
      }, "Delete"))));
    })));
  }), external_react_default.a.createElement(style_default.a, {
    styleId: table["a" /* default */].__hash,
    css: table["a" /* default */]
  }));
};

/* harmony default export */ var components_GenresTable_GenresTable = (Object(external_react_apollo_["graphql"])(queries["i" /* removeGenreQuery */], {
  name: "removeGenreQuery",
  options: {
    refetchQueries: [{
      query: queries["f" /* getGenresQuery */]
    }]
  }
})(Object(WithDelete["a" /* default */])(GenresTable_GenresTable)));
// EXTERNAL MODULE: ./frontend/components/Layout/Layout.js
var Layout = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/genres.js





/* harmony default export */ var genres = __webpack_exports__["default"] = (Object(WithData["a" /* default */])(function () {
  return external_react_default.a.createElement(Layout["a" /* default */], {
    title: "Genres table"
  }, external_react_default.a.createElement(Header["a" /* default */], {
    id: "4"
  }), external_react_default.a.createElement(components_GenresTable_GenresTable, null));
}));

/***/ })
/******/ ]);