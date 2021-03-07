<template>
<DocLayout :api-list="tableData">
    <template v-slot:title>Button 按钮</template>
    <template v-slot:left>
        <section>
            <Demo :component="Button1Demo">
                设置 theme 为 button,link,text，默认 button
            </Demo>
        </section>
            
        <section>
            <Demo :component="Button2Demo">
            设置 size 为 big, small, 默认为normal
            </Demo>
        </section>
        <section>
            <Demo :component="Button3Demo">
            设置 level 为 main, danger, 默认为普通按钮
            </Demo>
        </section>
    </template>
    <template v-slot:right>
        <section>
            <Demo :component="Button4Demo">
            设置 disable
            </Demo>
        </section>
        <section>
            <Demo :component="Button5Demo">
                loading
            </Demo>
        </section>
    </template>
</DocLayout>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './Demo.vue';
import Button1Demo from './ButtonDemo/Button1.demo.vue';
import Button2Demo from './ButtonDemo/Button2.demo.vue';
import Button3Demo from './ButtonDemo/Button3.demo.vue';
import Button4Demo from './ButtonDemo/Button4.demo.vue';
import Button5Demo from './ButtonDemo/Button5.demo.vue';
import Table from '../lib/Table.vue';
import TableColumn from '../lib/TableColumn.vue';
import DocLayout from './DocLayout.vue';

export default defineComponent({
    components: {Demo, DocLayout,Table,TableColumn},
    setup () {
        let tableData = [{
            property: 'theme',
            description: '设置按钮类型',
            type: 'string',
            params: 'button/link/text',
            default: 'button',
        },{
           property: 'size',
            description: '设置按钮尺寸',
            type: 'string',
            params: 'big/normal/small',
            default: 'normal',
        },{
           property: 'level',
            description: '设置按钮等级',
            type: 'string',
            params: 'main/danger',
            default: 'main',
        },{
           property: 'disable',
            description: '设置禁用状态',
            type: 'boolean',
            params: '——',
            default: 'false',
        },{
           property: 'loading',
            description: '设置加载状态',
            type: 'boolean',
            params: '——',
            default: 'false',
        }]
        return {
            tableData,
            Button1Demo, 
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo
        };
    }
})
</script>

<style lang="scss" scoped>

section{
        margin-bottom:24px;
    }

</style>