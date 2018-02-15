---
title: Finding Duplicate in JS Array
createdDate: "2018-01-30"
author: Necmettin Karakaya
tags: ["javascript"]
image: welcoming.png
draft: true
til: true
---

The **Set** object lets you store unique values of any type, whether primitive values or object references.

```
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
