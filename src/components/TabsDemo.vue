<template>
    <h2>Tab 组件</h2>
    <Tabs v-model:selected="selected" class="guoguo-tabs">
        <Tab title="导航1">猪猪子是什么等级的忍者？</Tab>
        <Tab title="导航2">猪妮妮好不好吃？</Tab>
    </Tabs>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default defineComponent({
    components: {Tabs, Tab},
    setup () {
        const selected = ref('导航2');

        return {selected}
    }
})
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.guoguo-tabs{
    border: 1px solid $border-color;
    background: #fff;
    max-width: 80%;
    margin: 16px auto;
}
</style>