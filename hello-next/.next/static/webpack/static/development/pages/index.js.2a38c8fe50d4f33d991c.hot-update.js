webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Appartement.js":
/*!***********************************!*\
  !*** ./components/Appartement.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var Appartement = function Appartement(_ref) {
  var _ref$appartement = _ref.appartement,
      id = _ref$appartement.id,
      slug = _ref$appartement.slug,
      title = _ref$appartement.title,
      acf = _ref$appartement.acf,
      favorites = _ref.favorites,
      toggleFav = _ref.toggleFav;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "img_grid",
    src: acf.image,
    alt: "appartment picture"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/appartement/".concat(slug),
    href: "/post?id=".concat(id)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "titre"
  }, title.rendered, favorites.includes(id) && '❤️')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "line"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "price"
  }, "$", acf.price, " per night"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "rating"
  }, new Array(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(acf.rating)).fill('⭐️️️️️')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick(e) {
      return toggleFav(e, id);
    }
  }, favorites.includes(id) ? 'Remove favorite' : 'Set favorite')));
};

/* harmony default export */ __webpack_exports__["default"] = (Appartement);
Appartement.propTypes = {
  appartement: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired,
  favorites: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
  toggleFav: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired
};

/***/ })

})
//# sourceMappingURL=index.js.2a38c8fe50d4f33d991c.hot-update.js.map