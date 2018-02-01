---
title: Plus One
createdDate: "2018-02-01"
author: Necmettin Karakaya

tags:
  - javascript
image: welcoming.png
draft: true
til: true
---

The way i solved.

```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let last = digits.length - 1
    while (last >= 0) {
        if (digits[last] === 9) {
            digits[last] = 0
            last--
        } else {
            digits[last] += 1
            break
        }
    }
    if (last <  0) {
        digits.unshift(1)
    }
    return digits
};
```

which is about 84ms
