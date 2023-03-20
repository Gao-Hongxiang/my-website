"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),k=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=k(n),s=a,c=d["".concat(p,".").concat(s)]||d[s]||u[s]||r;return n?l.createElement(c,i(i({ref:t},m),{},{components:n})):l.createElement(c,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var k=2;k<r;k++)i[k]=n[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>k});var l=n(7462),a=(n(7294),n(3905));const r={title:"2. \u5b89\u5168\u95ee\u9898\uff1aCSRF \u548c XSS",last_update:{date:"01/06/2023",author:"\u9ad8\u7ea2\u7fd4"}},i=void 0,o={unversionedId:"\u8ba1\u7b97\u673a\u7f51\u7edc/\u7f51\u7edc\u5b89\u5168",id:"\u8ba1\u7b97\u673a\u7f51\u7edc/\u7f51\u7edc\u5b89\u5168",title:"2. \u5b89\u5168\u95ee\u9898\uff1aCSRF \u548c XSS",description:"1 \u524d\u8a00",source:"@site/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/02-\u7f51\u7edc\u5b89\u5168.md",sourceDirName:"\u8ba1\u7b97\u673a\u7f51\u7edc",slug:"/\u8ba1\u7b97\u673a\u7f51\u7edc/\u7f51\u7edc\u5b89\u5168",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/\u7f51\u7edc\u5b89\u5168",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. \u5b89\u5168\u95ee\u9898\uff1aCSRF \u548c XSS",last_update:{date:"01/06/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"1. HTTP \u53d1\u5c55\u5386\u7a0b",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/http"},next:{title:"3. V8 \u5185\u5b58\u7ba1\u7406\uff08\u5783\u573e\u56de\u6536\u673a\u5236\uff09",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/v8\u5185\u5b58\u7ba1\u7406"}},p={},k=[{value:"1 \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"2 CSRF",id:"2-csrf",level:2},{value:"2.1 CSRF \u7684\u57fa\u672c\u6982\u5ff5\u3001\u7f29\u5199\u3001\u5168\u79f0",id:"21-csrf-\u7684\u57fa\u672c\u6982\u5ff5\u7f29\u5199\u5168\u79f0",level:3},{value:"2.2 CSRF \u7684\u653b\u51fb\u539f\u7406",id:"22-csrf-\u7684\u653b\u51fb\u539f\u7406",level:3},{value:"2.3 CSRF \u5982\u4f55\u9632\u5fa1",id:"23-csrf-\u5982\u4f55\u9632\u5fa1",level:3},{value:"<strong>\u65b9\u6cd5\u4e00\u3001Token \u9a8c\u8bc1\uff1a</strong>\uff08\u7528\u7684\u6700\u591a\uff09",id:"\u65b9\u6cd5\u4e00token-\u9a8c\u8bc1\u7528\u7684\u6700\u591a",level:4},{value:"<strong>\u65b9\u6cd5\u4e8c\uff1a\u9690\u85cf\u4ee4\u724c\uff1a</strong>",id:"\u65b9\u6cd5\u4e8c\u9690\u85cf\u4ee4\u724c",level:4},{value:"<strong>\u65b9\u6cd5\u4e09\u3001Referer \u9a8c\u8bc1\uff1a</strong>",id:"\u65b9\u6cd5\u4e09referer-\u9a8c\u8bc1",level:4},{value:"<strong>\u65b9\u6cd5\u56db\u3001\u6dfb\u52a0\u9a8c\u8bc1\u7801\uff08\u4f53\u9a8c\u4e0d\u597d\uff09</strong>",id:"\u65b9\u6cd5\u56db\u6dfb\u52a0\u9a8c\u8bc1\u7801\u4f53\u9a8c\u4e0d\u597d",level:4},{value:"3 XSS",id:"3-xss",level:2},{value:"3.1 XSS \u7684\u57fa\u672c\u6982\u5ff5",id:"31-xss-\u7684\u57fa\u672c\u6982\u5ff5",level:3},{value:"3.2 XSS \u7684\u653b\u51fb\u539f\u7406",id:"32-xss-\u7684\u653b\u51fb\u539f\u7406",level:3},{value:"3.3 XSS \u7684\u653b\u51fb\u65b9\u5f0f\u548c\u9632\u8303\u63aa\u65bd",id:"33-xss-\u7684\u653b\u51fb\u65b9\u5f0f\u548c\u9632\u8303\u63aa\u65bd",level:3},{value:"1. \u53cd\u5c04\u578b\uff08\u57fa\u4e8e\u540e\u7aef\uff09",id:"1-\u53cd\u5c04\u578b\u57fa\u4e8e\u540e\u7aef",level:4},{value:"2\u3001DOM-Based(\u4e0d\u57fa\u4e8e\u540e\u7aef)",id:"2dom-based\u4e0d\u57fa\u4e8e\u540e\u7aef",level:4},{value:"3\u3001\u5b58\u50a8\u578b\uff08\u6076\u610f\u811a\u672c\u5b58\u50a8\u5230\u670d\u52a1\u5668\uff09",id:"3\u5b58\u50a8\u578b\u6076\u610f\u811a\u672c\u5b58\u50a8\u5230\u670d\u52a1\u5668",level:4},{value:"3.4 XSS \u7684\u9632\u8303\u63aa\u65bd\uff08encode + \u8fc7\u6ee4\uff09",id:"34-xss-\u7684\u9632\u8303\u63aa\u65bdencode--\u8fc7\u6ee4",level:3},{value:"<strong>1. \u7f16\u7801</strong>\uff1a",id:"1-\u7f16\u7801",level:4},{value:"<strong>2\u3001\u8fc7\u6ee4\uff1a</strong>",id:"2\u8fc7\u6ee4",level:4},{value:"<strong>3\u3001\u6821\u6b63</strong>",id:"3\u6821\u6b63",level:4},{value:"4 CSRF \u548c XSS \u7684\u533a\u522b",id:"4-csrf-\u548c-xss-\u7684\u533a\u522b",level:2}],m={toc:k};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u524d\u8a00"},"1 \u524d\u8a00"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CSRF"),"\uff1a\u57fa\u672c\u6982\u5ff5\u3001\u653b\u51fb\u65b9\u5f0f\u3001\u9632\u5fa1\u63aa\u65bd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XSS"),"\uff1a\u57fa\u672c\u6982\u5ff5\u3001\u653b\u51fb\u65b9\u5f0f\u3001\u9632\u5fa1\u63aa\u65bd")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u4eba\u95ee\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"SQL"),"\u6ce8\u5165\u7b97\u5417\uff1f\u7b54\u6848\uff1a\u8fd9\u4e2a\u5176\u5b9e\u8ddf\u524d\u7aef\u7684\u5173\u7cfb\u4e0d\u662f\u5f88\u5927\u3002")),(0,a.kt)("h2",{id:"2-csrf"},"2 CSRF"),(0,a.kt)("h3",{id:"21-csrf-\u7684\u57fa\u672c\u6982\u5ff5\u7f29\u5199\u5168\u79f0"},"2.1 CSRF \u7684\u57fa\u672c\u6982\u5ff5\u3001\u7f29\u5199\u3001\u5168\u79f0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"CSRF"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Cross-site request forgery"),"\uff09\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020"),"\u3002")),(0,a.kt)("h3",{id:"22-csrf-\u7684\u653b\u51fb\u539f\u7406"},"2.2 CSRF \u7684\u653b\u51fb\u539f\u7406"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20230201165952.png",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7528\u6237\u662f\u7f51\u7ad9 A \u7684\u6ce8\u518c\u7528\u6237\uff0c\u4e14\u767b\u5f55\u8fdb\u53bb\uff0c\u4e8e\u662f\u7f51\u7ad9 A \u5c31\u7ed9\u7528\u6237\u4e0b\u53d1",(0,a.kt)("inlineCode",{parentName:"p"},"cookie"),"\u3002")),(0,a.kt)("p",null,"\u8981\u5b8c\u6210\u4e00\u6b21",(0,a.kt)("inlineCode",{parentName:"p"},"CSRF"),"\u653b\u51fb\uff0c\u53d7\u5bb3\u8005\u5fc5\u987b\u6ee1\u8db3",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u5fc5\u8981\u7684\u6761\u4ef6"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u767b\u5f55\u53d7\u4fe1\u4efb\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\uff0c\u5e76\u5728\u672c\u5730\u751f\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"Cookie"),"\u3002\uff08\u5982\u679c\u7528\u6237\u6ca1\u6709\u767b\u5f55\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\uff0c\u90a3\u4e48\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"\u5728\u8bf1\u5bfc\u7684\u65f6\u5019\uff0c\u8bf7\u6c42\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"api"),"\u63a5\u53e3\u65f6\uff0c\u4f1a\u63d0\u793a\u4f60\u767b\u5f55\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e0d\u767b\u51fa",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u7684\u60c5\u51b5\u4e0b\uff0c\u8bbf\u95ee\u5371\u9669\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"B"),"\uff08\u5176\u5b9e\u662f\u5229\u7528\u4e86\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u7684\u6f0f\u6d1e\uff09\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"cookie"),"\u4fdd\u8bc1\u4e86\u7528\u6237\u53ef\u4ee5\u5904\u4e8e\u767b\u5f55\u72b6\u6001\uff0c\u4f46\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"p"},"B"),"\u5176\u5b9e\u62ff\u4e0d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"cookie"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6848\u4f8b"),"\uff08\u9493\u9c7c\u7f51\u7ad9\u53d6\u94b1\uff09"),(0,a.kt)("h3",{id:"23-csrf-\u5982\u4f55\u9632\u5fa1"},"2.3 CSRF \u5982\u4f55\u9632\u5fa1"),(0,a.kt)("h4",{id:"\u65b9\u6cd5\u4e00token-\u9a8c\u8bc1\u7528\u7684\u6700\u591a"},(0,a.kt)("strong",{parentName:"h4"},"\u65b9\u6cd5\u4e00\u3001Token \u9a8c\u8bc1\uff1a"),"\uff08\u7528\u7684\u6700\u591a\uff09"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"token"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u8868\u5355\u4e2d\u5e26\u7740\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"token"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"token")," \u4e0d\u5408\u6cd5\uff0c\u90a3\u4e48\u670d\u52a1\u5668\u62d2\u7edd\u8fd9\u4e2a\u8bf7\u6c42\u3002")),(0,a.kt)("h4",{id:"\u65b9\u6cd5\u4e8c\u9690\u85cf\u4ee4\u724c"},(0,a.kt)("strong",{parentName:"h4"},"\u65b9\u6cd5\u4e8c\uff1a\u9690\u85cf\u4ee4\u724c\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u628a ",(0,a.kt)("inlineCode",{parentName:"li"},"token")," \u9690\u85cf\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"http")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"head"),"\u5934\u4e2d\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd5\u4e8c\u548c\u65b9\u6cd5\u4e00\u6709\u70b9\u50cf\uff0c\u672c\u8d28\u4e0a\u6ca1\u6709\u592a\u5927\u533a\u522b\uff0c\u53ea\u662f\u4f7f\u7528\u65b9\u5f0f\u4e0a\u6709\u533a\u522b\u3002")),(0,a.kt)("h4",{id:"\u65b9\u6cd5\u4e09referer-\u9a8c\u8bc1"},(0,a.kt)("strong",{parentName:"h4"},"\u65b9\u6cd5\u4e09\u3001Referer \u9a8c\u8bc1\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Referer")," \u6307\u7684\u662f\u9875\u9762\u8bf7\u6c42\u6765\u6e90\u3002\u610f\u601d\u662f\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u63a5\u53d7\u672c\u7ad9\u7684\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u624d\u505a\u54cd\u5e94"),"\uff1b\u5982\u679c\u4e0d\u662f\uff0c\u5c31\u62e6\u622a\u3002\uff08\u53ef\u4ee5\u4eff\u9020\uff09")),(0,a.kt)("h4",{id:"\u65b9\u6cd5\u56db\u6dfb\u52a0\u9a8c\u8bc1\u7801\u4f53\u9a8c\u4e0d\u597d"},(0,a.kt)("strong",{parentName:"h4"},"\u65b9\u6cd5\u56db\u3001\u6dfb\u52a0\u9a8c\u8bc1\u7801\uff08\u4f53\u9a8c\u4e0d\u597d\uff09")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7aef\u751f\u6210\u56fe\u7247\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef")),(0,a.kt)("h2",{id:"3-xss"},"3 XSS"),(0,a.kt)("h3",{id:"31-xss-\u7684\u57fa\u672c\u6982\u5ff5"},"3.1 XSS \u7684\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"XSS\uff08Cross Site Scripting\uff09"),"\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u8de8\u57df\u811a\u672c\u653b\u51fb"),"\u3002")),(0,a.kt)("h3",{id:"32-xss-\u7684\u653b\u51fb\u539f\u7406"},"3.2 XSS \u7684\u653b\u51fb\u539f\u7406"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"XSS"),"\u653b\u51fb\u7684\u6838\u5fc3\u539f\u7406\u662f\uff1a\u4e0d\u9700\u8981\u4f60\u505a\u4efb\u4f55\u7684\u767b\u5f55\u8ba4\u8bc1\uff0c\u5b83\u4f1a\u901a\u8fc7\u5408\u6cd5\u7684\u64cd\u4f5c\uff08\u6bd4\u5982\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\u4e2d\u8f93\u5165\u3001\u5728\u8bc4\u8bba\u6846\u4e2d\u8f93\u5165\uff09\uff0c\u5411\u4f60\u7684\u9875\u9762\u6ce8\u5165\u811a\u672c\uff08\u53ef\u80fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"hmtl"),"\u4ee3\u7801\u5757\u7b49\uff09\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6700\u540e\u5bfc\u81f4\u7684\u7ed3\u679c\u53ef\u80fd\u662f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76d7\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"Cookie")),(0,a.kt)("li",{parentName:"ul"},"\u7834\u574f\u9875\u9762\u7684\u6b63\u5e38\u7ed3\u6784\uff0c\u63d2\u5165\u5e7f\u544a\u7b49\u6076\u610f\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"D-doss"),"\u653b\u51fb\uff08\u6d88\u8017\u670d\u52a1\u5668\u5e26\u5bbd\uff09")),(0,a.kt)("h3",{id:"33-xss-\u7684\u653b\u51fb\u65b9\u5f0f\u548c\u9632\u8303\u63aa\u65bd"},"3.3 XSS \u7684\u653b\u51fb\u65b9\u5f0f\u548c\u9632\u8303\u63aa\u65bd"),(0,a.kt)("h4",{id:"1-\u53cd\u5c04\u578b\u57fa\u4e8e\u540e\u7aef"},"1. \u53cd\u5c04\u578b\uff08\u57fa\u4e8e\u540e\u7aef\uff09"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53d1\u51fa\u8bf7\u6c42\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"XSS"),"\u4ee3\u7801\u51fa\u73b0\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\u4e2d\uff0c\u4f5c\u4e3a\u8f93\u5165\u63d0\u4ea4\u5230\u670d\u52a1\u5668\u7aef\uff0c\u670d\u52a1\u5668\u7aef\u89e3\u6790\u540e\u54cd\u5e94\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"XSS"),"\u4ee3\u7801\u968f\u54cd\u5e94\u5185\u5bb9\u4e00\u8d77\u4f20\u56de\u7ed9\u6d4f\u89c8\u5668\uff0c\u6700\u540e\u6d4f\u89c8\u5668\u89e3\u6790\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"XSS"),"\u4ee3\u7801\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u50cf\u4e00\u6b21\u53cd\u5c04\uff0c\u6240\u4ee5\u53eb\u53cd\u5c04\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"XSS"))),(0,a.kt)("p",null,"\u200b ",(0,a.kt)("strong",{parentName:"p"},"\u6848\u4f8b \u7528\u6237 type \u53c2\u6570\u4f20\u9012\u4ec0\u4e48\u8fd4\u56de\u4ec0\u4e48")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"?type=<script>alart(1)<\/script>"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"chrome \u53d1\u73b0\u8def\u5f84\u5b58\u5728\u5f02\u5e38 \u4f1a\u6709 xss \u5c4f\u853d\u529f\u80fd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf1\u5bfc\u7528\u6237\u70b9\u51fb\uff08\u4e00\u6b21\u6027\uff09\u62ff\u5230\u7528\u6237 cookier"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u5f0f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u67e5\u8be2\u53c2\u6570 \u52a0\u4e0a",(0,a.kt)("inlineCode",{parentName:"li"},"encodeURLComponent(req.query.type)"),"\u8f6c\u7801")),(0,a.kt)("h4",{id:"2dom-based\u4e0d\u57fa\u4e8e\u540e\u7aef"},"2\u3001DOM-Based(\u4e0d\u57fa\u4e8e\u540e\u7aef)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u5c5e\u6027 \u63d2\u5165\u5185\u5bb9 document.write...")),(0,a.kt)("p",null,"\u200b ",(0,a.kt)("strong",{parentName:"p"},"\u6848\u4f8b \u8f93\u5165\u56fe\u7247\u5730\u5740 \u7136\u540e\u51fa\u73b0\u56fe\u7247")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'$("#box").html(`<img src = \'${$(\'#url\').val()}\'>`)\n\n<img src ="xxx" onerror="alert(1)" id="" >\n\n\u7528\u6237\u8f93\u5165 xxx" onerror="alert(1)" id=" \u9875\u9762\u5c31\u4f1a\u4e00\u76f4\u5f39\u6846\n\n\u89e3\u51b3\u65b9\u6cd5\n$("#box").html(`<img src = \'${encodeURL( $(\'#url\').val())}\'>`)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u5bf9\u5185\u5bb9\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"encodeURL\uff08\uff09"))),(0,a.kt)("h4",{id:"3\u5b58\u50a8\u578b\u6076\u610f\u811a\u672c\u5b58\u50a8\u5230\u670d\u52a1\u5668"},"3\u3001\u5b58\u50a8\u578b\uff08\u6076\u610f\u811a\u672c\u5b58\u50a8\u5230\u670d\u52a1\u5668\uff09"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b58\u50a8\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"XSS"),"\u548c\u53cd\u5c04\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"XSS"),"\u7684\u5dee\u522b\u5728\u4e8e\uff0c\u63d0\u4ea4\u7684\u4ee3\u7801\u4f1a\u5b58\u50a8\u5728\u670d\u52a1\u5668\u7aef\uff08\u6570\u636e\u5e93\u3001\u5185\u5b58\u3001\u6587\u4ef6\u7cfb\u7edf\u7b49\uff09\uff0c\u4e0b\u6b21\u8bf7\u6c42\u65f6\u76ee\u6807\u9875\u9762\u65f6\u4e0d\u7528\u518d\u63d0\u4ea4 XSS \u4ee3\u7801\u3002")),(0,a.kt)("p",null,"\u200b ",(0,a.kt)("strong",{parentName:"p"},"\u6848\u4f8b \uff1a \u8bc4\u8bba \u529f\u80fd ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u7528\u6237\u8bc4\u8bba\u7684\u7684\u65f6\u5019\u6dfb\u52a0\u6076\u610f\u811a\u672c   \u5b58\u50a8\u5230\u670d\u52a1\u5668\n\u7136\u540e\u5176\u4ed6\u4eba\u83b7\u53d6\u8bc4\u8bba\u5217\u8868 \u5c31\u4f1a\u88ab\u811a\u672c\u653b\u51fb  \uff08\u8303\u56f4\u5e7f\uff09\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u4f20\u9012\u7ed9\u670d\u52a1\u5668\u65f6\u5019\uff0c\u9700\u8981\u6821\u9a8c\u5148\u8fc7\u6ee4\u4e00\u4e0b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u670d\u52a1\u5668\u518d\u505a\u4e00\u6b21\u8fc7\u6ee4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76f4\u63a5\u5728\u8f93\u51fa\u7684\u65f6\u5019\u8fc7\u6ee4"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function encodeHtml(str) {\n  return str\n    .replace(/&/g, "&amp;")\n    .replace(/"/g, "&quot;")\n    .replace(/\'/g, "&apos;")\n    .replace(/&/g, "&amp;")\n    .replace(/</g, "&lt;")\n    .replace(/>/g, "&gt;")\n}\n')))),(0,a.kt)("h3",{id:"34-xss-\u7684\u9632\u8303\u63aa\u65bdencode--\u8fc7\u6ee4"},"3.4 XSS \u7684\u9632\u8303\u63aa\u65bd\uff08encode + \u8fc7\u6ee4\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"XSS \u7684\u9632\u8303\u63aa\u65bd\u4e3b\u8981\u6709\u4e09\u4e2a\uff1a")),(0,a.kt)("h4",{id:"1-\u7f16\u7801"},(0,a.kt)("strong",{parentName:"h4"},"1. \u7f16\u7801"),"\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u7528\u6237\u8f93\u5165\u7684\u6570\u636e\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"HTML Entity"),"\u7f16\u7801\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Encode"),"\u7684\u4f5c\u7528\u662f\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"$var"),"\u7b49\u4e00\u4e9b\u5b57\u7b26\u8fdb\u884c\u8f6c\u5316\uff0c\u4f7f\u5f97\u6d4f\u89c8\u5668\u5728\u6700\u7ec8\u8f93\u51fa\u7ed3\u679c\u4e0a\u662f\u4e00\u6837\u7684\u3002")),(0,a.kt)("h4",{id:"2\u8fc7\u6ee4"},(0,a.kt)("strong",{parentName:"h4"},"2\u3001\u8fc7\u6ee4\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664\u7528\u6237\u8f93\u5165\u7684\u548c\u4e8b\u4ef6\u76f8\u5173\u7684\u5c5e\u6027\u3002\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"onerror"),"\u53ef\u4ee5\u81ea\u52a8\u89e6\u53d1\u653b\u51fb\uff0c\u8fd8\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"onclick"),"\u7b49\u3002\uff08\u603b\u800c\u8a00\u662f\uff0c\u8fc7\u6ee4\u6389\u4e00\u4e9b\u4e0d\u5b89\u5168\u7684\u5185\u5bb9\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664\u7528\u6237\u8f93\u5165\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"Style"),"\u8282\u70b9\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Script"),"\u8282\u70b9\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Iframe"),"\u8282\u70b9\u3002\uff08\u5c24\u5176\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"Script"),"\u8282\u70b9\uff0c\u5b83\u53ef\u662f\u652f\u6301\u8de8\u57df\u7684\u5440\uff0c\u4e00\u5b9a\u8981\u79fb\u9664\uff09\u3002")),(0,a.kt)("h4",{id:"3\u6821\u6b63"},(0,a.kt)("strong",{parentName:"h4"},"3\u3001\u6821\u6b63")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u76f4\u63a5\u5bf9",(0,a.kt)("inlineCode",{parentName:"li"},"HTML Entity"),"\u8fdb\u884c\u89e3\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"DOM Parse"),"\u8f6c\u6362\uff0c\u6821\u6b63\u4e0d\u914d\u5bf9\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"DOM"),"\u6807\u7b7e\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\u6211\u4eec\u5e94\u8be5\u53bb\u4e86\u89e3\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"DOM Parse"),"\u8fd9\u4e2a\u6982\u5ff5\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u628a\u6587\u672c\u89e3\u6790\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"DOM"),"\u7ed3\u6784\u3002")),(0,a.kt)("p",null,"\u6bd4\u8f83\u5e38\u7528\u7684\u505a\u6cd5\u662f\uff0c\u901a\u8fc7\u7b2c\u4e00\u6b65\u7684\u7f16\u7801\u8f6c\u6210\u6587\u672c\uff0c\u7136\u540e\u7b2c\u4e09\u6b65\u8f6c\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"DOM"),"\u5bf9\u8c61\uff0c\u7136\u540e\u7ecf\u8fc7\u7b2c\u4e8c\u6b65\u7684\u8fc7\u6ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd8\u6709\u4e00\u79cd\u7b80\u6d01\u7684\u7b54\u6848\uff1a")),(0,a.kt)("p",null,"\u9996\u5148\u662f",(0,a.kt)("strong",{parentName:"p"},"encode\uff0c\u5982\u679c\u662f\u5bcc\u6587\u672c"),"\uff0c\u5c31\u767d\u540d\u5355\u3002"),(0,a.kt)("h2",{id:"4-csrf-\u548c-xss-\u7684\u533a\u522b"},"4 CSRF \u548c XSS \u7684\u533a\u522b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u533a\u522b\u4e00\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CSRF"),"\uff1a\u9700\u8981\u7528\u6237\u5148\u767b\u5f55\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\uff0c\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"cookie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XSS"),"\uff1a\u4e0d\u9700\u8981\u767b\u5f55\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u533a\u522b\u4e8c\uff1a\uff08\u539f\u7406\u7684\u533a\u522b\uff09")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CSRF"),"\uff1a\u662f\u5229\u7528\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u672c\u8eab\u7684\u6f0f\u6d1e\uff0c\u53bb\u8bf7\u6c42\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"api"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XSS"),"\uff1a\u662f\u5411\u7f51\u7ad9 ",(0,a.kt)("inlineCode",{parentName:"li"},"A")," \u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"JS"),"\u4ee3\u7801\uff0c\u7136\u540e\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"JS")," \u91cc\u7684\u4ee3\u7801\uff0c\u7be1\u6539\u7f51\u7ad9",(0,a.kt)("inlineCode",{parentName:"li"},"A"),"\u7684\u5185\u5bb9\u3002")))}u.isMDXComponent=!0}}]);