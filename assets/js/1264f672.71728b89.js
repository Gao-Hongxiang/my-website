"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={title:"14. \u627e\u6811\u5de6\u4e0b\u89d2\u7684\u503c",last_update:{date:"12/31/2022",author:"\u9ad8\u7ea2\u7fd4"}},a=void 0,u={unversionedId:"\u4e8c\u53c9\u6811/findBottomLeftValue",id:"\u4e8c\u53c9\u6811/findBottomLeftValue",title:"14. \u627e\u6811\u5de6\u4e0b\u89d2\u7684\u503c",description:"\u9898\u76ee",source:"@site/leetcode/04-\u4e8c\u53c9\u6811/14-findBottomLeftValue.md",sourceDirName:"04-\u4e8c\u53c9\u6811",slug:"/\u4e8c\u53c9\u6811/findBottomLeftValue",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/findBottomLeftValue",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"14. \u627e\u6811\u5de6\u4e0b\u89d2\u7684\u503c",last_update:{date:"12/31/2022",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"13. \u5de6\u53f6\u5b50\u4e4b\u548c",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/sumOfLeftLeaves"},next:{title:"15. \u8def\u5f84\u603b\u548c",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/pathSum"}},i={},p=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u7b54\u6848",id:"\u7b54\u6848",level:2},{value:"\u8fed\u4ee3\u6cd5",id:"\u8fed\u4ee3\u6cd5",level:3},{value:"\u9012\u5f52\u6cd5",id:"\u9012\u5f52\u6cd5",level:3}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \uff0c\u8fd4\u56de\u6240\u6709\u5de6\u53f6\u5b50\u4e4b\u548c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg",alt:"img"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165: root = [3,9,20,null,null,15,7]\n\u8f93\u51fa: 24\n\u89e3\u91ca: \u5728\u8fd9\u4e2a\u4e8c\u53c9\u6811\u4e2d\uff0c\u6709\u4e24\u4e2a\u5de6\u53f6\u5b50\uff0c\u5206\u522b\u662f 9 \u548c 15\uff0c\u6240\u4ee5\u8fd4\u56de 24\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u8f93\u5165: root = [1]\n\u8f93\u51fa: 0\n")),(0,o.kt)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09"),(0,o.kt)("p",null,"\u94fe\u63a5\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/sum-of-left-leaves/description/"},"https://leetcode.cn/problems/sum-of-left-leaves/description/")),(0,o.kt)("h2",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,o.kt)("h3",{id:"\u8fed\u4ee3\u6cd5"},"\u8fed\u4ee3\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar findBottomLeftValue = function (root) {\n  //\u8003\u8651\u5c42\u5e8f\u904d\u5386 \u8bb0\u5f55\u6700\u540e\u4e00\u884c\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\n  let queue = []\n  if (root === null) {\n    return null\n  }\n  queue.push(root)\n  let resNode\n  while (queue.length) {\n    let length = queue.length\n    for (let i = 0; i < length; i++) {\n      let node = queue.shift()\n      if (i === 0) {\n        resNode = node.val\n      }\n      node.left && queue.push(node.left)\n      node.right && queue.push(node.right)\n    }\n  }\n  return resNode\n}\n")),(0,o.kt)("h3",{id:"\u9012\u5f52\u6cd5"},"\u9012\u5f52\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var findBottomLeftValue = function (root) {\n  //\u9996\u5148\u8003\u8651\u9012\u5f52\u904d\u5386 \u524d\u5e8f\u904d\u5386 \u627e\u5230\u6700\u5927\u6df1\u5ea6\u7684\u53f6\u5b50\u8282\u70b9\u5373\u53ef\n  let maxPath = 0,\n    resNode = null\n  // 1. \u786e\u5b9a\u9012\u5f52\u51fd\u6570\u7684\u51fd\u6570\u53c2\u6570\n  const dfsTree = function (node, curPath) {\n    // 2. \u786e\u5b9a\u9012\u5f52\u51fd\u6570\u7ec8\u6b62\u6761\u4ef6\n    if (node.left === null && node.right === null) {\n      if (curPath > maxPath) {\n        maxPath = curPath\n        resNode = node.val\n      }\n    }\n    node.left && dfsTree(node.left, curPath + 1)\n    node.right && dfsTree(node.right, curPath + 1)\n  }\n  dfsTree(root, 1)\n  return resNode\n}\n")))}s.isMDXComponent=!0}}]);