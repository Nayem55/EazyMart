"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ cartDb)
/* harmony export */ });
const cartDb = [];


/***/ }),

/***/ 177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCart)
/* harmony export */ });
/* harmony import */ var _cartDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(818);

function getCart(req, res) {
    const { productId  } = req.query;
    const deletedProduct = _cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb.find */ .Z.find((product)=>product.id == parseInt(productId));
    const index = _cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb.findIndex */ .Z.findIndex((product)=>product.id == parseInt(productId));
    _cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb.splice */ .Z.splice(index, 1);
    res.status(200).json(deletedProduct);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(177));
module.exports = __webpack_exports__;

})();