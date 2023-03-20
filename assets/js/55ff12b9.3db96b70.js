"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[891],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),k=r,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||l;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={title:"\u804c\u8d23\u94fe\u6a21\u5f0f",description:"\u4e00\u6b65\u64cd\u4f5c\u53ef\u80fd\u5206\u4e3a\u591a\u4e2a\u804c\u8d23\u89d2\u8272\u6765\u5b8c\u6210\uff0c\u628a\u8fd9\u4e9b\u89d2\u8272\u90fd\u5206\u5f00\uff0c\u7136\u540e\u7528\u4e00\u4e2a\u94fe\u4e32\u8d77\u6765",last_update:{date:"11/09/2022",author:"your name"}},o="\u804c\u8d23\u94fe\u6a21\u5f0f\uff1a\u9886\u5bfc\uff0c\u6211\u60f3\u8bf7\u4e2a\u5047",i={unversionedId:"behavioral-pattern/chain-of-responsibility",id:"behavioral-pattern/chain-of-responsibility",title:"\u804c\u8d23\u94fe\u6a21\u5f0f",description:"\u4e00\u6b65\u64cd\u4f5c\u53ef\u80fd\u5206\u4e3a\u591a\u4e2a\u804c\u8d23\u89d2\u8272\u6765\u5b8c\u6210\uff0c\u628a\u8fd9\u4e9b\u89d2\u8272\u90fd\u5206\u5f00\uff0c\u7136\u540e\u7528\u4e00\u4e2a\u94fe\u4e32\u8d77\u6765",source:"@site/design/05-behavioral-pattern/07-chain-of-responsibility.md",sourceDirName:"05-behavioral-pattern",slug:"/behavioral-pattern/chain-of-responsibility",permalink:"/website/design/behavioral-pattern/chain-of-responsibility",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u804c\u8d23\u94fe\u6a21\u5f0f",description:"\u4e00\u6b65\u64cd\u4f5c\u53ef\u80fd\u5206\u4e3a\u591a\u4e2a\u804c\u8d23\u89d2\u8272\u6765\u5b8c\u6210\uff0c\u628a\u8fd9\u4e9b\u89d2\u8272\u90fd\u5206\u5f00\uff0c\u7136\u540e\u7528\u4e00\u4e2a\u94fe\u4e32\u8d77\u6765",last_update:{date:"11/09/2022",author:"your name"}},sidebar:"tutorialSidebar",previous:{title:"\u547d\u4ee4\u6a21\u5f0f",permalink:"/website/design/behavioral-pattern/command"},next:{title:"\u4e2d\u4ecb\u8005\u6a21\u5f0f",permalink:"/website/design/behavioral-pattern/mediator"}},s={},u=[{value:"<strong>1. \u4f60\u66fe\u7ecf\u89c1\u8fc7\u7684\u804c\u8d23\u94fe\u6a21\u5f0f</strong>",id:"1-\u4f60\u66fe\u7ecf\u89c1\u8fc7\u7684\u804c\u8d23\u94fe\u6a21\u5f0f",level:2},{value:"<strong>2. \u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0</strong>",id:"2-\u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0",level:2},{value:"<strong>2.1 \u4ee3\u7801\u5b9e\u73b0</strong>",id:"21-\u4ee3\u7801\u5b9e\u73b0",level:3},{value:"<strong>2.2 \u521d\u6b65\u4f18\u5316</strong>",id:"22-\u521d\u6b65\u4f18\u5316",level:3},{value:"<strong>2.3 \u4f7f\u7528\u804c\u8d23\u94fe\u6a21\u5f0f\u91cd\u6784</strong>",id:"23-\u4f7f\u7528\u804c\u8d23\u94fe\u6a21\u5f0f\u91cd\u6784",level:3},{value:"<strong>2.4 \u4f7f\u7528\u94fe\u6a21\u5f0f\u91cd\u6784</strong>",id:"24-\u4f7f\u7528\u94fe\u6a21\u5f0f\u91cd\u6784",level:3},{value:"<strong>3. \u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u539f\u7406</strong>",id:"3-\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u539f\u7406",level:2},{value:"<strong>4. \u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9</strong>",id:"4-\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9",level:2},{value:"<strong>5. \u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f</strong>",id:"5-\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f",level:2},{value:"<strong>6. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f</strong>",id:"6-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f",level:2},{value:"<strong>6.1 \u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u7ec4\u5408\u6a21\u5f0f</strong>",id:"61-\u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u7ec4\u5408\u6a21\u5f0f",level:3},{value:"<strong>6.2 \u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u88c5\u9970\u6a21\u5f0f</strong>",id:"62-\u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u88c5\u9970\u6a21\u5f0f",level:3}],d={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u804c\u8d23\u94fe\u6a21\u5f0f\u9886\u5bfc\u6211\u60f3\u8bf7\u4e2a\u5047"},"\u804c\u8d23\u94fe\u6a21\u5f0f\uff1a\u9886\u5bfc\uff0c\u6211\u60f3\u8bf7\u4e2a\u5047"),(0,r.kt)("h2",{id:"1-\u4f60\u66fe\u7ecf\u89c1\u8fc7\u7684\u804c\u8d23\u94fe\u6a21\u5f0f"},(0,r.kt)("strong",{parentName:"h2"},"1. \u4f60\u66fe\u7ecf\u89c1\u8fc7\u7684\u804c\u8d23\u94fe\u6a21\u5f0f")),(0,r.kt)("p",null,"\u5c0f\u4f19\u4f34\u6765\u4f60\u7684\u57ce\u5e02\u627e\u4f60\u73a9\u800d\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u8bf7\u4e24\u5929\u5047\u3002\u9996\u5148\u8ddf\u4f60\u7684\u5c0f\u7ec4\u9886\u5bfc\u63d0\u4e86\u4e00\u53e5\uff0c\u5c0f\u9886\u5bfc\u8bf4\u4e0d\u884c\u5450\u6211\u53ea\u80fd\u6279\u534a\u5929\u5047\uff0c\u5efa\u8bae\u627e\u90e8\u95e8\u7ecf\u7406\u3002\u4e8e\u662f\u4f60\u6765\u5230\u4e86\u90e8\u95e8\u7ecf\u7406\u529e\u516c\u5ba4\uff0c\u90e8\u95e8\u7ecf\u7406\u8bf4\u4e0d\u884c\u5450\u6211\u53ea\u80fd\u6279\u4e00\u5929\u5047\uff0c\u5efa\u8bae\u627e\u603b\u7ecf\u7406\u3002\u6765\u5230\u603b\u7ecf\u7406\u529e\u516c\u5ba4\uff0c\u603b\u7ecf\u7406\u52c9\u4e3a\u5176\u96be\u7684\u8bf4\uff0c\u597d\u53ed\uff0c\u4e0d\u8fc7\u8981\u6263\u4f60\u56db\u5929\u5de5\u8d44\u3002\u4e8e\u662f\u4f60\u8bf7\u5230\u4e86\u4e24\u5929\u5047\uff0c\u548c\u5c0f\u4f19\u4f34\u5feb\u4e50\uff08\u5e76\u4e0d \uff09\u73a9\u800d\u4e86\u3002"),(0,r.kt)("p",null,"\u5f53\u4f60\u4f5c\u4e3a\u8bf7\u6c42\u8005\u63d0\u51fa\u8bf7\u5047\u7533\u8bf7\u65f6\uff0c\u8fd9\u4e2a\u7533\u8bf7\u4f1a\u7531\u5c0f\u7ec4\u9886\u5bfc\u3001\u90e8\u95e8\u7ecf\u7406\u3001\u603b\u7ecf\u7406\u4e4b\u4e2d\u7684\u67d0\u4e00\u4f4d\u9886\u5bfc\u6765\u8fdb\u884c\u5904\u7406\uff0c\u4f46\u4e00\u5f00\u59cb\u63d0\u51fa\u7533\u8bf7\u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u77e5\u9053\u8fd9\u4e2a\u7533\u8bf7\u4e4b\u540e\u7531\u54ea\u4e2a\u9886\u5bfc\u6765\u5904\u7406\uff0c\u4e5f\u8bb8\u662f\u90e8\u95e8\u7ecf\u7406\uff0c\u6216\u8005\u662f\u603b\u7ecf\u7406\uff0c\u8bf7\u6c42\u8005\u4e8b\u5148\u4e0d\u77e5\u9053\u8fd9\u4e2a\u7533\u8bf7\u6700\u540e\u5230\u5e95\u5e94\u8be5\u7531\u54ea\u4e2a\u9886\u5bfc\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u518d\u6bd4\u5982\uff0c\u67d0\u4e2a\u5feb\u4e50\u7684\u4e0b\u5348\u6b63\u5728\u5feb\u4e50\u6b21\u51b0\u68cd\uff0c\u4f60\u7684\u80c3\u7a81\u7136\u6709\u70b9\u4e0d\u8212\u670d\uff0c\u4e8e\u662f\u51b3\u5b9a\u770b\u770b\u4ec0\u4e48\u60c5\u51b5\u3002\u9996\u5148\u4f60\u53bb\u4e86\u793e\u533a\u533b\u9662\uff0c\u793e\u533a\u533b\u751f\u770b\u4e86\u770b\u8bf4\u53ef\u80fd\u5f88\u4e25\u91cd\u4f46\u4e5f\u4e0d\u80fd\u786e\u5b9a\uff0c\u4f60\u5927\u5403\u4e00\u60ca\uff0c\u53bb\u4e86\u53bf\u57ce\u7684\u533b\u9662\u3002\u53bf\u57ce\u7684\u533b\u9662\u505a\u4e86\u7b80\u5355\u7684\u68c0\u67e5\uff0c\u8ddf\u4f60\u8bf4\u53ef\u80fd\u662f\u80c3\u708e\u4f46\u4e0d\u786e\u5b9a\uff0c\u5efa\u8bae\u53bb\u66f4\u5927\u7684\u533b\u9662\u3002\u7136\u540e\u4f60\u6765\u5230\u4e86\u7701\u57ce\u7684\u533b\u9662\uff0c\u533b\u751f\u770b\u4e86\u770b\u8bf4\uff0c\u6ca1\u5565\uff0c\u8fd9\u5c31\u662f\u6d88\u5316\u4e0d\u826f\uff08\u6765\u81ea\u5728\u4e0b\u7684\u4eb2\u8eab\u7ecf\u5386 \uff09\u3002"),(0,r.kt)("p",null,"\u548c\u4e0a\u9762\u8bf7\u5047\u7684\u4f8b\u5b50\u7c7b\u4f3c\uff0c\u770b\u75c5\u7684\u533b\u9662\u4f1a\u544a\u8bc9\u770b\u75c5\u8005\u662f\u5426\u53ef\u4ee5\u6cbb\u7597\uff0c\u793e\u533a\u533b\u9662\u4e0d\u6210\u5c31\u8f6c\u9662\u5230\u53bf\u57ce\u533b\u9662\uff0c\u518d\u4e0d\u884c\u5c31\u8f6c\u9662\u5230\u66f4\u5927\u7684\u533b\u9662\uff0c\u800c\u770b\u75c5\u8005\u4e00\u5f00\u59cb\u5728\u793e\u533a\u533b\u9662\u770b\u75c5\u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u77e5\u9053\u8fd9\u4e2a\u75c5\u6700\u540e\u54ea\u4e2a\u533b\u9662\u53ef\u4ee5\u6cbb\u7597\uff0c\u4e5f\u8bb8\u662f\u53bf\u57ce\u533b\u9662\uff0c\u4e5f\u8bb8\u662f\u7701\u57ce\u533b\u9662\u3002"),(0,r.kt)("p",null,"\u5728\u7c7b\u4f3c\u7684\u573a\u666f\u4e2d\uff0c\u8fd9\u4e9b\u4f8b\u5b50\u6709\u4ee5\u4e0b",(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u5728\u4e00\u7cfb\u5217\u5bf9\u8c61\u4e2d\u4f20\u9012\uff0c\u5f62\u6210\u4e00\u6761\u94fe\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u94fe\u4e2d\u7684\u8bf7\u6c42\u63a5\u53d7\u8005\u5bf9\u8bf7\u6c42\u8fdb\u884c\u5206\u6790\uff0c\u8981\u4e48\u5904\u7406\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u8981\u4e48\u628a\u8fd9\u4e2a\u8bf7\u6c42\u4f20\u9012\u7ed9\u94fe\u7684\u4e0b\u4e00\u4e2a\u63a5\u53d7\u8005\uff1b")),(0,r.kt)("h2",{id:"2-\u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0"},(0,r.kt)("strong",{parentName:"h2"},"2. \u5b9e\u4f8b\u7684\u4ee3\u7801\u5b9e\u73b0")),(0,r.kt)("h3",{id:"21-\u4ee3\u7801\u5b9e\u73b0"},(0,r.kt)("strong",{parentName:"h3"},"2.1 \u4ee3\u7801\u5b9e\u73b0")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 JavaScript \u6765\u5c06\u4e4b\u524d\u7684\u8bf7\u5047\u4f8b\u5b50\u5b9e\u73b0\u4e00\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var askLeave = function (duration) {\n  if (duration <= 0.5) {\n    console.log("\u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n  } else if (duration <= 1) {\n    console.log("\u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n  } else if (duration <= 2) {\n    console.log("\u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n  } else {\n    console.log("\u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047")\n  }\n}\n\naskLeave(0.5) // \u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\naskLeave(1) // \u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\naskLeave(2) // \u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\naskLeave(3) // \u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047\n')),(0,r.kt)("h3",{id:"22-\u521d\u6b65\u4f18\u5316"},(0,r.kt)("strong",{parentName:"h3"},"2.2 \u521d\u6b65\u4f18\u5316")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u5b9e\u73b0\u6ca1\u6709\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\uff0c\u4f46\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u5904\u7406\u903b\u8f91\u53ef\u80fd\u5c31\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," \u8fd9\u4e48\u7b80\u5355\uff0c\u800c\u662f\u5305\u542b\u4e00\u4e9b\u5e74\u5047\u3001\u8c03\u4f11\u3001\u9879\u76ee\u5fd9\u788c\u60c5\u51b5\u7684\u590d\u6742\u5224\u65ad\uff0c\u6b64\u65f6\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"askLeave")," \u65b9\u6cd5\u5c31\u53d8\u5f97\u5e9e\u5927\u800c\u81c3\u80bf\uff0c\u5982\u679c\u4e2d\u95f4\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u9886\u5bfc\u5c42\uff0c\u53ef\u4ee5\u6279\u51c6 1.5 \u5929\u7684\u5047\u671f\uff0c\u90a3\u4e48\u4f60\u5c31\u8981\u4fee\u6539\u8fd9\u4e2a\u5e9e\u5927\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"askLeave")," \u65b9\u6cd5\uff0c\u7ef4\u62a4\u5de5\u4f5c\u53d8\u5f97\u590d\u6742\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u5c06\u4e0d\u540c\u9886\u5bfc\u7684\u5904\u7406\u903b\u8f91\uff08\u4e5f\u5c31\u662f\u804c\u8d23\u8282\u70b9\uff09\u63d0\u53d6\u51fa\u6765\uff0c\u8ba9\u4e0d\u540c\u8282\u70b9\u7684\u804c\u8d23\u903b\u8f91\u754c\u9650\u53d8\u5f97\u660e\u663e\uff0c\u4ee3\u7801\u7ed3\u6784\u66f4\u660e\u663e\u3002\u8bf7\u5047\u7684\u65f6\u5019\u76f4\u63a5\u627e\u5c0f\u7ec4\u9886\u5bfc\uff0c\u5982\u679c\u5c0f\u7ec4\u9886\u5bfc\u5904\u7406\u4e0d\u597d\uff0c\u76f4\u63a5\u628a\u8bf7\u6c42\u4f20\u9012\u7ed9\u90e8\u95e8\u9886\u5bfc\uff0c\u90e8\u95e8\u9886\u5bfc\u5904\u7406\u4e0d\u4e86\u5219\u4f20\u9012\u7ed9\u603b\u7ecf\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/* \u5c0f\u7ec4\u9886\u5bfc\u5904\u7406\u903b\u8f91 */\nvar askLeaveGroupLeader = function (duration) {\n  if (duration <= 0.5) {\n    console.log("\u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n  } else askLeaveDepartmentLeader(duration)\n}\n\n/* \u90e8\u95e8\u9886\u5bfc\u5904\u7406\u903b\u8f91 */\nvar askLeaveDepartmentLeader = function (duration) {\n  if (duration <= 1) {\n    console.log("\u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n  } else askLeaveGeneralLeader(duration)\n}\n\n/* \u603b\u7ecf\u7406\u5904\u7406\u903b\u8f91 */\nvar askLeaveGeneralLeader = function (duration) {\n  if (duration <= 2) {\n    console.log("\u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n  } else console.log("\u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047")\n}\n\naskLeaveGroupLeader(0.5) // \u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\naskLeaveGroupLeader(1) // \u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\naskLeaveGroupLeader(2) // \u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\naskLeaveGroupLeader(3) // \u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047\n')),(0,r.kt)("h3",{id:"23-\u4f7f\u7528\u804c\u8d23\u94fe\u6a21\u5f0f\u91cd\u6784"},(0,r.kt)("strong",{parentName:"h3"},"2.3 \u4f7f\u7528\u804c\u8d23\u94fe\u6a21\u5f0f\u91cd\u6784")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u5b9e\u73b0\uff0c\u903b\u8f91\u5012\u662f\u6e05\u6670\u4e86\uff0c\u4e5f\u4e0d\u4f1a\u6709\u4e2a\u8d85\u5927\u7684\u51fd\u6570\u4e00\u628a\u68ad\uff0c\u4f46\u662f\u8fd8\u6709\u4e2a\u95ee\u9898\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"askLeaveGroupLeader")," \u8fd9\u4e2a\u51fd\u6570\u91cc\u5c31\u76f4\u63a5\u8026\u5408\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"askLeaveDepartmentLeader")," \u8fd9\u4e2a\u51fd\u6570\uff0c\u5176\u4ed6\u51fd\u6570\u4e5f\u662f\u5404\u81ea\u8026\u5408\u5728\u4e00\u8d77\uff0c\u5982\u679c\u8981\u5728\u5176\u4e2d\u4e24\u4e2a\u804c\u8d23\u8282\u70b9\u4e2d\u95f4\u589e\u52a0\u4e00\u4e2a\u8282\u70b9\uff0c\u6216\u8005\u53bb\u6389\u4e00\u4e2a\u8282\u70b9\uff0c\u90a3\u4e48\u5c31\u8981\u540c\u65f6\u6539\u52a8\u76f8\u90bb\u7684\u804c\u8d23\u8282\u70b9\u51fd\u6570\uff0c\u8fd9\u5c31\u8fdd\u53cd\u4e86\u5f00\u95ed\u539f\u5219\uff0c\u6211\u4eec\u5e0c\u671b\u589e\u52a0\u65b0\u7684\u804c\u8d23\u8282\u70b9\u7684\u65f6\u5019\uff0c\u5bf9\u539f\u6765\u7684\u4ee3\u7801\u6ca1\u6709\u5f71\u54cd\u3002"),(0,r.kt)("p",null,"\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u5f15\u5165\u804c\u8d23\u94fe\u6a21\u5f0f\uff0c\u5c06\u804c\u8d23\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u4f7f\u7528\u62fc\u63a5\u7684\u65b9\u5f0f\uff0c\u800c\u4e0d\u662f\u5728\u58f0\u660e\u7684\u65f6\u5019\u5c31\u56fa\u5b9a\u3002\u8fd9\u91cc\u6211\u4eec\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u5c0f\u7ec4\u9886\u5bfc */\nvar GroupLeader = {\n    nextLeader: null,\n    setNext: function(next) {\n        this.nextLeader = next\n    },\n    handle: function(duration) {\n        if (duration <= 0.5) {\n            console.log('\u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86')\n        } else\n            this.nextLeader.handle(duration)\n    }\n}\n\n/* \u90e8\u95e8\u9886\u5bfc */\nvar DepartmentLeader = {\n    nextLeader: null,\n    setNext: function(next) {\n        this.nextLeader = next\n    },\n    handle: function(duration) {\n        if (duration <= 1) {\n            console.log('\u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86')\n        } else\n            this.nextLeader.handle(duration)\n    }\n}\n\n/* \u603b\u7ecf\u7406 */\nvar GeneralLeader = {\n    nextLeader: null,\n    setNext: function(next) {\n        this.nextLeader = next\n    },\n    handle: function(duration) {\n        if (duration <= 2) {\n            console.log('\u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86')\n        } else\n            console.log('\u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047')\n    }\n}\n\nGroupLeader.setNext(DepartmentLeader)     // \u8bbe\u7f6e\u5c0f\u7ec4\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u90e8\u95e8\u9886\u5bfc\nDepartmentLeader.setNext(GeneralLeader)   // \u8bbe\u7f6e\u90e8\u95e8\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u603b\u7ecf\u7406\n\nGroupLeader.handle(0.5)   // \u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\nGroupLeader.handle(1)     // \u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\nGroupLeader.handle(2)     // \u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\nGroupLeader.handle(3)     // \u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047\n//\u8fd9\u6837\uff0c\u5c06\u804c\u8d23\u7684\u94fe\u5728\u4f7f\u7528\u7684\u65f6\u5019\u518d\u62fc\u8d77\u6765\uff0c\u7075\u6d3b\u6027\u597d\uff0c\u6bd4\u5982\u5982\u679c\u8981\u5728\u90e8\u95e8\u9886\u5bfc\u548c\u603b\u7ecf\u7406\u4e2d\u95f4\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u804c\u8d23\u8282\u70b9\uff0c\u90a3\u4e48\u5728\u4f7f\u7528\u65f6\uff1a\n\n/* \u65b0\u9886\u5bfc */\nvar MewLeader = {\n    nextLeader: null,\n    setNext: function(next) {\n        this.nextLeader = next\n    },\n    handle: function(duration) { ... }\n}\n\nGroupLeader.setNext(DepartmentLeader)     // \u8bbe\u7f6e\u5c0f\u7ec4\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u90e8\u95e8\u9886\u5bfc\nDepartmentLeader.setNext(MewLeader)       // \u8bbe\u7f6e\u90e8\u95e8\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u65b0\u9886\u5bfc\nMewLeader.setNext(GeneralLeader)          // \u8bbe\u7f6e\u65b0\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u603b\u7ecf\u7406\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u4f7f\u7528 ES6 \u7684 Class \u8bed\u6cd5\u6539\u9020\u4e00\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/* \u9886\u5bfc\u57fa\u7c7b */\nclass Leader {\n  constructor() {\n    this.nextLeader = null\n  }\n\n  setNext(next) {\n    this.nextLeader = next\n  }\n}\n\n/* \u5c0f\u7ec4\u9886\u5bfc */\nclass GroupLeader extends Leader {\n  handle(duration) {\n    if (duration <= 0.5) {\n      console.log("\u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n    } else this.nextLeader.handle(duration)\n  }\n}\n\n/* \u90e8\u95e8\u9886\u5bfc */\nclass DepartmentLeader extends Leader {\n  handle(duration) {\n    if (duration <= 1) {\n      console.log("\u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n    } else this.nextLeader.handle(duration)\n  }\n}\n\n/* \u603b\u7ecf\u7406 */\nclass GeneralLeader extends Leader {\n  handle(duration) {\n    if (duration <= 2) {\n      console.log("\u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86")\n    } else console.log("\u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047")\n  }\n}\n\nconst zhangSan = new GroupLeader()\nconst liSi = new DepartmentLeader()\nconst wangWu = new GeneralLeader()\n\nzhangSan.setNext(liSi) // \u8bbe\u7f6e\u5c0f\u7ec4\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u90e8\u95e8\u9886\u5bfc\nliSi.setNext(wangWu) // \u8bbe\u7f6e\u90e8\u95e8\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u603b\u7ecf\u7406\n\nzhangSan.handle(0.5) // \u5c0f\u7ec4\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\nzhangSan.handle(1) // \u90e8\u95e8\u9886\u5bfc\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\nzhangSan.handle(2) // \u603b\u7ecf\u7406\u7ecf\u8fc7\u4e00\u756a\u5fc3\u7406\u6597\u4e89\uff1a\u6279\u51c6\u4e86\nzhangSan.handle(3) // \u603b\u7ecf\u7406\uff1a\u4e0d\u51c6\u8bf7\u8fd9\u4e48\u957f\u7684\u5047\n')),(0,r.kt)("h3",{id:"24-\u4f7f\u7528\u94fe\u6a21\u5f0f\u91cd\u6784"},(0,r.kt)("strong",{parentName:"h3"},"2.4 \u4f7f\u7528\u94fe\u6a21\u5f0f\u91cd\u6784")),(0,r.kt)("p",null,"\u4e4b\u524d\u7684\u4ee3\u7801\u5b9e\u73b0\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u94fe\u6a21\u5f0f\u7a0d\u52a0\u91cd\u6784\uff0c\u5728\u8bbe\u7f6e\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u7684\u65b9\u6cd5",(0,r.kt)("inlineCode",{parentName:"p"},"setNext")," \u4e2d\u8fd4\u56de\u4e0b\u4e00\u4e2a\u8282\u70b9\u5b9e\u4f8b\uff0c\u4f7f\u5f97\u5728\u804c\u8d23\u94fe\u7684\u7ec4\u88c5\u8fc7\u7a0b\u662f\u4e00\u4e2a\u94fe\u7684\u5f62\u5f0f\uff0c\u4ee3\u7801\u7ed3\u6784\u66f4\u52a0\u7b80\u6d01\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u662f ES5 \u65b9\u5f0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \u9886\u5bfc\u57fa\u7c7b */\nvar Leader = function() {\n    this.nextLeader = null\n}\n\nLeader.prototype.setNext = function(next) {\n    this.nextLeader = next\n    return next\n}\n\n/* \u5c0f\u7ec4\u9886\u5bfc */\nvar GroupLeader = new Leader()\nGroupLeader.handle = function(duration) { ... }\n\n/* \u90e8\u95e8\u9886\u5bfc */\nvar DepartmentLeader = new Leader()\nDepartmentLeader.handle = function(duration) { ... }\n\n/* \u603b\u7ecf\u7406 */\nvar GeneralLeader = new Leader()\nGeneralLeader.handle = function(duration) { ... }\n\n/* \u7ec4\u88c5\u804c\u8d23\u94fe */\nGroupLeader\n  .setNext(DepartmentLeader)   // \u8bbe\u7f6e\u5c0f\u7ec4\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u90e8\u95e8\u9886\u5bfc\n  .setNext(GeneralLeader)      // \u8bbe\u7f6e\u90e8\u95e8\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u603b\u7ecf\u7406\n\n\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ES6 \u65b9\u5f0f\u540c\u7406\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\n/* \u9886\u5bfc\u57fa\u7c7b */\nclass Leader {\n    constructor() {\n        this.nextLeader = null\n    }\n\n    setNext(next) {\n        this.nextLeader = next\n        return next\n    }\n}\n\n/* \u5c0f\u7ec4\u9886\u5bfc */\nclass GroupLeader extends Leader {\n    handle(duration) { ... }\n}\n\n/* \u90e8\u95e8\u9886\u5bfc */\nclass DepartmentLeader extends Leader {\n    handle(duration) { ... }\n}\n\n/* \u603b\u7ecf\u7406 */\nclass GeneralLeader extends Leader {\n    handle(duration) { ... }\n}\n\nconst zhangSan = new GroupLeader()\nconst liSi = new DepartmentLeader()\nconst wangWu = new GeneralLeader()\n\n/* \u7ec4\u88c5\u804c\u8d23\u94fe */\nzhangSan\n  .setNext(liSi)     // \u8bbe\u7f6e\u5c0f\u7ec4\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u90e8\u95e8\u9886\u5bfc\n  .setNext(wangWu)   // \u8bbe\u7f6e\u90e8\u95e8\u9886\u5bfc\u7684\u4e0b\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u4e3a\u603b\u7ecf\u7406\n")),(0,r.kt)("h2",{id:"3-\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u539f\u7406"},(0,r.kt)("strong",{parentName:"h2"},"3. \u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u539f\u7406")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u804c\u8d23\u94fe\u6a21\u5f0f\u53ef\u80fd\u5728\u771f\u5b9e\u7684\u4e1a\u52a1\u4ee3\u7801\u4e2d\u89c1\u7684\u4e0d\u591a\uff0c\u4f46\u662f\u4f5c\u7528\u57df\u94fe\u3001\u539f\u578b\u94fe\u3001DOM \u4e8b\u4ef6\u6d41\u7684\u4e8b\u4ef6\u5192\u6ce1\uff0c\u90fd\u6709\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u5f71\u5b50:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u57df\u94fe\uff1a \u67e5\u627e\u53d8\u91cf\u65f6\uff0c\u5148\u4ece\u5f53\u524d\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u4e2d\u67e5\u627e\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u5c31\u4f1a\u4ece\u7236\u7ea7\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u4e2d\u67e5\u627e\uff0c\u4e00\u76f4\u627e\u5230\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u539f\u578b\u94fe\uff1a \u5f53\u8bfb\u53d6\u5b9e\u4f8b\u7684\u5c5e\u6027\u65f6\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5c31\u4f1a\u67e5\u627e\u5f53\u524d\u5bf9\u8c61\u5173\u8054\u7684\u539f\u578b\u4e2d\u7684\u5c5e\u6027\uff0c\u5982\u679c\u8fd8\u67e5\u4e0d\u5230\uff0c\u5c31\u53bb\u627e\u539f\u578b\u7684\u539f\u578b\uff0c\u4e00\u76f4\u627e\u5230\u6700\u9876\u5c42\u4e3a\u6b62\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5192\u6ce1\uff1a \u4e8b\u4ef6\u5728 DOM \u5143\u7d20\u4e0a\u89e6\u53d1\u540e\uff0c\u4f1a\u4ece\u6700\u5185\u5c42\u7684\u5143\u7d20\u5f00\u59cb\u53d1\u751f\uff0c\u4e00\u76f4\u5411\u5916\u5c42\u5143\u7d20\u4f20\u64ad\uff0c\u76f4\u5230\u5168\u5c40 document \u5bf9\u8c61\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e8b\u4ef6\u5192\u6ce1\u4e3a\u4f8b\uff0c\u4e8b\u4ef6\u5728\u67d0\u5143\u7d20\u4e0a\u89e6\u53d1\u540e\uff0c\u4f1a\u4e00\u7ea7\u7ea7\u5f80\u5916\u5c42\u5143\u7d20\u4f20\u9012\u4e8b\u4ef6\uff0c\u5982\u679c\u5f53\u524d\u5143\u7d20\u6ca1\u6709\u5904\u7406\u8fd9\u4e2a\u4e8b\u4ef6\u5e76\u963b\u6b62\u5192\u6ce1\uff0c\u90a3\u4e48\u8fd9\u4e2a\u4e8b\u4ef6\u5c31\u4f1a\u5f80\u5916\u5c42\u8282\u70b9\u4f20\u9012\uff0c\u5c31\u50cf\u8bf7\u6c42\u5728\u804c\u8d23\u94fe\u4e2d\u7684\u804c\u8d23\u8282\u70b9\u4e0a\u4f20\u9012\u4e00\u6837\uff0c\u76f4\u5230\u67d0\u4e2a\u5143\u7d20\u5904\u7406\u4e86\u4e8b\u4ef6\u5e76\u963b\u6b62\u5192\u6ce1\u3002")),(0,r.kt)("p",null,"\u4e8b\u4ef6\u5192\u6ce1\u793a\u610f\u56fe\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"C:%5CUsers%5C%E5%93%97%E5%95%A6%E5%95%A6%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20221108094737784.png",alt:"image-20221108094737784"})),(0,r.kt)("p",null,"\u53ef\u89c1\u867d\u7136\u67d0\u4e9b\u8bbe\u8ba1\u6a21\u5f0f\u6211\u4eec\u7528\u7684\u4e0d\u591a\uff0c\u4f46\u5176\u5b9e\u5df2\u7ecf\u9ed8\u9ed8\u6e17\u5165\u5230\u6211\u4eec\u7684\u65e5\u5e38\u5f00\u53d1\u4e2d\u4e86\u3002"),(0,r.kt)("h2",{id:"4-\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9"},(0,r.kt)("strong",{parentName:"h2"},"4. \u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u4f18\u7f3a\u70b9")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u4f18\u70b9\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u548c\u547d\u4ee4\u6a21\u5f0f\u7c7b\u4f3c\uff0c\u7531\u4e8e\u5904\u7406\u8bf7\u6c42\u7684\u804c\u8d23\u8282\u70b9\u53ef\u80fd\u662f\u804c\u8d23\u94fe\u4e0a\u7684\u4efb\u4e00\u8282\u70b9\uff0c\u6240\u4ee5\u8bf7\u6c42\u7684\u53d1\u9001\u8005\u548c\u63a5\u53d7\u8005\u662f\u89e3\u8026\u7684\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6539\u53d8\u94fe\u5185\u7684\u8282\u70b9\u6216\u8c03\u6574\u8282\u70b9\u6b21\u5e8f\uff0c\u53ef\u4ee5\u52a8\u6001\u5730\u4fee\u6539\u8d23\u4efb\u94fe\uff0c\u7b26\u5408\u5f00\u95ed\u539f\u5219\uff1b")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u7f3a\u70b9\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u8bf7\u6c42\u4e00\u5b9a\u4f1a\u88ab\u5904\u7406\uff0c\u6709\u53ef\u80fd\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u8fd8\u4e0d\u80fd\u5904\u7406\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u8bd5\u4e0d\u4fbf\uff0c\u8c03\u7528\u5c42\u6b21\u4f1a\u6bd4\u8f83\u6df1\uff0c\u4e5f\u6709\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5faa\u73af\u5f15\u7528\uff1b")),(0,r.kt)("h2",{id:"5-\u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f"},(0,r.kt)("strong",{parentName:"h2"},"5. \u804c\u8d23\u94fe\u6a21\u5f0f\u7684\u9002\u7528\u573a\u666f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u591a\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u5904\u7406\u540c\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5177\u4f53\u8be5\u8bf7\u6c42\u7531\u54ea\u4e2a\u5bf9\u8c61\u5904\u7406\u5728\u8fd0\u884c\u65f6\u624d\u786e\u5b9a\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u660e\u786e\u6307\u5b9a\u63a5\u6536\u8005\u7684\u60c5\u51b5\u4e0b\uff0c\u5411\u591a\u4e2a\u5bf9\u8c61\u4e2d\u7684\u5176\u4e2d\u4e00\u4e2a\u63d0\u4ea4\u8bf7\u6c42\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528\u804c\u8d23\u94fe\u6a21\u5f0f\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981\u52a8\u6001\u6307\u5b9a\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42\u7684\u5bf9\u8c61\u96c6\u5408\uff0c\u53ef\u4ee5\u4f7f\u7528\u804c\u8d23\u94fe\u6a21\u5f0f\uff1b")),(0,r.kt)("h2",{id:"6-\u5176\u4ed6\u76f8\u5173\u6a21\u5f0f"},(0,r.kt)("strong",{parentName:"h2"},"6. \u5176\u4ed6\u76f8\u5173\u6a21\u5f0f")),(0,r.kt)("h3",{id:"61-\u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u7ec4\u5408\u6a21\u5f0f"},(0,r.kt)("strong",{parentName:"h3"},"6.1 \u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u7ec4\u5408\u6a21\u5f0f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u804c\u8d23\u94fe\u6a21\u5f0f\u53ef\u4ee5\u548c\u7ec4\u5408\u6a21\u5f0f\u4e00\u8d77\u4f7f\u7528\uff0c\u6bd4\u5982\u628a\u804c\u8d23\u8282\u70b9\u901a\u8fc7\u7ec4\u5408\u6a21\u5f0f\u6765\u7ec4\u5408\uff0c\u4ece\u800c\u5f62\u6210\u7ec4\u5408\u8d77\u6765\u7684\u6811\u72b6\u804c\u8d23\u94fe\u3002")),(0,r.kt)("h3",{id:"62-\u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u88c5\u9970\u6a21\u5f0f"},(0,r.kt)("strong",{parentName:"h3"},"6.2 \u804c\u8d23\u94fe\u6a21\u5f0f\u4e0e\u88c5\u9970\u6a21\u5f0f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e24\u4e2a\u6a21\u5f0f\u90fd\u662f\u5728\u8fd0\u884c\u671f\u95f4\u52a8\u6001\u7ec4\u5408\uff0c\u88c5\u9970\u6a21\u5f0f\u662f\u52a8\u6001\u7ec4\u5408\u88c5\u9970\u5668\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u5bf9\u8c61\u6765\u88c5\u9970\u529f\u80fd\uff0c\u800c\u804c\u8d23\u94fe\u662f\u52a8\u6001\u7ec4\u5408\u804c\u8d23\u8282\u70b9\uff0c\u6709\u4e00\u4e2a\u804c\u8d23\u8282\u70b9\u5904\u7406\u7684\u8bdd\u5c31\u7ed3\u675f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53e6\u5916\u4ed6\u4eec\u7684\u76ee\u7684\u4e5f\u4e0d\u540c\uff0c\u88c5\u9970\u6a21\u5f0f\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u529f\u80fd\uff0c\u800c\u804c\u8d23\u94fe\u6a21\u5f0f\u662f\u8981\u5b9e\u73b0\u53d1\u9001\u8005\u548c\u63a5\u6536\u8005\u89e3\u8026\u3002")))}p.isMDXComponent=!0}}]);