<demo>设置尺寸</demo>
<template>
    <div>
        <Button size="large">基础按钮</Button>
        <Button theme="primary" size="large">主要按钮</Button>
        <Button theme="danger" size="large">危险按钮</Button>
</div>
<div>
        <Button>基础按钮</Button>
        <Button theme="primary">主要按钮</Button>
        <Button theme="danger">危险按钮</Button>
</div>
<div>
        <Button size="small">基础按钮</Button>
        <Button theme="primary" size="small">主要按钮</Button>
        <Button theme="danger" size="small">危险按钮</Button>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default{
    components: {Button}
}
</script>
