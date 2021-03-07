<template>
<DocLayout :apiList="tableData">
    <template v-slot:title>Switch 开关</template>
    <template v-slot:left>
        <section>
                 <Demo :component="Switch1Demo" />
        </section>
    </template>
        <template v-slot:right>
        <section>
                <Demo :component="Switch2Demo" />
        </section>
    </template>
</DocLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Switch1Demo from './SwitchDemo/Switch1.demo.vue';
import Switch2Demo from './SwitchDemo/Switch2.demo.vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';


export default defineComponent({
    components:{ Demo, DocLayout},
    setup () {
        let tableData = [{
            property: 'value/v-model',
            description: '绑定值',
            type: 'boolean/string/number',
            params: '——',
            default: '——',
        },{
           property: 'disabled',
            description: '设置禁用状态',
            type: 'boolean',
            params: '——',
            default: 'false',
        },{
           property: 'active-color',
            description: '开关打开时背景颜色',
            type: 'string',
            params: '——',
            default: '——',
        }
        ,{
           property: 'inactive-color',
            description: '开关关闭时背景颜色',
            type: 'string',
            params: '——',
            default: '——',
        }];
        return {tableData,Switch1Demo, Switch2Demo};
    }
})
</script>

<style lang="scss" scoped>
section { margin-bottom: 24px;}
</style>