<demo>会动的进度条</demo>

<template>

{{percentage + '%'}}
<Progress :percentage="percentage" />
<Button class="button" @click="reduce">减</Button>
<Button class="button" @click="add">加</Button>
</template>

<script lang="ts">
import {Progress} from '../../lib/index';
import {Button} from '../../lib/index';
import { ref } from 'vue';

export default{
    components: {Progress, Button},
    
    setup() {
        const percentage = ref(10);
        const reduce =() => {
            if (percentage.value > 0) percentage.value -= 10;
        }
        const add =() => {
            percentage.value += 10;
            if (percentage.value > 100){ percentage.value = 100}
        }
        return {percentage, reduce, add};
    }
}
</script>
<style lang="scss" scoped>
.process-bar {
    margin-top:10px;
}
h4 {
    color: #fff;
    font-size: 16px;
}
</style> 