---
title: 9、setup函数
tags:
  - Vue.js
---

组件的 render 函数每次更新时都会重新执行,但是 setup 函数只会在组件挂载时执行一次。

- setup 函数是 compositionAPI 的入口
- 可以在函数内部编写逻辑，解决 vue2 中反复横跳问题
- setup 返回函数时为组件的 render 函数,返回对象时对象中的数据将暴露给模板使用
- setup 中函数的参数为 props、context({slots,emit,attrs,expose})

```ts
const My = {
  props: { address: String },
  render() {
    return h("div", this.address)
  },
}
const VueComponent = {
  props: {
    address: String,
  },
  setup(props) {
    const name = ref("zs")
    return {
      name,
      address: props.address,
    }
  },
  render() {
    return h(Text, `${this.address},${this.name}`)
  },
}
render(h(VueComponent, { address: "回龙观" }), app)
```

> 对`setup`函数进行解析

```ts
export function setupComponent(instance) {
  const { props, type } = instance.vnode
  initProps(instance, props)

  let { setup } = type
  if (setup) {
    // 对setup做相应处理
    const setupContext = {}
    const setupResult = setup(instance.props, setupContext)
    console.log(setupResult)
    if (isFunction(setupResult)) {
      instance.render = setupResult
    } else if (isObject(setupResult)) {
      instance.setupState = proxyRefs(setupResult) // 这里对返回值进行结构
    }
  }

  instance.proxy = new Proxy(instance, PublicInstanceProxyHandlers)
  const data = type.data
  if (data) {
    if (!isFunction(data)) return console.warn("The data option must be a function.")
    instance.data = reactive(data.call(instance.proxy))
  }
  if (!instance.render) {
    instance.render = type.render
  }
}
```

> 新增取值范围

```ts
const PublicInstanceProxyHandlers = {
  get(target, key) {
    const { data, props, setupState } = target
    if (data && hasOwn(data, key)) {
      return data[key]
    } else if (hasOwn(props, key)) {
      return props[key]
    } else if (setupState && hasOwn(setupState, key)) {
      // setup返回值做代理
      return setupState[key]
    }
    const publicGetter = publicPropertiesMap[key]
    if (publicGetter) {
      return publicGetter(target)
    }
  },
  set(target, key, value) {
    const { data, props, setupState } = target
    if (data && hasOwn(data, key)) {
      data[key] = value
      return true
    } else if (hasOwn(props, key)) {
      console.warn(`Attempting to mutate prop "${key}". Props are readonly.`)
      return false
    } else if (setupState && hasOwn(setupState, key)) {
      // setup返回值做代理
      setupState[key] = value
    }
    return true
  },
}
```

## 实现 emit 方法

```ts
const VueComponent = {
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit("myEvent")
    }
    return () => h("button", { onClick: handleClick }, "点我啊")
  },
}
render(
  h(VueComponent, {
    onMyEvent: () => {
      alert(1000)
    },
  }),
  document.getElementById("app")
)
```

```ts
const setupContext = {
  attrs: instance.attrs,
  emit: (event, ...args) => {
    const eventName = `on${event[0].toUpperCase() + event.slice(1)}`
    const handler = instance.vnode.props[eventName] // 找到绑定的方法
    // 触发方法执行
    handler && handler(...args)
  },
}
```

## slot 实现

```ts
const MyComponent = {
  render() {
    return h(Fragment, [
      h("div", [this.$slots.header()]), // 获取插槽渲染
      h("div", [this.$slots.body()]),
      h("div", [this.$slots.footer()]),
    ])
  },
}
const VueComponent = {
  setup() {
    return () =>
      h(MyComponent, null, {
        // 渲染组件时传递对应的插槽属性
        header: () => h("p", "头"),
        body: () => h("p", "体"),
        footer: () => h("p", "尾"),
      })
  },
}
render(h(VueComponent), app)
```

