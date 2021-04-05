<demo>禁用按钮</demo>
<template>
        <Button disabled>基础按钮</Button>
        <Button theme="primary" disabled>主要按钮</Button>
        <Button theme="success" disabled>成功按钮</Button>
        <Button theme="warning" disabled>警告按钮</Button>
        <Button theme="danger" disabled>危险按钮</Button>
        <Button theme="link" disabled>连接按钮</Button>
        <Button theme="text" disabled>文本按钮</Button>
</template>

<script lang="ts">
import {Button} from '../../lib/index';

export default{
    components: {Button}
}
</script>
