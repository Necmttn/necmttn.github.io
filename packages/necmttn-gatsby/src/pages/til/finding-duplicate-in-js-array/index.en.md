---
title: Finding Duplicate in JS Array
createdDate: "2018-01-30"
author: Necmettin Karakaya
tags: ["javascript", "leetcode", "euler", "algorithm"]
draft: false
til: true
---

The **Set** object lets you store unique values of any type, whether primitive values or object references.

```javascript
var containsDuplicate = function(nums) {
    let set = new Set();
    
    for (let n of nums) {
        if (set.has(n)) {
            return true;
        }
        set.add(n);
    }
    return false;
};

```
