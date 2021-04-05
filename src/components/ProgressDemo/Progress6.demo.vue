<demo></demo>
<template>
{{percentage + '%'}}
<Progress :percentage="percentage" />
<Button class="button" @click="decrease">&lt;</Button>
<Button class="button" @click="increase">&gt;</Button>
</template>

<script lang="ts">
import {Progress} from '../../lib/index';
import {Button} from '../../lib/index';
import { ref } from 'vue';
export default{
    components: {Progress, Button},
    setup() {
        const percentage = ref(10);
        const decrease = () => {
            percentage.value -= 10;
            if (percentage.value < 0) percentage.value = 0;
        }
        const increase = () => {
            percentage.value += 10;
            if (percentage.value > 100) percentage.value = 100;
        }
        return {percentage, decrease, increase};
    }
}
</script>

<style scoped>
.button {
    width:24px;
    height: 24px;
    font-size:16px;
}
</style>