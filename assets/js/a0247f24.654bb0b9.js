"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4742],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={title:"1.js\u9ad8\u7ea7\u624b\u6495\u9898",last_update:{date:"02/15/2023",author:"gaohongxiang"}},l=void 0,i={unversionedId:"\u9ad8\u9891\u624b\u6495\u9898/js",id:"\u9ad8\u9891\u624b\u6495\u9898/js",title:"1.js\u9ad8\u7ea7\u624b\u6495\u9898",description:"1\u5b9e\u73b0\u9632\u6296\u51fd\u6570\uff08debounce\uff09",source:"@site/leetcode/00-\u9ad8\u9891\u624b\u6495\u9898/01-js.md",sourceDirName:"00-\u9ad8\u9891\u624b\u6495\u9898",slug:"/\u9ad8\u9891\u624b\u6495\u9898/js",permalink:"/website/leetcode/\u9ad8\u9891\u624b\u6495\u9898/js",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1.js\u9ad8\u7ea7\u624b\u6495\u9898",last_update:{date:"02/15/2023",author:"gaohongxiang"}},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u3001\u9ad8\u9891\u624b\u6495\u9898",permalink:"/website/leetcode/category/\u4e00\u9ad8\u9891\u624b\u6495\u9898"},next:{title:"2.JavaScript \u6570\u7ec4\u7ed3\u6784\u4e0e\u6811\u7ed3\u6784\u7684\u8f6c\u6362",permalink:"/website/leetcode/\u9ad8\u9891\u624b\u6495\u9898/arrayToTree"}},p={},s=[{value:"1<strong>\u5b9e\u73b0\u9632\u6296\u51fd\u6570\uff08debounce\uff09</strong>",id:"1\u5b9e\u73b0\u9632\u6296\u51fd\u6570debounce",level:2},{value:"<strong>2 \u5b9e\u73b0\u8282\u6d41\u51fd\u6570\uff08throttle\uff09</strong>",id:"2-\u5b9e\u73b0\u8282\u6d41\u51fd\u6570throttle",level:2},{value:"<strong>3. \u5b9e\u73b0<code>instanceOf</code></strong>",id:"3-\u5b9e\u73b0instanceof",level:2},{value:"<strong>4 \u5b9e\u73b0 new \u7684\u8fc7\u7a0b</strong>",id:"4-\u5b9e\u73b0-new-\u7684\u8fc7\u7a0b",level:2},{value:"<strong>5 \u5b9e\u73b0 call \u65b9\u6cd5</strong>",id:"5-\u5b9e\u73b0-call-\u65b9\u6cd5",level:2},{value:"<strong>6 \u5b9e\u73b0 apply \u65b9\u6cd5</strong>",id:"6-\u5b9e\u73b0-apply-\u65b9\u6cd5",level:2},{value:"<strong>7 \u5b9e\u73b0 bind \u65b9\u6cd5</strong>",id:"7-\u5b9e\u73b0-bind-\u65b9\u6cd5",level:2},{value:"<strong>8 \u5b9e\u73b0\u6df1\u62f7\u8d1d</strong>",id:"8-\u5b9e\u73b0\u6df1\u62f7\u8d1d",level:2},{value:"\u6d45\u62f7\u8d1d",id:"\u6d45\u62f7\u8d1d",level:3},{value:"\u6df1\u62f7\u8d1d\u7b80\u5355\u7248",id:"\u6df1\u62f7\u8d1d\u7b80\u5355\u7248",level:3},{value:"\u6df1\u62f7\u8d1d<strong>\u8fdb\u9636\u7248</strong>",id:"\u6df1\u62f7\u8d1d\u8fdb\u9636\u7248",level:3},{value:"\u6df1\u62f7\u8d1d\u5b8c\u6574\u7248",id:"\u6df1\u62f7\u8d1d\u5b8c\u6574\u7248",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u5b9e\u73b0\u9632\u6296\u51fd\u6570debounce"},"1",(0,a.kt)("strong",{parentName:"h2"},"\u5b9e\u73b0\u9632\u6296\u51fd\u6570\uff08debounce\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9632\u6296\u52a8\u662f\u5c06\u591a\u6b21\u6267\u884c\u53d8\u4e3a"),(0,a.kt)("inlineCode",{parentName:"p"},"\u6700\u540e\u4e00\u6b21\u6267\u884c"),"\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const debounce = (func, wait = 50) => {\n  let timer = 0\n  return function (...args) {\n    if (timer) clearTimeout(timer)\n    timer = setTimeout(() => {\n      func.apply(this, args)\n    }, wait)\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9002\u7528\u573a\u666f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u672c\u8f93\u5165\u7684\u9a8c\u8bc1\uff0c\u8fde\u7eed\u8f93\u5165\u6587\u5b57\u540e\u53d1\u9001 AJAX \u8bf7\u6c42\u8fdb\u884c\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u4e00\u6b21\u5c31\u597d"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u94ae\u63d0\u4ea4\u573a\u666f\uff1a\u9632\u6b62\u591a\u6b21\u63d0\u4ea4\u6309\u94ae\uff0c\u53ea\u6267\u884c\u6700\u540e\u63d0\u4ea4\u7684\u4e00\u6b21"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u9a8c\u8bc1\u573a\u666f\uff1a\u8868\u5355\u9a8c\u8bc1\u9700\u8981\u670d\u52a1\u7aef\u914d\u5408\uff0c\u53ea\u6267\u884c\u4e00\u6bb5\u8fde\u7eed\u7684\u8f93\u5165\u4e8b\u4ef6\u7684\u6700\u540e\u4e00\u6b21\uff0c\u8fd8\u6709\u641c\u7d22\u8054\u60f3\u8bcd\u529f\u80fd\u7c7b\u4f3c")),(0,a.kt)("h2",{id:"2-\u5b9e\u73b0\u8282\u6d41\u51fd\u6570throttle"},(0,a.kt)("strong",{parentName:"h2"},"2 \u5b9e\u73b0\u8282\u6d41\u51fd\u6570\uff08throttle\uff09")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8282\u6d41\u662f\u5c06\u591a\u6b21\u6267\u884c\u53d8\u6210",(0,a.kt)("inlineCode",{parentName:"strong"},"\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u6267\u884c"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65f6\u95f4\u6233\u65b9\u5f0f\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u65f6\u95f4\u6233\u7684\u8282\u6d41\u51fd\u6570\u4f1a\u5728\u7b2c\u4e00\u6b21\u89e6\u53d1\u4e8b\u4ef6\u65f6\u7acb\u5373\u6267\u884c\uff0c\u4ee5\u540e\u6bcf\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"wait")," \u79d2\u4e4b\u540e\u624d\u6267\u884c\u4e00\u6b21\uff0c\u5e76\u4e14\u6700\u540e\u4e00\u6b21\u89e6\u53d1\u4e8b\u4ef6\u4e0d\u4f1a\u88ab\u6267\u884c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const throttle = (func, wait = 50) => {\n  let lastTime = 0\n  return function (...args) {\n    let now = +new Date()\n    if (now - lastTime > wait) {\n      lastTime = now\n      func.apply(this, args)\n    }\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9a\u65f6\u5668\u65b9\u5f0f\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u5b9a\u65f6\u5668\u7684\u8282\u6d41\u51fd\u6570\u5728\u7b2c\u4e00\u6b21\u89e6\u53d1\u65f6\u4e0d\u4f1a\u6267\u884c\uff0c\u800c\u662f\u5728 delay \u79d2\u4e4b\u540e\u624d\u6267\u884c\uff0c\u5f53\u6700\u540e\u4e00\u6b21\u505c\u6b62\u89e6\u53d1\u540e\uff0c\u8fd8\u4f1a\u518d\u6267\u884c\u4e00\u6b21\u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const throttle => (func, delay){\n  var timer = 0;\n  return function(...args){\n    if(timer) return // \u5f53\u524d\u6709\u4efb\u52a1\u4e86\uff0c\u76f4\u63a5\u8fd4\u56de\n    timer = setTimeout(()=>{\n      func.apply(this, args);\n      timer = 0;\n    },delay);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9002\u7528\u573a\u666f\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62d6\u62fd\u573a\u666f\uff1a\u56fa\u5b9a\u65f6\u95f4\u5185\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u9632\u6b62\u8d85\u9ad8\u9891\u6b21\u89e6\u53d1\u4f4d\u7f6e\u53d8\u52a8\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"DOM")," \u5143\u7d20\u7684\u62d6\u62fd\u529f\u80fd\u5b9e\u73b0\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"mousemove"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7f29\u653e\u573a\u666f\uff1a\u76d1\u63a7\u6d4f\u89c8\u5668",(0,a.kt)("inlineCode",{parentName:"li"},"resize")),(0,a.kt)("li",{parentName:"ul"},"\u6eda\u52a8\u573a\u666f\uff1a\u76d1\u542c\u6eda\u52a8",(0,a.kt)("inlineCode",{parentName:"li"},"scroll"),"\u4e8b\u4ef6\u5224\u65ad\u662f\u5426\u5230\u9875\u9762\u5e95\u90e8\u81ea\u52a8\u52a0\u8f7d\u66f4\u591a"),(0,a.kt)("li",{parentName:"ul"},"\u52a8\u753b\u573a\u666f\uff1a\u907f\u514d\u77ed\u65f6\u95f4\u5185\u591a\u6b21\u89e6\u53d1\u52a8\u753b\u5f15\u8d77\u6027\u80fd\u95ee\u9898")),(0,a.kt)("h2",{id:"3-\u5b9e\u73b0instanceof"},(0,a.kt)("strong",{parentName:"h2"},"3. \u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"strong"},"instanceOf"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u601d\u8def\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6b65\u9aa4 1\uff1a\u5148\u53d6\u5f97\u5f53\u524d\u7c7b\u7684\u539f\u578b\uff0c\u5f53\u524d\u5b9e\u4f8b\u5bf9\u8c61\u7684\u539f\u578b\u94fe"),(0,a.kt)("li",{parentName:"ul"},"\u6b65\u9aa4 2\uff1a\u4e00\u76f4\u5faa\u73af\uff08\u6267\u884c\u539f\u578b\u94fe\u7684\u67e5\u627e\u673a\u5236\uff09",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u5f53\u524d\u5b9e\u4f8b\u5bf9\u8c61\u539f\u578b\u94fe\u7684\u539f\u578b\u94fe\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"proto = proto.__proto__"),"\uff0c\u6cbf\u7740\u539f\u578b\u94fe\u4e00\u76f4\u5411\u4e0a\u67e5\u627e\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c \u5f53\u524d\u5b9e\u4f8b\u7684\u539f\u578b\u94fe",(0,a.kt)("inlineCode",{parentName:"li"},"__proto__"),"\u4e0a\u627e\u5230\u4e86\u5f53\u524d\u7c7b\u7684\u539f\u578b",(0,a.kt)("inlineCode",{parentName:"li"},"prototype"),"\uff0c\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c \u4e00\u76f4\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"Object.prototype.__proto__ == null"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Object"),"\u7684\u57fa\u7c7b(",(0,a.kt)("inlineCode",{parentName:"li"},"null"),")\u4e0a\u9762\u90fd\u6ca1\u627e\u5230\uff0c\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function _instanceof(instance, classOrFunc) {\n  // \u7531\u4e8einstance\u8981\u68c0\u6d4b\u7684\u662f\u67d0\u5bf9\u8c61\uff0c\u9700\u8981\u6709\u4e00\u4e2a\u524d\u7f6e\u5224\u65ad\u6761\u4ef6\n  //\u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u8fd4\u56defalse\n  if (typeof instance !== "object" || instance == null) return false\n  let proto = Object.getPrototypeOf(instance)\n  while (proto) {\n    if (proto == classOrFunc.prototype) return true\n    proto = Object.getPrototypeof(proto)\n  }\n  return false\n}\n\nconsole.log("test", _instanceof(null, Array)) // false\nconsole.log("test", _instanceof([], Array)) // true\nconsole.log("test", _instanceof("", Array)) // false\nconsole.log("test", _instanceof({}, Object)) // true\n')),(0,a.kt)("h2",{id:"4-\u5b9e\u73b0-new-\u7684\u8fc7\u7a0b"},(0,a.kt)("strong",{parentName:"h2"},"4 \u5b9e\u73b0 new \u7684\u8fc7\u7a0b")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"new \u64cd\u4f5c\u7b26\u505a\u4e86\u8fd9\u4e9b\u4e8b\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684\u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"li"},"obj"),"\uff0c\u7ee7\u627f\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\uff1a\u8fd9\u4e2a\u5bf9\u8c61\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"__proto__"),"\u8981\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b",(0,a.kt)("inlineCode",{parentName:"li"},"prototype")),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u6784\u9020\u51fd\u6570\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"call/apply")," \u6539\u53d8 ",(0,a.kt)("inlineCode",{parentName:"li"},"this")," \u7684\u6307\u5411\uff08\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"obj"),"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"this"),"\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\u7c7b\u578b\u5219\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"new"),"\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u8fd4\u56de\uff0c\u5426\u5219\u8fd4\u56de\u4e0a\u8ff0\u5168\u65b0\u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"li"},"obj"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function myNew(constructor, ...args) {\n  let newObj = Object.create(constructor.prototype)\n  let res = constructor.apply(newObj, args)\n  return typeof res === "object" ? res : newObj\n}\n\nfunction Person(name, age) {\n  this.name = name\n  this.age = age\n}\nlet p1 = myNew(Person, "poety", 18)\n')),(0,a.kt)("h2",{id:"5-\u5b9e\u73b0-call-\u65b9\u6cd5"},(0,a.kt)("strong",{parentName:"h2"},"5 \u5b9e\u73b0 call \u65b9\u6cd5")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"call \u505a\u4e86\u4ec0\u4e48:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u51fd\u6570\u8bbe\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u548c\u5220\u9664\u8fd9\u4e2a\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"this"),"\u5230\u51fd\u6570\u5e76\u4f20\u5165\u7ed9\u5b9a\u53c2\u6570\u6267\u884c\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u4f20\u5165\u53c2\u6570\uff0c\u9ed8\u8ba4\u6307\u5411 ",(0,a.kt)("inlineCode",{parentName:"li"},"window"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Function.prototype.call = function (context, ...args) {\n  context = !context\n    ? window\n    : typeof context !== "object"\n    ? new Object(context)\n    : context\n  let fnKey = Symbol()\n  context[fnKey] = this\n  let result = context[fnKey](...args)\n  delete context[fnKey]\n  return result\n}\n')),(0,a.kt)("h2",{id:"6-\u5b9e\u73b0-apply-\u65b9\u6cd5"},(0,a.kt)("strong",{parentName:"h2"},"6 \u5b9e\u73b0 apply \u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Function.prototype.apply = function (context, args = []) {\n  context = !context\n    ? window\n    : typeof context !== "object"\n    ? new Object(context)\n    : context\n  const fnKey = Symbol()\n  context[fnKey] = this\n  const result = context[fnKey](...args)\n  delete context[fnKey]\n  return result\n}\n')),(0,a.kt)("h2",{id:"7-\u5b9e\u73b0-bind-\u65b9\u6cd5"},(0,a.kt)("strong",{parentName:"h2"},"7 \u5b9e\u73b0 bind \u65b9\u6cd5")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"bind")," \u8fd4\u56de\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u5bf9\u4e8e\u51fd\u6570\u6765\u8bf4\u6709\u4e24\u79cd\u65b9\u5f0f\u8c03\u7528\uff0c\u4e00\u79cd\u662f\u76f4\u63a5\u8c03\u7528\uff0c\u4e00\u79cd\u662f\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u7684\u65b9\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u76f4\u63a5\u8c03\u7528\u6765\u8bf4\uff0c\u8fd9\u91cc\u9009\u62e9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," \u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," \u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u8fd9\u6837\u7684\u4ee3\u7801 ",(0,a.kt)("inlineCode",{parentName:"p"},"f.bind(obj, 1)(2)"),"\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5c06\u4e24\u8fb9\u7684\u53c2\u6570\u62fc\u63a5\u8d77\u6765")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6700\u540e\u6765\u8bf4\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u7684\u65b9\u5f0f\uff0c\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u7684\u60c5\u51b5\u6765\u8bf4\uff0c\u4e0d\u4f1a\u88ab\u4efb\u4f55\u65b9\u5f0f\u6539\u53d8 ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u6240\u4ee5\u5bf9\u4e8e\u8fd9\u79cd\u60c5\u51b5\u6211\u4eec\u9700\u8981\u5ffd\u7565\u4f20\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"this"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u7684\u5e95\u5c42\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"\uff0c\u65e0\u6cd5\u6539\u53d8",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u53ea\u80fd\u6539\u53d8\u53c2\u6570"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Function.prototype.bind = function (context, ...args) {\n  let that = this //// fn.bind(obj)  that\u5c31\u662ffn\n  function fBound(...innerArgs) {\n    //this instanceof fBound\u4e3atrue\u8868\u793a\u6784\u9020\u51fd\u6570\u7684\u60c5\u51b5\u3002\u5982new func.bind(obj)\n    // \u5f53\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u65f6\uff0cthis \u6307\u5411\u5b9e\u4f8b\uff0c\u6b64\u65f6 this instanceof fBound \u7ed3\u679c\u4e3a true\uff0c\u53ef\u4ee5\u8ba9\u5b9e\u4f8b\u83b7\u5f97\u6765\u81ea\u7ed1\u5b9a\u51fd\u6570\u7684\u503c\n    // \u5f53\u4f5c\u4e3a\u666e\u901a\u51fd\u6570\u65f6\uff0cthis \u9ed8\u8ba4\u6307\u5411 window\uff0c\u6b64\u65f6\u7ed3\u679c\u4e3a false\uff0c\u5c06\u7ed1\u5b9a\u51fd\u6570\u7684 this \u6307\u5411 context\n    return that.apply(\n      this instanceof fBound ? this : context,\n      args.concat(innerArgs)\n    )\n  }\n  fBound.prototype = Object.create(this.prototype)\n  return fBound\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u6d4b\u8bd5\u7528\u4f8b\nvar obj = {\n  name: "zs",\n}\nfunction normalFun(name) {\n  console.log(this.name)\n}\nvar bindNormalFun = normalFun.bind(obj, "ls")\nbindNormalFun()\n\nfunction Person(name, age) {\n  console.log("Person name\uff1a", name)\n  console.log("Person age\uff1a", age)\n  console.log("Person this\uff1a", this) // \u6784\u9020\u51fd\u6570this\u6307\u5411\u5b9e\u4f8b\u5bf9\u8c61\n}\nPerson.prototype.say = function () {\n  console.log("person say")\n}\nvar bindFun = Person.myBind(obj, "poetry1") // undefined\nvar a = new bindFun(10) // Person name: poetry1\u3001Person age: 10\u3001Person this: fBound {}\na.say() // person say\n')),(0,a.kt)("h2",{id:"8-\u5b9e\u73b0\u6df1\u62f7\u8d1d"},(0,a.kt)("strong",{parentName:"h2"},"8 \u5b9e\u73b0\u6df1\u62f7\u8d1d")),(0,a.kt)("h3",{id:"\u6d45\u62f7\u8d1d"},"\u6d45\u62f7\u8d1d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let obj1 = {\n  name: "zs",\n  other: {\n    age: 15,\n  },\n}\nconst obj2 = { ...obj1 }\n//------------------\nconst arr = [[1, 5, 6]]\nconst arr2 = arr.slice()\n')),(0,a.kt)("h3",{id:"\u6df1\u62f7\u8d1d\u7b80\u5355\u7248"},"\u6df1\u62f7\u8d1d\u7b80\u5355\u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const newObj = JSON.parse(JSON.stringify(oldObj))\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5c40\u9650\u6027\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u89e3\u51b3",(0,a.kt)("inlineCode",{parentName:"p"},"\u5faa\u73af\u5f15\u7528"),"\u7684\u95ee\u9898\uff0c\u62f7\u8d1d\u4f1a\u51fa\u73b0\u7cfb\u7edf\u6808\u6ea2\u51fa\uff0c\u56e0\u4e3a\u51fa\u73b0\u4e86\u65e0\u9650\u9012\u5f52\u7684\u60c5\u51b5\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u62f7\u8d1d\u4e00\u4e9b\u7279\u6b8a\u7684\u5bf9\u8c61\uff0c\u8bf8\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp, Date, Set, Map"),"\u7b49")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u62f7\u8d1d\u51fd\u6570\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f1a\u4e22\u5931 undefiend"))),(0,a.kt)("h3",{id:"\u6df1\u62f7\u8d1d\u8fdb\u9636\u7248"},"\u6df1\u62f7\u8d1d",(0,a.kt)("strong",{parentName:"h3"},"\u8fdb\u9636\u7248")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u62f7\u8d1d\u5faa\u73af\u5f15\u7528\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u62f7\u8d1d\u5bf9\u5e94\u539f\u578b\u95ee\u9898")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// \u9012\u5f52\u62f7\u8d1d (\u7c7b\u578b\u5224\u65ad)\nfunction deepClone(oldObj, hash = new WeakMap()) {\n  // \u5f31\u5f15\u7528\uff0c\u4e0d\u7528map\uff0cweakMap\u66f4\u5408\u9002\u4e00\u70b9\n  // null \u548c undefiend \u662f\u4e0d\u9700\u8981\u62f7\u8d1d\u7684\n  if (oldObj == null) {\n    return oldObj\n  }\n  if (oldObj instanceof RegExp) {\n    return new RegExp(oldObj)\n  }\n  if (oldObj instanceof Date) {\n    return new Date(oldObj)\n  }\n  // \u51fd\u6570\u662f\u4e0d\u9700\u8981\u62f7\u8d1d\n  if (typeof oldObj != "object") return oldObj\n  let newObj = new oldObj.constructor() // [] {}\n  // \u8bf4\u660e\u662f\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\n  if (hash.get(oldObj)) {\n    return hash.get(oldObj)\n  }\n  hash.set(oldObj, newObj)\n  for (let key in oldObj) {\n    // in \u4f1a\u904d\u5386\u5f53\u524d\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027 \u548c __proto__\u6307\u4ee3\u7684\u5c5e\u6027\n    // \u8865\u62f7\u8d1d \u5bf9\u8c61\u7684__proto__\u4e0a\u7684\u5c5e\u6027\n    if (oldObj.hasOwnProperty(key)) {\n      // \u5982\u679c\u503c\u8fd8\u6709\u53ef\u80fd\u662f\u5bf9\u8c61 \u5c31\u7ee7\u7eed\u62f7\u8d1d\n      newObj[key] = deepClone(oldObj[key], hash)\n    }\n  }\n  return newObj\n  // \u533a\u5206\u5bf9\u8c61\u548c\u6570\u7ec4 Object.prototype.toString.call\n}\n// test\n\nvar o = {}\no.x = o\nvar o1 = deepClone(o) // \u5982\u679c\u8fd9\u4e2a\u5bf9\u8c61\u62f7\u8d1d\u8fc7\u4e86 \u5c31\u8fd4\u56de\u90a3\u4e2a\u62f7\u8d1d\u7684\u7ed3\u679c\u5c31\u53ef\u4ee5\u4e86\nconsole.log(o1)\n')),(0,a.kt)("h3",{id:"\u6df1\u62f7\u8d1d\u5b8c\u6574\u7248"},"\u6df1\u62f7\u8d1d\u5b8c\u6574\u7248"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const getType = (obj) => Object.prototype.toString.call(obj)\n\nconst isObject = (target) =>\n  (typeof target === "object" || typeof target === "function") &&\n  target !== null\n\nconst canTraverse = {\n  "[object Map]": true,\n  "[object Set]": true,\n  "[object Array]": true,\n  "[object Object]": true,\n  "[object Arguments]": true,\n}\nconst mapTag = "[object Map]"\nconst setTag = "[object Set]"\nconst boolTag = "[object Boolean]"\nconst numberTag = "[object Number]"\nconst stringTag = "[object String]"\nconst symbolTag = "[object Symbol]"\nconst dateTag = "[object Date]"\nconst errorTag = "[object Error]"\nconst regexpTag = "[object RegExp]"\nconst funcTag = "[object Function]"\n\nconst handleRegExp = (target) => {\n  const { source, flags } = target\n  return new target.constructor(source, flags)\n}\n\nconst handleFunc = (func) => {\n  // \u7bad\u5934\u51fd\u6570\u76f4\u63a5\u8fd4\u56de\u81ea\u8eab\n  if (!func.prototype) return func\n  const bodyReg = /(?<={)(.|\\n)+(?=})/m\n  const paramReg = /(?<=\\().+(?=\\)\\s+{)/\n  const funcString = func.toString()\n  // \u5206\u522b\u5339\u914d \u51fd\u6570\u53c2\u6570 \u548c \u51fd\u6570\u4f53\n  const param = paramReg.exec(funcString)\n  const body = bodyReg.exec(funcString)\n  if (!body) return null\n  if (param) {\n    const paramArr = param[0].split(",")\n    return new Function(...paramArr, body[0])\n  } else {\n    return new Function(body[0])\n  }\n}\n\nconst handleNotTraverse = (target, tag) => {\n  const Ctor = target.constructor\n  switch (tag) {\n    case boolTag:\n      return new Object(Boolean.prototype.valueOf.call(target))\n    case numberTag:\n      return new Object(Number.prototype.valueOf.call(target))\n    case stringTag:\n      return new Object(String.prototype.valueOf.call(target))\n    case symbolTag:\n      return new Object(Symbol.prototype.valueOf.call(target))\n    case errorTag:\n    case dateTag:\n      return new Ctor(target)\n    case regexpTag:\n      return handleRegExp(target)\n    case funcTag:\n      return handleFunc(target)\n    default:\n      return new Ctor(target)\n  }\n}\n\nconst deepClone = (target, map = new WeakMap()) => {\n  if (!isObject(target)) return target\n  let type = getType(target)\n  let cloneTarget\n  if (!canTraverse[type]) {\n    // \u5904\u7406\u4e0d\u80fd\u904d\u5386\u7684\u5bf9\u8c61\n    return handleNotTraverse(target, type)\n  } else {\n    // \u8fd9\u6ce2\u64cd\u4f5c\u76f8\u5f53\u5173\u952e\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u5bf9\u8c61\u7684\u539f\u578b\u4e0d\u4e22\u5931\uff01\n    let ctor = target.constructor\n    cloneTarget = new ctor()\n  }\n\n  if (map.get(target)) return target\n  map.set(target, true)\n\n  if (type === mapTag) {\n    //\u5904\u7406Map\n    target.forEach((item, key) => {\n      cloneTarget.set(deepClone(key, map), deepClone(item, map))\n    })\n  }\n\n  if (type === setTag) {\n    //\u5904\u7406Set\n    target.forEach((item) => {\n      cloneTarget.add(deepClone(item, map))\n    })\n  }\n\n  // \u5904\u7406\u6570\u7ec4\u548c\u5bf9\u8c61\n  for (let prop in target) {\n    if (target.hasOwnProperty(prop)) {\n      cloneTarget[prop] = deepClone(target[prop], map)\n    }\n  }\n  return cloneTarget\n}\n')))}u.isMDXComponent=!0}}]);