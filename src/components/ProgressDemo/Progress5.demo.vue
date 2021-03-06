<demo>设置内容</demo>
<template>
<h3>设置内容</h3>
<Progress percentage="30" :stroke-width='35' class="process-bar">
    <h4>primary</h4>
</Progress>
</template>

<script lang="ts">
import Progress from '../../lib/Progress.vue';

export default{
    components: {Progress}
}
</script>
<style lang="scss" scoped>
.process-bar {
    margin-top:10px;
}
h4 {
    color: #fff;
    text-align: right;
    display:flex;
    font-size: 20px;
}
</style> 