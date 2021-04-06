## 快速上手

在 main.js 中引入组件:

```
import {Button} from "pot-ui-2"
```

开始使用:

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button} from "pot-ui-2";
import "pot-ui-2/dist/lib/pot.css";
export default {
  components: {Button}
}
</script>
```