---
title: How to Loop over map in GoLang
tags: golang

---


you can use builtn took range for it. Check the example;

```GoLang
import (
	"fmt"
)

func main() {
	kar := make(map[string]int)

	kar["puz"] = 66
	kar["pol"] = 99

	for i, v := range kar {
		fmt.Printf("key %d = value%d\n", i, v)
	}
}
```
will log;

```
key %!d(string=puz) | value 66
key %!d(string=pol) | value 99

[Process exited 0]

```
