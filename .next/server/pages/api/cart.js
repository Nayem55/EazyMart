"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cart";
exports.ids = ["pages/api/cart"];
exports.modules = {

/***/ "(api)/./cartDb.js":
/*!*******************!*\
  !*** ./cartDb.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartDb\": () => (/* binding */ cartDb)\n/* harmony export */ });\nconst cartDb = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jYXJ0RGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFNBQVMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VhenktbWFydC8uL2NhcnREYi5qcz83Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYXJ0RGIgPSBbXSJdLCJuYW1lcyI6WyJjYXJ0RGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./cartDb.js\n");

/***/ }),

/***/ "(api)/./pages/api/cart/index.js":
/*!*********************************!*\
  !*** ./pages/api/cart/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCart)\n/* harmony export */ });\n/* harmony import */ var _cartDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/cartDb */ \"(api)/./cartDb.js\");\n\nfunction getCart(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(_cartDb__WEBPACK_IMPORTED_MODULE_0__.cartDb);\n    } else if (req.method === \"POST\") {\n        const product = req.body.product;\n        const exist = _cartDb__WEBPACK_IMPORTED_MODULE_0__.cartDb.find((item)=>item.id === product.id);\n        if (exist) {\n            const index = _cartDb__WEBPACK_IMPORTED_MODULE_0__.cartDb.indexOf(exist);\n            console.log(\"index\", index);\n            exist.quantity = exist.quantity + 1;\n            _cartDb__WEBPACK_IMPORTED_MODULE_0__.cartDb[index] = exist;\n        } else {\n            _cartDb__WEBPACK_IMPORTED_MODULE_0__.cartDb.push(product);\n            res.status(201).json(product);\n            console.log(\"Product Added\");\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FydC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUVuQixTQUFTQyxRQUFRQyxHQUFHLEVBQUNDLEdBQUcsRUFBRTtJQUNyQyxJQUFHRCxJQUFJRSxNQUFNLEtBQUssT0FBTTtRQUNwQkQsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ04sMkNBQU1BO0lBQy9CLE9BQU0sSUFBSUUsSUFBSUUsTUFBTSxLQUFLLFFBQU87UUFDNUIsTUFBTUcsVUFBVUwsSUFBSU0sSUFBSSxDQUFDRCxPQUFPO1FBQ2hDLE1BQU1FLFFBQVFULGdEQUFXLENBQUNXLENBQUFBLE9BQU1BLEtBQUtDLEVBQUUsS0FBR0wsUUFBUUssRUFBRTtRQUNwRCxJQUFHSCxPQUFNO1lBQ0wsTUFBTUksUUFBUWIsbURBQWMsQ0FBQ1M7WUFDN0JNLFFBQVFDLEdBQUcsQ0FBQyxTQUFRSDtZQUNwQkosTUFBTVEsUUFBUSxHQUFHUixNQUFNUSxRQUFRLEdBQUM7WUFDaENqQiwyQ0FBTSxDQUFDYSxNQUFNLEdBQUNKO1FBQ2xCLE9BQUs7WUFDRFQsZ0RBQVcsQ0FBQ087WUFDWkosSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7WUFDckJRLFFBQVFDLEdBQUcsQ0FBQztRQUNoQixDQUFDO0lBRUwsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYXp5LW1hcnQvLi9wYWdlcy9hcGkvY2FydC9pbmRleC5qcz8yM2NiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhcnREYiB9IGZyb20gXCJAL2NhcnREYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2FydChyZXEscmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kID09PSBcIkdFVFwiKXtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjYXJ0RGIpXHJcbiAgICB9ZWxzZSBpZiggcmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpe1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSByZXEuYm9keS5wcm9kdWN0O1xyXG4gICAgICAgIGNvbnN0IGV4aXN0ID0gY2FydERiLmZpbmQoaXRlbT0+aXRlbS5pZD09PXByb2R1Y3QuaWQpXHJcbiAgICAgICAgaWYoZXhpc3Qpe1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhcnREYi5pbmRleE9mKGV4aXN0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsaW5kZXgpXHJcbiAgICAgICAgICAgIGV4aXN0LnF1YW50aXR5ID0gZXhpc3QucXVhbnRpdHkrMTtcclxuICAgICAgICAgICAgY2FydERiW2luZGV4XT1leGlzdFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYXJ0RGIucHVzaChwcm9kdWN0KVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihwcm9kdWN0KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgQWRkZWRcIilcclxuICAgICAgICB9XHJcbiBcclxuICAgIH1cclxuXHJcbn0gICAiXSwibmFtZXMiOlsiY2FydERiIiwiZ2V0Q2FydCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJwcm9kdWN0IiwiYm9keSIsImV4aXN0IiwiZmluZCIsIml0ZW0iLCJpZCIsImluZGV4IiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJxdWFudGl0eSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/cart/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cart/index.js"));
module.exports = __webpack_exports__;

})();