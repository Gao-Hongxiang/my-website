---
title: 4、ComputedAPI的实现
tags:
  - Vue.js
---

接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 ref 对象。

- 计算属性的 getter 只有当取值时才会执行。
- 计算属性是具备缓存的，如果依赖的值不发生变化，不会重新执行 getter。
- 计算属性也是一个 effect，内部也具备依赖收集的功能。

```ts
import { reactive, effect, computed } from "./reactivity.js"
const state = reactive({ flag: true, name: "zs", age: 30 })
const aliasName = computed((oldValue) => {
  console.log("computed-run", oldValue)
  return "**" + state.name + "**"
})
const runner = effect(() => {
  console.log("effect-run")
  console.log(aliasName.value)
  console.log(aliasName.value)
  console.log(aliasName.value)
})
setTimeout(() => {
  state.name = "Handsome Jiang"
}, 1000)
```

## 1.增加 dirty 标识

```ts
// 将常量统一维护在一起
export enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive", // 基本上唯一
}

// dirty 等级
export enum DirtyLevels {
  NotDirty = 0, // 不是脏值
  Dirty = 4, // 脏值
}
```

```ts
export class ReactiveEffect {
  _depsLength = 0 // 用于记录依赖的个数
  _trackId = 0 // 用于记录收集的次数
  _runnings = 0
  deps = []
  _dirtyLevel = DirtyLevels.Dirty

  public get dirty() {
    // 是否是脏值
    return this._dirtyLevel === DirtyLevels.Dirty
  }

  public set dirty(v) {
    this._dirtyLevel = v ? DirtyLevels.Dirty : DirtyLevels.NotDirty
  }

  run() {
    this._dirtyLevel = DirtyLevels.NotDirty // 运行一次后，脏值变为不脏
    // ...
  }
}
```

## 2.计算属性实现

```ts
import { isFunction } from "@vue/shared"
import { activeEffect, ReactiveEffect, trackEffects, triggerEffects } from "./effect"

class ComputedRefImpl {
  public effect
  public _value
  public dep
  constructor(getter, public setter) {
    this.effect = new ReactiveEffect(
      () => getter(this._value), // 计算属性依赖的值会对计算属性effect进行收集
      () => triggerRefValue(this) // 计算属性依赖的值变化后会触发此函数
    )
  }
  get value() {
    // 脏值，并且值不相同才出发更新
    if (this.effect.dirty && !Object.is(this._value, (this._value = this.effect.run()))) {
      trackRefValue(this) // 取值时进行依赖收集
    }
    return this._value
  }
  set value(newValue) {
    this.setter(newValue)
  }
}
export function computed(getterOrOptions) {
  const onlyGetter = isFunction(getterOrOptions) // 传入的是函数就是getter
  let getter
  let setter
  if (onlyGetter) {
    getter = getterOrOptions
    setter = () => {}
  } else {
    getter = getterOrOptions.get
    setter = getterOrOptions.set
  }
  // 创建计算属性
  return new ComputedRefImpl(getter, setter)
}
```

> 创建 ReactiveEffect 时，传入`trigger`函数，稍后依赖的属性变化时调用此方法！(计算属性更新时只需要更新 dirty)，同时将`scheduler`参数作为第三个参数

```ts
const _effect = new ReactiveEffect(
  fn,
  () => {}, // trigger 函数
  () => {
    // scheduler
    _effect.run()
  }
)
```

```ts
export function triggerEffects(dep) {
  for (const effect of dep.keys()) {
    // 计算属性，则将dirty变为true在
    if (effect._dirtyLevel < DirtyLevels.Dirty) {
      effect._dirtyLevel = DirtyLevels.Dirty
      // 需要差异化开，计算属性只需要修改dirty
      effect.trigger()
    }
    if (!effect._runnings) {
      // 如果正在运行什么都不做
      if (effect.scheduler) {
        effect.scheduler()
      }
    }
  }
}
```
