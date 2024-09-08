"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"8. \u79fb\u52a8\u96f6 - 283",description:"\u53cc\u6307\u9488",last_update:{date:"08/08/2024",author:"gaohongxiang"}},l=void 0,i={unversionedId:"\u53cc\u6307\u9488/moveZeroes",id:"\u53cc\u6307\u9488/moveZeroes",title:"8. \u79fb\u52a8\u96f6 - 283",description:"\u53cc\u6307\u9488",source:"@site/leetcode/06-\u53cc\u6307\u9488/09-moveZeroes.md",sourceDirName:"06-\u53cc\u6307\u9488",slug:"/\u53cc\u6307\u9488/moveZeroes",permalink:"/website/leetcode/\u53cc\u6307\u9488/moveZeroes",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"8. \u79fb\u52a8\u96f6 - 283",description:"\u53cc\u6307\u9488",last_update:{date:"08/08/2024",author:"gaohongxiang"}},sidebar:"tutorialSidebar",previous:{title:"8. \u73af\u5f62\u94fe\u8868 II - 142",permalink:"/website/leetcode/\u53cc\u6307\u9488/detectCycle"},next:{title:"\u5341\u4e00\u3001\u5355\u8c03\u6808",permalink:"/website/leetcode/category/\u5341\u4e00\u5355\u8c03\u6808"}},p={},u=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"<strong>\ud83e\udde0 \u89e3\u9898\u601d\u8def</strong>",id:"-\u89e3\u9898\u601d\u8def",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4 ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),"\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u5c06\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," \u79fb\u52a8\u5230\u6570\u7ec4\u7684\u672b\u5c3e\uff0c\u540c\u65f6\u4fdd\u6301\u975e\u96f6\u5143\u7d20\u7684\u76f8\u5bf9\u987a\u5e8f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f")," \uff0c\u5fc5\u987b\u5728\u4e0d\u590d\u5236\u6570\u7ec4\u7684\u60c5\u51b5\u4e0b\u539f\u5730\u5bf9\u6570\u7ec4\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165: nums = [0,1,0,3,12]\n\u8f93\u51fa: [1,3,12,0,0]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165: nums = [0]\n\u8f93\u51fa: [0]\n")),(0,o.kt)("h2",{id:"-\u89e3\u9898\u601d\u8def"},(0,o.kt)("strong",{parentName:"h2"},"\ud83e\udde0 \u89e3\u9898\u601d\u8def")),(0,o.kt)("p",null,"\u4e3a\u4e86\u5728\u539f\u5730\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u53cc\u6307\u9488\u65b9\u6cd5\uff0c\u4e00\u4e2a\u6307\u9488\u7528\u4e8e\u904d\u5386\u6570\u7ec4\uff0c\u53e6\u4e00\u4e2a\u6307\u9488\u7528\u4e8e\u8bb0\u5f55\u4e0b\u4e00\u4e2a\u975e\u96f6\u5143\u7d20\u5e94\u8be5\u653e\u7f6e\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e00\u4e2a\u6307\u9488 ",(0,o.kt)("inlineCode",{parentName:"li"},"j")," \u8868\u793a\u4e0b\u4e00\u4e2a\u975e\u96f6\u5143\u7d20\u5e94\u8be5\u653e\u7f6e\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u904d\u5386\u6570\u7ec4 ",(0,o.kt)("inlineCode",{parentName:"li"},"nums"),"\uff0c\u5f53\u9047\u5230\u975e\u96f6\u5143\u7d20\u65f6\uff0c\u5c06\u5176\u8d4b\u503c\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"li"},"nums[j]"),"\uff0c\u7136\u540e ",(0,o.kt)("inlineCode",{parentName:"li"},"j")," \u5411\u524d\u79fb\u52a8\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u904d\u5386\u7ed3\u675f\u540e\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"j")," \u4e4b\u540e\u7684\u6240\u6709\u4f4d\u7f6e\u90fd\u5e94\u8be5\u586b\u5145\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var moveZeroes = function(nums) {\n    let j = 0; // j \u8868\u793a\u4e0b\u4e00\u4e2a\u975e\u96f6\u5143\u7d20\u5e94\u8be5\u653e\u7f6e\u7684\u4f4d\u7f6e\n\n    // \u904d\u5386\u6570\u7ec4\uff0c\u5c06\u975e\u96f6\u5143\u7d20\u653e\u5230\u524d\u9762\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] !== 0) {\n            nums[j] = nums[i];\n            j++;\n        }\n    }\n\n    // \u5c06\u5269\u4e0b\u7684\u90e8\u5206\u586b\u5145\u4e3a\u96f6\n    for (let i = j; i < nums.length; i++) {\n        nums[i] = 0;\n    }\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"")))}s.isMDXComponent=!0}}]);