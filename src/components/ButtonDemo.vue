<template>
<DocLayout :api-list="tableData">
    <template v-slot:title>Button 按钮</template>
    <template v-slot:left>
        <section>
            <Demo :component="Button1Demo">
                通过 theme 属性设置按钮的类型。
            </Demo>
        </section>
            
        <section>
            <Demo :component="Button2Demo">
            通过 size 设置按钮的尺寸。
            </Demo>
        </section>
        <section>
            <Demo :component="Button3Demo">
                通过 round 属性设置圆角。
            </Demo>
        </section>
    </template>
    <template v-slot:right>
        <section>
            <Demo :component="Button6Demo">
            通过 circle 设置圆形按钮。
            </Demo>
        </section>
        <section>
            <Demo :component="Button4Demo">
            通过 disabled 属性设置禁用状态。
            </Demo>
        </section>
        <section>
            <Demo :component="Button5Demo">
                通过 loading 属性设置加载状态。
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
import Button6Demo from './ButtonDemo/Button6.demo.vue';
import Table from '../lib/Table.vue';
import TableColumn from '../lib/TableColumn.vue';
import DocLayout from './DocLayout.vue';

export default defineComponent({
    components: {Demo, DocLayout,Table,TableColumn},
    setup () {
        const tableData = [{
            property: 'theme',
            description: '设置按钮类型',
            type: 'string',
            params: 'primary/success/wraning/danger/link/text',
            default: 'basic',
        },{
           property: 'size',
            description: '设置按钮尺寸',
            type: 'string',
            params: 'large/medium/small',
            default: 'medium',
        },{
           property: 'round',
            description: '设置圆角',
            type: 'boolean',
            params: '——',
            default: 'false',
        },{
           property: 'circle',
            description: '圆形按钮',
            type: 'boolean',
            params: '——',
            default: 'false',
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
            Button5Demo,
            Button6Demo
        };
    }
})
</script>

<style lang="scss" scoped>

section{
        margin-bottom:24px;
    }

</style>