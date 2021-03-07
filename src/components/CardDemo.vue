<template>
    <div>
<Card />
    </div>
    <DocLayout :api-list="tableData">
    <template v-slot:title>Card 对话框</template>
    <template v-slot:left>
        <section>
            <Demo :component="Card1Demo" />
        </section>
    </template>
</DocLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';
import Card1Demo from './CardDemo/Card1.demo.vue'

export default defineComponent({
    components: {Demo, DocLayout},
    setup () {
        let tableData = [{
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
            default: '——',
        },{
           property: 'body-style',
            description: '设置卡片内容样式',
            type: 'object',
            params: '——',
            default: '——',
        }];

        return {tableData, Card1Demo}
    }
})
</script>

<style scoped>
section{
    margin-bottom: 24px;
}
</style>