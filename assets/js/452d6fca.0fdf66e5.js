"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5851],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const l={title:"react\u7684diff\u7b97\u6cd5",last_update:{date:"02/20/2023",author:"\u9ad8\u7ea2\u7fd4"}},a=void 0,u={unversionedId:"04React-diff",id:"04React-diff",title:"react\u7684diff\u7b97\u6cd5",description:"React \u7684 diff \u7b97\u6cd5\u662f React \u5728\u66f4\u65b0 DOM \u65f6\u4f7f\u7528\u7684\u7b97\u6cd5\u3002\u5b83\u7684\u76ee\u7684\u662f\u6700\u5c0f\u5316\u9875\u9762\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u4ee5\u4fbf\u63d0\u9ad8\u6027\u80fd\u3002",source:"@site/react/04React-diff.md",sourceDirName:".",slug:"/04React-diff",permalink:"/website/react/04React-diff",draft:!1,tags:[],version:"current",frontMatter:{title:"react\u7684diff\u7b97\u6cd5",last_update:{date:"02/20/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa FiberRoot",permalink:"/website/react/03\u521b\u5efaFibreRoot"}},o={},c=[{value:"\u5355\u8282\u70b9\u7684 diff",id:"\u5355\u8282\u70b9\u7684-diff",level:2},{value:"1\u3001\u5355\u8282\u70b9 key \u548c\u7c7b\u578b\u76f8\u540c",id:"1\u5355\u8282\u70b9-key-\u548c\u7c7b\u578b\u76f8\u540c",level:3},{value:"2\u3001<strong>\u5355\u8282\u70b9 key \u4e0d\u540c,\u7c7b\u578b\u76f8\u540c\uff0c</strong>",id:"2\u5355\u8282\u70b9-key-\u4e0d\u540c\u7c7b\u578b\u76f8\u540c",level:3},{value:"3\u3001\u5355\u8282\u70b9 key \u76f8\u540c,\u7c7b\u578b\u4e0d\u540c",id:"3\u5355\u8282\u70b9-key-\u76f8\u540c\u7c7b\u578b\u4e0d\u540c",level:3},{value:"4\u3001\u539f\u6765\u591a\u4e2a\u8282\u70b9\uff0c\u73b0\u5728\u53ea\u6709\u4e00\u4e2a\u8282\u70b9",id:"4\u539f\u6765\u591a\u4e2a\u8282\u70b9\u73b0\u5728\u53ea\u6709\u4e00\u4e2a\u8282\u70b9",level:3},{value:"\u591a\u8282\u70b9\u7684 diff",id:"\u591a\u8282\u70b9\u7684-diff",level:2},{value:"1\u3001\u591a\u4e2a\u8282\u70b9\u7684\u6570\u91cf\u548c key \u76f8\u540c\uff0c\u6709\u7684 type \u4e0d\u540c",id:"1\u591a\u4e2a\u8282\u70b9\u7684\u6570\u91cf\u548c-key-\u76f8\u540c\u6709\u7684-type-\u4e0d\u540c",level:3},{value:"2\u3001\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c key \u5168\u90e8\u76f8\u540c\uff0c\u6709\u65b0\u589e\u5143\u7d20",id:"2\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c-key-\u5168\u90e8\u76f8\u540c\u6709\u65b0\u589e\u5143\u7d20",level:3},{value:"3.\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c key \u5168\u90e8\u76f8\u540c\uff0c\u6709\u5220\u9664\u8001\u5143\u7d20",id:"3\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c-key-\u5168\u90e8\u76f8\u540c\u6709\u5220\u9664\u8001\u5143\u7d20",level:3},{value:"4.\u591a\u4e2a\u8282\u70b9\u6570\u91cf\u4e0d\u540c\u3001key \u4e0d\u540c",id:"4\u591a\u4e2a\u8282\u70b9\u6570\u91cf\u4e0d\u540ckey-\u4e0d\u540c",level:3}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React \u7684 diff \u7b97\u6cd5\u662f React \u5728\u66f4\u65b0 DOM \u65f6\u4f7f\u7528\u7684\u7b97\u6cd5\u3002\u5b83\u7684\u76ee\u7684\u662f\u6700\u5c0f\u5316\u9875\u9762\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u4ee5\u4fbf\u63d0\u9ad8\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u5f53 React \u6e32\u67d3\u7ec4\u4ef6\u65f6\uff0c\u5b83\u4f1a\u5728\u5185\u5b58\u4e2d\u751f\u6210\u865a\u62df DOM \u6811\u3002\u7136\u540e\uff0c\u5b83\u4f1a\u5bf9\u6bd4\u65b0\u7684\u865a\u62df DOM \u6811\u548c\u4e4b\u524d\u7684\u6811\u7684\u5dee\u5f02\uff0c\u627e\u51fa\u6700\u5c0f\u7684\u53d8\u5316\u96c6\u5408\u3002\u8fd9\u4e9b\u53d8\u5316\u4f1a\u88ab\u6253\u5305\u6210\u4e00\u7ec4\u64cd\u4f5c\uff0c\u7528\u6765\u66f4\u65b0\u771f\u6b63\u7684 DOM\u3002"),(0,i.kt)("p",null,"React \u7684 diff \u7b97\u6cd5\u9075\u5faa\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u540c\u7ea7\u6bd4\u8f83\uff1aReact \u4f1a\u628a\u65b0\u7684\u865a\u62df DOM \u6811\u4e2d\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\u4e0e\u4e4b\u524d\u7684\u6811\u4e2d\u7684\u8282\u70b9\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u8282\u70b9\u7c7b\u578b\u4e0d\u540c\u6216\u8005\u5c5e\u6027\u4e0d\u540c\uff0cReact \u4f1a\u76f4\u63a5\u66ff\u6362\u6389\u539f\u6765\u7684\u8282\u70b9\u3002\u5982\u679c\u8282\u70b9\u7c7b\u578b\u76f8\u540c\uff0cReact \u4f1a\u7ee7\u7eed\u9012\u5f52\u6bd4\u8f83\u8fd9\u4e24\u4e2a\u8282\u70b9\u7684\u5b50\u8282\u70b9\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5148\u5e8f\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\uff1aReact \u4f1a\u6309\u7167\u8282\u70b9\u7684\u5148\u5e8f\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u987a\u5e8f\uff0c\u5bf9\u6bd4\u65b0\u65e7\u4e24\u68f5\u865a\u62df DOM \u6811\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u8282\u70b9 A \u5728\u865a\u62df DOM \u4e2d\u51fa\u73b0\u5728\u8282\u70b9 B \u4e4b\u524d\uff0c\u90a3\u4e48\u5728\u6bd4\u8f83\u8fc7\u7a0b\u4e2d\uff0cA \u4e5f\u4f1a\u5148\u4e8e B \u88ab\u6bd4\u8f83\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728\u6bd4\u8f83\u540c\u7ea7\u8282\u70b9\u65f6\uff0cReact \u4f1a\u5c3d\u53ef\u80fd\u591a\u5730\u4fdd\u7559\u539f\u6765\u7684\u8282\u70b9\u3002\u5982\u679c\u65b0\u7684\u865a\u62df DOM \u4e2d\u6709\u591a\u4f59\u7684\u8282\u70b9\uff0c\u5b83\u4f1a\u628a\u591a\u4f59\u7684\u8282\u70b9\u63d2\u5165\u5230\u76f8\u5e94\u7684\u4f4d\u7f6e\uff1b\u5982\u679c\u65b0\u7684\u865a\u62df DOM \u4e2d\u5c11\u4e86\u67d0\u4e9b\u8282\u70b9\uff0c\u5b83\u4f1a\u628a\u591a\u4f59\u7684\u8282\u70b9\u5220\u9664\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728\u6bd4\u8f83\u8fc7\u7a0b\u4e2d\uff0cReact \u4f1a\u628a\u8282\u70b9\u5206\u6210\u56db\u7c7b\uff1a\u65b0\u589e\u3001\u5220\u9664\u3001\u4fee\u6539\u3001\u79fb\u52a8\u3002\u5bf9\u4e8e\u65b0\u589e\u3001\u5220\u9664\u3001\u4fee\u6539\u7684\u8282\u70b9\uff0cReact \u4f1a\u76f4\u63a5\u5728 DOM \u4e2d\u8fdb\u884c\u5bf9\u5e94\u7684\u64cd\u4f5c\u3002\u5bf9\u4e8e\u79fb\u52a8\u7684\u8282\u70b9\uff0cReact \u4f1a\u5148\u5c06\u8282\u70b9\u4ece\u539f\u6765\u7684\u4f4d\u7f6e\u5220\u9664\uff0c\u7136\u540e\u518d\u5c06\u8282\u70b9\u63d2\u5165\u5230\u65b0\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\uff0cReact \u7684 diff \u7b97\u6cd5\u53ef\u4ee5\u6700\u5c0f\u5316\u9875\u9762\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u63d0\u9ad8\u6027\u80fd\u3002"))),(0,i.kt)("h2",{id:"\u5355\u8282\u70b9\u7684-diff"},"\u5355\u8282\u70b9\u7684 diff"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20230220164823.png",alt:null})),(0,i.kt)("h3",{id:"1\u5355\u8282\u70b9-key-\u548c\u7c7b\u578b\u76f8\u540c"},"1\u3001\u5355\u8282\u70b9 key \u548c\u7c7b\u578b\u76f8\u540c"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u590d\u7528\u8001 Fiber \u5e76\u8fd4\u56de")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728 begin \u9636\u6bb5\u8c03\u7528 useFiber \u4f20\u5165\u8001 fiber \u548c\u65b0\u7684\u865a\u62df dom \u7684 props \u521b\u5efa WorkInProgress \u7684\u65b0 fiber")),(0,i.kt)("p",null,"main.jsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <div onClick={() => setNumber(number + 1)} key="title1" id="title">\n      title\n    </div>\n  ) : (\n    <div onClick={() => setNumber(number + 1)} key="title" id="title2">\n      title2\n    </div>\n  )\n}\n')),(0,i.kt)("p",null,"src\\react-reconciler\\src\\ReactChildFiber.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n *\n * @param {*} returnFiber \u6839fiber div#root\u5bf9\u5e94\u7684fiber\n * @param {*} currentFirstChild \u8001\u7684FunctionComponent\u5bf9\u5e94\u7684fiber\n * @param {*} element \u65b0\u7684\u865a\u62dfDOM\u5bf9\u8c61\n * @returns \u8fd4\u56de\u65b0\u7684\u7b2c\u4e00\u4e2a\u5b50fiber\n */\nfunction reconcileSingleElement(returnFiber, currentFirstChild, element) {\n  const key = element.key\n  let child = currentFirstChild\n  while (child !== null) {\n    if (child.key === key) {\n      if (child.type === element.type) {\n        //\u5982\u679ckey\u4e00\u6837\uff0c\u7c7b\u578b\u4e5f\u4e00\u6837\uff0c\u5219\u8ba4\u4e3a\u6b64\u8282\u70b9\u53ef\u4ee5\u590d\u7528\n        const existing = useFiber(child, element.props)\n        existing.return = returnFiber\n        return existing\n      }\n    }\n  }\n}\n\nfunction useFiber(fiber, pendingProps) {\n  const clone = createWorkInProgress(fiber, pendingProps)\n  clone.index = 0\n  clone.sibling = null\n  return clone\n}\n")),(0,i.kt)("h3",{id:"2\u5355\u8282\u70b9-key-\u4e0d\u540c\u7c7b\u578b\u76f8\u540c"},"2\u3001",(0,i.kt)("strong",{parentName:"h3"},"\u5355\u8282\u70b9 key \u4e0d\u540c,\u7c7b\u578b\u76f8\u540c\uff0c")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u5220\u9664\u8001\u8282\u70b9\uff0c\u6dfb\u52a0\u65b0\u8282\u70b9")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"begin work \u9636\u6bb5 \u5f53\u68c0\u6d4b\u5230 key \u4e0d\u540c\u7684\u65f6\u5019\uff0c\u7ed9\u7236 fiber \u7684 deletions=","[deletedFiber]","\u8d4b\u503c\u548c flags \u505a\u4e0a\u5220\u9664\u7684\u6807\u8bb0\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5728 commit \u9636\u6bb5 \u4ece\u6839\u8282\u70b9\u9012\u5f52\u904d\u5386\u5904\u7406\u53d8\u66f4\u7684\u65f6\u5019\uff0c\u5148\u901a\u8fc7\u7236 fiber\uff0c\u627e\u5230\u6700\u8fd1\u771f\u5b9e\u7684 DOM \u8282\u70b9\uff0c\u7136\u540e\u9012\u5f52\u4ece\u91cc\u5411\u5916\u5220\u9664\u5b83\u7684\u771f\u5b9e dom\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u5904\u7406\u4e00\u4e9b\u7ec4\u4ef6\u9500\u6bc1\u65f6\u5019\u5982 uesEffect \u7684\u526f\u4f5c\u7528\u3002")),(0,i.kt)("p",null,"main.jsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <div onClick={() => setNumber(number + 1)} key="title1" id="title">\n      title\n    </div>\n  ) : (\n    <div onClick={() => setNumber(number + 1)} key="title2" id="title2">\n      title2\n    </div>\n  )\n}\n')),(0,i.kt)("p",null,"src\\react-reconciler\\src\\ReactChildFiber.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n   *\n   * @param {*} returnFiber \u6839fiber div#root\u5bf9\u5e94\u7684fiber\n   * @param {*} currentFirstChild \u8001\u7684FunctionComponent\u5bf9\u5e94\u7684fiber\n   * @param {*} element \u65b0\u7684\u865a\u62dfDOM\u5bf9\u8c61\n   * @returns \u8fd4\u56de\u65b0\u7684\u7b2c\u4e00\u4e2a\u5b50fiber\n   */\n  function reconcileSingleElement(returnFiber, currentFirstChild, element) {\n        const key = element.key;\n        let child = currentFirstChild;\n    while (child !== null) {\n        if (child.key === key) {\n      //...\n        }\n     } else {\n       deleteChild(returnFiber, child);//\u7ed9fiber\u4e0a\u505a\u6807\u8bb0\n     }\n      child = child.sibling;\n    }\n\n\n\n   /**\n   *\u7ed9\u7236fiber\u7684deletions\u548cflags\u8d4b\u503c\n   * @param {*} returnFiber \u7236fiber\n   * @param {*} childToDelete \u5c06\u8981\u5220\u9664\u7684\u8001\u8282\u70b9\n   * @returns\n   */\n  function deleteChild(returnFiber, childToDelete) {\n    if (!shouldTrackSideEffects) return\n    const deletions = returnFiber.deletions\n    if (deletions === null) {\n      returnFiber.deletions = [childToDelete]\n      returnFiber.flags |= ChildDeletion\n    } else {\n      returnFiber.deletions.push(childToDelete)\n    }\n  }\n")),(0,i.kt)("p",null,"src\\react-reconciler\\src\\ReactFiberCommitWork.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \u9012\u5f52\u904d\u5386\u5904\u7406\u53d8\u66f4\u7684\u4f5c\u7528\n * @param {*} root \u6839\u8282\u70b9\n * @param {*} parentFiber  \u7236fiber\n */\nfunction recursivelyTraverseMutationEffects(root, parentFiber) {\n  //\u5148\u628a\u7236fiber\u4e0a\u8be5\u5220\u9664\u7684\u8282\u70b9\u90fd\u5220\u9664\n  const deletions = parentFiber.deletions\n  if (deletions !== null) {\n    for (let i = 0; i < deletions.length; i++) {\n      const childToDelete = deletions[i]\n      //\u63d0\u4ea4\u5220\u9664\u526f\u4f5c\u7528\n      commitDeletionEffects(root, parentFiber, childToDelete)\n    }\n  }\n  //\u518d\u53bb\u5904\u7406\u5269\u4e0b\u7684\u5b50\u8282\u70b9\n  //\u5224\u65ad\u662f\u5426\u6709\u526f\u4f5c\u7528...\n}\nlet hostParent = null // \u771f\u5b9e\u7684\u7236fiber\u5bf9\u5e94\u7684DOM\n/**\n * \u63d0\u4ea4\u5220\u9664\u526f\u4f5c\u7528\n * @param {*} root \u6839\u8282\u70b9\n * @param {*} returnFiber \u7236fiber\n * @param {*} deletedFiber \u5220\u9664\u7684fiber\n */\nfunction commitDeletionEffects(root, returnFiber, deletedFiber) {\n  let parent = returnFiber\n  //\u4e00\u76f4\u5411\u4e0a\u627e\uff0c\u627e\u5230\u771f\u5b9e\u7684DOM\u8282\u70b9\u4e3a\u6b64\n  findParent: while (parent !== null) {\n    switch (parent.tag) {\n      case HostComponent: {\n        hostParent = parent.stateNode\n        break findParent\n      }\n      case HostRoot: {\n        hostParent = parent.stateNode.containerInfo\n        break findParent\n      }\n    }\n    parent = parent.return\n  }\n  commitDeletionEffectsOnFiber(root, returnFiber, deletedFiber)\n  hostParent = null\n}\n\n/**\n * \u5220\u9664\u771f\u5b9eDom\n * @param {*} finishedRoot \u8ddfbiber\n * @param {*} nearestMountedAncestor \u6700\u8fd1\u7684\u7236fiber\n * @param {*} deletedFiber \u8981\u5220\u9664\u7684fiber\n */\nfunction commitDeletionEffectsOnFiber(\n  finishedRoot,\n  nearestMountedAncestor,\n  deletedFiber\n) {\n  switch (deletedFiber.tag) {\n    case HostComponent:\n    case HostText: {\n      //\u5f53\u8981\u5220\u9664\u4e00\u4e2a\u8282\u70b9\u7684\u65f6\u5019\uff0c\u8981\u5148\u5220\u9664\u5b83\u7684\u5b50\u8282\u70b9\n      recursivelyTraverseDeletionEffects(\n        finishedRoot,\n        nearestMountedAncestor,\n        deletedFiber\n      )\n      //\u518d\u628a\u81ea\u5df1\u5220\u9664\n      if (hostParent !== null) {\n        removeChild(hostParent, deletedFiber.stateNode)\n      }\n      break\n    }\n    default:\n      break\n  }\n}\n//\u9012\u5f52\u904d\u5386\nfunction recursivelyTraverseDeletionEffects(\n  finishedRoot,\n  nearestMountedAncestor,\n  parent\n) {\n  let child = parent.child\n  while (child !== null) {\n    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, child)\n    child = child.sibling\n  }\n}\n")),(0,i.kt)("p",null,"src\\react-dom-bindings\\src\\client\\ReactDOMHostConfig.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export function removeChild(parentInstance, child) {\n  parentInstance.removeChild(child)\n}\n")),(0,i.kt)("h3",{id:"3\u5355\u8282\u70b9-key-\u76f8\u540c\u7c7b\u578b\u4e0d\u540c"},"3\u3001\u5355\u8282\u70b9 key \u76f8\u540c,\u7c7b\u578b\u4e0d\u540c"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u5220\u9664\u5305\u62ec\u5f53\u524d fiber \u5728\u5185\u7684\u6240\u6709\u7684\u8001 fiber")),(0,i.kt)("p",null,"main.jsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <div onClick={() => setNumber(number + 1)} key="title1" id="title1">\n      title1\n    </div>\n  ) : (\n    <p onClick={() => setNumber(number + 1)} key="title1" id="title1">\n      title1\n    </p>\n  )\n}\n')),(0,i.kt)("p",null,"src\\react-reconciler\\src\\ReactChildFiber.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n *\n * @param {*} returnFiber \u6839fiber div#root\u5bf9\u5e94\u7684fiber\n * @param {*} currentFirstChild \u8001\u7684FunctionComponent\u5bf9\u5e94\u7684fiber\n * @param {*} element \u65b0\u7684\u865a\u62dfDOM\u5bf9\u8c61\n * @returns \u8fd4\u56de\u65b0\u7684\u7b2c\u4e00\u4e2a\u5b50fiber\n */\nfunction reconcileSingleElement(returnFiber, currentFirstChild, element) {\n  const key = element.key\n  let child = currentFirstChild\n  while (child !== null) {\n    if (child.key === key) {\n      if (child.type === element.type) {\n        //...\n      } else {\n        deleteRemai\xb7ningChildren(returnFiber, child)\n        break\n      }\n    }\n  }\n}\n\n//\u5220\u9664\u4ececurrentFirstChild\u4e4b\u540e\u6240\u6709\u7684fiber\u8282\u70b9\nfunction deleteRemainingChildren(returnFiber, currentFirstChild) {\n  if (!shouldTrackSideEffects) return\n  let childToDelete = currentFirstChild\n  while (childToDelete !== null) {\n    deleteChild(returnFiber, childToDelete)\n    childToDelete = childToDelete.sibling\n  }\n  return null\n}\n\nfunction deleteChild(returnFiber, childToDelete) {\n  if (!shouldTrackSideEffects) return\n  const deletions = returnFiber.deletions\n  if (deletions === null) {\n    returnFiber.deletions = [childToDelete]\n    returnFiber.flags |= ChildDeletion\n  } else {\n    returnFiber.deletions.push(childToDelete)\n  }\n}\n")),(0,i.kt)("h3",{id:"4\u539f\u6765\u591a\u4e2a\u8282\u70b9\u73b0\u5728\u53ea\u6709\u4e00\u4e2a\u8282\u70b9"},"4\u3001\u539f\u6765\u591a\u4e2a\u8282\u70b9\uff0c\u73b0\u5728\u53ea\u6709\u4e00\u4e2a\u8282\u70b9"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u5220\u9664\u591a\u4f59\u8282\u70b9")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u8001 fiber \u76f4\u63a5\u8fd4\u56de\u5168\u65b0\u7684 fiber,\u5982\u679c\u6709\u8001 fiber\uff0c\u770b key \u662f\u5426\u76f8\u540c\uff0ckey \u4e0d\u540c\u5220\u9664\u5f53\u524d fiber \u5e76\u67e5\u627e\u4e0b\u4e00\u4e2a fiber\uff0ckey \u76f8\u540c\u7c7b\u578b\u4e0d\u540c,\u5220\u9664\u5f53\u524d fiber \u5728\u5185\u7684\u6240\u6709\u8001 fiebr \u5e76\u8fd4\u56de\u65b0\u7684 fiber\uff0c\u5982\u679c\u7c7b\u578b\u76f8\u540c\u590d\u5220\u9664\u5269\u4e0b\u7684\u5176\u4ed6\u8001 fiber \u5e76\u590d\u7528\u8001 fiber \u8fd4\u56de")),(0,i.kt)("p",null,"main.jsx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A</li>\n      <li key="B" id="B">\n        B\n      </li>\n      <li key="C">C</li>\n    </ul>\n  ) : (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="B" id="B2">\n        B2\n      </li>\n    </ul>\n  )\n}\n')),(0,i.kt)("p",null,"src\\react-reconciler\\src\\ReactChildFiber.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/**\n *\n * @param {*} returnFiber \u6839fiber div#root\u5bf9\u5e94\u7684fiber\n * @param {*} currentFirstChild \u8001\u7684FunctionComponent\u5bf9\u5e94\u7684fiber\n * @param {*} element \u65b0\u7684\u865a\u62dfDOM\u5bf9\u8c61\n * @returns \u8fd4\u56de\u65b0\u7684\u7b2c\u4e00\u4e2a\u5b50fiber\n */\nfunction reconcileSingleElement(returnFiber, currentFirstChild, element) {\n  //\u65b0\u7684\u865a\u62dfDOM\u7684key,\u4e5f\u5c31\u662f\u552f\u4e00\u6807\u51c6\n  debugger\n  const key = element.key // null\n  let child = currentFirstChild //\u8001\u7684FunctionComponent\u5bf9\u5e94\u7684fiber\n\n  while (child !== null) {\n    //\u6709\u8001fiber\n    //\u5224\u65ad\u6b64\u8001fiber\u5bf9\u5e94\u7684key\u548c\u65b0\u7684\u865a\u62dfDOM\u5bf9\u8c61\u7684key\u662f\u5426\u4e00\u6837 null===null\n    if (child.key === key) {\n      //\u5224\u65ad\u8001fiber\u5bf9\u5e94\u7684\u7c7b\u578b\u548c\u65b0\u865a\u62dfDOM\u5143\u7d20\u5bf9\u5e94\u7684\u7c7b\u578b\u662f\u5426\u76f8\u540c\n      if (child.type === element.type) {\n        // p div\n        deleteRemainingChildren(returnFiber, child.sibling)\n        //\u5982\u679ckey\u4e00\u6837\uff0c\u7c7b\u578b\u4e5f\u4e00\u6837\uff0c\u5219\u8ba4\u4e3a\u6b64\u8282\u70b9\u53ef\u4ee5\u590d\u7528\n        const existing = useFiber(child, element.props)\n        existing.return = returnFiber\n        return existing\n      } else {\n        //\u5982\u679c\u627e\u5230\u4e00key\u4e00\u6837\u8001fiber,\u4f46\u662f\u7c7b\u578b\u4e0d\u4e00\u6837\uff0c\u4e0d\u80fd\u6b64\u8001fiber,\u628a\u5269\u4e0b\u7684\u5168\u90e8\u5220\u9664\n        deleteRemainingChildren(returnFiber, child)\n      }\n    } else {\n      deleteChild(returnFiber, child)\n    }\n    child = child.sibling\n  }\n\n  //\u56e0\u4e3a\u6211\u4eec\u73b0\u5b9e\u7684\u521d\u6b21\u6302\u8f7d\uff0c\u8001\u8282\u70b9currentFirstChild\u80af\u5b9a\u662f\u6ca1\u6709\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u6839\u636e\u865a\u62dfDOM\u521b\u5efa\u65b0\u7684Fiber\u8282\u70b9\n  const created = createFiberFromElement(element)\n  created.return = returnFiber\n  return created\n}\n")),(0,i.kt)("h2",{id:"\u591a\u8282\u70b9\u7684-diff"},"\u591a\u8282\u70b9\u7684 diff"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DOM DIFF \u7684\u4e09\u4e2a\u89c4\u5219",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ea\u5bf9\u540c\u7ea7\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\uff0c\u4e0d\u540c\u5c42\u7ea7\u4e0d\u5bf9\u6bd4"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u7c7b\u578b\u5bf9\u5e94\u4e0d\u540c\u7684\u5143\u7d20"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7 key \u6765\u6807\u8bc6\u540c\u4e00\u4e2a\u8282\u70b9"))),(0,i.kt)("li",{parentName:"ul"},"\u7b2c 1 \u8f6e\u904d\u5386",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c key \u4e0d\u540c\u5219\u76f4\u63a5\u7ed3\u675f\u672c\u8f6e\u5faa\u73af"),(0,i.kt)("li",{parentName:"ul"},"newChildren \u6216 oldFiber \u904d\u5386\u5b8c\uff0c\u7ed3\u675f\u672c\u8f6e\u5faa\u73af"),(0,i.kt)("li",{parentName:"ul"},"key \u76f8\u540c\u800c type \u4e0d\u540c\uff0c\u6807\u8bb0\u8001\u7684 oldFiber \u4e3a\u5220\u9664\uff0c\u7ee7\u7eed\u5faa\u73af"),(0,i.kt)("li",{parentName:"ul"},"key \u76f8\u540c\u800c type \u4e5f\u76f8\u540c\uff0c\u5219\u53ef\u4ee5\u590d\u7528\u8001\u8282 oldFiber \u8282\u70b9\uff0c\u7ee7\u7eed\u5faa\u73af"))),(0,i.kt)("li",{parentName:"ul"},"\u7b2c 2 \u8f6e\u904d\u5386",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"newChildren \u904d\u5386\u5b8c\u800c oldFiber \u8fd8\u6709\uff0c\u904d\u5386\u5269\u4e0b\u6240\u6709\u7684 oldFiber \u6807\u8bb0\u4e3a\u5220\u9664\uff0cDIFF \u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},"oldFiber \u904d\u5386\u5b8c\u4e86\uff0c\u800c newChildren \u8fd8\u6709\uff0c\u5c06\u5269\u4e0b\u7684 newChildren \u6807\u8bb0\u4e3a\u63d2\u5165\uff0cDIFF \u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},"newChildren \u548c oldFiber \u90fd\u540c\u65f6\u904d\u5386\u5b8c\u6210\uff0cdiff \u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},"newChildren \u548c oldFiber \u90fd\u6ca1\u6709\u5b8c\u6210\uff0c\u5219\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"\u8282\u70b9\u79fb\u52a8"),"\u7684\u903b\u8f91"))),(0,i.kt)("li",{parentName:"ul"},"\u7b2c 3 \u8f6e\u904d\u5386",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406\u8282\u70b9\u79fb\u52a8\u7684\u60c5\u51b5")))),(0,i.kt)("h3",{id:"1\u591a\u4e2a\u8282\u70b9\u7684\u6570\u91cf\u548c-key-\u76f8\u540c\u6709\u7684-type-\u4e0d\u540c"},"1\u3001\u591a\u4e2a\u8282\u70b9\u7684\u6570\u91cf\u548c key \u76f8\u540c\uff0c\u6709\u7684 type \u4e0d\u540c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20230220164902.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A</li>\n      <li key="B" id="B">\n        B\n      </li>\n      <li key="C" id="C">\n        C\n      </li>\n    </ul>\n  ) : (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A2</li>\n      <p key="B" id="B2">\n        B2\n      </p>\n      <li key="C" id="C2">\n        C2\n      </li>\n    </ul>\n  )\n}\n')),(0,i.kt)("h3",{id:"2\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c-key-\u5168\u90e8\u76f8\u540c\u6709\u65b0\u589e\u5143\u7d20"},"2\u3001\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c key \u5168\u90e8\u76f8\u540c\uff0c\u6709\u65b0\u589e\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A</li>\n      <li key="B" id="B">\n        B\n      </li>\n      <li key="C" id="C">\n        C\n      </li>\n    </ul>\n  ) : (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A2</li>\n      <p key="B" id="B2">\n        B2\n      </p>\n      <li key="C" id="C2">\n        C2\n      </li>\n      <li key="D">D</li>\n    </ul>\n  )\n}\n')),(0,i.kt)("h3",{id:"3\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c-key-\u5168\u90e8\u76f8\u540c\u6709\u5220\u9664\u8001\u5143\u7d20"},"3.\u591a\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u548c key \u5168\u90e8\u76f8\u540c\uff0c\u6709\u5220\u9664\u8001\u5143\u7d20"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A</li>\n      <li key="B" id="B">\n        B\n      </li>\n      <li key="C" id="C">\n        C\n      </li>\n    </ul>\n  ) : (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A2</li>\n      <p key="B" id="B2">\n        B2\n      </p>\n    </ul>\n  )\n}\n')),(0,i.kt)("h3",{id:"4\u591a\u4e2a\u8282\u70b9\u6570\u91cf\u4e0d\u540ckey-\u4e0d\u540c"},"4.\u591a\u4e2a\u8282\u70b9\u6570\u91cf\u4e0d\u540c\u3001key \u4e0d\u540c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u8282\u70b9\u6570\u91cf\u4e0d\u540c\u3001key \u4e0d\u540c"),(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u8f6e\u6bd4\u8f83 A \u548c A\uff0c\u76f8\u540c\u53ef\u4ee5\u590d\u7528\uff0c\u66f4\u65b0\uff0c\u7136\u540e\u6bd4\u8f83 B \u548c C\uff0ckey \u4e0d\u540c\u76f4\u63a5\u8df3\u51fa\u7b2c\u4e00\u4e2a\u5faa\u73af"),(0,i.kt)("li",{parentName:"ul"},"\u628a\u5269\u4e0b oldFiber \u7684\u653e\u5165 existingChildren \u8fd9\u4e2a map \u4e2d"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e\u58f0\u660e\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"lastPlacedIndex"),"\u53d8\u91cf\uff0c\u8868\u793a\u4e0d\u9700\u8981\u79fb\u52a8\u7684\u8001\u8282\u70b9\u7684\u7d22\u5f15"),(0,i.kt)("li",{parentName:"ul"},"\u7ee7\u7eed\u5faa\u73af\u5269\u4e0b\u7684\u865a\u62df DOM \u8282\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u80fd\u5728 map \u4e2d\u627e\u5230\u76f8\u540c key \u76f8\u540c type \u7684\u8282\u70b9\u5219\u53ef\u4ee5\u590d\u7528\u8001 fiber,\u5e76\u628a\u6b64\u8001 fiber \u4ece map \u4e2d\u5220\u9664"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u80fd\u5728 map \u4e2d\u627e\u4e0d\u5230\u76f8\u540c key \u76f8\u540c type \u7684\u8282\u70b9\u5219\u521b\u5efa\u65b0\u7684 fiber"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u590d\u7528\u8001\u7684 fiber,\u5219\u5224\u65ad\u8001 fiber \u7684\u7d22\u5f15\u662f\u5426\u5c0f\u4e8e lastPlacedIndex\uff0c\u5982\u679c\u662f\u8981\u79fb\u52a8\u8001 fiber\uff0c\u4e0d\u53d8"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\u590d\u7528\u8001\u7684 fiber,\u5219\u5224\u65ad\u8001 fiber \u7684\u7d22\u5f15\u662f\u5426\u5c0f\u4e8e lastPlacedIndex\uff0c\u5982\u679c\u5426\u5219\u66f4\u65b0 lastPlacedIndex \u4e3a\u8001 fiber \u7684 index"),(0,i.kt)("li",{parentName:"ul"},"\u628a\u6240\u6709\u7684 map \u4e2d\u5269\u4e0b\u7684 fiber \u5168\u90e8\u6807\u8bb0\u4e3a\u5220\u9664"),(0,i.kt)("li",{parentName:"ul"},"(\u5220\u9664#li#F)=>(\u6dfb\u52a0#li#B)=>(\u6dfb\u52a0#li#G)=>(\u6dfb\u52a0#li#D)=>null")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20230220164329.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"C:%5CUsers%5C%E5%93%97%E5%95%A6%E5%95%A6%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230220164410416.png",alt:"image-20230220164410416"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function FunctionComponent() {\n  const [number, setNumber] = React.useState(0)\n  return number === 0 ? (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A</li>\n      <li key="B" id="b">\n        B\n      </li>\n      <li key="C">C</li>\n      <li key="D">D</li>\n      <li key="E">E</li>\n      <li key="F" id="F">\n        F\n      </li>\n    </ul>\n  ) : (\n    <ul key="container" onClick={() => setNumber(number + 1)}>\n      <li key="A">A2</li>\n      <li key="C">C2</li>\n      <li key="E">E2</li>\n      <li key="B" id="b2">\n        B2\n      </li>\n      <li key="G">G</li>\n      <li key="D">D2</li>\n    </ul>\n  )\n}\n')))}d.isMDXComponent=!0}}]);