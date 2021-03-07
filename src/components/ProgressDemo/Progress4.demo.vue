<demo>设置宽度</demo>
<template>
<Progress percentage="85" stroke-width='10'/>
<Progress percentage="20" stroke-width='15' :color="green"/>
<Progress percentage="30" stroke-width='20' :color="orange"/>
<Progress percentage="40" stroke-width='25' :color="red"/>
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
</style> 