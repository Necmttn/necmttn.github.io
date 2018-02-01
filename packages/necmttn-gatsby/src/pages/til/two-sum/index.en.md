---
title: Two Sum
createdDate: "2018-02-01"
author: Necmettin Karakaya

tags:
  - javascript
image: welcoming.png
draft: true
til: true
---

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {};
    for (let i = nums.length; i >= 0 ; i--) {
        if (dict[nums[i]] !== undefined) {
            return [dict[nums[i]], i];
        }   
        dict[target - nums[i]] = i;
    }
};
```
basically what we doing in here; create dictinary with items. create `dict` with every number `n` in array. with their
pairs as a key. so if the pairkey different then `undefined` it's a exist pair. the value of the key will be the second
pair.

