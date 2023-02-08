---
title: 3. 移除元素 - 27
description: 考察hasMap
last_update:
  date: 02/08/2023
  author: 高红翔
---

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/binary-search/

## 🧠 解题思路

### 快慢指针

```js
//时间复杂度：O(n)
//空间复杂度：O(1)
var removeElement = (nums, val) => {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i]
    }
  }
  return k
}
```
