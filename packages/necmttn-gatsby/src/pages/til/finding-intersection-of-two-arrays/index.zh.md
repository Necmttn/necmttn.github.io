---
title: 查找两个数组的交点
createdDate: "2018-02-01"
author: Necmettin Karakaya

tags: ["javascript"]
image: welcoming.png
draft: false
til: true
---

使用两个map的话 

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const histogram = {}
    const result = []
    nums1.map(n => {
        if (histogram[n]) {
            histogram[n] += 1
        } else {
            histogram[n] = 1
        }
    })
    nums2.map(k => {
        if (histogram[k] && histogram[k] > 0) {
            result.push(k)
            histogram[k] -= 1
        }
    })
    return result
}
```
这个是差不多 100ms.
最快的是在下面,

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash = {};
    let intersection = [];
    
    for (let i = 0; i < nums1.length; i++) {
        hash[nums1[i]] = hash[nums1[i]] || 0;
        hash[nums1[i]]++;
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]]) {
            hash[nums2[i]]--;
            intersection.push(nums2[i]);
        }
    }
    
    return intersection;
};
```
appereantly `for loops` are faster then `maps`

