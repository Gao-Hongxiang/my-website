"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(r),m=a,f=b["".concat(p,".").concat(m)]||b[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",sidebar_label:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f(\u524d\u7aef\u4e0d\u5e38\u7528)",description:"\u7236\u7c7b\u4e2d\u5b9a\u4e49\u4e00\u7ec4\u64cd\u4f5c\u7b97\u6cd5\u9aa8\u67b6\uff0c\u800c\u5c06\u4e00\u4e9b\u5b9e\u73b0\u6b65\u9aa4\u5ef6\u8fdf\u5230\u5b50\u7c7b\u4e2d",last_update:{date:"11/09/2022",author:"your name"}},i="\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff1a\u5496\u5561\u5385\u5236\u4f5c\u5496\u5561",l={unversionedId:"behavioral-pattern/template",id:"behavioral-pattern/template",title:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",description:"\u7236\u7c7b\u4e2d\u5b9a\u4e49\u4e00\u7ec4\u64cd\u4f5c\u7b97\u6cd5\u9aa8\u67b6\uff0c\u800c\u5c06\u4e00\u4e9b\u5b9e\u73b0\u6b65\u9aa4\u5ef6\u8fdf\u5230\u5b50\u7c7b\u4e2d",source:"@site/design/05-behavioral-pattern/05-template.md",sourceDirName:"05-behavioral-pattern",slug:"/behavioral-pattern/template",permalink:"/website/design/behavioral-pattern/template",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",sidebar_label:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f(\u524d\u7aef\u4e0d\u5e38\u7528)",description:"\u7236\u7c7b\u4e2d\u5b9a\u4e49\u4e00\u7ec4\u64cd\u4f5c\u7b97\u6cd5\u9aa8\u67b6\uff0c\u800c\u5c06\u4e00\u4e9b\u5b9e\u73b0\u6b65\u9aa4\u5ef6\u8fdf\u5230\u5b50\u7c7b\u4e2d",last_update:{date:"11/09/2022",author:"your name"}},sidebar:"tutorialSidebar",previous:{title:"\u7b56\u7565\u6a21\u5f0f",permalink:"/website/design/behavioral-pattern/strategy"},next:{title:"\u547d\u4ee4\u6a21\u5f0f",permalink:"/website/design/behavioral-pattern/command"}},p={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\u5496\u5561\u5385\u5236\u4f5c\u5496\u5561"},"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff1a\u5496\u5561\u5385\u5236\u4f5c\u5496\u5561"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\uff08Template Method Pattern\uff09\u7236\u7c7b\u4e2d\u5b9a\u4e49\u4e00\u7ec4\u64cd\u4f5c\u7b97\u6cd5\u9aa8\u67b6\uff0c\u800c\u5c06\u4e00\u4e9b\u5b9e\u73b0\u6b65\u9aa4\u5ef6\u8fdf\u5230\u5b50\u7c7b\u4e2d\uff0c\u4f7f\u5f97\u5b50\u7c7b\u53ef\u4ee5\u4e0d\u6539\u53d8\u7236\u7c7b\u7684\u7b97\u6cd5\u7ed3\u6784\u7684\u540c\u65f6\uff0c\u91cd\u65b0\u5b9a\u4e49\u7b97\u6cd5\u4e2d\u7684\u67d0\u4e9b\u5b9e\u73b0\u6b65\u9aa4\u3002\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f\u7684\u5173\u952e\u662f\u7b97\u6cd5\u6b65\u9aa4\u7684\u9aa8\u67b6\u548c\u5177\u4f53\u5b9e\u73b0\u5206\u79bb\u3002")))}s.isMDXComponent=!0}}]);