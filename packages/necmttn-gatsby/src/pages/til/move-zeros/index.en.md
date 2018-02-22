---
title: Move Zeros
createdDate: "2018-02-01"
author: Necmettin Karakaya

tags: ["javascript"]
image: welcoming.png
draft: false
til: true
---
Move zeros.
```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lneg = nums.length
    for (var a = 0; a < lneg; a++){
        if (nums[a] === 0) {
            nums.splice(a, 1)
            nums.push(0)
            a--
            lneg--
        }
    }
};
```
which is about 111ms

another way of doing it would be reassigning the values.

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var a = 0;
    for(var i=0; i<nums.length; i++){
    	if(nums[i] !==0){
    		nums[a] = nums[i];
    		if(a !== i){
    			nums[i] = 0;
    		}
    		a++;
    	}
    }
};
```
which is about 92ms
