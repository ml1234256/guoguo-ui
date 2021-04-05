<template>
<DocLayout :api-list="tableData">
    <template v-slot:title>Switch 开关</template>
    <template v-slot:left>
        <section>
                 <Demo :component="Switch1Demo">
                    通过 v-model 绑定一个 Boolean 类型的变量。
                 </Demo>
        </section>
                <section>
                 <Demo :component="Switch3Demo">
                    通过 active-color 与 inactive-color 属性设置开关时的背景色。
                 </Demo>
        </section>
    </template>
        <template v-slot:right>
        <section>
                <Demo :component="Switch2Demo">
                    通过 disable 属性设置禁用状态。
                </Demo>
        </section>
    </template>
</DocLayout>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Switch3Demo from './Switch3.demo.vue';
import Demo from '../Demo.vue';
import DocLayout from '../DocLayout.vue';


export default {
    components:{ Demo, DocLayout},
    setup () {
        const tableData = [{
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
        return {tableData,Switch1Demo, Switch2Demo,Switch3Demo};
    }
}
</script>

<style lang="scss" scoped>
section { margin-bottom: 24px;}
</style>