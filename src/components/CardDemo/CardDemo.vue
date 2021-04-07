<template>
    <DocLayout :api-list="tableData">
    <template v-slot:title>Card 卡片</template>
    <template v-slot:left>
        <section>
            <Demo :component="Card1Demo" />
        </section>
        <section>
            <Demo :component="Card2Demo">
                通过 header 属性设置卡片头文字 <br />
                通过 header-style 属性设置卡片头样式
            </Demo>
        </section>

    </template>
    <template v-slot:right>
        <section>
            <Demo :component="Card3Demo">
            通过 body-style 属性设置卡片内容样式
            </Demo>
        </section>
        <section>
            <Demo :component="Card4Demo">
                自定义卡片内容
            </Demo>
        </section>
    </template>
    </DocLayout>
    <Pages :pre-link="`/table`" :next-link="`/divider`">
    <template v-slot:pre>
        Table 表格
    </template>
    <template v-slot:next>
       Divider 分割线
    </template>
</Pages>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import DocLayout from '../DocLayout.vue';
import Pages from '../Pages.vue';
import Card1Demo from './Card1.demo.vue';
import Card2Demo from './Card2.demo.vue';
import Card3Demo from './Card3.demo.vue';
import Card4Demo from './Card4.demo.vue';

export default {
    components: {Demo, DocLayout, Pages},
    setup () {
        const tableData = [{
            property: 'header',
            description: '设置卡片头文字',
            type: 'string',
            params: '——',
            default: '——',
        },{
           property: 'header-style',
            description: '设置卡片头样式',
            type: 'object',
            params: '——',
            default: '{padding: 8px 16px}',
        },{
           property: 'body-style',
            description: '设置卡片内容样式',
            type: 'object',
            params: '——',
            default: '{padding: 16px}',
        }];

        return {
            tableData, 
            Card1Demo, 
            Card2Demo, 
            Card3Demo,
            Card4Demo
            }
    }
}
</script>

<style scoped>
section{
    margin-bottom: 24px;
}
</style>