"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4175],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(r),d=o,m=k["".concat(c,".").concat(d)]||k[d]||p[d]||a;return r?t.createElement(m,l(l({ref:n},u),{},{components:r})):t.createElement(m,l({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=k;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9455:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(7462),o=(r(7294),r(3905));const a={title:"React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\uff1a\u4ece\u6279\u5904\u7406\u5230 Fiber \u6811\u6784\u5efa",last_update:{date:"09/08/2024",author:"\u9ad8\u7ea2\u7fd4"}},l=void 0,i={unversionedId:"09React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790",id:"09React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790",title:"React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\uff1a\u4ece\u6279\u5904\u7406\u5230 Fiber \u6811\u6784\u5efa",description:"React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\uff1a\u4ece\u6279\u5904\u7406\u5230 Fiber \u6811\u6784\u5efa",source:"@site/react/09React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790.md",sourceDirName:".",slug:"/09React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790",permalink:"/website/react/09React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790",draft:!1,tags:[],version:"current",frontMatter:{title:"React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\uff1a\u4ece\u6279\u5904\u7406\u5230 Fiber \u6811\u6784\u5efa",last_update:{date:"09/08/2024",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"scheduleCallback \u5b9e\u73b0",permalink:"/website/react/08scheduleCallback"}},c={},s=[{value:"React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\uff1a\u4ece\u6279\u5904\u7406\u5230 Fiber \u6811\u6784\u5efa",id:"react-\u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\u4ece\u6279\u5904\u7406\u5230-fiber-\u6811\u6784\u5efa",level:3},{value:"1. React \u72b6\u6001\u66f4\u65b0\u7684\u6279\u5904\u7406\u673a\u5236",id:"1-react-\u72b6\u6001\u66f4\u65b0\u7684\u6279\u5904\u7406\u673a\u5236",level:4},{value:"1.1 \u6279\u5904\u7406\u66f4\u65b0\u7684\u539f\u7406",id:"11-\u6279\u5904\u7406\u66f4\u65b0\u7684\u539f\u7406",level:4},{value:"2. \u540c\u6b65\u66f4\u65b0 vs \u5e76\u53d1\u66f4\u65b0",id:"2-\u540c\u6b65\u66f4\u65b0-vs-\u5e76\u53d1\u66f4\u65b0",level:4},{value:"2.1 \u540c\u6b65\u66f4\u65b0",id:"21-\u540c\u6b65\u66f4\u65b0",level:5},{value:"2.2 \u5e76\u53d1\u66f4\u65b0",id:"22-\u5e76\u53d1\u66f4\u65b0",level:5},{value:"3. \u5e76\u53d1\u6a21\u5f0f\u4e0e Fiber \u67b6\u6784",id:"3-\u5e76\u53d1\u6a21\u5f0f\u4e0e-fiber-\u67b6\u6784",level:4},{value:"4. React 18 \u7684\u81ea\u52a8\u6279\u5904\u7406",id:"4-react-18-\u7684\u81ea\u52a8\u6279\u5904\u7406",level:4},{value:"5. \u7ed3\u8bed",id:"5-\u7ed3\u8bed",level:4}],u={toc:s};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"react-\u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\u4ece\u6279\u5904\u7406\u5230-fiber-\u6811\u6784\u5efa"},"React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\uff1a\u4ece\u6279\u5904\u7406\u5230 Fiber \u6811\u6784\u5efa"),(0,o.kt)("p",null,"React \u5728\u6027\u80fd\u4f18\u5316\u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u7684\u7814\u7a76\u4e0e\u8fed\u4ee3\uff0c\u7279\u522b\u662f\u5728\u5f15\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"Fiber \u67b6\u6784")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"Concurrent Mode\uff08\u5e76\u53d1\u6a21\u5f0f\uff09")," \u540e\uff0c\u4f7f\u5f97 React \u7684\u66f4\u65b0\u673a\u5236\u66f4\u52a0\u7075\u6d3b\u3001\u9ad8\u6548\u3002\u672c\u6587\u5c06\u901a\u8fc7 React \u540c\u6b65\u66f4\u65b0\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u7684\u6e90\u4ee3\u7801\u89e3\u6790\uff0c\u6df1\u5165\u7406\u89e3\u5176\u4e2d\u7684\u66f4\u65b0\u6d41\u7a0b\u53ca\u80cc\u540e\u7684\u6279\u5904\u7406\u903b\u8f91\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"1-react-\u72b6\u6001\u66f4\u65b0\u7684\u6279\u5904\u7406\u673a\u5236"},"1. React \u72b6\u6001\u66f4\u65b0\u7684\u6279\u5904\u7406\u673a\u5236"),(0,o.kt)("p",null,"\u5728 React \u4e2d\uff0c\u5f53\u7ec4\u4ef6\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," \u66f4\u65b0\u72b6\u6001\u65f6\uff0c\u4e0d\u4f1a\u7acb\u5373\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u3002React \u4e3a\u4e86\u4f18\u5316\u6027\u80fd\uff0c\u5728\u540c\u4e00\u4e8b\u4ef6\u5faa\u73af\u4e2d\u4f1a\u5c06\u591a\u4e2a\u72b6\u6001\u66f4\u65b0\u5408\u5e76\uff08",(0,o.kt)("strong",{parentName:"p"},"\u6279\u5904\u7406"),"\uff09\uff0c\u53ea\u8fdb\u884c\u4e00\u6b21\u6e32\u67d3\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f60\u5728\u540c\u4e00\u4e2a\u4e8b\u4ef6\u56de\u8c03\u4e2d\u591a\u6b21\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\uff0cReact \u4f1a\u5408\u5e76\u8fd9\u4e9b\u66f4\u65b0\uff0c\u51cf\u5c11\u6e32\u67d3\u6b21\u6570\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Counter() {\n  const [number, setNumber] = React.useState(0);\n  return (\n    <button\n      onClick={() => {\n        setNumber(number + 1);\n        setNumber(number + 1);\n      }}\n    >\n      {number}\n    </button>\n  );\n}\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5373\u4fbf\u6211\u4eec\u8c03\u7528\u4e86\u4e24\u6b21 ",(0,o.kt)("inlineCode",{parentName:"p"},"setNumber"),"\uff0cReact \u6700\u7ec8\u53ea\u4f1a\u89e6\u53d1\u4e00\u6b21\u6e32\u67d3\uff0c\u539f\u56e0\u5c31\u662f React \u4f1a\u6279\u5904\u7406\u8fd9\u4e9b\u72b6\u6001\u66f4\u65b0\u3002"),(0,o.kt)("h4",{id:"11-\u6279\u5904\u7406\u66f4\u65b0\u7684\u539f\u7406"},"1.1 \u6279\u5904\u7406\u66f4\u65b0\u7684\u539f\u7406"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureRootIsScheduled")," \u51fd\u6570\u6765\u5206\u6790 React \u7684\u6279\u5904\u7406\u66f4\u65b0\u673a\u5236\u3002React \u5c06\u66f4\u65b0\u7684\u4efb\u52a1\u8fdb\u884c\u8c03\u5ea6\uff0c\u5e76\u6839\u636e\u4efb\u52a1\u7684\u4f18\u5148\u7ea7\u5224\u65ad\u662f\u5426\u9700\u8981\u7acb\u5373\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u6839\u8282\u70b9\u8c03\u5ea6\u8ddf\u65b0\nfunction ensureRootIsScheduled(root, currentTime) {\n  //\u5148\u83b7\u53d6\u5f53\u524d\u6839\u4e0a\u6267\u884c\u4efb\u52a1\n  const existingCallbackNode = root.callbackNode\n  //\u628a\u6240\u6709\u997f\u6b7b\u7684\u8d5b\u9053\u6807\u8bb0\u4e3a\u8fc7\u671f\n  markStarvedLanesAsExpired(root, currentTime)\n  //\u83b7\u53d6\u5f53\u524d\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u8f66\u9053\n  const nextLanes = getNextLanes(root, workInProgressRootRenderLanes) // \u521d\u6b21\u6e32\u67d316\n  //\u5982\u679c\u6ca1\u6709\u8981\u6267\u884c\u7684\u4efb\u52a1\n  if (nextLanes === NoLanes) {\n    return\n  }\n  //\u83b7\u53d6\u65b0\u7684\u8c03\u5ea6\u4f18\u5148\u7ea7\n  let newCallbackPriority = getHighestPriorityLane(nextLanes) //16\n  //\u83b7\u53d6\u73b0\u5728\u6839\u4e0a\u6b63\u5728\u8fd0\u884c\u7684\u4f18\u5148\u7ea7\n  const existingCallbackPriority = root.callbackPriority\n  //\u5982\u679c\u65b0\u7684\u4f18\u5148\u7ea7\u548c\u8001\u7684\u4f18\u5148\u7ea7\u4e00\u6837\uff0c\u5219\u53ef\u4ee5\u8fdb\u884c\u6279\u91cf\u66f4\u65b0  \u6279\u5904\u7406\u66f4\u65b0\u7684\u539f\u7406\n  if (existingCallbackPriority === newCallbackPriority) {\n    return\n  }\n  if (existingCallbackNode !== null) {\n    console.log("cancelCallback")\n    Scheduler_cancelCallback(existingCallbackNode)\n  }\n  //\u65b0\u7684\u56de\u8c03\u4efb\u52a1\n  let newCallbackNode = null\n  //\u5982\u679c\u65b0\u7684\u4f18\u5148\u7ea7\u662f\u540c\u6b65\u7684\u8bdd  // SyncLane = 1\n  if (newCallbackPriority === SyncLane) {\n    //\u5148\u628aperformSyncWorkOnRoot\u6dfb\u56de\u5230\u540c\u6b65\u961f\u5217\u4e2d\n    scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root))\n    //\u518d\u628aflushSyncCallbacks\u653e\u5165\u5fae\u4efb\u52a1 \u6267\u884cperformSyncWorkOnRoot\u540c\u6b65\u4efb\u52a1\n    queueMicrotask(flushSyncCallbacks)\n    //\u5982\u679c\u662f\u540c\u6b65\u6267\u884c\u7684\u8bdd\n    newCallbackNode = null\n  } else {\n    //\u5982\u679c\u4e0d\u662f\u540c\u6b65\uff0c\u5c31\u9700\u8981\u8c03\u5ea6\u4e00\u4e2a\u65b0\u7684\u4efb\u52a1\n    let schedulerPriorityLevel\n    //\u628alane\u8f6c\u6210\u4e8b\u4ef6\u4f18\u5148\u7ea7 1 4 16\n    switch (lanesToEventPriority(nextLanes)) {\n      // \u5c06\u4e8b\u4ef6\u4f18\u5148\u7ea7\u53d8\u4e3a\u8c03\u5ea6\u4f18\u5148\u7ea7\n      case DiscreteEventPriority: //1\u79bb\u6563\u4e8b\u4ef6\n        schedulerPriorityLevel = ImmediateSchedulerPriority\n        break\n      case ContinuousEventPriority: // 4\u8fde\u7eed\u4e8b\u4ef6\n        schedulerPriorityLevel = UserBlockingSchedulerPriority\n        break\n      case DefaultEventPriority: // 16\u9ed8\u8ba4\u4e8b\u4ef6\n        schedulerPriorityLevel = NormalSchedulerPriority\n        break\n      case IdleEventPriority: //\u7a7a\u95f2\u4e8b\u4ef6\u4f18\u5148\u7ea7\n        schedulerPriorityLevel = IdleSchedulerPriority\n        break\n      default:\n        schedulerPriorityLevel = NormalSchedulerPriority\n        break\n    }\n    newCallbackNode = Scheduler_scheduleCallback(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root))\n  }\n  //\u5728\u6839\u8282\u70b9\u7684\u6267\u884c\u7684\u4efb\u52a1\u662fnewCallbackNode\n  root.callbackNode = newCallbackNode\n  root.callbackPriority = newCallbackPriority\n}\n')),(0,o.kt)("p",null,"\u5f53\u4f60\u70b9\u51fb\u6309\u94ae\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"setNumber")," \u4f1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatchSetState"),"\uff0c\u7136\u540e React \u4f1a\u5c06\u8fd9\u4e9b\u66f4\u65b0\u4efb\u52a1\u5b58\u5165\u961f\u5217\uff0c\u5e76\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"scheduleUpdateOnFiber")," \u5f00\u59cb\u4ece\u6839\u8282\u70b9\u8fdb\u884c\u66f4\u65b0\u8c03\u5ea6\u3002\u6838\u5fc3\u673a\u5236\u662f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"lane")," \u4f18\u5148\u7ea7\u6765\u7ba1\u7406\u66f4\u65b0\u4efb\u52a1\u7684\u6267\u884c\u987a\u5e8f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e24\u6b21\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," \u7684\u66f4\u65b0\u4f18\u5148\u7ea7\u76f8\u540c\uff0cReact \u4f1a\u5408\u5e76\u8fd9\u4e9b\u66f4\u65b0\u4efb\u52a1\uff0c\u89e6\u53d1\u4e00\u6b21\u6e32\u67d3\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"2-\u540c\u6b65\u66f4\u65b0-vs-\u5e76\u53d1\u66f4\u65b0"},"2. \u540c\u6b65\u66f4\u65b0 vs \u5e76\u53d1\u66f4\u65b0"),(0,o.kt)("p",null,"\u5728 React 18 \u4e2d\uff0c\u5f15\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"Concurrent Mode"),"\uff0c\u4f7f\u5f97 React \u66f4\u65b0\u673a\u5236\u80fd\u591f\u652f\u6301\u65f6\u95f4\u5206\u7247\uff08time-slicing\uff09\uff0c\u4ece\u800c\u5141\u8bb8\u5728\u66f4\u590d\u6742\u7684\u573a\u666f\u4e2d\u5b9e\u73b0\u66f4\u52a0\u6d41\u7545\u7684\u7528\u6237\u4ea4\u4e92\u3002"),(0,o.kt)("h5",{id:"21-\u540c\u6b65\u66f4\u65b0"},"2.1 \u540c\u6b65\u66f4\u65b0"),(0,o.kt)("p",null,"\u540c\u6b65\u66f4\u65b0\u662f\u6307\u5728\u540c\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u4e2d\uff0cReact \u4f1a\u4e00\u6c14\u5475\u6210\u5730\u5b8c\u6210 Fiber \u6811\u7684\u6784\u5efa\u548c\u6e32\u67d3\u3002\u8fd9\u79cd\u66f4\u65b0\u65b9\u5f0f\u4e0d\u4f1a\u4e2d\u65ad\uff0c\u56e0\u6b64\u5728\u6784\u5efa\u590d\u6742\u7ec4\u4ef6\u65f6\u53ef\u80fd\u4f1a\u9020\u6210\u963b\u585e\u3002"),(0,o.kt)("p",null,"\u5728\u540c\u6b65\u66f4\u65b0\u7684\u4ee3\u7801\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u5728\u6839\u4e0a\u6267\u884c\u540c\u6b65\u5de5\u4f5c\n */\nfunction performSyncWorkOnRoot(root) {\n  //\u83b7\u5f97\u6700\u9ad8\u4f18\u7684lane\n  const lanes = getNextLanes(root)\n  //\u6e32\u67d3\u65b0\u7684fiber\u6811\n  renderRootSync(root, lanes)\n  //\u83b7\u53d6\u65b0\u6e32\u67d3\u5b8c\u6210\u7684fiber\u6839\u8282\u70b9\n  const finishedWork = root.current.alternate\n  root.finishedWork = finishedWork\n  commitRoot(root)\n  return null\n}\n\nfunction renderRootSync(root, renderLanes) {\n  //\u5982\u679c\u65b0\u7684\u6839\u548c\u8001\u7684\u6839\u4e0d\u4e00\u6837\uff0c\u6216\u8005\u65b0\u7684\u6e32\u67d3\u4f18\u5148\u7ea7\u548c\u8001\u7684\u6e32\u67d3\u4f18\u5148\u7ea7\u4e0d\u4e00\u6837\n  if (root !== workInProgressRoot || workInProgressRootRenderLanes !== renderLanes) {\n    prepareFreshStack(root, renderLanes)\n  }\n  workLoopSync()\n  return RootCompleted\n}\n\nfunction workLoopSync() {\n  while (workInProgress !== null) {\n    performUnitOfWork(workInProgress)\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"performSyncWorkOnRoot")," \u4f1a\u540c\u6b65\u6267\u884c Fiber \u6811\u7684\u6e32\u67d3\uff0c\u5e76\u5c06\u6700\u7ec8\u7ed3\u679c\u63d0\u4ea4\u5230 DOM\u3002"),(0,o.kt)("h5",{id:"22-\u5e76\u53d1\u66f4\u65b0"},"2.2 \u5e76\u53d1\u66f4\u65b0"),(0,o.kt)("p",null,"\u5e76\u53d1\u66f4\u65b0\u5141\u8bb8 React \u5c06\u66f4\u65b0\u8fc7\u7a0b\u5206\u4e3a\u591a\u4e2a\u5c0f\u7684\u65f6\u95f4\u7247\u6bb5\uff08time slices\uff09\uff0c\u6bcf\u4e2a\u65f6\u95f4\u7247\u6bb5\u53ef\u4ee5\u88ab\u5176\u4ed6\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u4e2d\u65ad\u3002\u8fd9\u79cd\u66f4\u65b0\u6a21\u5f0f\u4e0d\u4ec5\u63d0\u9ad8\u4e86 React \u5e94\u5bf9\u590d\u6742 UI \u4ea4\u4e92\u7684\u80fd\u529b\uff0c\u4e5f\u663e\u8457\u63d0\u5347\u4e86\u7528\u6237\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"\u5e76\u53d1\u66f4\u65b0\u7684\u6838\u5fc3\u903b\u8f91\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"performConcurrentWorkOnRoot")," \u51fd\u6570\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u5e76\u53d1\u6a21\u5f0f\u4e0b\u6267\u884c\u6839\u8282\u70b9\u4e0a\u7684\u4efb\u52a1\n * @param {*} root\n */\nfunction performConcurrentWorkOnRoot(root, didTimeout) {\n  //\u5148\u83b7\u53d6\u5f53\u524d\u6839\u8282\u70b9\u4e0a\u7684\u4efb\u52a1\n  const originalCallbackNode = root.callbackNode\n  //\u83b7\u53d6\u5f53\u524d\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u8f66\u9053\n  const lanes = getNextLanes(root, NoLanes) //16\n  if (lanes === NoLanes) {\n    return null\n  }\n  //\u5982\u679c\u4e0d\u5305\u542b\u963b\u585e\u7684\u8f66\u9053\uff0c\u5e76\u4e14\u6ca1\u6709\u8d85\u65f6\uff0c\u5c31\u53ef\u4ee5\u5e76\u884c\u6e32\u67d3,\u5c31\u662f\u542f\u7528\u65f6\u95f4\u5206\u7247\n  //\u6240\u4ee5\u8bf4\u9ed8\u8ba4\u66f4\u65b0\u8f66\u9053\u662f\u540c\u6b65\u7684,\u4e0d\u80fd\u542f\u7528\u65f6\u95f4\u5206\u7247\n  //\u662f\u5426\u4e0d\u5305\u542b\u963b\u585e\u8f66\u9053\n  const nonIncludesBlockingLane = !includesBlockingLane(root, lanes)\n  //\u662f\u5426\u4e0d\u5305\u542b\u8fc7\u671f\u7684\u8f66\u9053\n  const nonIncludesExpiredLane = !includesExpiredLane(root, lanes)\n  //\u65f6\u95f4\u7247\u6ca1\u6709\u8fc7\u671f\n  const nonTimeout = !didTimeout\n  //\u4e09\u4e2a\u53d8\u91cf\u90fd\u662f\u771f\uff0c\u624d\u80fd\u8fdb\u884c\u65f6\u95f4\u5206\u7247\uff0c\u4e5f\u5c31\u662f\u8fdb\u884c\u5e76\u53d1\u6e32\u67d3\uff0c\u4e5f\u5c31\u662f\u53ef\u4ee5\u4e2d\u65ad\u6267\u884c\n  const shouldTimeSlice = nonIncludesBlockingLane && nonIncludesExpiredLane && nonTimeout\n  // console.log('shouldTimeSlice', shouldTimeSlice);\n  //\u6267\u884c\u6e32\u67d3\uff0c\u5f97\u5230\u9000\u51fa\u7684\u72b6\u6001\n  const exitStatus = shouldTimeSlice ? renderRootConcurrent(root, lanes) : renderRootSync(root, lanes)\n  //\u5982\u679c\u4e0d\u662f\u6e32\u67d3\u4e2d\u7684\u8bdd\uff0c\u90a3\u8bf4\u660e\u80af\u5b9a\u6e32\u67d3\u5b8c\u4e86\n  if (exitStatus !== RootInProgress) {\n    const finishedWork = root.current.alternate\n    root.finishedWork = finishedWork\n    commitRoot(root)\n  }\n  //\u8bf4\u660e\u4efb\u52a1\u6ca1\u6709\u5b8c\u6210\n  if (root.callbackNode === originalCallbackNode) {\n    //\u628a\u6b64\u51fd\u6570\u8fd4\u56de\uff0c\u4e0b\u6b21\u63a5\u7740\u5e72\n    return performConcurrentWorkOnRoot.bind(null, root)\n  }\n  return null\n}\n\nfunction renderRootConcurrent(root, lanes) {\n  //\u56e0\u4e3a\u5728\u6784\u5efafiber\u6811\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6b64\u65b9\u6cd5\u4f1a\u53cd\u590d\u8fdb\u5165\uff0c\u4f1a\u8fdb\u5165\u591a\u6b21\n  //\u53ea\u6709\u5728\u7b2c\u4e00\u6b21\u8fdb\u6765\u7684\u65f6\u5019\u4f1a\u521b\u5efa\u65b0\u7684fiber\u6811\uff0c\u6216\u8005\u8bf4\u65b0fiber\n  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {\n    prepareFreshStack(root, lanes)\n  }\n  //\u5728\u5f53\u524d\u5206\u914d\u7684\u65f6\u95f4\u7247(5ms)\u5185\u6267\u884cfiber\u6811\u7684\u6784\u5efa\u6216\u8005\u8bf4\u6e32\u67d3\uff0c\n  workLoopConcurrent()\n  //\u5982\u679c workInProgress\u4e0d\u4e3anull\uff0c\u8bf4\u660efiber\u6811\u7684\u6784\u5efa\u8fd8\u6ca1\u6709\u5b8c\u6210\n  if (workInProgress !== null) {\n    return RootInProgress\n  }\n  //\u5982\u679cworkInProgress\u662fnull\u4e86\u8bf4\u660e\u6e32\u67d3\u5de5\u4f5c\u5b8c\u5168\u7ed3\u675f\u4e86\n  return workInProgressRootExitStatus\n}\n\n\nfunction workLoopConcurrent() {\n  //\u5982\u679c\u6709\u4e0b\u4e00\u4e2a\u8981\u6784\u5efa\u7684fiber\u5e76\u4e14\u65f6\u95f4\u7247\u6ca1\u6709\u8fc7\u671f\n  while (workInProgress !== null && !shouldYield()) {\n    performUnitOfWork(workInProgress)\n  }\n}\n")),(0,o.kt)("p",null,"\u5728\u5e76\u53d1\u6a21\u5f0f\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"renderRootConcurrent")," \u4f1a\u6784\u5efa Fiber \u6811\uff0c\u5e76\u6839\u636e\u65f6\u95f4\u7247\u7684\u5206\u914d\u6765\u51b3\u5b9a\u662f\u5426\u9700\u8981\u6682\u505c\uff0c\u5141\u8bb8\u5176\u4ed6\u9ad8\u4f18\u5148\u7ea7\u4efb\u52a1\u6253\u65ad\u5f53\u524d\u6e32\u67d3\u5de5\u4f5c\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"3-\u5e76\u53d1\u6a21\u5f0f\u4e0e-fiber-\u67b6\u6784"},"3. \u5e76\u53d1\u6a21\u5f0f\u4e0e Fiber \u67b6\u6784"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fiber \u67b6\u6784")," \u662f React \u4e3a\u4e86\u89e3\u51b3\u5927\u89c4\u6a21 UI \u6e32\u67d3\u65f6\u7684\u6027\u80fd\u74f6\u9888\u800c\u8bbe\u8ba1\u7684\u4e00\u79cd\u8c03\u5ea6\u673a\u5236\u3002\u5b83\u4f7f\u5f97 React \u7684\u6e32\u67d3\u8fc7\u7a0b\u53ef\u4e2d\u65ad\u3001\u53ef\u6062\u590d\u3002\u901a\u8fc7 Fiber \u6811\u7684\u6784\u5efa\uff0cReact \u80fd\u591f\u5c06\u6e32\u67d3\u5de5\u4f5c\u5206\u7247\u5904\u7406\uff0c\u8fdb\u800c\u63d0\u9ad8\u54cd\u5e94\u901f\u5ea6\u3002"),(0,o.kt)("p",null,"\u5728 Fiber \u6811\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"performUnitOfWork")," \u662f\u4e00\u4e2a\u5173\u952e\u51fd\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u6267\u884c\u4e00\u4e2a\u5de5\u4f5c\u5355\u5143\n * @param {*} unitOfWork\n */\nfunction performUnitOfWork(unitOfWork) {\n  //\u83b7\u53d6\u65b0\u7684fiber\u5bf9\u5e94\u7684\u8001fiber\n  const current = unitOfWork.alternate\n  //\u5b8c\u6210\u5f53\u524dfiber\u7684\u5b50fiber\u94fe\u8868\u6784\u5efa\u540e\n  const next = beginWork(current, unitOfWork, workInProgressRootRenderLanes)\n  unitOfWork.memoizedProps = unitOfWork.pendingProps\n  if (next === null) {\n    //\u5982\u679c\u6ca1\u6709\u5b50\u8282\u70b9\u8868\u793a\u5f53\u524d\u7684fiber\u5df2\u7ecf\u5b8c\u6210\u4e86\n    completeUnitOfWork(unitOfWork)\n  } else {\n    //\u5982\u679c\u6709\u5b50\u8282\u70b9\uff0c\u5c31\u8ba9\u5b50\u8282\u70b9\u6210\u4e3a\u4e0b\u4e00\u4e2a\u5de5\u4f5c\u5355\u5143\n    workInProgress = next\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"performUnitOfWork")," \u9010\u4e2a\u5904\u7406 Fiber \u8282\u70b9\uff0c\u6784\u5efa\u6574\u68f5 Fiber \u6811\u3002\u800c\u5728\u5e76\u53d1\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c\u5f53\u524d\u65f6\u95f4\u7247\u7528\u5b8c\uff0cReact \u4f1a\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldYield")," \u5224\u65ad\u662f\u5426\u9700\u8981\u6682\u505c\u6e32\u67d3\uff0c\u907f\u514d\u4e3b\u7ebf\u7a0b\u957f\u65f6\u95f4\u88ab\u963b\u585e\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"4-react-18-\u7684\u81ea\u52a8\u6279\u5904\u7406"},"4. React 18 \u7684\u81ea\u52a8\u6279\u5904\u7406"),(0,o.kt)("p",null,"React 18 \u5f15\u5165\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u6279\u5904\u7406\uff08Automatic Batching\uff09")," \u529f\u80fd\uff0c\u4f7f\u5f97\u6279\u5904\u7406\u4e0d\u4ec5\u9650\u4e8e React \u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u5728\u5f02\u6b65\u4ee3\u7801\uff08\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\uff09\u4e2d\u4e5f\u4f1a\u81ea\u52a8\u5408\u5e76 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const handleClick = () => {\n  Promise.resolve().then(() => {\n    setNumber((n) => n + 1);\n    setNumber((n) => n + 1);\n  });\n};\n")),(0,o.kt)("p",null,"\u5373\u4fbf\u662f\u5728\u5f02\u6b65\u4efb\u52a1\u4e2d\uff0cReact \u4e5f\u4f1a\u6279\u5904\u7406\u8fd9\u4e9b\u72b6\u6001\u66f4\u65b0\uff0c\u5408\u5e76\u4e3a\u4e00\u6b21\u6e32\u67d3\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u5728\u5f02\u6b65\u4efb\u52a1\u4e2d\u7acb\u5373\u89e6\u53d1\u66f4\u65b0\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"flushSync"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"flushSync(() => setNumber((n) => n + 1));\n")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"5-\u7ed3\u8bed"},"5. \u7ed3\u8bed"),(0,o.kt)("p",null,"React \u7684\u66f4\u65b0\u673a\u5236\u7ecf\u8fc7\u4e86\u591a\u6b21\u6f14\u8fdb\uff0c\u4ece\u6700\u521d\u7684\u540c\u6b65\u66f4\u65b0\u5230 Fiber \u67b6\u6784\uff0c\u518d\u5230\u652f\u6301\u5e76\u53d1\u66f4\u65b0\uff0cReact \u4e00\u76f4\u5728\u6027\u80fd\u4f18\u5316\u548c\u7528\u6237\u4f53\u9a8c\u4e4b\u95f4\u5bfb\u627e\u5e73\u8861\u3002\u901a\u8fc7\u6279\u5904\u7406\u3001\u65f6\u95f4\u5206\u7247\u548c\u81ea\u52a8\u6279\u5904\u7406\uff0cReact \u80fd\u591f\u9ad8\u6548\u5904\u7406\u5927\u91cf\u72b6\u6001\u66f4\u65b0\uff0c\u540c\u65f6\u4fdd\u6301 UI \u7684\u6d41\u7545\u54cd\u5e94\u3002"),(0,o.kt)("p",null,"\u7406\u89e3\u8fd9\u4e9b\u5e95\u5c42\u673a\u5236\u4e0d\u4ec5\u6709\u52a9\u4e8e\u6211\u4eec\u7f16\u5199\u9ad8\u6027\u80fd\u7684 React \u5e94\u7528\uff0c\u8fd8\u80fd\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u5904\u7406\u590d\u6742\u7684 UI \u573a\u666f\uff0c\u786e\u4fdd\u5e94\u7528\u7684\u54cd\u5e94\u901f\u5ea6\u548c\u7528\u6237\u4f53\u9a8c\u3002"))}p.isMDXComponent=!0}}]);