```ts
export const createVNode = (type, props, children = null) => {
  // ....
  if (children) {
    let type = 0
    if (Array.isArray(children)) {
      type = ShapeFlags.ARRAY_CHILDREN
    } else if (isObject(children)) {
      // 类型是插槽
      type = ShapeFlags.SLOTS_CHILDREN
    } else {
      children = String(children)
      type = ShapeFlags.TEXT_CHILDREN
    }
    vnode.shapeFlag |= type
  }
  return vnode
}
```

```ts
const publicPropertiesMap = {
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
}
function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN) {
    instance.slots = children
  } else {
    instance.slots = {}
  }
}
```

```ts
export function createComponentInstance(vnode) {
  const instance = {
    // 组件的实例
    slots: null, // 初始化插槽属性
  }
  return instance
}
```

```ts
export function setupComponent(instance) {
  const { props, type, children } = instance.vnode
  initProps(instance, props)
  initSlots(instance, children) // 初始化插槽
}
```

## 插槽更新

```ts
function updateComponentPreRender(instance, next) {
  instance.next = null
  instance.vnode = next
  updateProps(instance, instance.props, next.props)
  Object.assign(instance.slots, next.children) // 渲染前要更新插槽
}
```

## 组件卸载实现

```ts
const unmount = (vnode) => {
  const { shapeFlag } = vnode
  if (vnode.type === Fragment) {
    return unmountChildren(vnode.children)
  } else if (shapeFlag & ShapeFlags.COMPONENT) {
    // 组件那么移除
    return unmount(vnode.component.subTree) // 移除组件
  }
  hostRemove(vnode.el)
}
```

## 生命周期实现原理

> 生命周期需要让当前实例关联对应的生命周期，这样在组件构建过程中就可以调用对应的钩子

> component.ts

```ts
export let currentInstance = null
export const setCurrentInstance = (instance) => (currentInstance = instance)
export const getCurrentInstance = () => currentInstance
export const unsetCurrentInstance = () => (currentInstance = null)
```

```ts
setCurrentInstance(instance) // 在调用setup的时候保存当前实例
const setupResult = setup(instance.props, setupContext)
unsetCurrentInstance()
```

### 创建生命周期钩子

> ```
> apiLifecycle.ts
> ```

```ts
export const enum LifecycleHooks {
  BEFORE_MOUNT = "bm",
  MOUNTED = "m",
  BEFORE_UPDATE = "bu",
  UPDATED = "u",
}
function createHook(type) {
  return (hook, target = currentInstance) => {
    // 调用的时候保存当前实例
    if (target) {
      const hooks = target[type] || (target[type] = [])
      const wrappedHook = () => {
        setCurrentInstance(target) // 当生命周期调用时 保证currentInstance是正确的
        hook.call(target)
        setCurrentInstance(null)
      }
      hooks.push(wrappedHook)
    }
  }
}
export const onBeforeMount = createHook(LifecycleHooks.BEFORE_MOUNT)
export const onMounted = createHook(LifecycleHooks.MOUNTED)
export const onBeforeUpdate = createHook(LifecycleHooks.BEFORE_UPDATE)
export const onUpdated = createHook(LifecycleHooks.UPDATED)
```

### 钩子调用

```ts
const componentUpdateFn = () => {
  if (!instance.isMounted) {
    const { bm, m } = instance
    if (bm) {
      // beforeMount
      invokeArrayFns(bm)
    }
    const subTree = render.call(renderContext, renderContext)
    patch(null, subTree, container, anchor)

    instance.subTree = subTree
    instance.isMounted = true
    if (m) {
      // mounted
      invokeArrayFns(m)
    }
  } else {
    let { next, bu, u } = instance
    if (next) {
      updateComponentPreRender(instance, next)
    }
    if (bu) {
      // beforeUpdate
      invokeArrayFns(bu)
    }
    const subTree = render.call(renderContext, renderContext)
    patch(instance.subTree, subTree, container, anchor)
    if (u) {
      // updated
      invokeArrayFns(u)
    }
    instance.subTree = subTree
  }
}
```

> shared.ts

```ts
export const invokeArrayFns = (fns) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i]() // 调用钩子方法
  }
}
```
