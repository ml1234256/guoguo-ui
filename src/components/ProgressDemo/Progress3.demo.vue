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
        const green = 'rgb(0, 214, 143)';
        const orange = 'rgb(255, 170, 0)';
        const red = 'rgb(247,70,104)';
        return {green,orange,red};
    }
}
</script>