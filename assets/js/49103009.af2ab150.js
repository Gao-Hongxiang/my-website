"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=m(n),k=r,u=d["".concat(c,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(u,i(i({ref:t},o),{},{components:n})):a.createElement(u,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"7. jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfDOM",last_update:{date:"02/07/2023",author:"zhongnan"}},i=void 0,p={unversionedId:"react/jsx",id:"react/jsx",title:"7. jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfDOM",description:"jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfDOM?",source:"@site/interview/react/07-jsx.md",sourceDirName:"react",slug:"/react/jsx",permalink:"/website/interview/react/jsx",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfDOM",last_update:{date:"02/07/2023",author:"zhongnan"}},sidebar:"tutorialSidebar",previous:{title:"6. setState",permalink:"/website/interview/react/state"},next:{title:"react\u7ec4\u4ef6",permalink:"/website/interview/category/react\u7ec4\u4ef6"}},c={},m=[{value:"jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfDOM?",id:"jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfdom",level:2},{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"1. react\u4e2d\u7684jsx\u8bed\u6cd5",id:"1-react\u4e2d\u7684jsx\u8bed\u6cd5",level:3},{value:"2. jsx\u8bed\u6cd5\u5728babel\u4e2d\u4f1a\u8f6c\u6210 React.createElement()\u7684\u51fd\u6570\u8c03\u7528\u3002",id:"2-jsx\u8bed\u6cd5\u5728babel\u4e2d\u4f1a\u8f6c\u6210-reactcreateelement\u7684\u51fd\u6570\u8c03\u7528",level:3},{value:"3. babel\u8f6c\u6362",id:"3-babel\u8f6c\u6362",level:3},{value:"4. \u865a\u62dfDOM\u7684\u521b\u5efa\u8fc7\u7a0b",id:"4-\u865a\u62dfdom\u7684\u521b\u5efa\u8fc7\u7a0b",level:3},{value:"5.\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfDOM",id:"5\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfdom",level:3}],o={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfdom"},"jsx\u8bed\u6cd5\u8f6c\u6362\u751f\u6210\u865a\u62dfDOM?"),(0,r.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"react"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"jsx"),"\u8bed\u6cd5\u5f88\u591a\u4f19\u4f34\u90fd\u4f1a\u4f7f\u7528"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u662f\u4f60\u77e5\u9053\u5b83\u7684\u672c\u8d28\u662f\u4ec0\u4e48\u5417\uff1f\u8fd0\u884c\u4e2d\u5b83\u4f1a\u505a\u5982\u4f55\u7684\u8f6c\u6362\u5462\uff1f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsx"),"\u5185\u90e8\u53c8\u662f\u600e\u4e48\u751f\u6210\u4e86\u865a\u62df",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u865a\u62df",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\u53c8\u662f\u5982\u4f55\u6302\u8f7d\u5230\u771f\u5b9e",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\u4e0a\u53bb\u7684\u5462\uff1f"))),(0,r.kt)("p",null,"\u5e26\u7740\u8fd9\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u505a\u4e2a\u8bb2\u89e3\u628a\uff0c\u76f8\u4fe1\u6df1\u5ea6\u4e86\u89e3\u672c\u6587\u540e\uff0c\u80af\u5b9a\u4f1ajsx\u3001\u865a\u62df",(0,r.kt)("inlineCode",{parentName:"p"},"DOM"),"\u6709\u8fdb\u4e00\u6b65\u7684\u7406\u89e3"),(0,r.kt)("h3",{id:"1-react\u4e2d\u7684jsx\u8bed\u6cd5"},"1. react\u4e2d\u7684jsx\u8bed\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7b80\u5355\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"jsx"),"\u8bed\u6cd5, \u5c31\u662f\u518d",(0,r.kt)("inlineCode",{parentName:"p"},"js"),"\u4e2d\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"html"),"\u5143\u7d20\uff0c\u524d\u63d0\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"\u6807\u7b7e\u5fc5\u987b\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"type=text/babel"),", \u5426\u5219jsx\u8bed\u6cd5\u4f1a\u62a5\u9519\n",(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/669b83911e0d4820b2e1a4e9118c900f.png",alt:"img"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jsx \u4ec5\u4ec5\u53ea\u662f React.createElement(component, props, ...children) \u51fd\u6570\u7684\u8bed\u6cd5\u7cd6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const msg1 = <h2>\u54c8\u54c8\u54c8</h2>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728js\u4e2d\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u7b49\u4ef7\u4e8e\u4e0b\u9762\u8fd9\u6bb5react.createElement()\u7684\u503c")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'const msg2 = React.createElement("h2", null, "\u54c8\u54c8\u54c8");//js\u8bed\u6cd5')),(0,r.kt)("h3",{id:"2-jsx\u8bed\u6cd5\u5728babel\u4e2d\u4f1a\u8f6c\u6210-reactcreateelement\u7684\u51fd\u6570\u8c03\u7528"},"2. jsx\u8bed\u6cd5\u5728babel\u4e2d\u4f1a\u8f6c\u6210 React.createElement()\u7684\u51fd\u6570\u8c03\u7528\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f7f\u7528\u4e86React\u76f8\u5173\u7684\u65b9\u6cd5\u4e00\u5b9a\u5148\u5f15\u5165react.development.js \u548creact-dom.development.js\u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u5426\u5219\u4f1a\u62a5\u9519")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="../react/react.development.js"><\/script>\n<script src="../react/react-dom.development.js"><\/script>\n')),(0,r.kt)("h3",{id:"3-babel\u8f6c\u6362"},"3. babel\u8f6c\u6362"),(0,r.kt)("p",null,"\u6211\u4eec\u5148\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"jsx"),"\u8bed\u6cd5, \u5f00\u53d1\u9875\u9762\u3002\u90e8\u5206",(0,r.kt)("inlineCode",{parentName:"p"},"html"),"\u4ee3\u7801\u7701\u7565\uff0c\u53ea\u5199\u6838\u5fc3",(0,r.kt)("inlineCode",{parentName:"p"},"js"),"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\n<script src="../react/react.development.js"><\/script>\n<script src="../react/react-dom.development.js"><\/script>\n//babel.min\u6587\u4ef6 \u662f\u5c06 jsx\u8f6c\u6210 React.createElement\u51fd\u6570\u8c03\u7528\u7684\n<script src="../react/babel.min.js"><\/script>\n<script type=\'text/babel\'>\n// \u8fd9\u662fjsx\u8bed\u6cd5\nconst msg1 = \n  <div class="header">\n     <h2>\u5934\u90e8</h2>\n     <div class="main">\u4e3b\u9898</div>\n     <footer>\u8fd9\u91cc\u662f\u5c3e\u90e8</footer>\n   </div>;\nReactDOM.render(msg1, document.getElementById("app"));\n<\/script>\n\n')),(0,r.kt)("p",null,"\u7528\u6d4f\u89c8\u5668\u6253\u5f00\u6587\u4ef6\uff0c\u67e5\u770b\u9875\u9762\u6548\u679c\n",(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/fa66de7dd07f49a090517b6e7d837a14.png",alt:"img"})),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5728\u628a\u4e0a\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"jsx"),"\u4ee3\u7801\u8f6c\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u51fd\u6570\u7684\u5f62\u5f0f"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"babel"),"\u7684\u5b98\u7f51\u4e2d\u5feb\u901f\u67e5\u770b\u8f6c\u6362\u7684\u8fc7\u7a0b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"babel"),"\u5b98\u7f51\u94fe\u63a5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/repl/#?presets=react"},"https://babeljs.io/repl/#?presets=react"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/dc6e80a359694b9ca108513dd2d098be.png",alt:"img"})),(0,r.kt)("p",null,"\u590d\u5236\u53f3\u8fb9\u8f6c\u6362\u540e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u51fd\u6570\u8c03\u7528\u4ee3\u7801\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"js"),"\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="../react/react.development.js"><\/script>\n<script src="../react/react-dom.development.js"><\/script>\n// type="text/babel" \u53ef\u4ee5\u53bb\u6389,babel.min.js \u4e5f\u53ef\u4ee5\u4e0d\u7528\u4e86\u3002\n// \u56e0\u4e3a\u6211\u4eec\u4ee3\u7801\u4e2d\u6ca1\u6709\u4e86jsx\u8bed\u6cd5\u4e86\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u5c5e\u4e8e\u6b63\u5e38\u7684js\u4ee3\u7801\n<script>\nconst msg2 = React.createElement("div", {\n    class: "header"\n}, React.createElement("h2", null, "\\u5934\\u90E8"), React.createElement("div", {\n    class: "main"\n}, "\\u4E3B\\u9898"), React.createElement("footer", null, "\\u8FD9\\u91CC\\u662F\\u5C3E\\u90E8"));\n//React.reder \u51fd\u6570\u6e32\u67d3\u5230\u6d4f\u89c8\u5668\u4e0a\nReactDOM.render(msg2, document.getElementById("app"));\n<\/script>\n')),(0,r.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u540e\uff0c\u67e5\u770b\u9875\u9762\n",(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/bc2c4c4a883d40dc8bea31bc97fdfa1f.png",alt:"img"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jsx"),"\u8bed\u6cd5\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u51fd\u6570\u7684\u65b9\u6cd5\u90fd\u53ef\u4ee5\u5f97\u5230\u76f8\u540c\u7684\u7ed3\u679c\uff0c\u6e32\u67d3\u5728\u9875\u9762\u7684\u6b63\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"DOM"),"\u4e5f\u662f\u4e00\u6837\u7684\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u7ed3\u8bba\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"jsx")," \u4ec5\u4ec5\u53ea\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement(component, props, ...children)")," \u51fd\u6570\u7684\u8bed\u6cd5\u7cd6")),(0,r.kt)("p",null,"\u5728\u771f\u5b9e\u5f00\u53d1\u4e2d\u6211\u4eec\u4e0d\u4f1a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u51fd\u6570\u7684\u65b9\u5f0f\u5199\u4ee3\u7801\uff0c\u56e0\u4e3a\u53ef\u8bfb\u6027\u592a\u5dee\u4e86\uff0c\u4ee3\u7801\u91cf\u53c8\u591a\uff0c\u96be\u7ef4\u62a4\uff0c\u6211\u4eec\u66f4\u559c\u6b22\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"jsx"),"\u8bed\u6cd5\u6765\u7f16\u5199\u4ee3\u7801"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.render"),"\u51fd\u6570\u662f\u600e\u6837\u628acreateElement\u51fd\u6570\u7684\u8fd4\u56de\u503c\u6302\u8f7d\u5230DOM\u4e0a\u7684\u5462\uff1f"),(0,r.kt)("h3",{id:"4-\u865a\u62dfdom\u7684\u521b\u5efa\u8fc7\u7a0b"},"4. \u865a\u62dfDOM\u7684\u521b\u5efa\u8fc7\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement")," \u6700\u7ec8\u521b\u5efa\u51fa\u6765\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement"),"\u5bf9\u8c61"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u51fd\u6570\u8c03\u7528\u540e\uff0c\u6253\u5370\u5b83\u7684\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const msg2 = React.createElement("div", {\n  class: "header"\n},React.createElement("h2", null, "\\u5934\\u90E8"), React.createElement("div", {\n    class: "main"\n }, "\\u4E3B\\u9898"), React.createElement("footer", null, "\\u8FD9\\u91CC\\u662F\\u5C3E\\u90E8"));\n\nconsole.log(msg2);\nReactDOM.render(msg2, document.getElementById("app"));\n')),(0,r.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u6253\u5f00\uff0c\u67e5\u770b\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/4529a861293b432b9fbd748d581547fb.png",alt:"img"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"msg2"),"\u5c31\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"\u5bf9\u8c61\uff0c\u5bf9\u8c61\u7684\u7b2c\u4e00\u5c42\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"html"),"\u4e2d\u7684\u6700\u5916\u5c42",(0,r.kt)("inlineCode",{parentName:"p"},"class"),"\u7b49\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"\u91cc\u9762\u7684\u4e09\u4e2a\u5b50\u5143\u7d20\uff0c\u653e\u5728\u5bf9\u8c61\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u5bf9\u8c61\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"children"),"\u6570\u7ec4\u4e2d\u4e00\u4e00\u5bf9\u5e94\u3002\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"h2"),"\u6807\u7b7e\u4e2d\u8fd8\u6709\u5b50\u5143\u7d20\uff0c\u90a3",(0,r.kt)("inlineCode",{parentName:"p"},"h2"),"\u5bf9\u8c61\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u5bf9\u8c61\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"children"),"\u6570\u7ec4\u53c8\u4f1a\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"objectd"),"\u5bf9\u8c61\uff0c\u2026 \u8fd9\u5c06\u4e00\u5c42\u4e00\u5c42\u7684\u5f80\u4e0b\u5957")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"React"),"\u5229\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement"),"\u5bf9\u8c61\u7ec4\u6210\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u7684\u5bf9\u8c61\u6811")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"msg2"),"\u5c31\u662f\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u51fd\u6570\u65f6\u5019\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ReactElement"),"\u51fd\u6570\u8f6c\u6210\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u5bf9\u8c61\u6811\u7684")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"react"),"\u6e90\u7801\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"/packages/react/index.js"),"\u6587\u4ef6\u627e\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"createElement"),"\u51fd\u6570\uff0c\u5b83\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/React"),"\u6587\u4ef6\u4e0b\u5bfc\u51fa\u7684\n",(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a2b9a9dab04a4a67a87115ec28e36c0e.png",alt:"img"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"react"),"\u6587\u4ef6\uff0c\u53d1\u73b0\u5b83\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"./ReactElement"),"\u6587\u4ef6\u4e0b\u5bfc\u51fa\u7684\n",(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/ec4d2408e5274f23aaac2e817e60a1c6.png",alt:"img"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"ReactElement"),"\u6587\u4ef6\uff0c\u91cc\u9762\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"createElement"),"\u51fd\u6570\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"js"),"\u4e2d\u672c\u8d28\u4e0a\u5c31\u662f\u5728\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\n",(0,r.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/043e214470514358bc957cb544fb317f.png",alt:"img"}),(0,r.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/a3a5a254e0304ce3b122b4ceb0a26c6e.png",alt:"img"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b83\u53c8\u8c03\u7528\u4e86\u53e6\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"ReactElement"),"\u51fd\u6570\n",(0,r.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/95eaaac92b8741a5bb33c193670eb436.png",alt:"img"}),(0,r.kt)("img",{parentName:"li",src:"https://img-blog.csdnimg.cn/9d300f9b3577456499529d3b9e3eacf7.png",alt:"img"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"ReactElement"),"\u51fd\u6570\u8fd4\u56de\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u662f\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u6253\u5370\u51fa\u6765\u7684\u90a3\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"msg2"),", \u5b83\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"javascript"),"\u5bf9\u8c61\u6811")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JavaScript\u7684\u5bf9\u8c61\u6811\u5c31\u662f\u5927\u540d\u9f0e\u9f0e\u7684\u865a\u62dfDOM")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6709\u4e86\u865a\u62dfDOM\uff0c\u90a3\u600e\u4e48\u628a\u865a\u62dfDOM\u6620\u5c04\u5230\u771f\u5b9e\u7684DOM\u4e0a\u5462\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"react\u662f\u901a\u8fc7ReactDOM.render \u51fd\u6570\u628a\u865a\u62dfDOM\u6302\u8f7d\u5230\u771f\u5b9eDOM\u7684"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u628a\u865a\u62dfDOM\u6302\u8f7d\u5230 id\u4e3aapp\u7684\u5143\u7d20\u4e2d\nReactDOM.render(msg2, document.getElementById("app"));\n')),(0,r.kt)("h3",{id:"5\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfdom"},"5.\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u865a\u62dfDOM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f88\u96be\u8ddf\u8e2a\u72b6\u6001\u53d1\u751f\u7684\u6539\u53d8\uff1a\u539f\u6709\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\u6211\u4eec\u5f88\u96be\u8ddf\u8e2a\u5230\u72b6\u6001\u53d1\u751f\u7684\u6539\u53d8\uff0c\u4e0d\u65b9\u4fbf\u9488\u5bf9\u6211\u4eec\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u8c03\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u771f\u5b9e",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\u6027\u80fd\u8f83\u4f4e\uff1a\u4f20\u7edf\u7684\u5f00\u53d1\u6a21\u5f0f\u4f1a\u8fdb\u884c\u9891\u7e41\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\u64cd\u4f5c\uff0c\u800c\u8fd9\u4e00\u7684\u505a\u6cd5\u6027\u80fd\u975e\u5e38\u7684\u4f4e")))}s.isMDXComponent=!0}}]);