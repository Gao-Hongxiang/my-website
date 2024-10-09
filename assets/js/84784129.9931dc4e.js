"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5439],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),m=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=m(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),k=l,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||r;return t?i.createElement(c,a(a({ref:n},s),{},{components:t})):i.createElement(c,a({ref:n},s))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var m=2;m<r;m++)a[m]=t[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=t(7462),l=(t(7294),t(3905));const r={title:"10.PromisesA+\u89c4\u8303",last_update:{date:"02/14/2023",author:"\u9ad8\u7ea2\u7fd4"}},a="Promises/A+",o={unversionedId:"10PromisesA+\u89c4\u8303",id:"10PromisesA+\u89c4\u8303",title:"10.PromisesA+\u89c4\u8303",description:"\u6982\u5ff5",source:"@site/node/10PromisesA+\u89c4\u8303.md",sourceDirName:".",slug:"/10PromisesA+\u89c4\u8303",permalink:"/website/node/10PromisesA+\u89c4\u8303",draft:!1,tags:[],version:"current",frontMatter:{title:"10.PromisesA+\u89c4\u8303",last_update:{date:"02/14/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"9. Node \u6838\u2f3c\u5185\u5bb9",permalink:"/website/node/09\u5168\u5c40\u5bf9\u8c61"}},p={},m=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"Promise States",id:"promise-states",level:3},{value:"The <code>then</code> Method",id:"the-then-method",level:3},{value:"The Promise Resolution Procedure",id:"the-promise-resolution-procedure",level:3},{value:"\u6e90\u7801\u5b9e\u73b0",id:"\u6e90\u7801\u5b9e\u73b0",level:2}],s={toc:m};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"promisesa"},"Promises/A+"),(0,l.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("h3",{id:"promise-states"},"Promise States"),(0,l.kt)("p",null,"\u4e00\u4e2a promise \u5fc5\u987b\u5904\u4e8e\u4ee5\u4e0b\u4e09\u79cd\u72b6\u6001\u4e4b\u4e00\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"pending"),"\uff08\u5f85\u5b9a\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"fulfilled"),"\uff08\u5df2\u89e3\u51b3\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"rejected"),"\uff08\u5df2\u62d2\u7edd\uff09\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53 promise \u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"pending")," \u72b6\u6001\u65f6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected")," \u72b6\u6001\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5f53 promise \u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"fulfilled")," \u72b6\u6001\u65f6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5f97\u8f6c\u6362\u4e3a\u5176\u4ed6\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6709\u4e00\u4e2a\u503c\uff0c\u5e76\u4e14\u8be5\u503c\u4e0d\u80fd\u6539\u53d8\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5f53 promise \u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"rejected")," \u72b6\u6001\u65f6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5f97\u8f6c\u6362\u4e3a\u5176\u4ed6\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6709\u4e00\u4e2a\u539f\u56e0\uff0c\u5e76\u4e14\u8be5\u539f\u56e0\u4e0d\u80fd\u6539\u53d8\u3002")))),(0,l.kt)("h3",{id:"the-then-method"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"then")," Method"),(0,l.kt)("p",null,"Promise \u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u6765\u8bbf\u95ee\u5b83\u5f53\u524d\u6216\u5c06\u6765\u7684\u503c\u6216\u539f\u56e0\u3002"),(0,l.kt)("p",null,"Promise \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"promise.then(onFulfilled, onRejected);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"onFulfilled")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"onRejected")," \u90fd\u662f\u53ef\u9009\u53c2\u6570\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5fc5\u987b\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5fc5\u987b\u88ab\u5ffd\u7565\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"onFulfilled")," \u662f\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b83\u5fc5\u987b\u5728 promise \u88ab\u89e3\u51b3\uff08fulfilled\uff09\u540e\u8c03\u7528\uff0c\u5e76\u5c06 promise \u7684\u503c\u4f5c\u4e3a\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b83\u4e0d\u80fd\u5728 promise \u88ab\u89e3\u51b3\u4e4b\u524d\u8c03\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b83\u4e0d\u80fd\u88ab\u8c03\u7528\u591a\u6b21\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"onRejected")," \u662f\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b83\u5fc5\u987b\u5728 promise \u88ab\u62d2\u7edd\uff08rejected\uff09\u540e\u8c03\u7528\uff0c\u5e76\u5c06 promise \u7684\u539f\u56e0\u4f5c\u4e3a\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b83\u4e0d\u80fd\u5728 promise \u88ab\u62d2\u7edd\u4e4b\u524d\u8c03\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b83\u4e0d\u80fd\u88ab\u8c03\u7528\u591a\u6b21\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"onFulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"onRejected")," \u4e0d\u5e94\u88ab\u8c03\u7528\uff0c\u76f4\u5230\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u4e2d\u53ea\u5305\u542b\u5e73\u53f0\u4ee3\u7801\u3002","[3.1]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"onFulfilled")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"onRejected")," \u5fc5\u987b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\uff08\u5373\u6ca1\u6709\u7ed1\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u503c\uff09\u3002","[3.2]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u53ef\u4ee5\u5728\u540c\u4e00\u4e2a promise \u4e0a\u591a\u6b21\u8c03\u7528\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53 promise \u88ab\u89e3\u51b3\u65f6\uff0c\u6240\u6709\u76f8\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u56de\u8c03\u5fc5\u987b\u6309\u7167\u5b83\u4eec\u6700\u521d\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u7684\u987a\u5e8f\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53 promise \u88ab\u62d2\u7edd\u65f6\uff0c\u6240\u6709\u76f8\u5173\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u56de\u8c03\u5fc5\u987b\u6309\u7167\u5b83\u4eec\u6700\u521d\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"then")," \u7684\u987a\u5e8f\u6267\u884c\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a promise"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"promise2 = promise1.then(onFulfilled, onRejected);\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u8fd4\u56de\u4e00\u4e2a\u503c ",(0,l.kt)("inlineCode",{parentName:"li"},"x"),"\uff0c\u5219\u6267\u884c Promise \u89e3\u6790\u8fc7\u7a0b ",(0,l.kt)("inlineCode",{parentName:"li"},"[[Resolve]](promise2, x)"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u629b\u51fa\u5f02\u5e38 ",(0,l.kt)("inlineCode",{parentName:"li"},"e"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"promise2")," \u5fc5\u987b\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"e")," \u4f5c\u4e3a\u539f\u56e0\u88ab\u62d2\u7edd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onFulfilled")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5e76\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u5df2\u7ecf\u89e3\u51b3\uff08fulfilled\uff09\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise2")," \u5fc5\u987b\u4ee5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u76f8\u540c\u7684\u503c\u88ab\u89e3\u51b3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"onRejected")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5e76\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u5df2\u7ecf\u88ab\u62d2\u7edd\uff08rejected\uff09\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise2")," \u5fc5\u987b\u4ee5\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"promise1")," \u76f8\u540c\u7684\u539f\u56e0\u88ab\u62d2\u7edd\u3002")))),(0,l.kt)("h3",{id:"the-promise-resolution-procedure"},"The Promise Resolution Procedure"),(0,l.kt)("p",null,"Promise \u89e3\u6790\u8fc7\u7a0b\u662f\u4e00\u4e2a\u62bd\u8c61\u64cd\u4f5c\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a promise \u548c\u4e00\u4e2a\u503c\u4f5c\u4e3a\u8f93\u5165\uff0c\u6211\u4eec\u5c06\u5176\u8868\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"[[Resolve]](promise, x)"),"\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u662f\u4e00\u4e2a thenable \u5bf9\u8c61\uff0c\u5b83\u4f1a\u5c1d\u8bd5\u8ba9 ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u7684\u72b6\u6001\uff0c\u5047\u8bbe ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u81f3\u5c11\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u8868\u73b0\u5f97\u50cf\u4e00\u4e2a promise\u3002\u5426\u5219\uff0c\u5b83\u5c06\u4f7f\u7528\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u6765\u5b8c\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"promise"),"\u3002"),(0,l.kt)("p",null,"\u8981\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"[[Resolve]](promise, x)"),"\uff0c\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u6307\u5411\u540c\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u4ee5 TypeError \u4f5c\u4e3a\u539f\u56e0\u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"p"},"promise"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"\u662f\u4e00\u4e2a promise\uff0c\u91c7\u7528\u5b83\u7684\u72b6\u6001:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u5904\u4e8e\u5f85\u5b9a\uff08pending\uff09\u72b6\u6001\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise")," \u5fc5\u987b\u4fdd\u6301\u5f85\u5b9a\u72b6\u6001\uff0c\u76f4\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u88ab\u89e3\u51b3\uff08fulfilled\uff09\u6216\u62d2\u7edd\uff08rejected\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c/\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u88ab\u89e3\u51b3\u65f6\uff0c\u7528\u76f8\u540c\u7684\u503c\u89e3\u51b3 ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c/\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u88ab\u62d2\u7edd\u65f6\uff0c\u7528\u76f8\u540c\u7684\u539f\u56e0\u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u662f\u4e00\u4e2a\u5bf9\u8c61\u6216\u51fd\u6570\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"x.then")," \u7684\u503c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"x.then")," \u5c5e\u6027\u65f6\u629b\u51fa\u5f02\u5e38 ",(0,l.kt)("inlineCode",{parentName:"p"},"e"),"\uff0c\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"e")," \u4f5c\u4e3a\u539f\u56e0\u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"p"},"promise"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"resolvePromise")," \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"rejectPromise")," \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6765\u8c03\u7528\u5b83\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c/\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePromise")," \u88ab\u8c03\u7528\u5e76\u4f20\u5165\u4e00\u4e2a\u503c ",(0,l.kt)("inlineCode",{parentName:"li"},"y"),"\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"[[Resolve]](promise, y)"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c/\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejectPromise")," \u88ab\u8c03\u7528\u5e76\u4f20\u5165\u4e00\u4e2a\u539f\u56e0 ",(0,l.kt)("inlineCode",{parentName:"li"},"r"),"\uff0c\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"r")," \u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePromise")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"rejectPromise")," \u90fd\u88ab\u8c03\u7528\uff0c\u6216\u5bf9\u540c\u4e00\u4e2a\u53c2\u6570\u8fdb\u884c\u591a\u6b21\u8c03\u7528\uff0c\u5219\u7b2c\u4e00\u6b21\u8c03\u7528\u4f18\u5148\uff0c\u540e\u7eed\u8c03\u7528\u5c06\u88ab\u5ffd\u7565\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u629b\u51fa\u5f02\u5e38 ",(0,l.kt)("inlineCode",{parentName:"p"},"e")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePromise")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"rejectPromise")," \u5df2\u88ab\u8c03\u7528\uff0c\u5219\u5ffd\u7565\u5b83\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"e")," \u4f5c\u4e3a\u539f\u56e0\u62d2\u7edd ",(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"then")," \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u6210\u529f\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"value"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4e0d\u662f\u4e00\u4e2a\u5bf9\u8c61\u6216\u51fd\u6570\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u6210\u529f\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"value")))),(0,l.kt)("h2",{id:"\u6e90\u7801\u5b9e\u73b0"},"\u6e90\u7801\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const PENDING = "PENDING";\nconst FULFILLED = "FULFILLED";\nconst REJECTED = "REJECTED";\n\nfunction promiseResolve(promise, x, resolve, reject) {\n  if (promise === x) {\n    return reject(new TypeError("Chaining cycle detected for promise"));\n  }\n  if (x instanceof Promise) {\n    x.then(resolve, reject);\n  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {\n    let then;\n    let called = false;\n    try {\n      then = x.then;\n    } catch (e) {\n      if (called) return;\n      called = true;\n      return reject(e);\n    }\n    if (typeof then === "function") {\n      try {\n        then.call(\n          x,\n          (y) => {\n            if (called) return;\n            called = true;\n            setTimeout(() => {\n              promiseResolve(promise, y, resolve, reject);\n            });\n          },\n          (r) => {\n            if (called) return;\n            called = true;\n            reject(r);\n          }\n        );\n      } catch (e) {\n        if (called) return;\n        called = true;\n        reject(e);\n      }\n    } else {\n      if (called) return;\n      called = true;\n      resolve(x);\n    }\n  } else {\n    resolve(x);\n  }\n}\nclass MyPromise {\n  constructor(executor) {\n    this.status = PENDING;\n    this.value = undefined;\n    this.reason = undefined;\n    this.onFulfilledCallback = [];\n    this.onRejectedCallback = [];\n    const resolve = (value) => {\n      if (value instanceof Promise) {\n        // \u9012\u5f52\u89e3\u6790\u7684\u6d41\u7a0b\n        return value.then(resolve, reject);\n      }\n      if (this.status === PENDING) {\n        this.value = value;\n        this.status = FULFILLED;\n        this.onFulfilledCallback.forEach((callback) => callback());\n      }\n    };\n    const reject = (reason) => {\n      if (this.status === PENDING) {\n        this.reason = reason;\n        this.status = REJECTED;\n        this.onRejectedCallback.forEach((callback) => callback());\n      }\n    };\n\n    try {\n      executor(resolve, reject);\n    } catch (err) {\n      reject(err);\n    }\n  }\n\n  static deferred() {\n    var result = {};\n    result.promise = new MyPromise(function (resolve, reject) {\n      result.resolve = resolve;\n      result.reject = reject;\n    });\n\n    return result;\n  }\n\n  then(onFulfilled, onRejected) {\n    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;\n    onRejected =\n      typeof onRejected === "function"\n        ? onRejected\n        : (e) => {\n            throw e;\n          };\n    let promise2 = new MyPromise((resolve, reject) => {\n      if (this.status === FULFILLED) {\n        setTimeout(() => {\n          try {\n            const x = onFulfilled(this.value);\n            promiseResolve(promise2, x, resolve, reject);\n          } catch (e) {\n            reject(e);\n          }\n        });\n      }\n      if (this.status === REJECTED) {\n        setTimeout(() => {\n          try {\n            const x = onRejected(this.reason);\n            promiseResolve(promise2, x, resolve, reject);\n          } catch (e) {\n            reject(e);\n          }\n        });\n      }\n\n      if (this.status === PENDING) {\n        this.onFulfilledCallback.push(() => {\n          setTimeout(() => {\n            try {\n              const x = onFulfilled(this.value);\n              promiseResolve(promise2, x, resolve, reject);\n            } catch (e) {\n              reject(e);\n            }\n          });\n        });\n        this.onRejectedCallback.push(() => {\n          setTimeout(() => {\n            try {\n              const x = onRejected(this.reason);\n\n              promiseResolve(promise2, x, resolve, reject);\n            } catch (e) {\n              reject(e);\n            }\n          });\n        });\n      }\n    });\n    return promise2;\n  }\n  static resolve(value) {\n    return new MyPromise((resolve, reject) => {\n      resolve(value);\n    });\n  }\n}\nmodule.exports = MyPromise;\n')))}d.isMDXComponent=!0}}]);