<template>
        <h2>Process 组件</h2>
        <Demo :component="Progress1Demo" />
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Demo from './Demo.vue';
import Progress1Demo from './ProgressDemo/Progress1.demo.vue';

export default defineComponent({
    components: {Demo},
    setup () {
        return {Progress1Demo}
    }
})
</script>

<style scoped>

</style>