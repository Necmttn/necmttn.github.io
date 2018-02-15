---
title: Finding Intersection of Two Arrays
createdDate: "2018-02-01"
author: Necmettin Karakaya

tags: ["javascript"]
image: welcoming.png
draft: true
til: true
---

The way i solved; 

```
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
which is about 100ms.

fastest solution out there,

```
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

