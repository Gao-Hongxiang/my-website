"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||a;return t?i.createElement(k,d(d({ref:n},p),{},{components:t})):i.createElement(k,d({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var s=2;s<a;s++)d[s]=t[s];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={title:"3. \u8bbe\u8ba1\u94fe\u8868 - 707",description:"\u94fe\u8868",last_update:{date:"02/03/2023",author:"\u9ad8\u7ea2\u7fd4"}},d=void 0,l={unversionedId:"\u94fe\u8868/MyLinkedList",id:"\u94fe\u8868/MyLinkedList",title:"3. \u8bbe\u8ba1\u94fe\u8868 - 707",description:"\u94fe\u8868",source:"@site/leetcode/03-\u94fe\u8868/03-MyLinkedList.md",sourceDirName:"03-\u94fe\u8868",slug:"/\u94fe\u8868/MyLinkedList",permalink:"/website/leetcode/\u94fe\u8868/MyLinkedList",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. \u8bbe\u8ba1\u94fe\u8868 - 707",description:"\u94fe\u8868",last_update:{date:"02/03/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"2. \u79fb\u9664\u94fe\u8868\u5143\u7d20 - 203",permalink:"/website/leetcode/\u94fe\u8868/removeElements"},next:{title:"4. \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868 -21",permalink:"/website/leetcode/\u94fe\u8868/mergeTwoLists  copy"}},o={},s=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u89e3\u7b54",id:"\u89e3\u7b54",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,r.kt)("p",null,"\u8bbe\u8ba1\u94fe\u8868\u7684\u5b9e\u73b0\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u5355\u94fe\u8868\u6216\u53cc\u94fe\u8868\u3002\u5355\u94fe\u8868\u4e2d\u7684\u8282\u70b9\u5e94\u8be5\u5177\u6709\u4e24\u4e2a\u5c5e\u6027\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"val")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"val")," \u662f\u5f53\u524d\u8282\u70b9\u7684\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"next")," \u662f\u6307\u5411\u4e0b\u4e00\u4e2a\u8282\u70b9\u7684\u6307\u9488/\u5f15\u7528\u3002\u5982\u679c\u8981\u4f7f\u7528\u53cc\u5411\u94fe\u8868\uff0c\u5219\u8fd8\u9700\u8981\u4e00\u4e2a\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"prev")," \u4ee5\u6307\u793a\u94fe\u8868\u4e2d\u7684\u4e0a\u4e00\u4e2a\u8282\u70b9\u3002\u5047\u8bbe\u94fe\u8868\u4e2d\u7684\u6240\u6709\u8282\u70b9\u90fd\u662f 0-index \u7684\u3002"),(0,r.kt)("p",null,"\u5728\u94fe\u8868\u7c7b\u4e2d\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get(index)\uff1a\u83b7\u53d6\u94fe\u8868\u4e2d\u7b2c ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," \u4e2a\u8282\u70b9\u7684\u503c\u3002\u5982\u679c\u7d22\u5f15\u65e0\u6548\uff0c\u5219\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"addAtHead(val)\uff1a\u5728\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u524d\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"val")," \u7684\u8282\u70b9\u3002\u63d2\u5165\u540e\uff0c\u65b0\u8282\u70b9\u5c06\u6210\u4e3a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"addAtTail(val)\uff1a\u5c06\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"val")," \u7684\u8282\u70b9\u8ffd\u52a0\u5230\u94fe\u8868\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002"),(0,r.kt)("li",{parentName:"ul"},"addAtIndex(index,val)\uff1a\u5728\u94fe\u8868\u4e2d\u7684\u7b2c ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," \u4e2a\u8282\u70b9\u4e4b\u524d\u6dfb\u52a0\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"val")," \u7684\u8282\u70b9\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," \u7b49\u4e8e\u94fe\u8868\u7684\u957f\u5ea6\uff0c\u5219\u8be5\u8282\u70b9\u5c06\u9644\u52a0\u5230\u94fe\u8868\u7684\u672b\u5c3e\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," \u5927\u4e8e\u94fe\u8868\u957f\u5ea6\uff0c\u5219\u4e0d\u4f1a\u63d2\u5165\u8282\u70b9\u3002\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"li"},"index"),"\u5c0f\u4e8e 0\uff0c\u5219\u5728\u5934\u90e8\u63d2\u5165\u8282\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"deleteAtIndex(index)\uff1a\u5982\u679c\u7d22\u5f15 ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," \u6709\u6548\uff0c\u5219\u5220\u9664\u94fe\u8868\u4e2d\u7684\u7b2c ",(0,r.kt)("inlineCode",{parentName:"li"},"index")," \u4e2a\u8282\u70b9\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"MyLinkedList linkedList = new MyLinkedList();\nlinkedList.addAtHead(1);\nlinkedList.addAtTail(3);\nlinkedList.addAtIndex(1,2);   //\u94fe\u8868\u53d8\u4e3a1-> 2-> 3\nlinkedList.get(1);            //\u8fd4\u56de2\nlinkedList.deleteAtIndex(1);  //\u73b0\u5728\u94fe\u8868\u662f1-> 3\nlinkedList.get(1);            //\u8fd4\u56de3\n")),(0,r.kt)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09"),(0,r.kt)("p",null,"\u94fe\u63a5\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/design-linked-list/"},"https://leetcode.cn/problems/design-linked-list/")),(0,r.kt)("h2",{id:"\u89e3\u7b54"},"\u89e3\u7b54"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class LinkNode {\n  constructor(val, next) {\n    this.val = val\n    this.next = next\n  }\n}\n/**\n * Initialize your data structure here.\n * \u5355\u94fe\u8868 \u50a8\u5b58\u5934\u5c3e\u8282\u70b9 \u548c \u8282\u70b9\u6570\u91cf\n */\nvar MyLinkedList = function () {\n  this._size = 0\n  this._tail = null\n  this._head = null\n}\nMyLinkedList.prototype.getNode = function (index) {\n  // \u521b\u5efa\u865a\u62df\u5934\u8282\u70b9\n  let cur = new LinkNode(0, this._head)\n  // 0 -> head\n  while (index >= 0) {\n    cur = cur.next\n    index--\n  }\n  return cur\n}\n\n/**\n * @param {number} index\n * @return {number}\n */\nMyLinkedList.prototype.get = function (index) {\n  if (index < 0 || index >= this._size) return -1\n  // \u83b7\u53d6\u5f53\u524d\u8282\u70b9\n  return this.getNode(index).val\n}\n\n/**\n * @param {number} val\n * @return {void}\n */\nMyLinkedList.prototype.addAtHead = function (val) {\n  const node = new LinkNode(val, this._head) //\u6dfb\u52a0\u5934\u8282\u70b9\n  this._size++ //\u4fee\u6539\u603b\u6570\n  if (this._head) {\n    this._head = node //\u4fee\u6539\u5934\u6307\u9488\n    return\n  }\n  //\u521d\u59cb\u503c\u4e3a\u7a7a\u7684\u60c5\u51b5\n  this._tail = node\n  this._head = node\n}\n\n/**\n * @param {number} val\n * @return {void}\n */\nMyLinkedList.prototype.addAtTail = function (val) {\n  const node = new LinkNode(val, null) //\u521d\u59cb\u5316\u5c3e\u6307\u9488\n  this._size++\n  //\u672c\u6765\u5b58\u5728\u5c3e\u6307\u9488\u7684\u60c5\u51b5\n  if (this._tail) {\n    this._tail.next = node\n    this._tail = node //\u4fee\u6539\u5c3e\u6307\u9488\n    return\n  }\n  //\u521d\u59cb\u503c\u4e3a\u7a7a\u7684\u60c5\u51b5\n  this._tail = node\n  this._head = node\n}\n\n/**\n * @param {number} index\n * @param {number} val\n * @return {void}\n */\nMyLinkedList.prototype.addAtIndex = function (index, val) {\n  if (index > this._size) return\n  if (index <= 0) {\n    this.addAtHead(val)\n    return\n  }\n  if (index === this._size) {\n    this.addAtTail(val)\n    return\n  }\n  // \u83b7\u53d6\u76ee\u6807\u8282\u70b9\u7684\u4e0a\u4e00\u4e2a\u7684\u8282\u70b9\n  const node = this.getNode(index - 1)\n  node.next = new LinkNode(val, node.next)\n  this._size++\n}\n\n/**\n * @param {number} index\n * @return {void}\n */\nMyLinkedList.prototype.deleteAtIndex = function (index) {\n  if (index < 0 || index >= this._size) return\n  if (index === 0) {\n    this._head = this._head.next\n    // \u5982\u679c\u5220\u9664\u7684\u8fd9\u4e2a\u8282\u70b9\u540c\u65f6\u662f\u5c3e\u8282\u70b9\uff0c\u8981\u5904\u7406\u5c3e\u8282\u70b9\n    if (index === this._size - 1) {\n      this._tail = this._head\n    }\n    this._size--\n    return\n  }\n  // \u83b7\u53d6\u76ee\u6807\u8282\u70b9\u7684\u4e0a\u4e00\u4e2a\u7684\u8282\u70b9\n  const node = this.getNode(index - 1)\n  node.next = node.next.next\n  // \u5904\u7406\u5c3e\u8282\u70b9\n  if (index === this._size - 1) {\n    this._tail = node\n  }\n  this._size--\n}\n")))}u.isMDXComponent=!0}}]);