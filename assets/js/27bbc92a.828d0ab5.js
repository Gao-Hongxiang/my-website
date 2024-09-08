"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"8. \u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4 - 49",last_update:{date:"02/08/2023",author:"\u9ad8\u7ea2\u7fd4"}},p=void 0,l={unversionedId:"\u6570\u7ec4/groupAnagrams",id:"\u6570\u7ec4/groupAnagrams",title:"8. \u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4 - 49",description:"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u8bf7\u4f60\u5c06 \u5b57\u6bcd\u5f02\u4f4d\u8bcd \u7ec4\u5408\u5728\u4e00\u8d77\u3002\u53ef\u4ee5\u6309\u4efb\u610f\u987a\u5e8f\u8fd4\u56de\u7ed3\u679c\u5217\u8868\u3002",source:"@site/leetcode/01-\u6570\u7ec4/08-groupAnagrams.md",sourceDirName:"01-\u6570\u7ec4",slug:"/\u6570\u7ec4/groupAnagrams",permalink:"/website/leetcode/\u6570\u7ec4/groupAnagrams",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"8. \u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4 - 49",last_update:{date:"02/08/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"7. \u6700\u957f\u8fde\u7eed\u5e8f\u5217 - 128",permalink:"/website/leetcode/\u6570\u7ec4/longestConsecutive"},next:{title:"\u56db\u3001\u5b57\u7b26\u4e32",permalink:"/website/leetcode/category/\u56db\u5b57\u7b26\u4e32"}},s={},i=[{value:"\ud83e\udde0 \u89e3\u9898\u601d\u8def",id:"-\u89e3\u9898\u601d\u8def",level:2},{value:"\u54c8\u5e0c",id:"\u54c8\u5e0c",level:3}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u8bf7\u4f60\u5c06 ",(0,a.kt)("strong",{parentName:"p"},"\u5b57\u6bcd\u5f02\u4f4d\u8bcd")," \u7ec4\u5408\u5728\u4e00\u8d77\u3002\u53ef\u4ee5\u6309\u4efb\u610f\u987a\u5e8f\u8fd4\u56de\u7ed3\u679c\u5217\u8868\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b57\u6bcd\u5f02\u4f4d\u8bcd")," \u662f\u7531\u91cd\u65b0\u6392\u5217\u6e90\u5355\u8bcd\u7684\u6240\u6709\u5b57\u6bcd\u5f97\u5230\u7684\u4e00\u4e2a\u65b0\u5355\u8bcd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8f93\u5165: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]\n\u8f93\u51fa: [["bat"],["nat","tan"],["ate","eat","tea"]]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8f93\u5165: strs = [""]\n\u8f93\u51fa: [[""]]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u8f93\u5165: strs = ["a"]\n\u8f93\u51fa: [["a"]]\n')),(0,a.kt)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/group-anagrams/description/"},"https://leetcode.cn/problems/group-anagrams/description/")),(0,a.kt)("h2",{id:"-\u89e3\u9898\u601d\u8def"},"\ud83e\udde0 \u89e3\u9898\u601d\u8def"),(0,a.kt)("h3",{id:"\u54c8\u5e0c"},"\u54c8\u5e0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var groupAnagrams = function (strs) {\n  const map = new Map()\n  for (let str of strs) {\n    const sortStr = str.split("").sort().join("")\n    if (!map.has(sortStr)) {\n      map.set(sortStr, [])\n    }s\n    map.get(sortStr).push(str)\n  }\n\n  return Array.from(map.values())\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528\u5b57\u7b26\u4e32\u7ebf\u5207\u5272\u518d\u6392\u5e8f\u4f5c\u4e3amap\u7684Key ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  const sortStr = str.split("").sort().join("")\n')))}u.isMDXComponent=!0}}]);