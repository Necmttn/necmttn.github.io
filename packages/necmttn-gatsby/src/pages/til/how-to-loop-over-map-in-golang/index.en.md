---
title: How to loop over map in GoLang
tags: golang
til: true
draft: false
---


you can use builtn took range for it. Check the example;

```go
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
will log

```bash
key %!d(string=puz) | value 66
key %!d(string=pol) | value 99

[Process exited 0]

```
