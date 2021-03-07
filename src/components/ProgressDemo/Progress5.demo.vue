<demo>设置内容</demo>

<template>

<Progress percentage="30" :stroke-width='25'>
    <h4>primary</h4>
</Progress>
<Progress percentage="60" :stroke-width='25' :color="green">
    <h4>success</h4>
</Progress>
<Progress percentage="45" :stroke-width='25'  :color="orange">
    <h4>wraning</h4>
</Progress>
<Progress percentage="80" :stroke-width='25'  :color="red">
    <h4>danger</h4>
</Progress>
</template>

<script lang="ts">
import Progress from '../../lib/Progress.vue';

export default{
    components: {Progress},
    setup() {
        const green = 'rgb(0, 214, 143)';
        const orange = 'rgb(255, 170, 0)';
        const red = 'rgb(247,70,104)';
        return {green,orange,red};
    }
}
</script>
<style lang="scss" scoped>
.process-bar {
    margin-top:10px;
}
h4 {
    color: #fff;
    font-size: 16px;
}
</style> 