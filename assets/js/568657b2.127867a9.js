"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,d=p["".concat(s,".").concat(m)]||p[m]||k[m]||l;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={title:"scheduleCallback \u5b9e\u73b0",last_update:{date:"09/02/2024",author:"\u9ad8\u7ea2\u7fd4"}},o=void 0,i={unversionedId:"08scheduleCallback",id:"08scheduleCallback",title:"scheduleCallback \u5b9e\u73b0",description:"scheduleCallback",source:"@site/react/08scheduleCallback.md",sourceDirName:".",slug:"/08scheduleCallback",permalink:"/website/react/08scheduleCallback",draft:!1,tags:[],version:"current",frontMatter:{title:"scheduleCallback \u5b9e\u73b0",last_update:{date:"09/02/2024",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"React Hooks \u5e95\u5c42\u5b9e\u73b0",permalink:"/website/react/07React Hooks \u5e95\u5c42\u5b9e\u73b0"},next:{title:"React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790\uff1a\u4ece\u6279\u5904\u7406\u5230 Fiber \u6811\u6784\u5efa",permalink:"/website/react/09React \u540c\u6b65\u4e0e\u5e76\u53d1\u66f4\u65b0\u673a\u5236\u89e3\u6790"}},s={},c=[{value:"scheduleCallback",id:"schedulecallback",level:2},{value:"MessageChannel",id:"messagechannel",level:3},{value:"\u5b9e\u73b0 scheduleCallback",id:"\u5b9e\u73b0-schedulecallback",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3}],u={toc:c};function k(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"schedulecallback"},"scheduleCallback"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"React \u5229\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"MessageChannel"),"\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b8f\u4efb\u52a1\uff0c\u7528\u4e8e\u5728\u5f53\u524d\u4e8b\u4ef6\u5faa\u73af\u7ed3\u675f\u540e\u5c3d\u5feb\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002")),(0,r.kt)("h3",{id:"messagechannel"},"MessageChannel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"li"},"requestIdleCallback")," \u76ee\u524d\u53ea\u6709 Chrome \u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u76ee\u524d React \u5229\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel"},"MessageChannel"),"\u6a21\u62df\u4e86 requestIdleCallback\uff0c\u5c06\u56de\u8c03\u5ef6\u8fdf\u5230\u7ed8\u5236\u64cd\u4f5c\u4e4b\u540e\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"MessageChannel API \u5141\u8bb8\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6d88\u606f\u901a\u9053\uff0c\u5e76\u901a\u8fc7\u5b83\u7684\u4e24\u4e2a MessagePort \u5c5e\u6027\u53d1\u9001\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"MessageChannel \u521b\u5efa\u4e86\u4e00\u4e2a\u901a\u4fe1\u7684\u7ba1\u9053\uff0c\u8fd9\u4e2a\u7ba1\u9053\u6709\u4e24\u4e2a\u7aef\u53e3\uff0c\u6bcf\u4e2a\u7aef\u53e3\u90fd\u53ef\u4ee5\u901a\u8fc7 postMessage \u53d1\u9001\u6570\u636e\uff0c\u800c\u4e00\u4e2a\u7aef\u53e3\u53ea\u8981\u7ed1\u5b9a\u4e86 onmessage \u56de\u8c03\u65b9\u6cd5\uff0c\u5c31\u53ef\u4ee5\u63a5\u6536\u4ece\u53e6\u4e00\u4e2a\u7aef\u53e3\u4f20\u8fc7\u6765\u7684\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},"MessageChannel \u662f\u4e00\u4e2a\u5b8f\u4efb\u52a1")),(0,r.kt)("h3",{id:"\u5b9e\u73b0-schedulecallback"},"\u5b9e\u73b0 scheduleCallback"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 scheduleCallback\uff0c\u533a\u5206\u4f18\u5148\u7ea7\uff0c\u5411\u6700\u5c0f\u5806\u91cc\u9762\u6dfb\u52a0\u4efb\u52a1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u6309\u4f18\u5148\u7ea7\u6267\u884c\u4efb\u52a1\n * @param {*} priorityLevel \u4f18\u5148\u7ea7\u7ea7\u522b\n * @param {*} callback // \u56de\u8c03\u51fd\u6570\n */\nexport function scheduleCallback(priorityLevel, callback) {\n  // \u83b7\u53d6\u5f53\u524d\u7684\u65f6\u5019\n  const currentTime = getCurrentTime()\n  // \u6b64\u4efb\u52a1\u7684\u5f00\u65f6\u95f4\n  const startTime = currentTime\n  //\u8d85\u65f6\u65f6\u95f4 \u7b49\u5f85\u65f6\u95f4\u8fc7\u4e86\u5c31\u5f97\u6267\u884c\n  let timeout\n  switch (priorityLevel) {\n    case ImmediatePriority: // \u7acb\u523b\u6267\u884c\u4f18\u5148\u7ea7 \u5c40\u957f\n      timeout = IMMEDIATE_PRIORITY_TIMEOUT // -1\n      break\n    case UserBlockingPriority: //\u7528\u6237\u963b\u585e\u64cd\u4f5c\u4f18\u5148\u7ea7 \u7528\u6237\u70b9\u51fb \uff0c\u7528\u6237\u8f93\u5165  \u526f\u5c40\u957f\n      timeout = USER_BLOCKING_PRIORITY_TIMEOUT // 250ms\n      break\n    case IdlePriority: // \u7a7a\u95f2\u4f18\u5148\u7ea7 \u4e34\u65f6\u5de5\n      timeout = IDLE_PRIORITY_TIMEOUT //1073741823\n      break\n    case LowPriority: // \u4f4e\u4f18\u5148\u7ea7 \u79d1\u5458\n      timeout = LOW_PRIORITY_TIMEOUT //10000\n      break\n    case NormalPriority: // \u6b63\u5e38\u4f18\u5148\u7ea7\n    default: //5000\n      timeout = NORMAL_PRIORITY_TIMEOUT // \u6b63\u5e38\u4f18\u5148\u7ea7\u8fc7\u671f\u65f6\u95f4\n      break\n  }\n  //\u8ba1\u7b97\u6b64\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\n  const expirationTime = startTime + timeout\n  const newTask = {\n    id: taskIdCounter++,\n    callback, //\u56de\u8c03\u51fd\u6570\u6216\u8005\u8bf4\u4efb\u52a1\u51fd\u6570\n    priorityLevel, //\u4f18\u5148\u7ea7\u522b\n    startTime, //\u4efb\u52a1\u7684\u5f00\u59cb\u65f6\u95f4\n    expirationTime, //\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\n    sortIndex: expirationTime, //\u6392\u5e8f\u4f9d\u8d56\n  }\n  //\u5411\u4efb\u52a1\u6700\u5c0f\u5806\u91cc\u6dfb\u52a0\u4efb\u52a1\uff0c\u6392\u5e8f\u7684\u4f9d\u636e\u662f\u8fc7\u671f\u65f6\u95f4\n  push(taskQueue, newTask)\n  //flushWork\u6267\u884c\u5de5\u4f5c\uff0c\u5237\u65b0\u5de5\u4f5c\uff0c\u6267\u884c\u4efb\u52a1\uff0c\u53f8\u673a\u63a5\u4eba\n  requestHostCallback(flushWork)\n  return newTask\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"flushWork \u6267\u884c\u5de5\u4f5c\uff0c\u5237\u65b0\u5de5\u4f5c\uff0c\u6267\u884c\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ol"},"React \u5229\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"MessageChannel"),"\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b8f\u4efb\u52a1\uff0c\u7528\u4e8e\u5728\u5f53\u524d\u4e8b\u4ef6\u5faa\u73af\u7ed3\u675f\u540e\u5c3d\u5feb\u6267\u884c\u56de\u8c03\u51fd\u6570")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const channel = new MessageChannel()\nvar port2 = channel.port2\nvar port1 = channel.port1\nport1.onmessage = performWorkUntilDeadline\n\nfunction requestHostCallback(workLoop) {\n  //\u5148\u7f13\u5b58\u56de\u8c03\u51fd\u6570\n  scheduleHostCallback = workLoop //\u5168\u5c40\u4fbf\u5229\n  //\u6267\u884c\u5de5\u4f5c\u76f4\u5230\u622a\u6b62\u65f6\u95f4\n  schedulePerformWorkUntilDeadline()\n}\n//\u6267\u884c\u5de5\u4f5c\u76f4\u5230\u622a\u6b62\u65f6\u95f4\nfunction schedulePerformWorkUntilDeadline() {\n  port2.postMessage(null)\n}\n\nfunction performWorkUntilDeadline() {\n  if (scheduleHostCallback) {\n    // \u5148\u83b7\u53d6\u5f00\u59cb\u6267\u884c\u4efb\u52a1\u7684\u65f6\u95f4\n    //\u8868\u793a\u65f6\u95f4\u7247\u7684\u5f00\u59cb\n    startTime = getCurrentTime()\n    // \u662f\u5426\u6709\u66f4\u591a\u7684\u5de5\u4f5c\u8981\u505a\n    let hasMoreWork = true\n    try {\n      //\u6267\u884c flushWork \uff0c\u5e76\u5224\u65ad\u6709\u6ca1\u6709\u8fd4\u56de\u503c\n      hasMoreWork = scheduleHostCallback(startTime)\n    } finally {\n      //\u6267\u884c\u5b8c\u4ee5\u540e\u5982\u679c\u4e3atrue,\u8bf4\u660e\u8fd8\u6709\u66f4\u591a\u5de5\u4f5c\u8981\u505a\n      if (hasMoreWork) {\n        //\u7ee7\u7eed\u6267\u884c\n        schedulePerformWorkUntilDeadline() //\u518d\u6b21\u521b\u5efa\u5b8f\u4efb\u52a1\n      } else {\n        scheduleHostCallback = null\n      }\n    }\n  }\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u5de5\u4f5c\u5faa\u73af",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u53d6\u51fa\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u4efb\u52a1\uff0c\u5806\u9876\u5143\u7d20"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u6b64\u4efb\u52a1\u662f\u5426\u8d85\u65f6\u548c\u662f\u5426\u6b64\u6b21\u6267\u884c\u7684\u65f6\u95f4\u5207\u7247\u8d85\u8fc7 5ms\uff0c\u6267\u884c\u4efb\u52a1",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6b64\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\u5c0f\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u8bf4\u660e\u8d85\u65f6\uff0c\u9700\u8981\u4e0d\u4e2d\u65ad\u7684\u76f4\u63a5\u6267\u884c"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6b64\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u8bf4\u660e\u672a\u8d85\u65f6\uff0c\u800c\u4e14\u5207\u7247\u65f6\u95f4\u672a\u8d85\u8fc7 5ms\uff0c\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1"))),(0,r.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6216\u8005\u8d85\u65f6\u4e86\uff0c\u8df3\u51fa\u672c\u6b21\u5faa\u73af")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\n\nfunction workLoop(startTime) {\n  let currentTime = startTime\n  //\u53d6\u51fa\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u4efb\u52a1\n  currentTask = peek(taskQueue)\n  // \u6240\u6709\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6216\u8005 \u67d0\u4e00\u4e2a\u4efb\u52a1\u8fd4\u56de\u4e86\u65b0\u7684\u81ea\u884c\u4efb\u52a1\u6216\u8005 \u65f6\u95f4\u8fc7\u671f\n  while (currentTask !== null) {\n    //\u5982\u679c\u6b64\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u4e5f\u5c31\u662f\u8bf4\u6ca1\u6709\u8fc7\u671f,\u5e76\u4e14\u9700\u8981\u653e\u5f03\u6267\u884c \u65f6\u95f4\u72475ms\u5230\u671f\n    if (currentTask.expirationTime > currentTime && shouldYieldToHost()) {\n      //\u8df3\u51fa\u5de5\u4f5c\u5faa\u73af\n      break\n    }\n    //\u53d6\u51fa\u5f53\u524d\u7684\u4efb\u52a1\u4e2d\u7684\u56de\u8c03\u51fd\u6570 performConcurrentWorkOnRoot\n    const callback = currentTask.callback\n    if (typeof callback === "function") {\n      currentTask.callback = null\n      //\u6267\u884c\u5de5\u4f5c\uff0c\u5982\u679c\u8fd4\u56de\u65b0\u7684\u51fd\u6570\uff0c\u5219\u8868\u793a\u5f53\u524d\u7684\u5de5\u4f5c\u6ca1\u6709\u5b8c\u6210\n      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime\n      const continuationCallback = callback(didUserCallbackTimeout) //\u8fd4\u56de\u65b0\u51fd\u6570\n      if (typeof continuationCallback === "function") {\n        currentTask.callback = continuationCallback // \u4efb\u52a1\u6ca1\u6709\u7ed3\u675f\n        return true //\u8fd8\u6709\u4efb\u52a1\u8981\u6267\u884c\n      }\n      //\u5982\u679c\u6b64\u4efb\u52a1\u5df2\u7ecf\u5b8c\u6210\uff0c\u5219\u4e0d\u9700\u8981\u518d\u7ee7\u7eed\u6267\u884c\u4e86\uff0c\u53ef\u4ee5\u628a\u6b64\u4efb\u52a1\u5f39\u51fa\n      if (currentTask === peek(taskQueue)) {\n        pop(taskQueue)\n      }\n    } else {\n      pop(taskQueue)\n    }\n    //\u5982\u679c\u5f53\u524d\u7684\u4efb\u52a1\u6267\u884c\u5b8c\u4e86\uff0c\u6216\u8005\u5f53\u524d\u4efb\u52a1\u4e0d\u5408\u6cd5\uff0c\u53d6\u51fa\u4e0b\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\n    currentTask = peek(taskQueue)\n  }\n  //\u5982\u679c\u5faa\u73af\u7ed3\u675f\u8fd8\u6709\u672a\u5b8c\u6210\u7684\u4efb\u52a1\uff0c\u90a3\u5c31\u8868\u793ahasMoreWork=true\n  if (currentTask !== null) {\n    return true\n  }\n  //\u6ca1\u6709\u4efb\u4f55\u8981\u5b8c\u6210\u7684\u4efb\u52a1\u4e86\n  return false\n}\n\n}\n// \u662f\u5426\u653e\u5f03\u6267\u884c  \u9ed8\u8ba4\u8fc75ms\u7ed3\u675f\u672c\u6b21\u6267\u884c\nfunction shouldYieldToHost() {\n  //\u7528\u5f53\u524d\u65f6\u95f4\u51cf\u53bb\u5f00\u59cb\u7684\u65f6\u95f4\u5c31\u662f\u8fc7\u53bb\u7684\u65f6\u95f4\n  const timeElapsed = getCurrentTime() - startTime\n  //\u5982\u679c\u6d41\u901d\u6216\u8005\u8bf4\u7ecf\u8fc7\u7684\u65f6\u95f4\u5c0f\u4e8e5\u6beb\u79d2\uff0c\u90a3\u5c31\u4e0d\u9700\u8981\u653e\u5f03\u6267\u884c\n  if (timeElapsed < frameInterval) {\n    return false\n  } //\u5426\u5219\u5c31\u662f\u8868\u793a5\u6beb\u79d2\u7528\u5b8c\u4e86\uff0c\u9700\u8981\u653e\u5f03\u6267\u884c\n  return true\n}\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u672c\u6b21\u4efb\u52a1\u8fd4\u56de true\uff0c\u4efb\u52a1\u672a\u6267\u884c\u5b8c\u6210\uff0c\u8fdb\u5165\u4e0b\u4e00\u8f6e\u6d88\u606f\u63a8\u9001"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function performWorkUntilDeadline() {\n  if (scheduleHostCallback) {\n    // \u5148\u83b7\u53d6\u5f00\u59cb\u6267\u884c\u4efb\u52a1\u7684\u65f6\u95f4\n    //\u8868\u793a\u65f6\u95f4\u7247\u7684\u5f00\u59cb\n    startTime = getCurrentTime()\n    // \u662f\u5426\u6709\u66f4\u591a\u7684\u5de5\u4f5c\u8981\u505a\n    let hasMoreWork = true\n    try {\n      //\u6267\u884c flushWork \uff0c\u5e76\u5224\u65ad\u6709\u6ca1\u6709\u8fd4\u56de\u503c\n      hasMoreWork = scheduleHostCallback(startTime)\n    } finally {\n      //\u6267\u884c\u5b8c\u4ee5\u540e\u5982\u679c\u4e3atrue,\u8bf4\u660e\u8fd8\u6709\u66f4\u591a\u5de5\u4f5c\u8981\u505a\n      if (hasMoreWork) {\n        //\u7ee7\u7eed\u6267\u884c\n        schedulePerformWorkUntilDeadline()\n      } else {\n        scheduleHostCallback = null\n      }\n    }\n  }\n}\n")))),(0,r.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 scheduleCallback\uff0c\u533a\u5206\u4f18\u5148\u7ea7\uff0c\u5411\u6700\u5c0f\u5806\u91cc\u9762\u6dfb\u52a0\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ol"},"flushWork \u6267\u884c\u5de5\u4f5c\uff0c\u5237\u65b0\u5de5\u4f5c\uff0c\u6267\u884c\u4efb\u52a1"),(0,r.kt)("li",{parentName:"ol"},"React \u5229\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"MessageChannel"),"\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b8f\u4efb\u52a1\uff0c\u7528\u4e8e\u5728\u5f53\u524d\u4e8b\u4ef6\u5faa\u73af\u7ed3\u675f\u540e\u5c3d\u5feb\u6267\u884c\u56de\u8c03\u51fd\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u5de5\u4f5c\u5faa\u73af",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u53d6\u51fa\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u4efb\u52a1\uff0c\u5806\u9876\u5143\u7d20"),(0,r.kt)("li",{parentName:"ol"},"\u5224\u65ad\u6b64\u4efb\u52a1\u662f\u5426\u8d85\u65f6\u548c\u662f\u5426\u6b64\u6b21\u6267\u884c\u7684\u65f6\u95f4\u5207\u7247\u8d85\u8fc7 5ms\uff0c\u6267\u884c\u4efb\u52a1",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6b64\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\u5c0f\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u8bf4\u660e\u8d85\u65f6\uff0c\u9700\u8981\u4e0d\u4e2d\u65ad\u7684\u76f4\u63a5\u6267\u884c"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6b64\u4efb\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u8bf4\u660e\u672a\u8d85\u65f6\uff0c\u800c\u4e14\u5207\u7247\u65f6\u95f4\u672a\u8d85\u8fc7 5ms\uff0c\u6267\u884c\u4e0b\u4e00\u4e2a\u4efb\u52a1"))),(0,r.kt)("li",{parentName:"ol"},"\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6216\u8005\u8d85\u65f6\u4e86\uff0c\u8df3\u51fa\u672c\u6b21\u5faa\u73af"))),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u672c\u6b21\u4efb\u52a1\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u5219 workLoop \u8fd4\u56de true\uff0c\u4efb\u52a1\u672a\u6267\u884c\u5b8c\u6210\uff0c\u8fdb\u5165\u4e0b\u4e00\u8f6e\u6d88\u606f\u63a8\u9001")))}k.isMDXComponent=!0}}]);