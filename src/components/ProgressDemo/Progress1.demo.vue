<demo>设置颜色</demo>
<template>
<Progress percentage="20"  />
<Progress percentage="40" :color="green" />
<Progress percentage="60" :color="orange" />
<Progress percentage="80" :color="red" />

</template>

<script lang="ts">
import Progress from '../../lib/Progress.vue';

export default{
    components: {Progress},
    setup() {
        const red = 'rgb(247,70,104)';
        const green = 'rgb(0, 214, 143)';
        const orange = 'rgb(255, 170, 0)';
        return {red,green,orange};
    }
}
</script>