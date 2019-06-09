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


 // const Appartement = () => (
//   <div>
//     <p>Appartement.js</p>
//   </div>
// );

var Appartement = function Appartement(_ref) {
  var _ref$appartement = _ref.appartement,
      id = _ref$appartement.id,
      title = _ref$appartement.title,
      acf = _ref$appartement.acf,
      favorites = _ref.favorites,
      toggleFav = _ref.toggleFav;
  return (// <div>
    //   <img src={acf.image} alt="lol"/>
    //   <h1>
    //     <svg height="20" width="20">
    //       <circle cx="10" cy="10" r="10" fill={acf.available ? 'green' : 'red'} />
    //     </svg>
    //     {title.rendered}
    //     {favorites.includes(id) && '❤️'}
    //   </h1>
    //   <button onClick={e => toggleFav(e, id)}>
    //     {favorites.includes(id) ? 'Remove favorite' : 'Set favorite'}
    //   </button>
    //   <p>${acf.price} per night</p>
    //   <p>{new Array(parseInt(acf.rating)).fill('⭐️️️️️')}</p>
    // </div>
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "img_grid",
      src: acf.image,
      alt: "appartment picture"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "desc"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
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
    }, new Array(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(acf.rating)).fill('⭐️️️️️'))))) // <section>
    //     {props.data.map(el => (
    //       <article key={el.id}>
    //         <img className="img_grid" src={el.acf.image} />
    //         <div className="desc">
    //           <Link as={`/appartement/${el.slug}`} href={`/post?id=${el.id}`}>
    //             <a className="titre">{el.title.rendered}</a>
    //           </Link>
    //           <div className="line"></div>
    //           <p className="price">${el.acf.price} per night</p>
    //           <p className="rating">{new Array(parseInt(el.acf.rating)).fill('⭐️️️️️')}</p>
    //           <p>{el.acf.available}</p>
    //         </div>
    //       </article>
    //     ))}
    //   </section>  

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Appartement);
Appartement.propTypes = {
  appartement: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired,
  favorites: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
  toggleFav: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired
};

/***/ })

})
//# sourceMappingURL=index.js.3bc5d7943dc27dfcdb2c.hot-update.js.map