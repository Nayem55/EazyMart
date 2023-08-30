"use strict";
exports.id = 710;
exports.ids = [710];
exports.modules = {

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_useCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2301);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Product = ({ product  })=>{
    const [cart] = (0,_Hooks_useCart__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const addToCart = (product)=>{
        fetch("http://localhost:3000/api/cart", {
            method: "POST",
            body: JSON.stringify({
                product
            }),
            headers: {
                "content-type": "application/json"
            }
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("Product added to the cart");
        window.location.reload();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "m-10 text-black bg-white p-[10px] w-[220px] overflow-hidden",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-[190px] h-[210px] hover:w-[200px] mx-auto transition-all ease-in-out",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "mb-3",
                        src: product?.img,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    title: product?.name,
                    children: product?.name.length > 20 ? `${product.name.slice(0, 20)}...` : product?.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: product?.type
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mr-4 text-accent font-bold",
                    children: [
                        "$",
                        product?.price
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between mt-2 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>addToCart(product),
                            className: "btn btn-xs bg-primary hover:bg-accent text-white border-none",
                            children: "Add To Cart"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-xs bg-primary hover:bg-accent text-white border-none",
                            children: "Order Now"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCart = ()=>{
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        fetch("/api/cart").then((res)=>res.json()).then((data)=>setCart(data));
    }, []);
    const loadCart = ()=>{
        fetch("/api/cart").then((res)=>res.json()).then((data)=>setCart(data));
    };
    return [
        cart,
        loadCart
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);


/***/ }),

/***/ 2060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useProduct = ()=>{
    const [products, setproducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        fetch("/api/products").then((res)=>res.json()).then((data)=>setproducts(data));
    }, []);
    return [
        products
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useProduct);


/***/ })

};
;