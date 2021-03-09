<demo>设置背景色为灰色</demo>
<template>
<Progress percentage="70" background-grey />
<Progress percentage="33" :color="green" background-grey/>
<Progress :color="orange" background-grey/>
<Progress percentage="10" :color="red" background-grey/>

</template>

<script lang="ts">
import Progress from '../../lib/Progress.vue';

export default{
    components: {Progress},
    setup() {
        const red = '#F74668';
        const green = '#00D68F';
        const orange = '#FFAA00';
        return {green,orange,red};
    }
}
</script>