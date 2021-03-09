<demo>设置圆角</demo>
<template>
<Progress percentage="20" round />
<Progress percentage="70" :color="green" round />
<Progress percentage="60" :color="orange" round />
<Progress percentage="25" :color="red" round />

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