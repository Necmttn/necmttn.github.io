---
title: Valid Sudoku
createdDate: "2018-02-01"
author: Necmettin Karakaya

tags:
  - javascript
image: welcoming.png
draft: true
til: true
---

> Create an array of booleans for every row, column, and square. The array's index represents the value that got placed into that row, column, or square. In other words, if you add a 5 to the second row, first column, you would set rows[2][5] to true, along with columns[1][5] and squares[4][5], to indicate that the row, column, and square now have a 5 value.

>Regardless of how your original board is being represented, this can be a simple and very fast way to check it for completeness and correctness. Simply take the numbers in the order that they appear on the board, and begin building this data structure. As you place numbers in the board, it becomes a O(1) operation to determine whether any values are being duplicated in a given row, column, or square. (You'll also want to check that each value is a legitimate number: if they give you a blank or a too-high number, you know that the board is not complete.) When you get to the end of the board, you'll know that all the values are correct, and there is no more checking required.

>Someone also pointed out that you can use any form of Set to do this. Arrays arranged in this manner are just a particularly lightweight and performant form of a Set that works well for a small, consecutive, fixed set of numbers. If you know the size of your board, you could also choose to do bit-masking, but that's probably a little overly tedious considering that efficiency isn't that big a deal to you.


