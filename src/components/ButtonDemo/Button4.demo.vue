<demo>禁用按钮</demo>
<template>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用连接按钮</Button>
        <Button theme="text" disabled>禁用文字按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default{
    components: {Button}
}
</script>
