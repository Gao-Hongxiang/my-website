"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),f=a,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u89c2\u5bdf\u8005\u6a21\u5f0f",sidebar_label:"\u89c2\u5bdf\u8005\u6a21\u5f0f(\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f)",description:"\u4e3b\u9898\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u5c31\u4f1a\u901a\u77e5\u6240\u6709\u8ba2\u9605\u81ea\u5df1\u7684\u8ba2\u9605\u8005\u5bf9\u8c61\uff0c\u4f7f\u5f97\u5b83\u4eec\u80fd\u591f\u81ea\u52a8\u66f4\u65b0\u81ea\u5df1",last_update:{date:"11/09/2022",author:"your name"}},i="\u89c2\u5bdf\u8005\u6a21\u5f0f",l={unversionedId:"behavioral-pattern/observe",id:"behavioral-pattern/observe",title:"\u89c2\u5bdf\u8005\u6a21\u5f0f",description:"\u4e3b\u9898\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u5c31\u4f1a\u901a\u77e5\u6240\u6709\u8ba2\u9605\u81ea\u5df1\u7684\u8ba2\u9605\u8005\u5bf9\u8c61\uff0c\u4f7f\u5f97\u5b83\u4eec\u80fd\u591f\u81ea\u52a8\u66f4\u65b0\u81ea\u5df1",source:"@site/design/05-behavioral-pattern/01-observe.md",sourceDirName:"05-behavioral-pattern",slug:"/behavioral-pattern/observe",permalink:"/website/design/behavioral-pattern/observe",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u89c2\u5bdf\u8005\u6a21\u5f0f",sidebar_label:"\u89c2\u5bdf\u8005\u6a21\u5f0f(\u53d1\u5e03-\u8ba2\u9605\u6a21\u5f0f)",description:"\u4e3b\u9898\u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u5c31\u4f1a\u901a\u77e5\u6240\u6709\u8ba2\u9605\u81ea\u5df1\u7684\u8ba2\u9605\u8005\u5bf9\u8c61\uff0c\u4f7f\u5f97\u5b83\u4eec\u80fd\u591f\u81ea\u52a8\u66f4\u65b0\u81ea\u5df1",last_update:{date:"11/09/2022",author:"your name"}},sidebar:"tutorialSidebar",previous:{title:"\u884c\u4e3a\u578b\u6a21\u5f0f",permalink:"/website/design/category/\u884c\u4e3a\u578b\u6a21\u5f0f"},next:{title:"\u8fed\u4ee3\u5668\u6a21\u5f0f",permalink:"/website/design/behavioral-pattern/iterator"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u89c2\u5bdf\u8005\u6a21\u5f0f"},"\u89c2\u5bdf\u8005\u6a21\u5f0f"))}u.isMDXComponent=!0}}]);