<demo>禁用开关</demo>
<template>  
    <div>
        <Switch v-model:value="bool1" disabled/>
    </div>
    <div>
        <Switch v-model:value="bool2" disabled/>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import {Switch} from '../../lib/index';

export default{
    components: {Switch},
    setup () {
        const bool1 = ref(false);
        const bool2 = ref(true);
        return {bool1, bool2}
    }
}
</script>

