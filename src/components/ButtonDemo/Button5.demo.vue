<demo>加载状态</demo>
<template>
        <Button loading>基础按钮</Button>
        <Button theme="primary" loading>主要按钮</Button>
        <Button theme="success" loading>成功按钮</Button>
        <Button theme="warning" loading>警告按钮</Button>
        <Button theme="danger" loading>危险按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default{
    components: {Button}
}
</script>
