<demo>设置颜色</demo>
<template>
<h3>设置颜色</h3>
<Progress percentage="80" class="process-bar" />
<Progress percentage="80" :color="red" class="process-bar" />

</template>

<script lang="ts">
import Progress from '../../lib/Progress.vue';

export default{
    components: {Progress},
    setup(props) {
        const red = 'rgb(247,70,104)';
        return {red};
    }
}
</script>
<style lang="scss" scoped>
.process-bar {
    margin-top:10px;
}
</style> 