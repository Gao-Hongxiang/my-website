"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const i={title:"4. \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868 -21",description:"\u94fe\u8868",last_update:{date:"02/03/2023",author:"\u9ad8\u7ea2\u7fd4"}},o=void 0,a={unversionedId:"\u94fe\u8868/mergeTwoLists  copy",id:"\u94fe\u8868/mergeTwoLists  copy",title:"4. \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868 -21",description:"\u94fe\u8868",source:"@site/leetcode/03-\u94fe\u8868/04-mergeTwoLists  copy.md",sourceDirName:"03-\u94fe\u8868",slug:"/\u94fe\u8868/mergeTwoLists  copy",permalink:"/website/leetcode/\u94fe\u8868/mergeTwoLists  copy",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. \u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u94fe\u8868 -21",description:"\u94fe\u8868",last_update:{date:"02/03/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"3. \u8bbe\u8ba1\u94fe\u8868 - 707",permalink:"/website/leetcode/\u94fe\u8868/MyLinkedList"},next:{title:"5. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20 - 86",permalink:"/website/leetcode/\u94fe\u8868/deleteDuplicateElementsList"}},s={},c=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u89e3\u7b54",id:"\u89e3\u7b54",level:2},{value:"\u53cc\u6307\u9488",id:"\u53cc\u6307\u9488",level:3},{value:"\u9012\u5f52",id:"\u9012\u5f52",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,l.kt)("p",null,"\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/merge-two-sorted-lists/"},"https://leetcode.cn/problems/merge-two-sorted-lists/")),(0,l.kt)("h2",{id:"\u89e3\u7b54"},"\u89e3\u7b54"),(0,l.kt)("h3",{id:"\u53cc\u6307\u9488"},"\u53cc\u6307\u9488"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const mergeTwoLists = function (l1, l2) {\n  // \u5b9a\u4e49\u5934\u7ed3\u70b9\uff0c\u786e\u4fdd\u94fe\u8868\u53ef\u4ee5\u88ab\u8bbf\u95ee\u5230\n  let head = new ListNode()\n  // cur \u8fd9\u91cc\u5c31\u662f\u54b1\u4eec\u90a3\u6839\u201c\u9488\u201d\n  let cur = head\n  // \u201c\u9488\u201d\u5f00\u59cb\u5728 l1 \u548c l2 \u95f4\u7a7f\u68ad\u4e86\n  while (l1 && l2) {\n    // \u5982\u679c l1 \u7684\u7ed3\u70b9\u503c\u8f83\u5c0f\n    if (l1.val <= l2.val) {\n      // \u5148\u4e32\u8d77 l1 \u7684\u7ed3\u70b9\n      cur.next = l1\n      // l1 \u6307\u9488\u5411\u524d\u4e00\u6b65\n      l1 = l1.next\n    } else {\n      // l2 \u8f83\u5c0f\u65f6\uff0c\u4e32\u8d77 l2 \u7ed3\u70b9\n      cur.next = l2\n      // l2 \u5411\u524d\u4e00\u6b65\n      l2 = l2.next\n    }\n\n    // \u201c\u9488\u201d\u5728\u4e32\u8d77\u4e00\u4e2a\u7ed3\u70b9\u540e\uff0c\u4e5f\u4f1a\u5f80\u524d\u4e00\u6b65\n    cur = cur.next\n  }\n\n  // \u5904\u7406\u94fe\u8868\u4e0d\u7b49\u957f\u7684\u60c5\u51b5\n  cur.next = l1 !== null ? l1 : l2\n  // \u8fd4\u56de\u8d77\u59cb\u7ed3\u70b9\n  return head.next\n}\n")),(0,l.kt)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var mergeTwoLists = function (list1, list2) {\n  if (!list1) return list2\n  if (!list2) return list1\n  if (list1.val > list2.val) {\n    list2.next = mergeTwoLists(list1, list2.next)\n    return list2\n  } else {\n    list1.next = mergeTwoLists(list1.next, list2)\n    return list1\n  }\n}\n")))}p.isMDXComponent=!0}}]);