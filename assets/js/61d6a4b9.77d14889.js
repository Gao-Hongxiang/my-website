"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8260],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,v=u["".concat(c,".").concat(h)]||u[h]||d[h]||l;return t?r.createElement(v,a(a({ref:n},s),{},{components:t})):r.createElement(v,a({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const l={title:"6\u3001Vue3\u6e32\u67d3\u539f\u7406",tags:["Vue.js"]},a=void 0,i={unversionedId:"06Vue3\u6e32\u67d3\u539f\u7406",id:"06Vue3\u6e32\u67d3\u539f\u7406",title:"6\u3001Vue3\u6e32\u67d3\u539f\u7406",description:"\u865a\u62df\u8282\u70b9\u7684\u5b9e\u73b0",source:"@site/vue/06Vue3\u6e32\u67d3\u539f\u7406.md",sourceDirName:".",slug:"/06Vue3\u6e32\u67d3\u539f\u7406",permalink:"/website/vue/06Vue3\u6e32\u67d3\u539f\u7406",draft:!1,tags:[{label:"Vue.js",permalink:"/website/vue/tags/vue-js"}],version:"current",frontMatter:{title:"6\u3001Vue3\u6e32\u67d3\u539f\u7406",tags:["Vue.js"]},sidebar:"tutorialSidebar",previous:{title:"5\u3001watch & WatchEffect",permalink:"/website/vue/05watch"},next:{title:"7\u3001Vue3\u4e2d\u7684diff\u7b97\u6cd5",permalink:"/website/vue/07Vue\u4e2d\u7684diff\u7b97\u6cd5"}},c={},p=[{value:"\u865a\u62df\u8282\u70b9\u7684\u5b9e\u73b0",id:"\u865a\u62df\u8282\u70b9\u7684\u5b9e\u73b0",level:2},{value:"\u5f62\u72b6\u6807\u8bc6",id:"\u5f62\u72b6\u6807\u8bc6",level:3},{value:"createVNode \u5b9e\u73b0",id:"createvnode-\u5b9e\u73b0",level:3},{value:"h \u5b9e\u73b0",id:"h-\u5b9e\u73b0",level:3},{value:"createRenderer \u5b9e\u73b0",id:"createrenderer-\u5b9e\u73b0",level:2},{value:"\u521b\u5efa\u771f\u5b9e DOM",id:"\u521b\u5efa\u771f\u5b9e-dom",level:2},{value:"\u5378\u8f7d DOM",id:"\u5378\u8f7d-dom",level:2},{value:"\u4f18\u5316\u8c03\u7528\u65b9\u6cd5",id:"\u4f18\u5316\u8c03\u7528\u65b9\u6cd5",level:2}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u865a\u62df\u8282\u70b9\u7684\u5b9e\u73b0"},"\u865a\u62df\u8282\u70b9\u7684\u5b9e\u73b0"),(0,o.kt)("h3",{id:"\u5f62\u72b6\u6807\u8bc6"},"\u5f62\u72b6\u6807\u8bc6"),(0,o.kt)("p",null,"\u901a\u8fc7\u7ec4\u5408\u53ef\u4ee5\u63cf\u8ff0\u865a\u62df\u8282\u70b9\u7684\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const enum ShapeFlags { // vue3\u63d0\u4f9b\u7684\u5f62\u72b6\u6807\u8bc6\n  ELEMENT = 1,\n  FUNCTIONAL_COMPONENT = 1 << 1,\n  STATEFUL_COMPONENT = 1 << 2,\n  TEXT_CHILDREN = 1 << 3,\n  ARRAY_CHILDREN = 1 << 4,\n  SLOTS_CHILDREN = 1 << 5,\n  TELEPORT = 1 << 6,\n  SUSPENSE = 1 << 7,\n  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,\n  COMPONENT_KEPT_ALIVE = 1 << 9,\n  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,\n}\n")),(0,o.kt)("h3",{id:"createvnode-\u5b9e\u73b0"},"createVNode \u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export function isVNode(value: any) {\n  return value ? value.__v_isVNode === true : false\n}\nexport const createVNode = (type, props, children = null) => {\n  const shapeFlag = isString(type) ? ShapeFlags.ELEMENT : 0\n  const vnode = {\n    __v_isVNode: true,\n    type,\n    props,\n    key: props && props["key"],\n    el: null,\n    children,\n    shapeFlag,\n  }\n  if (children) {\n    let type = 0\n    if (Array.isArray(children)) {\n      type = ShapeFlags.ARRAY_CHILDREN\n    } else {\n      children = String(children)\n      type = ShapeFlags.TEXT_CHILDREN\n    }\n    vnode.shapeFlag |= type\n    // \u5982\u679cshapeFlag\u4e3a9 \u8bf4\u660e\u5143\u7d20\u4e2d\u5305\u542b\u4e00\u4e2a\u6587\u672c\n    // \u5982\u679cshapeFlag\u4e3a17 \u8bf4\u660e\u5143\u7d20\u4e2d\u6709\u591a\u4e2a\u5b50\u8282\u70b9\n  }\n  return vnode\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"createVNode \u7684\u5199\u6cd5\u6bd4\u8f83\u6b7b\u677f\uff0c\u6211\u4eec\u8ba9\u4ed6\u53d8\u7684\u66f4\u7075\u6d3b\u4e9b")),(0,o.kt)("h3",{id:"h-\u5b9e\u73b0"},"h \u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function h(type, propsOrChildren?, children?) {\n  const l = arguments.length\n  if (l === 2) {\n    // \u53ea\u6709\u5c5e\u6027\uff0c\u6216\u8005\u4e00\u4e2a\u5143\u7d20\u513f\u5b50\u7684\u65f6\u5019\n    if (isObject(propsOrChildren) && !Array.isArray(propsOrChildren)) {\n      if (isVNode(propsOrChildren)) {\n        // h('div',h('span'))\n        return createVNode(type, null, [propsOrChildren])\n      }\n      return createVNode(type, propsOrChildren) // h('div',{style:{color:'red'}});\n    } else {\n      // \u4f20\u9012\u513f\u5b50\u5217\u8868\u7684\u60c5\u51b5\n      return createVNode(type, null, propsOrChildren) // h('div',null,[h('span'),h('span')])\n    }\n  } else {\n    if (l > 3) {\n      // \u8d85\u8fc73\u4e2a\u9664\u4e86\u524d\u4e24\u4e2a\u90fd\u662f\u513f\u5b50\n      children = Array.prototype.slice.call(arguments, 2)\n    } else if (l === 3 && isVNode(children)) {\n      children = [children] // \u513f\u5b50\u662f\u5143\u7d20\u5c06\u5176\u5305\u88c5\u6210 h('div',null,[h('span')])\n    }\n    return createVNode(type, propsOrChildren, children) // h('div',null,'jw')\n  }\n}\n// \u6ce8\u610f\u5b50\u8282\u70b9\u662f\uff1a\u6570\u7ec4\u3001\u6587\u672c\u3001null\n")),(0,o.kt)("h2",{id:"createrenderer-\u5b9e\u73b0"},"createRenderer \u5b9e\u73b0"),(0,o.kt)("p",null,"render \u65b9\u6cd5\u5c31\u662f\u91c7\u7528 runtime-dom \u4e2d\u63d0\u4f9b\u7684\u65b9\u6cd5\u5c06\u865a\u62df\u8282\u70b9\u8f6c\u5316\u6210\u5bf9\u5e94\u5e73\u53f0\u7684\u771f\u5b9e\u8282\u70b9\u6e32\u67d3\u5230\u6307\u5b9a\u5bb9\u5668\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function createRenderer(options) {\n  const {\n    insert: hostInsert,\n    remove: hostRemove,\n    patchProp: hostPatchProp,\n    createElement: hostCreateElement,\n    createText: hostCreateText,\n    setText: hostSetText,\n    setElementText: hostSetElementText,\n    parentNode: hostParentNode,\n    nextSibling: hostNextSibling,\n  } = options\n  const patch = (n1, n2, container) => {\n    // \u521d\u59cb\u5316\u548cdiff\u7b97\u6cd5\u90fd\u5728\u8fd9\u91cc\u55b2\n  }\n  const render = (vnode, container) => {\n    if (vnode == null) {\n      if (container._vnode) {\n      } // \u5378\u8f7d\n    } else {\n      patch(container._vnode || null, vnode, container) // \u521d\u59cb\u5316\u548c\u66f4\u65b0\n    }\n    container._vnode = vnode\n  }\n  return {\n    render,\n  }\n}\n")),(0,o.kt)("h2",{id:"\u521b\u5efa\u771f\u5b9e-dom"},"\u521b\u5efa\u771f\u5b9e DOM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const mountChildren = (children, container) => {\n  for (let i = 0; i < children.length; i++) {\n    patch(null, children[i], container)\n  }\n}\nconst mountElement = (vnode, container) => {\n  const { type, props, shapeFlag } = vnode\n  let el = (vnode.el = hostCreateElement(type)) // \u521b\u5efa\u771f\u5b9e\u5143\u7d20\uff0c\u6302\u8f7d\u5230\u865a\u62df\u8282\u70b9\u4e0a\n  if (props) {\n    // \u5904\u7406\u5c5e\u6027\n    for (const key in props) {\n      // \u66f4\u65b0\u5143\u7d20\u5c5e\u6027\n      hostPatchProp(el, key, null, props[key])\n    }\n  }\n  if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {\n    // \u6587\u672c\n    hostSetElementText(el, vnode.children)\n  } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {\n    // \u591a\u4e2a\u513f\u5b50\n    mountChildren(vnode.children, el)\n  }\n  hostInsert(el, container) // \u63d2\u5165\u5230\u5bb9\u5668\u4e2d\n}\nconst patch = (n1, n2, container) => {\n  // \u521d\u59cb\u5316\u548cdiff\u7b97\u6cd5\u90fd\u5728\u8fd9\u91cc\u55b2\n  if (n1 == n2) {\n    return\n  }\n  if (n1 == null) {\n    // \u521d\u59cb\u5316\u7684\u60c5\u51b5\n    mountElement(n2, container)\n  } else {\n    // diff\u7b97\u6cd5\n  }\n}\n")),(0,o.kt)("h2",{id:"\u5378\u8f7d-dom"},"\u5378\u8f7d DOM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'createRenderer(renderOptions).render(null, document.getElementById("app"))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const unmount = (vnode) => {\n  hostRemove(vnode.el)\n}\nconst render = (vnode, container) => {\n  if (vnode == null) {\n    if (container._vnode) {\n      // \u5378\u8f7d\n      unmount(container._vnode) // \u627e\u5230\u5bf9\u5e94\u7684\u771f\u5b9e\u8282\u70b9\u5c06\u5176\u5378\u8f7d\n    }\n  } else {\n    patch(container._vnode || null, vnode, container) // \u521d\u59cb\u5316\u548c\u66f4\u65b0\n  }\n  container._vnode = vnode\n}\n")),(0,o.kt)("h2",{id:"\u4f18\u5316\u8c03\u7528\u65b9\u6cd5"},"\u4f18\u5316\u8c03\u7528\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export const render = (vnode, container) => {\n  createRenderer(renderOptions).render(vnode, container)\n}\nexport * from "@vue/runtime-core"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"render"),"\u65b9\u6cd5\u8fdb\u884c\u6e32\u67d3\u5566~")))}d.isMDXComponent=!0}}]);