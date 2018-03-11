---
title: JS Array icinde bir itemin kopyasi olup olmadigini bulma
createdDate: "2018-01-30"
updatedDate: "2018-03-11"
author: Necmettin Karakaya

tags: ["javascript"]
draft: false
til: true
---

Javascript'in Set modelini sadece benzersiz value koymaniza izin veriyor. Bunu kullanarak array icindeki bi element
koyasinin olup olmadigini kontrol edebilirsiniz.

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
