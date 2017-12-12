---
title: GoLang'de Objenin keyleri maplenir ?

tags: golang
til: true
---

Golang'in icinde bulunan  `range` i kullanabilirsiniz. Ornegin ;

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
konsoldan bunu cikti vericektir.

```bash
key %!d(string=puz) | value 66
key %!d(string=pol) | value 99

[Process exited 0]

```
