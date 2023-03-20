"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const o={title:"5. Node \u7684\u57fa\u672c\u6982\u5ff5",last_update:{date:"02/07/2023",author:"\u9ad8\u7ea2\u7fd4"}},a=void 0,i={unversionedId:"05node\u6982\u5ff5",id:"05node\u6982\u5ff5",title:"5. Node \u7684\u57fa\u672c\u6982\u5ff5",description:"1.Node \u662f\u4ec0\u4e48?",source:"@site/node/05node\u6982\u5ff5.md",sourceDirName:".",slug:"/05node\u6982\u5ff5",permalink:"/website/node/05node\u6982\u5ff5",draft:!1,tags:[],version:"current",frontMatter:{title:"5. Node \u7684\u57fa\u672c\u6982\u5ff5",last_update:{date:"02/07/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"4. \u6d4f\u89c8\u5668\u4e8b\u4ef6\u73af",permalink:"/website/node/04\u6d4f\u89c8\u5668\u4e8b\u4ef6\u73af"},next:{title:"6. commonjs\u89c4\u8303",permalink:"/website/node/06commonjs\u89c4\u8303"}},u={},s=[{value:"1.Node \u662f\u4ec0\u4e48?",id:"1node-\u662f\u4ec0\u4e48",level:2},{value:"1.1 \u4e8b\u4ef6\u9a71\u52a8",id:"11-\u4e8b\u4ef6\u9a71\u52a8",level:3},{value:"1.2 \u975e\u963b\u585e I/O",id:"12-\u975e\u963b\u585e-io",level:3},{value:"2.\u5355\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b",id:"2\u5355\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b",level:2},{value:"2.1 \u591a\u7ebf\u7a0b",id:"21-\u591a\u7ebf\u7a0b",level:3},{value:"2.2 \u5355\u7ebf\u7a0b",id:"22-\u5355\u7ebf\u7a0b",level:3},{value:"3.\u540c\u6b65\u548c\u5f02\u6b65",id:"3\u540c\u6b65\u548c\u5f02\u6b65",level:2},{value:"4.Node \u4f7f\u7528\u573a\u666f\uff1f",id:"4node-\u4f7f\u7528\u573a\u666f",level:2},{value:"5.\u4e3a\u4ec0\u4e48\u8981\u6709\u6a21\u5757\u5316",id:"5\u4e3a\u4ec0\u4e48\u8981\u6709\u6a21\u5757\u5316",level:2},{value:"6.commonjs \u89c4\u8303",id:"6commonjs-\u89c4\u8303",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:4},{value:"\u7b80\u5316\u7684 require",id:"\u7b80\u5316\u7684-require",level:4},{value:"<strong>\u6a21\u5757\u7684\u5206\u7c7b</strong>",id:"\u6a21\u5757\u7684\u5206\u7c7b",level:4},{value:"\u57fa\u672c\u5b9e\u73b0",id:"\u57fa\u672c\u5b9e\u73b0",level:4}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1node-\u662f\u4ec0\u4e48"},"1.Node \u662f\u4ec0\u4e48?"),(0,l.kt)("p",null,"Node.js \u662f\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"JavaScript \u8fd0\u884c\u73af\u5883"),"\uff0c\u5b83\u662f",(0,l.kt)("strong",{parentName:"p"},"\u57fa\u4e8e Chrome's V8 \u5f15\u64ce"),"\u6784\u5efa\u7684\uff0c\u4f7f JavaScript \u53ef\u4ee5\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c\u3002Node.js ",(0,l.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a\u4e8b\u4ef6\u9a71\u52a8\u3001\u975e\u963b\u585e I/O")," \u3002(",(0,l.kt)("strong",{parentName:"p"},"\u652f\u6301 ECMAScript\u3001\u5185\u7f6e\u6a21\u5757\u3001\u7b2c\u4e09\u65b9\u6a21\u5757"),")"),(0,l.kt)("h3",{id:"11-\u4e8b\u4ef6\u9a71\u52a8"},"1.1 \u4e8b\u4ef6\u9a71\u52a8"),(0,l.kt)("p",null,"\u6307\u7a0b\u5e8f\u6309\u7167\u4e8b\u4ef6\u7684\u53d1\u751f\u987a\u5e8f\u6765\u89e6\u53d1\u54cd\u5e94\u7684\u5904\u7406\uff0c\u80fd\u591f\u5728\u4e0d\u963b\u585e\u5176\u4ed6\u4e8b\u4ef6\u7684\u60c5\u51b5\u4e0b\u5904\u7406\u591a\u4e2a\u4e8b\u4ef6\u3002Node \u4e2d\u4e5f\u6709\u4e00\u4e2a\u4e8b\u4ef6\u73af\uff0c\u4e0d\u65ad\u5730\u68c0\u67e5\u4e8b\u4ef6\u961f\u5217\u4e2d\u662f\u5426\u6709\u65b0\u7684\u4e8b\u4ef6\uff0c\u5e76\u89e6\u53d1\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570\u3002\u9002\u7528\u4e8e",(0,l.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u548c I/O \u5bc6\u96c6\u578b"),"\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("h3",{id:"12-\u975e\u963b\u585e-io"},"1.2 \u975e\u963b\u585e I/O"),(0,l.kt)("p",null,"\u5f53\u7a0b\u5e8f\u53d1\u51fa\u4e00\u4e2a I/O \u8bf7\u6c42\u65f6\uff0c\u5982\u679c\u4e0d\u80fd\u7acb\u5373\u5f97\u5230\u7ed3\u679c\uff0c\u4e0d\u4f1a\u963b\u585e\u7a0b\u5e8f\u7684\u6267\u884c\uff0c\u800c\u662f\u7acb\u5373\u8fd4\u56de\uff0c\u4ee5\u4fbf\u7a0b\u5e8f\u53ef\u4ee5\u7ee7\u7eed\u6267\u884c\u5176\u4ed6\u4efb\u52a1\u3002"),(0,l.kt)("h2",{id:"2\u5355\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b"},"2.\u5355\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b"),(0,l.kt)("h3",{id:"21-\u591a\u7ebf\u7a0b"},"2.1 \u591a\u7ebf\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a"),"\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u591a\u4e2a\u4efb\u52a1 \uff08\u591a\u4e2a\u8bf7\u6c42\u5230\u6765\u7684\u65f6\u5019\uff0c\u9700\u8981\u5f00\u542f\u5bf9\u5e94\u7684\u7ebf\u7a0b\u6765\u8fdb\u884c\u5904\u7406\u3002\u5229\u7528",(0,l.kt)("strong",{parentName:"p"},"\u7ebf\u7a0b\u6c60\u6765\u8fdb\u884c\u4f18\u5316"),"\uff09 \u53ef\u5229\u7528\u591a\u6838 CPU \u7684\u8d44\u6e90\u3002\u9002\u5408\u5904",(0,l.kt)("strong",{parentName:"p"},"\u7406 CPU \u5bc6\u96c6\u578b")," \uff08\u538b\u7f29\u3001\u89e3\u5bc6\u3001\u52a0\u5bc6\uff09\n",(0,l.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a"),"\u7ebf\u7a0b\u95f4",(0,l.kt)("strong",{parentName:"p"},"\u901a\u4fe1\u590d\u6742"),"\u3001\u591a\u7ebf\u7a0b\u95f4\u9501\u7684\u95ee\u9898\u3001\u5f00\u8f9f\u7ebf\u7a0b\u9700\u8981\u5360\u7528\u5185\u5b58\u7b49\u95ee\u9898\u3002"),(0,l.kt)("h3",{id:"22-\u5355\u7ebf\u7a0b"},"2.2 \u5355\u7ebf\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a"),"\u8282\u7ea6\u5185\u5b58\u8d44\u6e90\u3001\u6ca1\u6709\u9501\u7684\u95ee\u9898\u3001\u8c03\u8bd5\u5bb9\u6613\u3002",(0,l.kt)("strong",{parentName:"p"},"\u9002\u5408 I/O \u5bc6\u96c6\u578b\u64cd\u4f5c"),"\n",(0,l.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a\u65e0\u6cd5\u5145\u5206\u5229\u7528\u591a\u6838 CPU\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u590d\u6742\u64cd\u4f5c\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b"),"\u3002"),(0,l.kt)("h2",{id:"3\u540c\u6b65\u548c\u5f02\u6b65"},"3.\u540c\u6b65\u548c\u5f02\u6b65"),(0,l.kt)("p",null,"\u540c\u6b65\uff1a\u5728\u6267\u884c\u4e00\u4e2a\u64cd\u4f5c\u65f6\uff0c\u7a0b\u5e8f\u5fc5\u987b\u7b49\u5f85\u8be5\u64cd\u4f5c\u5b8c\u6210\u540e\u624d\u80fd\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u3002\n\u5f02\u6b65\uff1a\u5728\u6267\u884c\u4e00\u4e2a\u64cd\u4f5c\u65f6\uff0c\u7a0b\u5e8f\u4e0d\u9700\u8981\u7b49\u5f85\u8be5\u64cd\u4f5c\u5b8c\u6210\uff0c\u800c\u662f\u53ef\u4ee5\u7ee7\u7eed\u6267\u884c\u5176\u4ed6\u4efb\u52a1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u601d\u8003\uff1a\u963b\u585e\u548c\u975e\u963b\u585e\u3001\u540c\u6b65\u548c\u5f02\u6b65\u7684\u5173\u7cfb\uff1f \u5f02\u6b65\u4e00\u5b9a\u662f\u975e\u963b\u585e\u7684\u5417(\u4e00\u5b9a)\uff0c\u540c\u6b65\u4e00\u5b9a\u662f\u963b\u585e\u7684\u5417\uff08\u4e00\u5b9a\uff09\uff0c \u9488\u5bf9\u662f\u8c03\u7528\u65b9\u548c\u88ab\u8c03\u7528\u6765\u8bf4\u7684\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u8c03\u7528\u4e00\u4e2a\u65b9\u6cd5\u4e4b\u540e\uff0c\u6536\u5426\u9700\u8981\u7b49\u5f85\u8fd9\u4e2a\u64cd\u4f5c\u8fd4\u56de\u7684\u7ed3\u679c \uff08\u4e0d\u9700\u8981\u7b49\u5f85\u5c31\u662f\u5f02\u6b65\u64cd\u4f5c\uff0c \u540c\u6b65\u64cd\u4f5c\u5c31\u662f\u9700\u8981\u7b49\u5f85\u8fd9\u4e2a\u64cd\u4f5c\u7684\u8fd4\u56de\u503c\uff09"),(0,l.kt)("li",{parentName:"ul"},"Promise.then(\u539f\u751f\u7684 promise) setTimeout mutationObserver(h5 \u63d0\u4f9b\u7684 api) ajax \u8bf7\u6c42 \u7528\u6237\u7684\u4e8b\u4ef6 setImmediate(ie \u7279\u6709\u7684) \u811a\u672c\uff0c ui \u6e32\u67d3"),(0,l.kt)("li",{parentName:"ul"},"process.nextTick i/o setImmediate"),(0,l.kt)("li",{parentName:"ul"},"requestAnimationFrame requestIDleCallback (16.6ms) \u5230\u8fbe\u6e32\u67d3\u65f6\u673a\u540e \u5e27\u6267\u884c\u4e4b\u524d requestFrameAnimation \u65b9\u6cd5 \u4e00\u9488\u6267\u884c\u5b8c\u6bd5\u540e\u5269\u4f59\u7684\u65f6\u95f4 requestIDleCallback \uff08\u56de\u8c03\uff09")),(0,l.kt)("h2",{id:"4node-\u4f7f\u7528\u573a\u666f"},"4.Node \u4f7f\u7528\u573a\u666f\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u642d\u5efa\u670d\u52a1\u7aef\uff0c\u91c7\u7528 koa\u3001express\u3001nestjs\u3001eggjs \u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u7f16\u5199\u524d\u7aef\u5de5\u5177\u94fe\uff0cgulp\u3001webpack\u3001vite\u3001rollup \u4ee5\u53ca\u5e38\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u524d\u7aef\u670d\u52a1\uff0c\u4f5c\u4e3a\u4e2d\u95f4\u5c42\u4f7f\u7528\uff0c\u89e3\u51b3\u8de8\u57df\u95ee\u9898\u3001\u8fdb\u884c\u6570\u636e\u5904\u7406 BFF(Back-end For Front-end)"),(0,l.kt)("li",{parentName:"ul"},"SSR \u670d\u52a1\u7aef\u6e32\u67d3"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u53ca\u65f6\u901a\u8baf\u5e94\u7528\uff0c\u722c\u866b\u7b49")),(0,l.kt)("h2",{id:"5\u4e3a\u4ec0\u4e48\u8981\u6709\u6a21\u5757\u5316"},"5.\u4e3a\u4ec0\u4e48\u8981\u6709\u6a21\u5757\u5316"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6a21\u5757\u5316\u89c4\u8303\uff1a\uff08cmd\u3001amd\uff09\u3001umd\u3001 iife\u3001es6Module\u3001commonJS \u7b49")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u5347\u4ee3\u7801\u53ef\u91cd\u7528\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u4fbf\u7ef4\u62a4\uff0c\u9ad8\u5185\u805a\u4f4e\u8026\u5408\uff0c\u89e3\u51b3",(0,l.kt)("strong",{parentName:"li"},"\u53d8\u91cf\u51b2\u7a81\u95ee\u9898\uff0c\u9694\u79bb")),(0,l.kt)("li",{parentName:"ul"},"Node \u4e2d\u5b9e\u73b0\u6a21\u5757\u91c7\u7528\u51fd\u6570\u6765\u8fdb\u884c\u6a21\u5757\u5212\u5206\u7684\u3002")),(0,l.kt)("h2",{id:"6commonjs-\u89c4\u8303"},"6.commonjs \u89c4\u8303"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a js \u6587\u4ef6\u90fd\u662f\u4e00\u4e2a\u6a21\u5757"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6a21\u5757\u60f3\u53bb\u5f15\u7528\u522b\u4eba\u7684\u6a21\u5757\uff0c\u9700\u8981\u91c7\u7528 require \u8bed\u6cd5 import"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6a21\u5757\u60f3\u88ab\u522b\u4eba\u4f7f\u7528\u9700\u8981\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"li"}," module.exports")," \u8fdb\u884c\u5bfc\u51fa export")),(0,l.kt)("h4",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,l.kt)("p",null,"a.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = "\u7ed3\u679c"\n')),(0,l.kt)("p",null,"a.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "a": 1\n}\n')),(0,l.kt)("p",null,"useA.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const str = require("./a") // .js \u540e\u7f00 .json \u540e\u7f00\u53ef\u4ee5\u9690\u85cf\uff0c \u9ed8\u8ba4\u5148\u627ejs\u6587\u4ef6\nconsole.log(str)\n')),(0,l.kt)("h4",{id:"\u7b80\u5316\u7684-require"},"\u7b80\u5316\u7684 require"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// 1) \u5185\u90e8\u91c7\u7528\u4e86\u540c\u6b65\u8bfb\u53d6\u7684\u65b9\u6848 \uff0c\u5c06\u6587\u4ef6\u5185\u5bb9\u83b7\u53d6\u5230\u3002 require\u65b9\u6cd5\u662f\u540c\u6b65\u7684\u3002 \u5e95\u5c42\u7528\u7684\u662f\u540c\u6b65\u7684\u8bfb\u53d6 fs.readFileSync\nfunction require(\u6587\u4ef6\u540d) {\n  // \u6839\u636e\u6587\u4ef6\u540d\u83b7\u53d6\u5185\u5bb9\uff0c\u5305\u88c5\u51fd\u6570\uff0c\u5e76\u4e14\u628a\u83b7\u53d6\u5230\u7684\u7ed3\u679c\u653e\u5230module.exports\n  let module = {\n    exports: "",\n  }\n  ;(function (module, exports) {\n    module.exports = "\u7ed3\u679c"\n  })(module, module.exports)\n  return module.exports\n}\n')),(0,l.kt)("h4",{id:"\u6a21\u5757\u7684\u5206\u7c7b"},(0,l.kt)("strong",{parentName:"h4"},"\u6a21\u5757\u7684\u5206\u7c7b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6587\u4ef6\u6a21\u5757: \u8def\u5f84\u6765\u5f15\u5165\u7684\u6a21\u5757 \u81ea\u5df1\u5199\u7684\u6a21\u5757\uff0c\u6587\u4ef6\u6a21\u5757")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5185\u7f6e\u6a21\u5757:\u6838\u5fc3\u6a21\u5757 fs \u6a21\u5757\u6838\u5fc3\u6a21\u5757 path \u6a21\u5757")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e09\u65b9\u6a21\u5757\uff1a\u522b\u4eba\u5199\u597d\u7684\u5b89\u88c5\u7684"))),(0,l.kt)("h4",{id:"\u57fa\u672c\u5b9e\u73b0"},"\u57fa\u672c\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// 1) Module._load  \u52a0\u8f7d\u8fd9\u4e2a\u6a21\u5757\n// 2) Module._resolveFilename( \u5904\u7406\u8def\u5f84\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c \u5e76\u4e14\u6dfb\u52a0\u6587\u4ef6\u540e\u7f00\n// 3) \u62ff\u5230\u6587\u4ef6 \u770b\u4e00\u4e0b\u6587\u4ef6\u662f\u5426\u52a0\u8f7d\u8fc7 Module._cache \u662f\u5426\u7f13\u5b58\u8fc7\uff0c\u5982\u679c\u7f13\u5b58\u8fc7\u5219\u76f4\u63a5\u7ed3\u675f\n// 4) \u5982\u679c\u6ca1\u6709\u7f13\u5b58\u8fc7 \u5219\u4f1anew Module(id,exports = {})  exports \u662f\u5bf9\u5e94\u6a21\u5757\u7684\u5bfc\u51fa\u7ed3\u679c\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\n// 5) \u5c06\u521b\u5efa\u7684\u6a21\u5757\u7f13\u5b58\n// 6) \u6839\u636e\u6587\u4ef6\u52a0\u8f7d\u6a21\u5757 \uff08\u7ed9module.exports \u8d4b\u503c\uff09\n// 7) \u627e\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u540e\u7f00 \u505a\u52a0\u8f7d\u64cd\u4f5c Module._extensions[.js](this, filename); \u7b56\u7565\u6a21\u5f0f\n// 8) \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9 fs.readFileSync(filename, \'utf8\');\n// 9) \u5c06\u5b57\u7b26\u4e32\u6267\u884c  module._compile \u7f16\u8bd1\u5b57\u7b26\u4e32\n// 10) \u5305\u88f9\u51fd\u6570 \'exports\',\'require\',\'module\',\'__filename\', \'__dirname\',\n// module.exports = exports\n// this = exports\n// 11) Reflect.apply(this,[exports,require,module,filename,path.dirname])   module.exports = \'abc\'\n// \u6700\u7ec8\u8fd4\u56de\u7684\u662f module.exports\nconst fs = require("fs")\nconst path = require("path")\nconst vm = require("vm")\n\nfunction Module(id) {\n  this.id = id\n  this.exports = {}\n}\n\nModule._extensions = {}\nModule._extensions[".js"] = function (module) {\n  const content = fs.readFileSync(module.id, "utf-8")\n  let fn = vm.compileFunction(content, [\n    "exports",\n    "require",\n    "module",\n    "__filename",\n    "__dirname",\n  ])\n  let exports = module.exports\n  let thisValue = exports\n  let filename = module.id\n  let dirname = path.dirname(filename)\n  // \u51fd\u6570\u6267\u884c\u7684\u65f6\u5019  \u4f1a\u81ea\u52a8\u7684\u7ed9module.exoports \u8d4b\u503c\n  Reflect.apply(fn, thisValue, [exports, req, module, filename, dirname]) // \u5982\u679c\u7528\u6237\u6ca1\u6709\u5199module.exports\n}\nModule._extensions[".json"] = function (module) {\n  const content = fs.readFileSync(module.id, "utf-8")\n  // jsonj \u5c31\u662f\u76f4\u63a5\u5c06\u7ed3\u679c\u5bcc\u88d5\u5230module.exports \u4e0a\u5373\u53ef\n  module.exports = JSON.parse(content)\n}\n\n// \u52a0\u8f7d\u6a21\u5757\nModule.prototype.load = function () {\n  let ext = path.extname(this.id) // js\n  // \u6839\u636e\u540e\u7f00\u52a0\u8f7d\u6587\u4ef6\n  Module._extensions[ext](this)\n}\nModule._resolveFilename = function (id) {\n  const filepath = path.resolve(__dirname, id)\n  if (fs.existsSync(filepath)) return filepath\n\n  // \u6ca1\u6709\u8fd9\u4e2a\u6587\u4ef6 \u5c1d\u8bd5\u6dfb\u52a0\u540e\u7f00\n  let exts = Reflect.ownKeys(Module._extensions)\n  for (let i = 0; i < exts.length; i++) {\n    let newFilePath = filepath + exts[i]\n    if (fs.existsSync(newFilePath)) return newFilePath\n  }\n  throw new Error("Connot found module")\n}\nfunction req(id) {\n  // \u89e3\u6790\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84 \u6dfb\u52a0\u540e\u7f00\n  let filename = Module._resolveFilename(id)\n  let module = new Module(filename)\n  module.load() // \u8fd9\u91cc\u5c31\u662f\u52a0\u8f7d\u6587\u4ef6 \u7ed9module.exports \u8d4b\u503c\n  return module.exports // {}\n}\n\nconst r = req("./a.json")\nconsole.log(r)\n')))}m.isMDXComponent=!0}}]);