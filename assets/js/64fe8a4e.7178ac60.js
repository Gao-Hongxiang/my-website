"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"3. \u79fb\u9664\u5143\u7d20 - 27",description:"\u8003\u5bdfhasMap",last_update:{date:"02/08/2023",author:"\u9ad8\u7ea2\u7fd4"}},l=void 0,i={unversionedId:"\u6570\u7ec4/removeElement",id:"\u6570\u7ec4/removeElement",title:"3. \u79fb\u9664\u5143\u7d20 - 27",description:"\u8003\u5bdfhasMap",source:"@site/leetcode/01-\u6570\u7ec4/03-removeElement.md",sourceDirName:"01-\u6570\u7ec4",slug:"/\u6570\u7ec4/removeElement",permalink:"/website/leetcode/\u6570\u7ec4/removeElement",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. \u79fb\u9664\u5143\u7d20 - 27",description:"\u8003\u5bdfhasMap",last_update:{date:"02/08/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"2. \u4e8c\u5206\u67e5\u627e- 704",permalink:"/website/leetcode/\u6570\u7ec4/search"},next:{title:"4. \u6709\u5e8f\u6570\u7ec4\u7684\u5e73\u65b9 - 977",permalink:"/website/leetcode/\u6570\u7ec4/sortedSquares"}},c={},p=[{value:"\ud83e\udde0 \u89e3\u9898\u601d\u8def",id:"-\u89e3\u9898\u601d\u8def",level:2},{value:"\u5feb\u6162\u6307\u9488",id:"\u5feb\u6162\u6307\u9488",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u503c val\uff0c\u4f60\u9700\u8981 \u539f\u5730 \u79fb\u9664\u6240\u6709\u6570\u503c\u7b49\u4e8e val \u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u79fb\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"\u4e0d\u8981\u4f7f\u7528\u989d\u5916\u7684\u6570\u7ec4\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u4ec5\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u5e76 \u539f\u5730 \u4fee\u6539\u8f93\u5165\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u5143\u7d20\u7684\u987a\u5e8f\u53ef\u4ee5\u6539\u53d8\u3002\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002"),(0,a.kt)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-search/"},"https://leetcode.cn/problems/binary-search/")),(0,a.kt)("h2",{id:"-\u89e3\u9898\u601d\u8def"},"\ud83e\udde0 \u89e3\u9898\u601d\u8def"),(0,a.kt)("h3",{id:"\u5feb\u6162\u6307\u9488"},"\u5feb\u6162\u6307\u9488"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u65f6\u95f4\u590d\u6742\u5ea6\uff1aO(n)\n//\u7a7a\u95f4\u590d\u6742\u5ea6\uff1aO(1)\nvar removeElement = (nums, val) => {\n  let k = 0\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] != val) {\n      nums[k++] = nums[i]\n    }\n  }\n  return k\n}\n")))}u.isMDXComponent=!0}}]);