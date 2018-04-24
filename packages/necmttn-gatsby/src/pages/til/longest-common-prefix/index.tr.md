---
title: Longest Common Prefix
createdDate: "2018-04-24"
author: Necmettin Karakaya
image: "https://farm1.staticflickr.com/832/26797176137_29c1d4e8a3_b.jpg"
tags:
  - javascript
draft: false
til: true
---

## TL;DR
```javascript
  /**
   * @param {string[]} strs
   * @return {string}
   */
  var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    let answer = strs.reduce((prev, current) => {
      commonPrefix = []
      if (prev === "" || current === "") return ""
      prev = prev.split('')
      for (i = 0; i < prev.length; i++) {
        if ( prev[i] === current[i] ) {
          commonPrefix.push(prev[i])
        } else {
          return commonPrefix.join('') 
        }
      }
      return commonPrefix.join('')
    }) 
    
    return answer
  };

```
`reduce` fonksiyonunu kullanarak azaltma işlevini kullanıyor.
Runtime Runtime hakkında: ** 64 ms **

