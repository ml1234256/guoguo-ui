<template>
<DocLayout :api-list="tableData">
    <template v-slot:title>Divider 分割线</template>
    <template v-slot:left>
        <section>
            <Demo :component="Divider1Demo">
               
            </Demo>
        </section>
        <section>
            <Demo :component="Divider2Demo">
                
            </Demo>
        </section>
    </template>
    <template v-slot:right>
        <section>
            <Demo :component="Divider3Demo">
               
            </Demo>
        </section>
        <section>
            <Demo :component="Divider4Demo">
                
            </Demo>
        </section>
    </template>
</DocLayout>
<Pages :pre-link="`/card`">
    <template v-slot:pre>
        Card 卡片
    </template>
</Pages> 
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import DocLayout from '../DocLayout.vue';
import Divider1Demo from './Divider1.demo.vue';
import Divider2Demo from './Divider2.demo.vue';
import Divider3Demo from './Divider3.demo.vue';
import Divider4Demo from './Divider4.demo.vue';
import Pages from '../Pages.vue';

export default {
    components: {Demo, DocLayout, Pages},
    setup () {
            const tableData = [{
           property: 'dashed',
            description: '是否虚线',
            type: 'boolean',
            params: '——',
            default: 'false',
        },{
            property: 'vertical',
            description: '设置垂直分割线',
            type: 'boolean',
            params: '——',
            default: 'false',
        },{
            property: 'orientation',
            description: '设置分割线标题的位置',
            type: 'string',
            params: 'left / right / center',
            default: 'left',
        },{
            property: 'color',
            description: '设置分割线颜色',
            type: 'string',
            params: '——',
            default: '——',
        }];
        return {
            Divider1Demo,
            Divider2Demo,
            Divider3Demo,
            Divider4Demo, 
            tableData
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 24px;
}
</style>