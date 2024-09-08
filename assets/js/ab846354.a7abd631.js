"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const o={title:"5. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",description:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386 \u961f\u5217\u601d\u60f3",last_update:{date:"12/26/2022",author:"\u9ad8\u7ea2\u7fd4"}},a=void 0,p={unversionedId:"\u4e8c\u53c9\u6811/levelOrder",id:"\u4e8c\u53c9\u6811/levelOrder",title:"5. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",description:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386 \u961f\u5217\u601d\u60f3",source:"@site/leetcode/04-\u4e8c\u53c9\u6811/05-levelOrder.md",sourceDirName:"04-\u4e8c\u53c9\u6811",slug:"/\u4e8c\u53c9\u6811/levelOrder",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/levelOrder",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. \u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386",description:"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386 \u961f\u5217\u601d\u60f3",last_update:{date:"12/26/2022",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"4. \u4e8c\u53c9\u6811\u7684\u7edf\u4e00\u8fed\u4ee3\u6cd5",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/traversal\u7edf\u4e00\u8fed\u4ee3"},next:{title:"6. \u7ffb\u8f6c\u4e8c\u53c9\u6811",permalink:"/website/leetcode/\u4e8c\u53c9\u6811/invertTree"}},i={},u=[{value:"\u89e3\u9898",id:"\u89e3\u9898",level:2},{value:"\u8fd4\u56de\u4e8c\u7ef4\u6570\u7ec4",id:"\u8fd4\u56de\u4e8c\u7ef4\u6570\u7ec4",level:3},{value:"\u8fd4\u56de\u4e00\u7ef4\u6570\u7ec4",id:"\u8fd4\u56de\u4e00\u7ef4\u6570\u7ec4",level:3}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e8c\u53c9\u6811\u7684\u6839\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," \uff0c\u8fd4\u56de\u5176\u8282\u70b9\u503c\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5c42\u5e8f\u904d\u5386")," \u3002 \uff08\u5373\u9010\u5c42\u5730\uff0c\u4ece\u5de6\u5230\u53f3\u8bbf\u95ee\u6240\u6709\u8282\u70b9\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg",alt:"img"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1aroot = [3,9,20,null,null,15,7]\n\u8f93\u51fa\uff1a[[3],[9,20],[15,7]]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1aroot = [1]\n\u8f93\u51fa\uff1a[[1]]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1aroot = []\n\u8f93\u51fa\uff1a[]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6811\u4e2d\u8282\u70b9\u6570\u76ee\u5728\u8303\u56f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, 2000]")," \u5185")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"-1000 <= Node.val <= 1000")),(0,l.kt)("p",{parentName:"li"},"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/binary-tree-level-order-traversal/description/"},"https://leetcode.cn/problems/binary-tree-level-order-traversal/description/")))),(0,l.kt)("h2",{id:"\u89e3\u9898"},"\u89e3\u9898"),(0,l.kt)("h3",{id:"\u8fd4\u56de\u4e8c\u7ef4\u6570\u7ec4"},"\u8fd4\u56de\u4e8c\u7ef4\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var levelOrder = function (root) {\n  /* \u975e\u9012\u5f52\u7684\u5b9e\u73b0\u65b9\u5f0f */\n  let res = []\n  if (root == null) return res\n  let queue = [root] //\u6839\u8282\u70b9\u5165\u961f\n  // while \u5faa\u73af\u63a7\u5236\u4ece\u4e0a\u5411\u4e0b\u4e00\u5c42\u5c42\u904d\u5386\n  while (queue.length) {\n    let size = queue.length //\u672c\u6b21\u904d\u5386\u7684\u6570\u91cf\n    // \u8bb0\u5f55\u8fd9\u4e00\u5c42\u7684\u8282\u70b9\u503c\n    let level = []\n    // for \u5faa\u73af\u63a7\u5236\u6bcf\u4e00\u5c42\u4ece\u5de6\u5411\u53f3\u904d\u5386\n    for (let i = 0; i < size; i++) {\n      let cur = queue.shift()\n      level.push(cur.val)\n      //\u5de6\u53f3\u8282\u70b9\u5165\u961f\n      if (cur.left != null) queue.push(cur.left)\n      if (cur.right != null) queue.push(cur.right)\n    }\n    res.push(level)\n  }\n  return res\n}\n")),(0,l.kt)("h3",{id:"\u8fd4\u56de\u4e00\u7ef4\u6570\u7ec4"},"\u8fd4\u56de\u4e00\u7ef4\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function BFS(root) {\n  const res = []\n  if (!root) return res\n  const queue = [] // \u521d\u59cb\u5316\u961f\u5217queue\n  // \u6839\u7ed3\u70b9\u9996\u5148\u5165\u961f\n  queue.push(root)\n  // \u961f\u5217\u4e0d\u4e3a\u7a7a\uff0c\u8bf4\u660e\u6ca1\u6709\u904d\u5386\u5b8c\u5168\n  while (queue.length) {\n    const top = queue.shift() // \u53d6\u51fa\u961f\u5934\u5143\u7d20\n    res.push(top.val)\n    // \u5de6\u53f3\u8282\u70b9\u5165\u961f\n    if (top.left) queue.push(top.left)\n    if (top.right) queue.push(top.right)\n  }\n}\n")))}c.isMDXComponent=!0}}]);