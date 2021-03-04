<template>
    <h2>Tab 组件</h2>
    <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './Demo.vue';
import Tabs1Demo from './TabsDemo/Tabs1.demo.vue';

export default defineComponent({
    components: {Demo},
    setup () {

        return {Tabs1Demo}
    }
})
</script>

<style lang="scss" scoped>

</style>