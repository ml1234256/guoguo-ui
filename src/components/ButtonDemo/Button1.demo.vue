<demo>
按钮类型
</demo>
<template>
        <Button class="button">基础按钮</Button>
        <Button theme="primary">主要按钮</Button>
        <Button theme="success">成功按钮</Button>
        <Button theme="warning">警告按钮</Button>
        <Button theme="danger">危险按钮</Button>
        <Button theme="link">连接按钮</Button>
        <Button theme="text">文本按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default{
    components: {Button}
}
</script>