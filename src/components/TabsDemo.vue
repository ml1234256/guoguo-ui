<template>
<DocLayout :api-list="tableData">
    <template v-slot:title>Tab 标签页</template>
    <template v-slot:left>
        <section>
            <Demo :component="Tabs1Demo">
                通过 v-model 绑定一个 Boolean 类型的变量。
            </Demo>
        </section>
                <section>
            <Demo :component="Tabs3Demo">
                通过 center 属性设置居中显示
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';
import Tabs1Demo from './TabsDemo/Tabs1.demo.vue';
import Tabs2Demo from './TabsDemo/Tabs2.demo.vue';
import Tabs3Demo from './TabsDemo/Tabs3.demo.vue';

export default defineComponent({
    components: {Demo, DocLayout},
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
        },{
           property: 'center',
            description: '设置居中',
            type: 'boolean',
            params: '——',
            default: 'false',
        }];
        return {tableData, Tabs1Demo, Tabs2Demo, Tabs3Demo}
    }
})
</script>

<style scoped>
section {
    margin-bottom: 24px;
}
</style>