<demo>
按钮类型
</demo>
<template>
        <Button @click="onClick">普通按钮</Button>
        <Button theme="button">普通按钮</Button>
        <Button theme="link">连接按钮</Button>
        <Button theme="text">文本按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default{
    components: {Button},
    setup() {
            const onClick = () => {
            window.alert('Hi');
        }
        return {onClick}
    }
}
</script>
