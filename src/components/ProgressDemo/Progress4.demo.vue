<demo>设置宽度</demo>
<template>
<h3>设置宽度</h3>
<Progress percentage="30" stroke-width='20' class="process-bar" />
<Progress percentage="30" stroke-width='60' color="rgb(247,70,104)" class="process-bar" />
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
</style> 