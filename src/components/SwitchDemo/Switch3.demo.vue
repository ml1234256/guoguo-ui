<demo>设置颜色</demo>
<template>  
        <Switch v-model:value="bool" active-color="green" inactive-color="red"/>
</template>

<script lang="ts">
import { ref } from 'vue';
import {Switch} from '../../lib/index';

export default{
    components: {Switch},
    setup () {
        const bool = ref(false);
        return {bool}
    }
}
</script>

