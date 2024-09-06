---
title: 5、watch & WatchEffect
tags:
  - Vue.js
---

## 1.watch 基本使用

watch 的核心就是观测一个响应式数据，当数据变化时通知并执行回调 （那也就是说它本身就是一个 effect）

```ts
watch(state, (oldValue, newValue) => {
  // 监测一个响应式值的变化
  console.log(oldValue, newValue)
})
```

## 2.监测响应式对象

**reactive.ts**

```ts
export function isReactive(value) {
  return !!(value && value[ReactiveFlags.IS_REACTIVE])
}
```

**apiWatch.ts**

```ts
export function watch(source, cb, options = {}) {
  return doWatch(source, cb, options as any)
}
function doWatch(source, cb, { deep }) {
  let getter
  // 将对象转化成getter函数
  const reactiveGetter = (source) => traverse(source, deep === false ? 1 : undefined)
  // 如果是响应式对象
  if (isReactive(source)) {
    getter = () => reactiveGetter(source) // 根据深度创建getter
  }
}
// 遍历属性，会触发proxy中的get方法
function traverse(value, depth, currentDepth = 0, seen = new Set()) {
  if (!isObject(value)) {
    return value
  }
  if (depth) {
    // 记录遍历的深度
    if (currentDepth >= depth) {
      return value
    }
    currentDepth++
  }
  if (seen.has(value)) {
    return value
  }
  seen.add(value)
  for (const k in value) {
    // 递归访问属性用于依赖收集
    traverse(value[k], depth, currentDepth, seen)
  }
  return value
}
```

## 3.创建 effect

```ts
let oldValue
const job = () => {
  if (cb) {
    const newValue = effect.run()
    cb(newValue, oldValue)
    oldValue = newValue
  }
}
// 创建watch对应的effect
const effect = new ReactiveEffect(getter, () => {}, job)
oldValue = effect.run() // 运行保存老值
```

## 4.监测函数

```ts
function doWatch(source, cb, { deep }) {
  let getter
  if (isReactive(source)) {
    // 如果是响应式对象
    getter = () => traverse(source)
  } else if (isFunction(source)) {
    getter = source // 如果是函数则让函数作为fn即可
  }
  // ...
}
```

## 5.watch 中回调执行时机

```ts
function doWatch(source, cb, { deep, immediate }) {
  const effect = new ReactiveEffect(getter, () => {}, job)

  if (cb) {
    if (immediate) {
      job()
    } else {
      oldValue = effect.run() // 运行保存老值
    }
  }
}
```

## 6.watch 中 cleanup 实现

> 连续触发 watch 时需要清理之前的 watch 操作

```ts
const state = reactive({ flag: true, name: "zs", age: 30 })
let i = 2000
function getData(timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timer)
    }, timer)
  })
}
watch(
  () => state.age,
  async (newValue, oldValue, onCleanup) => {
    let clear = false
    onCleanup(() => {
      clear = true
    })
    i -= 1000
    let r = await getData(i) // 第一次执行1s后渲染1000， 第二次执行0s后渲染0， 最终应该是0
    if (!clear) {
      document.body.innerHTML = r
    }
  },
  { flush: "sync" }
)
state.age = 31
state.age = 32
```

```ts
let cleanup
let onCleanup = (fn) => {
  // 保存用户传入的清理函数
  cleanup = () => {
    fn()
    cleanup = undefined
  }
}
const job = () => {
  if (cb) {
    const newValue = effect.run()

    if (cleanup) {
      cleanup()
    }
    // 下次回调执行前，调用清理函数
    cb(newValue, oldValue, onCleanup)
    oldValue = newValue
  }
}
```

## 7.停止 watch

```ts
const unwatch = () => {
  effect.stop()
}
return unwatch
```

```ts
stop() {
  if (this.active) { // 清理掉所有依赖
    preCleanupEffect(this);
    postCleanupEffect(this);
    this.active = false;
  }
}
```

## 8.watchEffect

> 我们可以使用响应性属性编写一个方法，**每当它们的任何值更新时**，我们的方法就会重新运行。**`watchEffect`在初始化时也会立即运行**

```ts
const state = reactive({ flag: true, name: "zs", age: 30 })
watchEffect(() => (app.innerHTML = state.name))
setTimeout(() => {
  state.name = "Mr Jiang"
}, 1000)
```

```ts
export function watch(source, cb, options) {
  return doWatch(source, cb, options)
}
export function watchEffect(effect, options) {
  return doWatch(effect, null, options)
}
```

```ts
const job = () => {
  if (cb) {
    // ...
  } else {
    effect.run() // watchEffect重新执行
  }
}
const effect = new ReactiveEffect(getter, () => {}, job)
if (cb) {
  // ...
} else {
  effect.run() // watchEffect
}
```
