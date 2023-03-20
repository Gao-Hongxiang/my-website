"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,g=s["".concat(o,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(g,p(p({ref:t},m),{},{components:n})):a.createElement(g,p({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"5. HTTPS\uff08\u4fdd\u8bc1\u5bc6\u2f42 \u9632\u2f4c\u7be1\u6539\uff09",position:1,last_update:{date:"12/26/2022",author:"\u9ad8\u7ea2\u7fd4"}},p=void 0,i={unversionedId:"\u8ba1\u7b97\u673a\u7f51\u7edc/https",id:"\u8ba1\u7b97\u673a\u7f51\u7edc/https",title:"5. HTTPS\uff08\u4fdd\u8bc1\u5bc6\u2f42 \u9632\u2f4c\u7be1\u6539\uff09",description:"HTTP \u91c7\u2f64\u660e\u2f42\u4f20\u8f93\uff0c\u4e2d\u95f4\u2f08\u53ef\u4ee5\u83b7\u53d6\u5230\u660e\u2f42\u6570\u636e \uff08\u4ece\u2f7d\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u7be1\u6539\uff09\u3002\u8fd9\u65f6\u5019 HTTPS \u5c31\u767b\u573a\u4e86\uff01 HTTPS \u662f\u4ec0\u4e48\u5462\uff1f HTTPS = HTTP + SSL/TLS \uff0c SSL \u5b89\u5168\u5957\u63a5\u5c42\uff08Secure Sockets Layer\uff09 \u53d1\u5c55\u5230 v3 \u65f6\u6539\u540d\u4e3a TLS \u4f20\u8f93\u5c42\u5b89\u5168(Transport Layer Security)\uff0c\u4e3b\u8981\u7684\u2f6c\u7684\u662f\u63d0\u4f9b\u6570\u636e\u7684\u5b8c\u6574\u6027\u548c\u4fdd\u5bc6\u6027",source:"@site/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/05-https.md",sourceDirName:"\u8ba1\u7b97\u673a\u7f51\u7edc",slug:"/\u8ba1\u7b97\u673a\u7f51\u7edc/https",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/https",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. HTTPS\uff08\u4fdd\u8bc1\u5bc6\u2f42 \u9632\u2f4c\u7be1\u6539\uff09",position:1,last_update:{date:"12/26/2022",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"4. \u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236\u4ecb\u7ecd\u4e0e\u7f13\u5b58\u7b56\u7565\u5256\u6790",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236\u4ecb\u7ecd\u4e0e\u7f13\u5b58\u7b56\u7565\u5256\u6790"},next:{title:"6. \u8bf4\u8bf4\u4f60\u5bf9\u201c\u4e09\u6b21\u63e1\u624b\u201d\u3001\u201c\u56db\u6b21\u6325\u624b\u201d\u7684\u7406\u89e3",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b copy"}},o={},u=[{value:"<strong>\u2f00\u3001\u6570\u636e\u5b8c\u6574\u6027</strong>",id:"\u6570\u636e\u5b8c\u6574\u6027",level:2},{value:"<strong>1. </strong> <strong>\u6458\u8981\u7b97\u6cd5</strong>",id:"1--\u6458\u8981\u7b97\u6cd5",level:3},{value:"<strong>\u2f06\u3001\u6570\u636e\u52a0\u5bc6</strong>",id:"\u6570\u636e\u52a0\u5bc6",level:2},{value:"1. \u5bf9\u79f0\u52a0\u5bc6",id:"1-\u5bf9\u79f0\u52a0\u5bc6",level:3},{value:"<strong>2. </strong>\u2fae\u5bf9\u79f0\u52a0\u5bc6",id:"2-\u5bf9\u79f0\u52a0\u5bc6",level:3},{value:"3. \u6df7\u5408\u52a0\u5bc6",id:"3-\u6df7\u5408\u52a0\u5bc6",level:3},{value:"4. \u6570\u5b57\u8bc1\u4e66\u548c CA",id:"4-\u6570\u5b57\u8bc1\u4e66\u548c-ca",level:3},{value:"\u4e09\u3001 HTTPS \u8fc7\u7a0b",id:"\u4e09-https-\u8fc7\u7a0b",level:2},{value:"1. \u7b2c\u2f00\u9636\u6bb5",id:"1-\u7b2c\u9636\u6bb5",level:3},{value:"2. \u7b2c\u2f06\u9636\u6bb5",id:"2-\u7b2c\u9636\u6bb5",level:3},{value:"SSL \u534f\u8bae\u7ec4\u6210",id:"ssl-\u534f\u8bae\u7ec4\u6210",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"HTTP \u91c7\u2f64\u660e\u2f42\u4f20\u8f93\uff0c\u4e2d\u95f4\u2f08\u53ef\u4ee5\u83b7\u53d6\u5230\u660e\u2f42\u6570\u636e \uff08\u4ece\u2f7d\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u7be1\u6539\uff09\u3002\u8fd9\u65f6\u5019 HTTPS \u5c31\u767b\u573a\u4e86\uff01 HTTPS \u662f\u4ec0\u4e48\u5462\uff1f ",(0,r.kt)("strong",{parentName:"p"},"HTTPS = HTTP + SSL/TLS")," \uff0c SSL \u5b89\u5168\u5957\u63a5\u5c42\uff08Secure Sockets Layer\uff09 \u53d1\u5c55\u5230 v3 \u65f6\u6539\u540d\u4e3a TLS \u4f20\u8f93\u5c42\u5b89\u5168(Transport Layer Security)\uff0c\u4e3b\u8981\u7684\u2f6c\u7684\u662f\u63d0\u4f9b\u6570\u636e\u7684\u5b8c\u6574\u6027\u548c\u4fdd\u5bc6\u6027"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226120753.png",alt:null})),(0,r.kt)("h2",{id:"\u6570\u636e\u5b8c\u6574\u6027"},(0,r.kt)("strong",{parentName:"h2"},"\u2f00\u3001\u6570\u636e\u5b8c\u6574\u6027")),(0,r.kt)("h3",{id:"1--\u6458\u8981\u7b97\u6cd5"},(0,r.kt)("strong",{parentName:"h3"},"1. ")," ",(0,r.kt)("strong",{parentName:"h3"},"\u6458\u8981\u7b97\u6cd5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u628a\u4efb\u610f\u2ed3\u5ea6\u7684\u6570\u636e",(0,r.kt)("strong",{parentName:"p"},"\u538b\u7f29\u6210\u56fa\u5b9a\u7684\u2ed3\u5ea6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u2f0a\u4e0d\u540c\u8f93\u51fa\u7684\u7ed3\u679c\u53d1\u2f63\u5267\u70c8\u7684\u53d8\u5316\u201c",(0,r.kt)("strong",{parentName:"p"},"\u96ea\u5d29\u6548\u5e94"),"\u201d\uff0c\u76f8\u540c\u7684\u5185\u5bb9\u6458\u8981\u540e\u7ed3\u679c\u76f8\u540c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u4ece\u7ed3\u679c",(0,r.kt)("strong",{parentName:"p"},"\u53cd\u63a8\u8f93\u2f0a")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u5728\u5185\u5bb9\u540e\u2faf\u589e\u52a0 hash \u503c\u8fdb\u2f8f\u4f20\u8f93\uff0c\u670d\u52a1\u7aef\u6536\u5230\u540e\u901a\u8fc7 hash \u503c\u6765\u6821\u9a8c\u5185\u5bb9\u662f\u5426\u5b8c\u6574\u3002\u6570\u636e\u662f\u660e\u2f42\u7684\u663e\u7136",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5b89\u5168"))))),(0,r.kt)("h2",{id:"\u6570\u636e\u52a0\u5bc6"},(0,r.kt)("strong",{parentName:"h2"},"\u2f06\u3001\u6570\u636e\u52a0\u5bc6")),(0,r.kt)("h3",{id:"1-\u5bf9\u79f0\u52a0\u5bc6"},"1. \u5bf9\u79f0\u52a0\u5bc6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u52a0\u5bc6\u548c\u89e3\u5bc6\u65f6\u4f7f\u2f64\u7684\u5bc6\u94a5\u90fd\u662f\u540c\u2f00\u4e2a\uff0c \u901a\u4fe1\u8fc7\u7a0b\u4f7f\u2f64\u79d8\u94a5\u52a0\u5bc6\u540e\u7684\u5bc6\u2f42\u4f20\u8f93\u3002\u53ea\u6709\u2f83\u2f30\u548c\u2f79\u7ad9\u624d\u80fd\u89e3\u5bc6\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226122706.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2f6c\u524d AES \uff08Advanced Encryption Standard\uff09 ChaCha20 \u4e3a\u6700\u5e38\u2ec5\u7684\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5 \u3002")),(0,r.kt)("h3",{id:"2-\u5bf9\u79f0\u52a0\u5bc6"},(0,r.kt)("strong",{parentName:"h3"},"2. "),"\u2fae\u5bf9\u79f0\u52a0\u5bc6"),(0,r.kt)("p",null,"\u2fae\u5bf9\u79f0\u52a0\u5bc6\u53ef\u4ee5\u89e3\u51b3\u201c\u5bc6\u94a5\u4ea4\u6362\u201d\u7684\u95ee\u9898\u3002\u2fae\u5bf9\u79f0\u52a0\u5bc6\u6709\u4e24\u4e2a\u79d8\u94a5\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u516c\u94a5"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u79c1\u94a5"),"\uff0c\u6240\u4ee5\u79f0\u4e4b\u4e3a\u2fae\u5bf9\u79f0\u3002",(0,r.kt)("strong",{parentName:"p"},"\u516c\u94a5\u52a0\u5bc6\u79c1\u94a5")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u5bc6\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5e76\u4e0d\u80fd\u5b8c\u5168\u91c7\u2f64\u2fae\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\uff0c\u7531\u4e8e\u7b97\u6cd5\u672c\u8eab\u8017\u65f6\u8fdc\u2fbc\u4e8e\u5bf9\u79f0\u52a0\u5bc6\u3002")),(0,r.kt)("p",null,"\u4f7f\u2f64 RSA \u3001 ECDHE \u7b97\u6cd5\u89e3\u51b3\u79d8\u94a5\u4ea4\u6362\u7684\u95ee\u9898"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226122909.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6700\u5e38\u542c\u5230\u7684\u2fae\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u662f RSA \u3001 ECC (\u2f26\u7b97\u6cd5 ECDHE \u2f64\u4e8e\u5bc6\u94a5\u4ea4\u6362\uff0c ECDSA \u2f64\u4e8e\u6570\u5b57\u7b7e\u540d)(\u6027\u80fd\u548c\u5b89\u5168\u7565\u80dc\u2f00\u7b79) HTTPS \u4e2d\u2f6c\u524d\u2f34\u6cdb\u4f7f\u2f64 ECC \u3002")),(0,r.kt)("h3",{id:"3-\u6df7\u5408\u52a0\u5bc6"},"3. \u6df7\u5408\u52a0\u5bc6"),(0,r.kt)("p",null,"\u901a\u4fe1\u521a\u5f00\u59cb\u7684\u65f6\u5019\u4f7f\u2f64\u2fae\u5bf9\u79f0\u7b97\u6cd5\uff0c\u4ea4\u6362\u79d8\u94a5\u3002\u5728\u5ba2\u6237\u7aef\u2f63\u6210",(0,r.kt)("strong",{parentName:"p"},"\u4f1a\u8bdd\u79d8\u94a5"),"\u540e\u4f20\u9001\u7ed9\u670d\u52a1\u7aef\uff0c\u540e\u7eed\u901a\u4fe1\u91c7\u2f64\u5bf9\u79f0\u52a0\u5bc6\u7684\u2f45\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226122909.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u2fa5\u8fd8\u5e76\u4e0d\u5b89\u5168\uff0c\u8fd8\u6d89\u53ca\u5230\u4e2d\u95f4\u2f08\u653b\u51fb\u3002\uff08 \u6307\u653b\u51fb\u8005\u4e0e\u901a\u8baf\u7684\u4e24\u7aef\u5206\u522b\u521b\u5efa\u72ec\u2f74\u7684\u8054\u7cfb,\u5e76\u4ea4\u6362\u5176\u6240\u6536\u5230\u7684\u6570\u636e \uff09")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226123339.png",alt:null})),(0,r.kt)("h3",{id:"4-\u6570\u5b57\u8bc1\u4e66\u548c-ca"},"4. \u6570\u5b57\u8bc1\u4e66\u548c CA"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a\u8c01\u90fd\u53ef\u4ee5\u53d1\u5e03\u516c\u94a5\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u9a8c\u8bc1\u5bf9\u2f45\u8eab\u4efd\u3002\u9632\u2f4c\u4e2d\u95f4\u2f08\u653b\u51fb")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226123540.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5ba2\u6237\u7aef\u4f1a\u5224\u65ad\u6709\u6548\u671f\u3001\u9881\u53d1\u8005\u3001\u8bc1\u4e66\u662f\u5426\u88ab\u4fee\u6539\u53ca\u8bc1\u4e66\u662f\u5426\u88ab\u540a\u9500\u3002 \u6bcf\u4efd\u7b7e\u53d1\u8bc1\u4e66\u90fd\u53ef\u4ee5\u6839\u636e\u9a8c\u8bc1\u94fe\u67e5\u627e\u5230\u5bf9\u5e94\u7684\u6839\u8bc1\u4e66\uff0c\u64cd\u4f5c\u7cfb\u7edf\u3001\u6d4f\u89c8\u5668\u4f1a\u5728\u672c\u5730\u5b58\u50a8\u6743\u5a01\u673a\u6784\u7684\u6839\u8bc1\u4e66\uff0c\u5229\u2f64\u672c\u5730\u6839\u8bc1\u4e66\u53ef\u4ee5\u5bf9\u5bf9\u5e94\u673a\u6784\u7b7e\u53d1\u8bc1\u4e66\u5b8c\u6210\u6765\u6e90\u9a8c\u8bc1\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u52a0\u5bc6\uff1a"),"\u5bf9\u4f20\u8f93\u7684\u6570\u636e\u8fdb\u2f8f\u52a0\u5bc6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u2f00\u81f4\u6027"),"\uff1a\u4fdd\u8bc1\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u6570\u636e\u4e0d\u4f1a\u88ab\u7be1\u6539\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8eab\u4efd\u8ba4\u8bc1"),"\uff1a\u786e\u5b9a\u5bf9\u2f45\u7684\u771f\u5b9e\u8eab\u4efd\u3002"))),(0,r.kt)("h2",{id:"\u4e09-https-\u8fc7\u7a0b"},"\u4e09\u3001 HTTPS \u8fc7\u7a0b"),(0,r.kt)("h3",{id:"1-\u7b2c\u9636\u6bb5"},"1. \u7b2c\u2f00\u9636\u6bb5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u4f1a\u53d1\u9001",(0,r.kt)("inlineCode",{parentName:"p"}," handshake Protocol\uff1aclient hello")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cipher Suites \u5bc6\u94a5\u4ea4\u6362\u7b97\u6cd5 + \u7b7e\u540d\u7b97\u6cd5 + \u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5 + \u6458\u8981\u7b97\u6cd5 \u5957\u4ef6\u5217\u8868")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Random \u5ba2\u6237\u7aef\u968f\u673a\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Version: TLS 1.2")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef\u4f1a\u53d1\u9001 ",(0,r.kt)("inlineCode",{parentName:"p"},"handleshake Protocol\uff1aServer Hello")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Version: TLS 1.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Random \u670d\u52a1\u7aef\u968f\u673a\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cipher Suites\uff1a\u9009\u62e9\u7684\u5957\u4ef6"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53cc\u2f45\u9009\u62e9 TLS \u7248\u672c\uff0c\u786e\u5b9a\u52a0\u5bc6\u7b97\u6cd5\uff0c\u2f63\u6210\u4e24\u4e2a\u968f\u673a\u6570")),(0,r.kt)("h3",{id:"2-\u7b2c\u9636\u6bb5"},"2. \u7b2c\u2f06\u9636\u6bb5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef\u53d1\u9001\u8bc1\u4e66 certificate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef\u53d1\u9001 ECDHE \u53c2\u6570\uff0c\u670d\u52a1\u7aef Hello \u5b8c\u6210"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Server Key Exchange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Server Hello Done")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u53d1\u9001 ECDHE \u53c2\u6570\uff0c\u4ee5\u540e\u4f7f\u2f64\u79d8\u94a5\u8fdb\u2f8f\u901a\u4fe1\u5427\uff0c\u52a0\u5bc6\u63e1\u2f3f\u6d88\u606f\u53d1\u9001\u7ed9\u5bf9\u2f45"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Client Key Exchange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change Cipher Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Encrypted HandleShake Message")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u670d\u52a1\u7aef\u53d1\u9001\u4f1a\u8bdd\u51ed\u8bc1\uff0c\u4ee5\u540e\u4f7f\u2f64\u79d8\u94a5\u8fdb\u2f8f\u901a\u4fe1\u5427\uff0c\u52a0\u5bc6\u63e1\u2f3f\u6d88\u606f\u53d1\u9001\u7ed9\u5bf9\u2f45"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"new Session Ticket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change Cipher Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Encrypted HandleShake Message"))))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226124922.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226125026.png",alt:null})),(0,r.kt)("h2",{id:"ssl-\u534f\u8bae\u7ec4\u6210"},"SSL \u534f\u8bae\u7ec4\u6210"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SSL \u63e1\u2f3f\u534f\u8bae\u3001 SSL \u79d8\u94a5\u53d8\u5316\u534f\u8bae\u3001 SSL \u8b66\u544a\u534f\u8bae\u3001 SSL \u8bb0\u5f55\u534f\u8bae\u7b49")))}k.isMDXComponent=!0}}]);