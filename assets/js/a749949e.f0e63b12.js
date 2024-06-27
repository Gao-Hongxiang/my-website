"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1336],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,k=d["".concat(l,".").concat(m)]||d[m]||i[m]||s;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>i,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={title:"9\u3001setup\u51fd\u6570",tags:["Vue.js"]},o=void 0,p={unversionedId:"09setup\u51fd\u6570",id:"09setup\u51fd\u6570",title:"9\u3001setup\u51fd\u6570",description:"\u7ec4\u4ef6\u7684 render \u51fd\u6570\u6bcf\u6b21\u66f4\u65b0\u65f6\u90fd\u4f1a\u91cd\u65b0\u6267\u884c,\u4f46\u662f setup \u51fd\u6570\u53ea\u4f1a\u5728\u7ec4\u4ef6\u6302\u8f7d\u65f6\u6267\u884c\u4e00\u6b21\u3002",source:"@site/vue/09setup\u51fd\u6570.md",sourceDirName:".",slug:"/09setup\u51fd\u6570",permalink:"/website/vue/09setup\u51fd\u6570",draft:!1,tags:[{label:"Vue.js",permalink:"/website/vue/tags/vue-js"}],version:"current",frontMatter:{title:"9\u3001setup\u51fd\u6570",tags:["Vue.js"]},sidebar:"tutorialSidebar",previous:{title:"8\u3001\u7ec4\u5efa\u7684\u6e32\u67d3\u548c\u66f4\u65b0",permalink:"/website/vue/08\u7ec4\u5efa\u6e32\u67d3"},next:{title:"10\u3001provide & inject",permalink:"/website/vue/10injectApi"}},l={},c=[{value:"\u5b9e\u73b0 emit \u65b9\u6cd5",id:"\u5b9e\u73b0-emit-\u65b9\u6cd5",level:2},{value:"slot \u5b9e\u73b0",id:"slot-\u5b9e\u73b0",level:2},{value:"\u63d2\u69fd\u66f4\u65b0",id:"\u63d2\u69fd\u66f4\u65b0",level:2},{value:"\u7ec4\u4ef6\u5378\u8f7d\u5b9e\u73b0",id:"\u7ec4\u4ef6\u5378\u8f7d\u5b9e\u73b0",level:2},{value:"\u751f\u547d\u5468\u671f\u5b9e\u73b0\u539f\u7406",id:"\u751f\u547d\u5468\u671f\u5b9e\u73b0\u539f\u7406",level:2},{value:"\u521b\u5efa\u751f\u547d\u5468\u671f\u94a9\u5b50",id:"\u521b\u5efa\u751f\u547d\u5468\u671f\u94a9\u5b50",level:3},{value:"\u94a9\u5b50\u8c03\u7528",id:"\u94a9\u5b50\u8c03\u7528",level:3}],u={toc:c};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ec4\u4ef6\u7684 render \u51fd\u6570\u6bcf\u6b21\u66f4\u65b0\u65f6\u90fd\u4f1a\u91cd\u65b0\u6267\u884c,\u4f46\u662f setup \u51fd\u6570\u53ea\u4f1a\u5728\u7ec4\u4ef6\u6302\u8f7d\u65f6\u6267\u884c\u4e00\u6b21\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"setup \u51fd\u6570\u662f compositionAPI \u7684\u5165\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u51fd\u6570\u5185\u90e8\u7f16\u5199\u903b\u8f91\uff0c\u89e3\u51b3 vue2 \u4e2d\u53cd\u590d\u6a2a\u8df3\u95ee\u9898"),(0,a.kt)("li",{parentName:"ul"},"setup \u8fd4\u56de\u51fd\u6570\u65f6\u4e3a\u7ec4\u4ef6\u7684 render \u51fd\u6570,\u8fd4\u56de\u5bf9\u8c61\u65f6\u5bf9\u8c61\u4e2d\u7684\u6570\u636e\u5c06\u66b4\u9732\u7ed9\u6a21\u677f\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"setup \u4e2d\u51fd\u6570\u7684\u53c2\u6570\u4e3a props\u3001context({slots,emit,attrs,expose})")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const My = {\n  props: { address: String },\n  render() {\n    return h("div", this.address)\n  },\n}\nconst VueComponent = {\n  props: {\n    address: String,\n  },\n  setup(props) {\n    const name = ref("zs")\n    return {\n      name,\n      address: props.address,\n    }\n  },\n  render() {\n    return h(Text, `${this.address},${this.name}`)\n  },\n}\nrender(h(VueComponent, { address: "\u56de\u9f99\u89c2" }), app)\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),"\u51fd\u6570\u8fdb\u884c\u89e3\u6790")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export function setupComponent(instance) {\n  const { props, type } = instance.vnode\n  initProps(instance, props)\n\n  let { setup } = type\n  if (setup) {\n    // \u5bf9setup\u505a\u76f8\u5e94\u5904\u7406\n    const setupContext = {}\n    const setupResult = setup(instance.props, setupContext)\n    console.log(setupResult)\n    if (isFunction(setupResult)) {\n      instance.render = setupResult\n    } else if (isObject(setupResult)) {\n      instance.setupState = proxyRefs(setupResult) // \u8fd9\u91cc\u5bf9\u8fd4\u56de\u503c\u8fdb\u884c\u7ed3\u6784\n    }\n  }\n\n  instance.proxy = new Proxy(instance, PublicInstanceProxyHandlers)\n  const data = type.data\n  if (data) {\n    if (!isFunction(data)) return console.warn("The data option must be a function.")\n    instance.data = reactive(data.call(instance.proxy))\n  }\n  if (!instance.render) {\n    instance.render = type.render\n  }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65b0\u589e\u53d6\u503c\u8303\u56f4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const PublicInstanceProxyHandlers = {\n  get(target, key) {\n    const { data, props, setupState } = target\n    if (data && hasOwn(data, key)) {\n      return data[key]\n    } else if (hasOwn(props, key)) {\n      return props[key]\n    } else if (setupState && hasOwn(setupState, key)) {\n      // setup\u8fd4\u56de\u503c\u505a\u4ee3\u7406\n      return setupState[key]\n    }\n    const publicGetter = publicPropertiesMap[key]\n    if (publicGetter) {\n      return publicGetter(target)\n    }\n  },\n  set(target, key, value) {\n    const { data, props, setupState } = target\n    if (data && hasOwn(data, key)) {\n      data[key] = value\n      return true\n    } else if (hasOwn(props, key)) {\n      console.warn(`Attempting to mutate prop "${key}". Props are readonly.`)\n      return false\n    } else if (setupState && hasOwn(setupState, key)) {\n      // setup\u8fd4\u56de\u503c\u505a\u4ee3\u7406\n      setupState[key] = value\n    }\n    return true\n  },\n}\n')),(0,a.kt)("h2",{id:"\u5b9e\u73b0-emit-\u65b9\u6cd5"},"\u5b9e\u73b0 emit \u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const VueComponent = {\n  setup(props, ctx) {\n    const handleClick = () => {\n      ctx.emit("myEvent")\n    }\n    return () => h("button", { onClick: handleClick }, "\u70b9\u6211\u554a")\n  },\n}\nrender(\n  h(VueComponent, {\n    onMyEvent: () => {\n      alert(1000)\n    },\n  }),\n  document.getElementById("app")\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const setupContext = {\n  attrs: instance.attrs,\n  emit: (event, ...args) => {\n    const eventName = `on${event[0].toUpperCase() + event.slice(1)}`\n    const handler = instance.vnode.props[eventName] // \u627e\u5230\u7ed1\u5b9a\u7684\u65b9\u6cd5\n    // \u89e6\u53d1\u65b9\u6cd5\u6267\u884c\n    handler && handler(...args)\n  },\n}\n")),(0,a.kt)("h2",{id:"slot-\u5b9e\u73b0"},"slot \u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const MyComponent = {\n  render() {\n    return h(Fragment, [\n      h("div", [this.$slots.header()]), // \u83b7\u53d6\u63d2\u69fd\u6e32\u67d3\n      h("div", [this.$slots.body()]),\n      h("div", [this.$slots.footer()]),\n    ])\n  },\n}\nconst VueComponent = {\n  setup() {\n    return () =>\n      h(MyComponent, null, {\n        // \u6e32\u67d3\u7ec4\u4ef6\u65f6\u4f20\u9012\u5bf9\u5e94\u7684\u63d2\u69fd\u5c5e\u6027\n        header: () => h("p", "\u5934"),\n        body: () => h("p", "\u4f53"),\n        footer: () => h("p", "\u5c3e"),\n      })\n  },\n}\nrender(h(VueComponent), app)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const createVNode = (type, props, children = null) => {\n  // ....\n  if (children) {\n    let type = 0\n    if (Array.isArray(children)) {\n      type = ShapeFlags.ARRAY_CHILDREN\n    } else if (isObject(children)) {\n      // \u7c7b\u578b\u662f\u63d2\u69fd\n      type = ShapeFlags.SLOTS_CHILDREN\n    } else {\n      children = String(children)\n      type = ShapeFlags.TEXT_CHILDREN\n    }\n    vnode.shapeFlag |= type\n  }\n  return vnode\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const publicPropertiesMap = {\n  $attrs: (i) => i.attrs,\n  $slots: (i) => i.slots,\n}\nfunction initSlots(instance, children) {\n  if (instance.vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN) {\n    instance.slots = children\n  } else {\n    instance.slots = {}\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export function createComponentInstance(vnode) {\n  const instance = {\n    // \u7ec4\u4ef6\u7684\u5b9e\u4f8b\n    slots: null, // \u521d\u59cb\u5316\u63d2\u69fd\u5c5e\u6027\n  }\n  return instance\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export function setupComponent(instance) {\n  const { props, type, children } = instance.vnode\n  initProps(instance, props)\n  initSlots(instance, children) // \u521d\u59cb\u5316\u63d2\u69fd\n}\n")),(0,a.kt)("h2",{id:"\u63d2\u69fd\u66f4\u65b0"},"\u63d2\u69fd\u66f4\u65b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function updateComponentPreRender(instance, next) {\n  instance.next = null\n  instance.vnode = next\n  updateProps(instance, instance.props, next.props)\n  Object.assign(instance.slots, next.children) // \u6e32\u67d3\u524d\u8981\u66f4\u65b0\u63d2\u69fd\n}\n")),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u5378\u8f7d\u5b9e\u73b0"},"\u7ec4\u4ef6\u5378\u8f7d\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const unmount = (vnode) => {\n  const { shapeFlag } = vnode\n  if (vnode.type === Fragment) {\n    return unmountChildren(vnode.children)\n  } else if (shapeFlag & ShapeFlags.COMPONENT) {\n    // \u7ec4\u4ef6\u90a3\u4e48\u79fb\u9664\n    return unmount(vnode.component.subTree) // \u79fb\u9664\u7ec4\u4ef6\n  }\n  hostRemove(vnode.el)\n}\n")),(0,a.kt)("h2",{id:"\u751f\u547d\u5468\u671f\u5b9e\u73b0\u539f\u7406"},"\u751f\u547d\u5468\u671f\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u751f\u547d\u5468\u671f\u9700\u8981\u8ba9\u5f53\u524d\u5b9e\u4f8b\u5173\u8054\u5bf9\u5e94\u7684\u751f\u547d\u5468\u671f\uff0c\u8fd9\u6837\u5728\u7ec4\u4ef6\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5c31\u53ef\u4ee5\u8c03\u7528\u5bf9\u5e94\u7684\u94a9\u5b50")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"component.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export let currentInstance = null\nexport const setCurrentInstance = (instance) => (currentInstance = instance)\nexport const getCurrentInstance = () => currentInstance\nexport const unsetCurrentInstance = () => (currentInstance = null)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"setCurrentInstance(instance) // \u5728\u8c03\u7528setup\u7684\u65f6\u5019\u4fdd\u5b58\u5f53\u524d\u5b9e\u4f8b\nconst setupResult = setup(instance.props, setupContext)\nunsetCurrentInstance()\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u751f\u547d\u5468\u671f\u94a9\u5b50"},"\u521b\u5efa\u751f\u547d\u5468\u671f\u94a9\u5b50"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"apiLifecycle.ts\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export const enum LifecycleHooks {\n  BEFORE_MOUNT = "bm",\n  MOUNTED = "m",\n  BEFORE_UPDATE = "bu",\n  UPDATED = "u",\n}\nfunction createHook(type) {\n  return (hook, target = currentInstance) => {\n    // \u8c03\u7528\u7684\u65f6\u5019\u4fdd\u5b58\u5f53\u524d\u5b9e\u4f8b\n    if (target) {\n      const hooks = target[type] || (target[type] = [])\n      const wrappedHook = () => {\n        setCurrentInstance(target) // \u5f53\u751f\u547d\u5468\u671f\u8c03\u7528\u65f6 \u4fdd\u8bc1currentInstance\u662f\u6b63\u786e\u7684\n        hook.call(target)\n        setCurrentInstance(null)\n      }\n      hooks.push(wrappedHook)\n    }\n  }\n}\nexport const onBeforeMount = createHook(LifecycleHooks.BEFORE_MOUNT)\nexport const onMounted = createHook(LifecycleHooks.MOUNTED)\nexport const onBeforeUpdate = createHook(LifecycleHooks.BEFORE_UPDATE)\nexport const onUpdated = createHook(LifecycleHooks.UPDATED)\n')),(0,a.kt)("h3",{id:"\u94a9\u5b50\u8c03\u7528"},"\u94a9\u5b50\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const componentUpdateFn = () => {\n  if (!instance.isMounted) {\n    const { bm, m } = instance\n    if (bm) {\n      // beforeMount\n      invokeArrayFns(bm)\n    }\n    const subTree = render.call(renderContext, renderContext)\n    patch(null, subTree, container, anchor)\n\n    instance.subTree = subTree\n    instance.isMounted = true\n    if (m) {\n      // mounted\n      invokeArrayFns(m)\n    }\n  } else {\n    let { next, bu, u } = instance\n    if (next) {\n      updateComponentPreRender(instance, next)\n    }\n    if (bu) {\n      // beforeUpdate\n      invokeArrayFns(bu)\n    }\n    const subTree = render.call(renderContext, renderContext)\n    patch(instance.subTree, subTree, container, anchor)\n    if (u) {\n      // updated\n      invokeArrayFns(u)\n    }\n    instance.subTree = subTree\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"shared.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const invokeArrayFns = (fns) => {\n  for (let i = 0; i < fns.length; i++) {\n    fns[i]() // \u8c03\u7528\u94a9\u5b50\u65b9\u6cd5\n  }\n}\n")))}i.isMDXComponent=!0}}]);