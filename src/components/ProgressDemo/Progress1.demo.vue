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
        const red = '#F74668';
        const green = '#00D68F';
        const orange = '#FFAA00';
        return {red,green,orange};
    }
}
</script>