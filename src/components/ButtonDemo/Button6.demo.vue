<demo>圆形按钮</demo>
<template>
    <div>
        <Button circle size="small">B</Button>
        <Button theme="primary" circle size="small">P</Button>
        <Button theme="success" circle size="small">S</Button>
        <Button theme="warning" circle size="small">W</Button>
        <Button theme="danger" circle size="small">D</Button>
    </div>
    <div>
        <Button circle>B</Button>
        <Button theme="primary" circle>P</Button>
        <Button theme="success" circle>S</Button>
        <Button theme="warning" circle>W</Button>
        <Button theme="danger" circle>D</Button>
    </div>
    <div>
        <Button circle size="large">B</Button>
        <Button theme="primary" circle size="large">P</Button>
        <Button theme="success" circle size="large">S</Button>
        <Button theme="warning" circle size="large">W</Button>
        <Button theme="danger" circle size="large">D</Button>
    </div>

</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default{
    components: {Button}
}
</script>
