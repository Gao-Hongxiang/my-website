"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={title:"13. \u5de6\u53f6\u5b50\u4e4b\u548c",last_update:{date:"12/31/2022",author:"\u9ad8\u7ea2\u7fd4"}},a=void 0,i={unversionedId:"\u4e8c\u53c9\u6811/sumOfLeftLeaves",id:"\u4e8c\u53c9\u6811/sumOfLeftLeaves",title:"13. \u5de6\u53f6\u5b50\u4e4b\u548c",description:"\u9898\u76ee",source:"@site/leetcode/04-\u4e8c\u53c9\u6811/13-sumOfLeftLeaves.md",sourceDirName:"04-\u4e8c\u53c9\u6811",slug:"/\u4e8c\u53c9\u6811/sumOfLeftLeaves",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/sumOfLeftLeaves",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"13. \u5de6\u53f6\u5b50\u4e4b\u548c",last_update:{date:"12/31/2022",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"12. \u4e8c\u53c9\u6811\u7684\u6240\u6709\u8def\u5f84",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/allPath"},next:{title:"14. \u627e\u6811\u5de6\u4e0b\u89d2\u7684\u503c",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/findBottomLeftValue"}},p={},s=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u7b54\u6848",id:"\u7b54\u6848",level:2},{value:"\u9012\u5f52\u6cd5",id:"\u9012\u5f52\u6cd5",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \uff0c\u8fd4\u56de\u6240\u6709\u5de6\u53f6\u5b50\u4e4b\u548c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg",alt:"img"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165: root = [3,9,20,null,null,15,7]\n\u8f93\u51fa: 24\n\u89e3\u91ca: \u5728\u8fd9\u4e2a\u4e8c\u53c9\u6811\u4e2d\uff0c\u6709\u4e24\u4e2a\u5de6\u53f6\u5b50\uff0c\u5206\u522b\u662f 9 \u548c 15\uff0c\u6240\u4ee5\u8fd4\u56de 24\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165: root = [1]\n\u8f93\u51fa: 0\n")),(0,o.kt)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09"),(0,o.kt)("p",null,"\u94fe\u63a5\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/sum-of-left-leaves/description/"},"https://leetcode.cn/problems/sum-of-left-leaves/description/")),(0,o.kt)("h2",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,o.kt)("h3",{id:"\u9012\u5f52\u6cd5"},"\u9012\u5f52\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {TreeNode} root\n * @return {number}\n */\n//\u91c7\u7528\u524d\u5e8f\u904d\u5386\nvar sumOfLeftLeaves = function (root) {\n  let res = 0\n  if (!root) return res\n  helper(root)\n  function helper(node) {\n    if (node.left && !node.left.left && !node.left.right) {\n      res += node.left.val\n    }\n    node.left && helper(node.left)\n\n    node.right && helper(node.right)\n  }\n\n  return res\n}\n")))}c.isMDXComponent=!0}}]);