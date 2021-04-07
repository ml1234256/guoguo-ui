<template>
<DocLayout :api-list="tableData">
    <template v-slot:title>Tabs 标签页</template>
    <template v-slot:left>
        <section>
            <Demo :component="Tabs1Demo">
                通过 v-model 绑定一个 Boolean 类型的变量。
            </Demo>
        </section>
    </template>
    <template v-slot:right>
        <section>
            <Demo :component="Tabs2Demo" >
                通过 disabled 属性设置禁选项
            </Demo>
        </section>
    </template>
</DocLayout>
<Pages :pre-link="`/dialog`" :next-link="`/progress`">
    <template v-slot:pre>
        Dialog 对话框
    </template>
    <template v-slot:next>
       Progress 进度条
    </template>
</Pages>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import DocLayout from '../DocLayout.vue';
import Tabs1Demo from './Tabs1.demo.vue';
import Tabs2Demo from './Tabs2.demo.vue';
import Pages from '../Pages.vue';

export default {
    components: {Demo, DocLayout, Pages},
    setup () {
        const tableData = [{
            property: 'selected',
            description: '绑定值',
            type: 'string',
            params: '——',
            default: '——',
        },{
           property: 'disabled',
            description: '设置禁用',
            type: 'object',
            params: '——',
            default: '——',
        }];
        return {tableData, Tabs1Demo, Tabs2Demo}
    }
}
</script>

<style scoped>
section {
    margin-bottom: 24px;
}
</style>