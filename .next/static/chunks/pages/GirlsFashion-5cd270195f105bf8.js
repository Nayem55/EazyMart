(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{2216:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/GirlsFashion",function(){return n(3554)}])},208:function(e,t,n){"use strict";var s=n(5893),i=n(2301),r=n(6501);let l=e=>{let{product:t}=e,[n]=(0,i.Z)(),l=e=>{fetch("http://localhost:3000/api/cart",{method:"POST",body:JSON.stringify({product:e}),headers:{"content-type":"application/json"}}),r.Am.success("Product added to the cart"),window.location.reload()};return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"m-10 text-black bg-white p-[10px] w-[220px] overflow-hidden",children:[(0,s.jsx)("div",{className:"w-[190px] h-[210px] hover:w-[200px] mx-auto transition-all ease-in-out",children:(0,s.jsx)("img",{className:"mb-3",src:null==t?void 0:t.img,alt:""})}),(0,s.jsx)("p",{title:null==t?void 0:t.name,children:(null==t?void 0:t.name.length)>20?"".concat(t.name.slice(0,20),"..."):null==t?void 0:t.name}),(0,s.jsx)("p",{children:null==t?void 0:t.type}),(0,s.jsxs)("p",{className:"mr-4 text-accent font-bold",children:["$",null==t?void 0:t.price]}),(0,s.jsxs)("div",{className:"flex justify-between mt-2 ",children:[(0,s.jsx)("button",{onClick:()=>l(t),className:"btn btn-xs bg-primary hover:bg-accent text-white border-none",children:"Add To Cart"}),(0,s.jsx)("button",{className:"btn btn-xs bg-primary hover:bg-accent text-white border-none",children:"Order Now"})]})]})})};t.Z=l},2060:function(e,t,n){"use strict";var s=n(7294);let i=()=>{let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{fetch("/api/products").then(e=>e.json()).then(e=>t(e))},[]),[e]};t.Z=i},3554:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(208),r=n(2060);let l=()=>{let[e]=(0,r.Z)(),t=e.filter(e=>"Girl's Fashion"===e.category);return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-primary text-center text-4xl my-10 font-bold",children:"Girl's Fashion"}),(0,s.jsx)("div",{className:"bg-secondary flex flex-wrap justify-center p-[20px]",children:t.map(e=>(0,s.jsx)(i.Z,{product:e}))})]})};t.default=l}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2216)}),_N_E=e.O()}]);