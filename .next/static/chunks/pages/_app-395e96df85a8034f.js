(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9151)}])},2301:function(e,t,r){"use strict";var o=r(7294);let a=()=>{let[e,t]=(0,o.useState)([]);(0,o.useEffect)(()=>{fetch("/api/cart").then(e=>e.json()).then(e=>t(e))},[]);let r=()=>{fetch("/api/cart").then(e=>e.json()).then(e=>t(e))};return[e,r]};t.Z=a},1516:function(e,t){"use strict";function r(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let o=r(4788),a=r(8754),n=r(1757),i=r(224),s=n._(r(7294)),l=a._(r(2636)),c=r(7757),d=r(3735),u=r(3341);r(4210);let f=a._(r(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,a,n,i,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;a.current(o._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}function b(e){let[t,r]=s.version.split("."),o=parseInt(t,10),a=parseInt(r,10);return o>18||18===o&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let x=(0,s.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:a,widthInt:n,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fetchPriority:p,fill:h,placeholder:m,loading:x,srcString:v,config:y,unoptimized:w,loader:j,onLoadRef:A,onLoadingCompleteRef:C,setBlurComplete:N,setShowAltText:E,onLoad:_,onError:k}=e,S=i._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return x=f?"lazy":x,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",o._({},S,b(p),{loading:x,width:n,height:a,decoding:"async","data-nimg":h?"fill":"1",className:c,style:o._({},d,u)},r,{ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&g(e,v,m,A,C,N,w))},[v,m,A,C,N,k,w,t]),onLoad:e=>{let t=e.currentTarget;g(t,v,m,A,C,N,w)},onError:e=>{E(!0),"blur"===m&&N(!0),k&&k(e)}})))}),v=(0,s.forwardRef)((e,t)=>{let r,a;var n,{src:g,sizes:v,unoptimized:y=!1,priority:w=!1,loading:j,className:A,quality:C,width:N,height:E,fill:_,style:k,onLoad:S,onLoadingComplete:P,placeholder:I="empty",blurDataURL:O,fetchPriority:M,layout:z,objectFit:R,objectPosition:L,lazyBoundary:D,lazyRoot:B}=e,T=i._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let H=(0,s.useContext)(u.ImageConfigContext),F=(0,s.useMemo)(()=>{let e=p||H||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o._({},e,{allSizes:t,deviceSizes:r})},[H]),U=T,G=U.loader||f.default;delete U.loader;let $="__next_img_default"in G;if($){if("custom"===F.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:r}=t,o=i._(t,["config"]);return e(o)}}if(z){"fill"===z&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(k=o._({},k,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!v&&(v=t)}let V="",W=m(N),Q=m(E);if("object"==typeof(n=g)&&(h(n)||void 0!==n.src)){let e=h(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,a=e.blurHeight,O=O||e.blurDataURL,V=e.src,!_){if(W||Q){if(W&&!Q){let t=W/e.width;Q=Math.round(e.height*t)}else if(!W&&Q){let t=Q/e.height;W=Math.round(e.width*t)}}else W=e.width,Q=e.height}}let Y=!w&&("lazy"===j||void 0===j);(!(g="string"==typeof g?g:V)||g.startsWith("data:")||g.startsWith("blob:"))&&(y=!0,Y=!1),F.unoptimized&&(y=!0),$&&g.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(y=!0),w&&(M="high");let[q,J]=(0,s.useState)(!1),[K,Z]=(0,s.useState)(!1),X=m(C),ee=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:L}:{},K?{}:{color:"transparent"},k),et="blur"===I&&O&&!q?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:W,heightInt:Q,blurWidth:r,blurHeight:a,blurDataURL:O,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:o,width:a,quality:n,sizes:i,loader:s}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:o,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let n=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:n,kind:"x"}}(t,a,i),d=l.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:l.map((e,o)=>"".concat(s({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:o+1).concat(c)).join(", "),src:s({config:t,src:r,quality:n,width:l[d]})}}({config:F,src:g,unoptimized:y,width:W,quality:X,sizes:v,loader:G}),eo=g,ea=(0,s.useRef)(S);(0,s.useEffect)(()=>{ea.current=S},[S]);let en=(0,s.useRef)(P);(0,s.useEffect)(()=>{en.current=P},[P]);let ei=o._({isLazy:Y,imgAttributes:er,heightInt:Q,widthInt:W,qualityInt:X,className:A,imgStyle:ee,blurStyle:et,loading:j,config:F,fetchPriority:M,fill:_,unoptimized:y,placeholder:I,loader:G,srcString:eo,onLoadRef:ea,onLoadingCompleteRef:en,setBlurComplete:J,setShowAltText:Z},U);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,o._({},ei,{ref:t})),w?s.default.createElement(l.default,null,s.default.createElement("link",o._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:U.crossOrigin},b(M)))):null)}),y=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let o=r(4788),a=r(8754),n=r(224),i=a._(r(7294)),s=r(4532),l=r(3353),c=r(1410),d=r(9064),u=r(370),f=r(9955),p=r(4224),h=r(508),m=r(1516),g=r(4266),b=new Set;function x(e,t,r,o,a){if(a||(0,l.isLocalURL)(t)){if(!o.bypassPrefetchedCheck){let a=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,n=t+"%"+r+"%"+a;if(b.has(n))return;b.add(n)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let y=i.default.forwardRef(function(e,t){let r,a;let{href:c,as:b,children:y,prefetch:w,passHref:j,replace:A,shallow:C,scroll:N,locale:E,onClick:_,onMouseEnter:k,onTouchStart:S,legacyBehavior:P=!1}=e,I=n._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=y,P&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let O=!1!==w,M=i.default.useContext(f.RouterContext),z=i.default.useContext(p.AppRouterContext),R=null!=M?M:z,L=!M,{href:D,as:B}=i.default.useMemo(()=>{if(!M){let e=v(c);return{href:e,as:b?v(b):e}}let[e,t]=(0,s.resolveHref)(M,c,!0);return{href:e,as:b?(0,s.resolveHref)(M,b):t||e}},[M,c,b]),T=i.default.useRef(D),H=i.default.useRef(B);P&&(a=i.default.Children.only(r));let F=P?a&&"object"==typeof a&&a.ref:t,[U,G,$]=(0,h.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(H.current!==B||T.current!==D)&&($(),H.current=B,T.current=D),U(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[B,F,D,$,U]);i.default.useEffect(()=>{R&&G&&O&&x(R,D,B,{locale:E},L)},[B,D,G,E,O,null==M?void 0:M.locale,R,L]);let W={ref:V,onClick(e){P||"function"!=typeof _||_(e),P&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,o,a,n,s,c,d,u){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](r,o,{shallow:n,locale:c,scroll:s}):t[a?"replace":"push"](o||r,{forceOptimisticNavigation:!u})};d?i.default.startTransition(h):h()}(e,R,D,B,A,C,N,E,L,O)},onMouseEnter(e){P||"function"!=typeof k||k(e),P&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),R&&(O||!L)&&x(R,D,B,{locale:E,priority:!0,bypassPrefetchedCheck:!0},L)},onTouchStart(e){P||"function"!=typeof S||S(e),P&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),R&&(O||!L)&&x(R,D,B,{locale:E,priority:!0,bypassPrefetchedCheck:!0},L)}};if((0,d.isAbsoluteUrl)(B))W.href=B;else if(!P||j||"a"===a.type&&!("href"in a.props)){let e=void 0!==E?E:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,m.getDomainLocale)(B,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);W.href=t||(0,g.addBasePath)((0,u.addLocale)(B,e,null==M?void 0:M.defaultLocale))}return P?i.default.cloneElement(a,W):i.default.createElement("a",o._({},I,W),r)}),w=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let o=r(7294),a=r(29),n="function"==typeof IntersectionObserver,i=new Map,s=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!n,[d,u]=(0,o.useState)(!1),f=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{f.current=e},[]);(0,o.useEffect)(()=>{if(n){if(c||d)return;let e=f.current;if(e&&e.tagName){let o=function(e,t,r){let{id:o,observer:a,elements:n}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=s.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let a=new Map,n=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:n,elements:a},s.push(r),i.set(r,t),t}(r);return n.set(e,t),a.observe(e),function(){if(n.delete(e),a.unobserve(e),0===n.size){a.disconnect(),i.delete(o);let e=s.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!d){let e=(0,a.requestIdleCallback)(()=>u(!0));return()=>(0,a.cancelIdleCallback)(e)}},[c,r,t,d,f.current]);let h=(0,o.useCallback)(()=>{u(!1)},[]);return[p,d,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:a,blurDataURL:n,objectFit:i}=e,s=o||t,l=a||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&a?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}}),r.__next_img_default=!0;let o=r},9151:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var o=r(5893);r(3814);var a=r(1664),n=r.n(a),i=r(7294);let s=()=>(0,o.jsx)("div",{children:(0,o.jsxs)("footer",{className:"px-24 pt-10 bg-primary text-white",children:[(0,o.jsxs)("div",{className:"flex justify-between footer",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"footer-title",children:"Services"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Branding"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Design"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Marketing"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Advertisement"})]}),(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"footer-title",children:"Company"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"About us"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Contact"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Jobs"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Press kit"})]}),(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"footer-title",children:"Legal"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Terms of use"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Privacy policy"}),(0,o.jsx)(n(),{href:"",className:"hover:text-accent",children:"Cookie policy"})]})]}),(0,o.jsx)("div",{className:"text-center pt-16 lg:p-16 mb-12 lg:mb-0",children:(0,o.jsx)("p",{children:"Copyright \xa9 2023 - All right reserved by eazymart Industries Ltd"})})]})});var l={src:"/_next/static/media/logo.b51c84e5.png",height:128,width:347,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AQAUgAUA7Av/bGTg/5ScBQDPpOL/Ihn+AgcE8/8A/PsFAWZgcif8/wEszen+A9HzAP+LN/X7dFHM8vj4CQkCAP3gAc6gWQju9ggLRGod8T5N8QYSBwACr52R9vPGPwQIB/j6IDwvBbB6H9cAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},c={src:"/_next/static/media/profile .55212e43.png",height:225,width:225,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAuklEQVR42h2OvQ7BYBSG35vhAsQi3IuwSgiTSGxEYrD4WUUHNZCS+JmatrSDtBIhDOzE/H3S83Vy6uQdnvc5ZzggojAMLTeod8ccywu4c8B2OFkChWJjwGEYaat4wSdAvtnTlKJIEQNX2zuhPdCRKHVGs0jxUGeoI1mKZas/RbaGdGWxsedrC6kycrVYmgcfmerl9hBCCiGu9yeyVXPvQ0pp7JzX+0P/YTC2Dksooq+U7vHMH3MY2CqiH1nMgmVEUjxYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},d=r(5675),u=r.n(d),f=r(1163),p=r(2301);let h=()=>{let[e,t]=(0,i.useState)(),[r]=(0,p.Z)(),a=0,s=0,d=0;r.forEach(e=>{d+=e.quantity,a+=e.price*e.quantity,s+=e.shipping*e.quantity});let h=(0,f.useRouter)();return(0,o.jsxs)("div",{className:"lg:sticky top-0 w-full z-10",children:[(0,o.jsxs)("div",{className:"navbar px-0 lg:px-10 flex justify-between bg-white",children:[(0,o.jsx)("div",{className:"cursor-pointer",children:(0,o.jsx)(n(),{href:"/",children:(0,o.jsx)(u(),{src:l,width:"200",height:"200"})})}),(0,o.jsx)("div",{className:"form-control text-black hidden md:block lg:block",children:(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsxs)("select",{onChange:e=>t(e.target.value),className:"select border border-primary w-[600px] bg-white",children:[(0,o.jsx)("option",{selected:!0,children:"Pick category"}),(0,o.jsx)("option",{children:"Boys Fashion"}),(0,o.jsx)("option",{children:"Girls Fashion"}),(0,o.jsx)("option",{children:"Household Items"}),(0,o.jsx)("option",{children:"Computer Accessories"}),(0,o.jsx)("option",{children:"Gadgets"}),(0,o.jsx)("option",{children:"Jewellery"}),(0,o.jsx)("option",{children:"Home decoration"}),(0,o.jsx)("option",{children:"Cosmetics"})]}),(0,o.jsx)("button",{onClick:()=>h.push(null==e?void 0:e.replace(/\s+/g,"")),className:"btn btn-square bg-primary hover:text-black hover:bg-accent border border-primary",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})}),(0,o.jsxs)("div",{className:"flex-none",children:[(0,o.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,o.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:(0,o.jsxs)("div",{className:"indicator",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-7 w-7 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),(0,o.jsx)("span",{className:"badge bg-accent text-primary font-bold border-none badge-md text-lg indicator-item",children:d})]})}),(0,o.jsx)("div",{tabIndex:0,className:"mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow",children:(0,o.jsxs)("div",{className:"card-body border border-accent rounded-box",children:[(0,o.jsxs)("span",{className:"font-bold text-lg text-black",children:[d," Items"]}),(0,o.jsxs)("span",{className:"text-accent font-bold",children:["Subtotal: $",a+s]}),(0,o.jsx)("div",{className:"card-actions",children:(0,o.jsx)("button",{onClick:()=>h.push("/cart"),className:"btn btn-primary btn-block text-white",children:(0,o.jsx)(n(),{href:"/cart",children:"View cart"})})})]})})]}),(0,o.jsxs)("div",{className:"dropdown dropdown-end text-black",children:[(0,o.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar",children:(0,o.jsx)("div",{className:"w-10 rounded-full",children:(0,o.jsx)(u(),{src:c})})}),(0,o.jsxs)("ul",{tabIndex:0,className:"menu border border-accent menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"justify-between hover:text-accent hover:font-bold",children:"Profile"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"hover:text-accent hover:font-bold",children:"View Cart"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"hover:text-accent hover:font-bold",children:"Logout"})})]})]})]})]}),(0,o.jsxs)("div",{className:"nav-menu text-center py-4 text-white bg-primary",children:[(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/BoysFashion",children:[" ","Boy's Fashion"," "]}),(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/GirlsFashion",children:[" ","Girl's Fashion"," "]}),(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/HouseholdItems",children:[" ","Household Items"," "]}),(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/ComputerAccessories",children:[" ","Computer Accessories"]}),(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/Gadgets",children:[" ","Gadgets"," "]}),(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/Jewellery",children:[" ","Jewellery"]}),(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/HomeDecoration",children:[" ","Home Decoration"]}),(0,o.jsxs)(n(),{className:"mr-10 hover:text-accent font-bold",href:"/Cosmetics",children:[" ","Cosmetics"]})]})]})};var m=r(6501);function g(e){let{Component:t,pageProps:r}=e,a=(0,f.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{}),(0,o.jsx)(t,{...r}),"/cart"===a.pathname?"":(0,o.jsx)(s,{}),(0,o.jsx)(m.x7,{})]})}},3814:function(){},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},1163:function(e,t,r){e.exports=r(6885)},6501:function(e,t,r){"use strict";let o,a;r.d(t,{x7:function(){return ea},Am:function(){return B}});var n,i=r(7294);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,f=(e,t)=>{let r="",o="",a="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+i+";":o+="f"==n[1]?f(i,n):n+"{"+f(i,"k"==n[1]?"":t)+"}":"object"==typeof i?o+=f(i,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=f.p?f.p(n,i):n+":"+i+";")}return r+(t&&a?t+"{"+a+"}":a)+o},p={},h=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+h(e[r]);return t}return e},m=(e,t,r,o,a)=>{var n,i;let s=h(e),l=p[s]||(p[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!p[l]){let t=s!==e?e:(e=>{let t,r,o=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?o.shift():t[3]?(r=t[3].replace(u," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(u," ").trim();return o[0]})(e);p[l]=f(a?{["@keyframes "+l]:t}:t,r?"":"."+l)}let m=r&&p.g?p.g:null;return r&&(p.g=p[l]),n=p[l],i=t,m?i.data=i.data.replace(m,n):-1===i.data.indexOf(n)&&(i.data=o?n+i.data:i.data+n),l},g=(e,t,r)=>e.reduce((e,o,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+o+(null==n?"":n)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return m(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let x,v,y,w=b.bind({k:1});function j(e,t){let r=this||{};return function(){let o=arguments;function a(n,i){let s=Object.assign({},n),l=s.className||a.className;r.p=Object.assign({theme:v&&v()},s),r.o=/ *go\d+/.test(l),s.className=b.apply(r,o)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),y&&c[0]&&y(s),x(c,s)}return t?t(a):a}}var A=e=>"function"==typeof e,C=(e,t)=>A(e)?e(t):e,N=(o=0,()=>(++o).toString()),E=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},_=new Map,k=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),M({type:4,toastId:e})},1e3);_.set(e,t)},S=e=>{let t=_.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&S(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?P(e,{type:1,toast:r}):P(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?k(o):e.toasts.forEach(e=>{k(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},I=[],O={toasts:[],pausedAt:void 0},M=e=>{O=P(O,e),I.forEach(e=>{e(O)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={})=>{let[t,r]=(0,i.useState)(O);(0,i.useEffect)(()=>(I.push(r),()=>{let e=I.indexOf(r);e>-1&&I.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var r,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||N()}),D=e=>(t,r)=>{let o=L(t,e,r);return M({type:2,toast:o}),o.id},B=(e,t)=>D("blank")(e,t);B.error=D("error"),B.success=D("success"),B.loading=D("loading"),B.custom=D("custom"),B.dismiss=e=>{M({type:3,toastId:e})},B.remove=e=>M({type:4,toastId:e}),B.promise=(e,t,r)=>{let o=B.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(B.success(C(t.success,e),{id:o,...r,...null==r?void 0:r.success}),e)).catch(e=>{B.error(C(t.error,e),{id:o,...r,...null==r?void 0:r.error})}),e};var T=(e,t)=>{M({type:1,toast:{id:e,height:t}})},H=()=>{M({type:5,time:Date.now()})},F=e=>{let{toasts:t,pausedAt:r}=R(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&B.dismiss(t.id);return}return setTimeout(()=>B.dismiss(t.id),r)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,r]);let o=(0,i.useCallback)(()=>{r&&M({type:6,time:Date.now()})},[r]),a=(0,i.useCallback)((e,r)=>{let{reverseOrder:o=!1,gutter:a=8,defaultPosition:n}=r||{},i=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:T,startPause:H,endPause:o,calculateOffset:a}}},U=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,$=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=j("div")`
  position: absolute;
`,W=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?i.createElement(Q,null,t):t:"blank"===r?null:i.createElement(W,null,i.createElement(G,{...o}),"loading"!==r&&i.createElement(V,null,"error"===r?i.createElement(U,{...o}):i.createElement($,{...o})))},q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[o,a]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[q(r),J(r)];return{animation:t?`${w(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:r,children:o})=>{let a=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(Y,{toast:e}),s=i.createElement(Z,{...e.ariaProps},C(e.message,e));return i.createElement(K,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof o?o({icon:n,message:s}):i.createElement(i.Fragment,null,n,s))});n=i.createElement,f.p=void 0,x=n,v=void 0,y=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:o,children:a})=>{let n=i.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return i.createElement("div",{ref:n,className:t,style:r},a)},er=(e,t)=>{let r=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...o}},eo=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ea=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:a,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=F(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let n=r.position||t,s=er(n,c.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}));return i.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eo:"",style:s},"custom"===r.type?C(r.message,r):a?a(r):i.createElement(ee,{toast:r,position:n}))}))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);