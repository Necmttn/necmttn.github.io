---
title: LeetCode - Add Two Numbers - JS
createdDate: "2017-12-22"
author: Necmettin Karakaya

tags:
  - javascript
image: welcoming.png
draft: true
til: true
---


tl;dr 
here's the solution.
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function getValue(node, level=0, total=0){
  total = total + (node.val * (10 ** level))
  if (node.next) { return getValue(node.next, level+1, total)} 
  else { return total }
}
var addTwoNumbers = function(l1, l2) {
  const result = getValue(l1) + getValue(l2)
  return result.toString().split('').map((str) => parseInt(str)).reverse()
};
```

*My mistake was* 
> In the first round of the recursive fuction you need to return otherwise it will return undefined. 
i was doing like .
```javascript
function getValue(node, level=0, total=0){
  total = total + (node.val * (10 ** level))
  if (node.next) { getValue(node.next, level+1, total)} 
  else { return total }
}
```
*WRONG* Don't be like me :) 
