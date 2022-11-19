---
title: 三数之和-15
description: 考察双指针
last_update:
  date: 11/15/2022
  author: 高红翔
---

给你一个整数数组 `nums` ，判断是否存在三元组 `[nums[i], nums[j], nums[k]]` 满足 `i != j`、`i != k` 且 `j != k` ，同时还满足 `nums[i] + nums[j] + nums[k] == 0` 。请

你返回所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

**示例 1：**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
```

**示例 2：**

```
输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
```

**示例 3：**

```
输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
```

**提示：**

- `3 <= nums.length <= 3000`
- `-105 <= nums[i] <= 105`

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum/

## 🧠 解题思路

### 算法流程

1. 特判，对于数组长度 nnn，如果数组为 nullnullnull 或者数组长度小于 3，返回 []。
2. 对数组进行排序。
3. 遍历排序后数组：
   - 若 nums[i]>0nums[i]>0nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 000，直接返回结果。
   - 对于重复元素：跳过，避免出现重复解
   - 令左指针 L=i+1L=i+1L=i+1，右指针 R=n−1R=n-1R=n−1，当 L<RL<RL<R 时，执行循环：
     - 当 nums[i]+nums[L]+nums[R]==0nums[i]+nums[L]+nums[R]==0nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,RL,RL,R 移到下一位置，寻找新的解
     - 若和大于 000，说明 nums[R]nums[R]nums[R] 太大，RRR 左移
     - 若和小于 000，说明 nums[L]nums[L]nums[L] 太小，LLL 右移

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = []
  const len = nums.length
  if (nums == null || len < 3) return ans
  nums.sort((a, b) => a - b) // 排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue // 去重
    let L = i + 1
    let R = len - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] == nums[L + 1]) L++ // 去重
        while (L < R && nums[R] == nums[R - 1]) R-- // 去重
        L++
        R--
      } else if (sum < 0) L++
      else if (sum > 0) R--
    }
  }
  return ans
}
```
