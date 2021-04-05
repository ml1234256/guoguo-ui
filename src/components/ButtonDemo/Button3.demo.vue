<demo>设置圆角</demo>
<template>
        <Button round>基础按钮</Button>
        <Button theme="primary" round>主要按钮</Button>
        <Button theme="success" round>成功按钮</Button>
        <Button theme="warning" round>警告按钮</Button>
        <Button theme="danger" round>危险按钮</Button>
</template>

<script lang="ts">
import {Button} from '../../lib/index';

export default{
    components: {Button}
}
</script>
