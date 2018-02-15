---
title: Finding single number in Array
createdDate: "2018-02-01"
author: Necmettin Karakaya

tags: ["javascript"]
image: welcoming.png
draft: true
til: true
---

with bitwise operation.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
   var arr = 0;
   for(var i = 0; i < nums.length; i++) {
     arr ^=nums[i];
   }
    
   return arr;
};
```
Runtime: 92ms


with runtime reducing the pairs.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

   nums.sort((a, b) => a - b)
   while (nums.length > 0) {
       if (nums.length === 1) return nums[0]
       if (nums[0] === nums[1]) {
           nums.shift()
           nums.shift()
       } else {
           return nums[0]
       }
   }
};
```
Runtime: 120ms
