<template>
        <h2>Dialog 组件</h2>
        <Demo :component="Dialog1Demo" />
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Demo from './Demo.vue';
import Dialog1Demo from './DialogDemo/Dialog1.demo.vue';

export default defineComponent({
    components: {Demo},
    setup () {
        return {Dialog1Demo}
    }
})
</script>

<style scoped>

</style>