(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{9031:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Jewellery",function(){return n(3503)}])},208:function(e,t,n){"use strict";var l=n(5893),r=n(2301),s=n(6501);let c=e=>{let{product:t}=e,[n]=(0,r.Z)(),c=e=>{fetch("http://localhost:3000/api/cart",{method:"POST",body:JSON.stringify({product:e}),headers:{"content-type":"application/json"}}),s.Am.success("Product added to the cart"),window.location.reload()};return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"m-10 text-black bg-white p-[10px] w-[220px] overflow-hidden",children:[(0,l.jsx)("div",{className:"w-[190px] h-[210px] hover:w-[200px] mx-auto transition-all ease-in-out",children:(0,l.jsx)("img",{className:"mb-3",src:null==t?void 0:t.img,alt:""})}),(0,l.jsx)("p",{title:null==t?void 0:t.name,children:(null==t?void 0:t.name.length)>20?"".concat(t.name.slice(0,20),"..."):null==t?void 0:t.name}),(0,l.jsx)("p",{children:null==t?void 0:t.type}),(0,l.jsxs)("p",{className:"mr-4 text-accent font-bold",children:["$",null==t?void 0:t.price]}),(0,l.jsxs)("div",{className:"flex justify-between mt-2 ",children:[(0,l.jsx)("button",{onClick:()=>c(t),className:"btn btn-xs bg-primary hover:bg-accent text-white border-none",children:"Add To Cart"}),(0,l.jsx)("button",{className:"btn btn-xs bg-primary hover:bg-accent text-white border-none",children:"Order Now"})]})]})})};t.Z=c},2060:function(e,t,n){"use strict";var l=n(7294);let r=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{fetch("/api/products").then(e=>e.json()).then(e=>t(e))},[]),[e]};t.Z=r},3503:function(e,t,n){"use strict";n.r(t);var l=n(5893),r=n(208),s=n(2060);let c=()=>{let[e]=(0,s.Z)(),t=e.filter(e=>"Jewelry"===e.category);return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-primary text-center text-4xl my-10 font-bold",children:"Jewellery"}),(0,l.jsx)("div",{className:"bg-secondary flex flex-wrap justify-center p-[20px]",children:t.map(e=>(0,l.jsx)(r.Z,{product:e}))})]})})};t.default=c}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9031)}),_N_E=e.O()}]);