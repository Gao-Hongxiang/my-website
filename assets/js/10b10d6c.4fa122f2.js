"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"2.JavaScript \u6570\u7ec4\u7ed3\u6784\u4e0e\u6811\u7ed3\u6784\u7684\u8f6c\u6362",last_update:{date:"12/21/2022",author:"\u9ad8\u7ea2\u7fd4"}},l=void 0,o={unversionedId:"\u9ad8\u9891\u624b\u6495\u9898/arrayToTree",id:"\u9ad8\u9891\u624b\u6495\u9898/arrayToTree",title:"2.JavaScript \u6570\u7ec4\u7ed3\u6784\u4e0e\u6811\u7ed3\u6784\u7684\u8f6c\u6362",description:"Array \u7ed3\u6784 \u8f6c Tree \u7ed3\u6784",source:"@site/leetcode/00-\u9ad8\u9891\u624b\u6495\u9898/02-arrayToTree.md",sourceDirName:"00-\u9ad8\u9891\u624b\u6495\u9898",slug:"/\u9ad8\u9891\u624b\u6495\u9898/arrayToTree",permalink:"/website/leetcode/\u9ad8\u9891\u624b\u6495\u9898/arrayToTree",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2.JavaScript \u6570\u7ec4\u7ed3\u6784\u4e0e\u6811\u7ed3\u6784\u7684\u8f6c\u6362",last_update:{date:"12/21/2022",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"1.js\u9ad8\u7ea7\u624b\u6495\u9898",permalink:"/website/leetcode/\u9ad8\u9891\u624b\u6495\u9898/js"},next:{title:"3.\u89e3\u6790 URL Params \u4e3a\u5bf9\u8c61",permalink:"/website/leetcode/\u9ad8\u9891\u624b\u6495\u9898/square"}},p={},d=[{value:"Array \u7ed3\u6784 \u8f6c Tree \u7ed3\u6784",id:"array-\u7ed3\u6784-\u8f6c-tree-\u7ed3\u6784",level:2},{value:"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5",id:"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5",level:3},{value:"\u4f7f\u7528\u5faa\u73af\u7684\u65b9\u6cd5",id:"\u4f7f\u7528\u5faa\u73af\u7684\u65b9\u6cd5",level:3},{value:"Tree \u7ed3\u6784 \u8f6c Array \u7ed3\u6784",id:"tree-\u7ed3\u6784-\u8f6c-array-\u7ed3\u6784",level:2},{value:"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5",id:"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5-1",level:3},{value:"\u8fed\u4ee3\u904d\u5386\uff08\u5229\u7528\u6808\u601d\u60f3\uff09",id:"\u8fed\u4ee3\u904d\u5386\u5229\u7528\u6808\u601d\u60f3",level:3},{value:"Tree \u7ed3\u6784\u6839\u636e ID \u627e\u8def\u5f84",id:"tree-\u7ed3\u6784\u6839\u636e-id-\u627e\u8def\u5f84",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array-\u7ed3\u6784-\u8f6c-tree-\u7ed3\u6784"},"Array \u7ed3\u6784 \u8f6c Tree \u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/** \u6570\u7ec4\u7ed3\u6784\u6570\u636e */\nconst arrayData = [\n  { id: 2, title: "\u4e2d\u56fd", parent_id: 0 },\n  { id: 3, title: "\u5e7f\u4e1c\u7701", parent_id: 2 },\n  { id: 4, title: "\u5e7f\u5dde\u5e02", parent_id: 3 },\n  { id: 5, title: "\u5929\u6cb3\u533a", parent_id: 4 },\n  { id: 6, title: "\u6e56\u5357\u7701", parent_id: 2 },\n  { id: 1, title: "\u4fc4\u7f57\u65af", parent_id: 0 },\n]\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5"},"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9012\u5f52\u9700\u5206\u4e3a\u4e24\u4e2a\u51fd\u6570\u6765\u5b8c\u6210"),(0,a.kt)("li",{parentName:"ol"},"\u4ee5\u4e3a\u8fd4\u56de\u7684\u9012\u5f52\u51fd\u6570\u4e3b\u8981\u5904\u7406\u67e5\u627e id \u6dfb\u52a0 children"),(0,a.kt)("li",{parentName:"ol"},"\u7531\u8f6c\u5316\u51fd\u6570\u5c06\u7ed3\u679c\u8fd4\u56de")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u9012\u5f52\u67e5\u627e\u6dfb\u52a0children\n * @param {\u6570\u7ec4\u6570\u636e} data\n * @param {\u5b58\u653e\u8fd4\u56de\u7ed3\u679c} result\n * @param {\u7236id} pid\n */\nfunction getChildren(data, result, pid) {\n  for (const item of data) {\n    if (item.parent_id === pid) {\n      const newItem = { children: [], ...item }\n      result.push(newItem)\n      getChildren(data, newItem.children, item.id)\n    }\n  }\n}\n\n/**\n * \u8f6c\u5316\u65b9\u6cd5\n * @param {\u6570\u7ec4\u6570\u636e} data\n * @param {\u7236id} pid\n * @returns\n */\nfunction arrayToTree(data, pid) {\n  let result = []\n  getChildren(data, result, pid)\n  return result\n}\n\nconsole.log(arrayToTree(arrayData, 0))\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u5faa\u73af\u7684\u65b9\u6cd5"},"\u4f7f\u7528\u5faa\u73af\u7684\u65b9\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6570\u7ec4\u7684 reduce \u65b9\u6cd5\u5c06\uff0cdata \u6570\u7ec4\u8f6c\u4e3a\u5bf9\u8c61\u4fdd\u5b58\u5728\u5bf9\u8c61\u53d8\u91cf obj \u4e2d\uff0c\u6bcf\u4e00\u9879\u7684 id \u4f5c\u4e3a\u5bf9\u8c61\u7684 key;"),(0,a.kt)("li",{parentName:"ol"},"\u904d\u5386 data \u6570\u7ec4\uff0c\u5224\u65ad parent_id === 0 \u7684\u4e3a\u7b2c\u4e00\u5c42\u6570\u7ec4\u5bf9\u8c61\uff0cpush \u5230 result \u6570\u7ec4\uff0c"),(0,a.kt)("li",{parentName:"ol"},"\u7ee7\u7eed\u904d\u5386\uff0c\u627e\u7239\u73b0\u573a\uff0c\u5728 2 \u4e2d\u6211\u4eec\u627e\u5230\u6570\u7ec4\u7684\u7b2c\u4e00\u5c42\u5c06\u4f5c\u4e3a\u5176\u4ed6\u5c42\u7ea7\u7684\u7236\u5c42\uff0c\n\u4f8b\u5982\uff1a \u6211\u4eec\u5728\u7b2c\u4e00\u8f6e\u7684\u65f6\u5019 const parent = obj","[item.parent_id]"," \u8fd9\u4e2a parent \u5bf9\u8c61\u5bf9\u5e94\u7684\u5c31\u662f parent_id === 0 \u7684 title = \u4e2d\u56fd\u6216\u8005\u4fc4\u7f57\u65af\u8282\u70b9,\u4f9d\u6b64\u7c7b\u63a8\u5728\u8fd9\u4e2a parent \u5bf9\u8c61\u91cc\u4e0d\u65ad\u6dfb\u52a0 children \u5c5e\u6027\uff0c\u76f4\u5230\u4ed6\u6ca1\u6709 parent_id \u4e0e\u81ea\u5df1 id \u4e00\u6837\u7684 children")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u6570\u7ec4\u7ed3\u6784\u8f6c\u4e3a\u6811\u7ed3\u6784\n * @param {*} data \u6570\u7ec4\u6570\u636e\n * @returns\n */\nfunction arrayToTree(data) {\n  const result = []\n  const obj = data.reduce((pre, cur) => {\n    pre[cur.id] = cur\n    return pre\n  }, {})\n  for (let item of data) {\n    if (item.parent_id === 0) {\n      result.push(item)\n      continue\n    }\n    if (item.parent_id in obj) {\n      const parent = obj[item.parent_id]\n      parent.children = parent.children || []\n      parent.children.push(item)\n    }\n  }\n  return result\n}\nconsole.log(arrayToTree(arrayData, 0))\n")),(0,a.kt)("h2",{id:"tree-\u7ed3\u6784-\u8f6c-array-\u7ed3\u6784"},"Tree \u7ed3\u6784 \u8f6c Array \u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/** \u6811\u72b6\u5f62\u7ed3\u6784\u6570\u636etreeData */\nconst treeData = [\n  {\n    id: 2,\n    title: "\u4e2d\u56fd",\n    parent_id: 0,\n    children: [\n      {\n        id: 3,\n        title: "\u5e7f\u4e1c\u7701",\n        parent_id: 2,\n        children: [\n          {\n            id: 4,\n            title: "\u5e7f\u5dde\u5e02",\n            parent_id: 3,\n            children: [{ id: 5, title: "\u5929\u6cb3\u533a", parent_id: 4 }],\n          },\n        ],\n      },\n      { id: 6, title: "\u6e56\u5357\u7701", parent_id: 2 },\n    ],\n  },\n  { id: 1, title: "\u4fc4\u7f57\u65af", parent_id: 0 },\n]\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5-1"},"\u4f7f\u7528\u9012\u5f52\u7684\u65b9\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6570\u7ec4\u7684 reduce \u65b9\u6cd5\uff0c \u89e3\u6784\u6570\u7ec4\u7684\u6bcf\u4e00\u9879\uff0c\u5982\u679c\u6709 children,\u5c31\u7528 concat \u4e00\u5c42\u4e00\u5c42\u7684\u62bd\u53d6\u51fa\u6765\uff0c\u4f7f\u5f97\u6bcf\u4e2a\u5bf9\u8c61\u9879\u90fd\u5305\u88f9\u5728\u4e00\u4e2a[]\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u6811\u7ed3\u6784\u6570\u7ec4\u6241\u5e73\u5316\n * @param {*} data \u6811\u7ed3\u6784\u7684\u6570\u7ec4\n * @returns\n */\nfunction treeToArray(data) {\n  return data.reduce((pre, cur) => {\n    const { children = [], ...item } = cur\n    return pre.concat([{ ...item }], treeToArray(children))\n  }, [])\n}\n")),(0,a.kt)("h3",{id:"\u8fed\u4ee3\u904d\u5386\u5229\u7528\u6808\u601d\u60f3"},"\u8fed\u4ee3\u904d\u5386\uff08\u5229\u7528\u6808\u601d\u60f3\uff09"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e8c\u53c9\u6811\u7684\u524d\u4e2d\u540e\u5e8f\u7684\u8fed\u4ee3\u904d\u5386"),(0,a.kt)("li",{parentName:"ol"},"\u4e8c\u53c9\u6811\u7684\u5c42\u5e8f\u904d\u5386")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u6811\u7ed3\u6784\u6570\u7ec4\u6241\u5e73\u5316\n * @param {*} data \u6811\u7ed3\u6784\u7684\u6570\u7ec4\n * @returns\n */\nfunction treeToArray(arr) {\n  const result = []\n  const stack = [...arr]\n  while (stack.length) {\n    const cur = stack.pop()\n    const { children = [], ...items } = cur\n    result.push(items)\n    if (children.length > 0) stack.push(...children)\n  }\n  return result\n}\nconsole.log(treeToArray(treeData))\n")),(0,a.kt)("h2",{id:"tree-\u7ed3\u6784\u6839\u636e-id-\u627e\u8def\u5f84"},"Tree \u7ed3\u6784\u6839\u636e ID \u627e\u8def\u5f84"),(0,a.kt)("p",null,"\u4f7f\u7528\u76ee\u5f55\u7684\u65f6\u5019\u4f1a\u6709\u8fd9\u6837\u7684\u9700\u6c42\uff0c\u6839\u636e id \u67e5\u627e\u6240\u5728\u76ee\u5f55\u8def\u5f84\uff0c\u4e5f\u662f\u9012\u5f52\u5b9e\u73b0\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u904d\u5386\u6811\u7ed3\u6784\u6570\u7ec4\uff0c\u5224\u65ad id \u662f\u5426\u4e3a\u5f53\u524d\u9879\u7684 id,\u662f\u5c31\u8fd4\u56de\u5f53\u524d\u76ee\u5f55\u540d\u8bcd"),(0,a.kt)("li",{parentName:"ol"},"\u5224\u65ad\u5f53\u524d\u9879\u662f\u5426\u6709 children \u4f9d\u6b64\u9012\u5f52\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u6839\u636eid\u67e5\u627e\u6240\u5728\u76ee\u5f55\u8def\u5f84\n * @param {\u6811\u7ed3\u6784\u7684\u6570\u7ec4\u6570\u636e} tree\n * @param {\u8981\u67e5\u627e\u7684id} id\n * @param {\u521d\u59cb\u8def\u5f84} path\n * @returns\n */\nfunction parseTreePath(tree, id, path = "") {\n  for (let i = 0; i < tree.length; i++) {\n    let tempPath = path\n    // \u907f\u514d\u51fa\u73b0\u5728\u6700\u524d\u9762\u7684/\n    tempPath = `${tempPath ? tempPath + "/ " : tempPath}${tree[i].title}`\n    if (tree[i].id == id) return tempPath\n    else if (tree[i].children) {\n      let reuslt = parseTreePath(tree[i].children, id, tempPath)\n      if (reuslt) return reuslt\n    }\n  }\n}\n\nfunction parseTreePath(tree, id, path = "") {\n  let path = [] //\u7528\u6765\u5b58\u653e\u7b26\u5408\u6761\u4ef6\u7ed3\u679c\n  // startIndex \u5f00\u59cb\u641c\u7d22\u7684\u4f4d\u7f6e\n  const combineHelper = (n, k, startIndex) => {\n    if (path.length === k) {\n      //\u56de\u6eaf\u51fd\u6570\u7ec8\u6b62\u6761\u4ef6\n      result.push([...path])\n      return\n    }\n    //\u4f18\u5316\u526a\u652f \u5f53\u5269\u4e0b\u7684\u5b50\u53f6\u5c0f\u4e8e\u9700\u8981\u9700\u8981\u7684\u5b50\u53f6\u65f6\u5019\u505c\u6b62\n    for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {\n      path.push(i) //\u5904\u7406\u8282\u70b9\n      combineHelper(n, k, i + 1) //\u9012\u5f52\n      path.pop() //\u56de\u6eaf\uff0c\u64a4\u9500\u5904\u7406\u7684\u8282\u70b9\n    }\n  }\n  combineHelper(n, k, 1)\n  return result\n}\n\nconsole.log(parseTreePath(treeData, 5))\n')))}u.isMDXComponent=!0}}]);