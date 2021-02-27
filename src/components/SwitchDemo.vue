<template>
    <div>
        <h3>Switch 组件</h3>
        <Switch v-model:value="bool"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default defineComponent({
    components:{Switch},
    setup () {
        const bool = ref(false);
        return {bool};
    }
})
</script>

<style scoped>

</style>