<demo>底部条置成灰色</demo>
<template>
<Progress percentage="80" background-grey class="process-bar" />
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