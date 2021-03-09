<demo>设置居中</demo>
<template>
    <div>
    <Tabs v-model:selected="selected" class="guoguo-tabs" :center="true">
        <Tab title="导航1">今天吃肯德基</Tab>
        <Tab title="导航2">明天吃麦当劳</Tab>
    </Tabs>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';

export default {
    components: {Tabs, Tab},
    setup () {
        const selected = ref('导航1');

        return {selected}
    }
}
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