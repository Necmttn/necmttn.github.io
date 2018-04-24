---
title: Longest Common Prefix
createdDate: "2018-04-24"
author: Necmettin Karakaya
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

