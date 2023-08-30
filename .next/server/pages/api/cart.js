"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ cartDb)
/* harmony export */ });
const cartDb = [];


/***/ }),

/***/ 7777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCart)
/* harmony export */ });
/* harmony import */ var _cartDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(818);

function getCart(req, res) {
    if (req.method === "GET") {
        res.status(200).json(_cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb */ .Z);
    } else if (req.method === "POST") {
        const product = req.body.product;
        const exist = _cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb.find */ .Z.find((item)=>item.id === product.id);
        if (exist) {
            const index = _cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb.indexOf */ .Z.indexOf(exist);
            console.log("index", index);
            exist.quantity = exist.quantity + 1;
            _cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb */ .Z[index] = exist;
        } else {
            _cartDb__WEBPACK_IMPORTED_MODULE_0__/* .cartDb.push */ .Z.push(product);
            res.status(201).json(product);
            console.log("Product Added");
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7777));
module.exports = __webpack_exports__;

})();