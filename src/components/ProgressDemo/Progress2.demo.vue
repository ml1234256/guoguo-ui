<demo>设置圆角</demo>
<template>
<h3>设置圆角</h3>
<Progress percentage="80" fillet class="process-bar" />
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