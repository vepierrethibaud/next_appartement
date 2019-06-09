webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AppartementList.js":
/*!***************************************!*\
  !*** ./components/AppartementList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Appartement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Appartement */ "./components/Appartement.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var AppartementList = function AppartementList(_ref) {
  var appartements = _ref.appartements,
      favorites = _ref.favorites,
      toggleFav = _ref.toggleFav;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, appartements.map(function (el) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Appartement__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: el.id,
      appartement: el,
      favorites: favorites,
      toggleFav: toggleFav
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AppartementList);
AppartementList.propTypes = {
  appartements: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
  favorites: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
  toggleFav: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired
};

/***/ })

})
//# sourceMappingURL=index.js.8767a87f46906a2d7718.hot-update.js.map