<demo>设置禁用</demo>
<template>
    <div>
    <Tabs v-model:selected="selected" class="guoguo-tabs">
        <Tab title="导航1">今天吃肯德基</Tab>
        <Tab title="导航2" disabled>明天吃麦当劳</Tab>
        <Tab title="导航3">后天吃必胜客</Tab>
    </Tabs>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import {Tabs, Tab} from '../../lib/index';

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