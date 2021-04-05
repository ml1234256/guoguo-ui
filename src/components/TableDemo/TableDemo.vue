<template>
 <DocLayout :api-list="tableData" oneClo>
    <template v-slot:title>Table 表格</template>
    <template v-slot:left>
        <section>
            <Demo :component="Table1Demo" />
        </section>
    </template>
</DocLayout>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import DocLayout from '../DocLayout.vue';
import Table1Demo from './Table1.demo.vue'

export default {
    components: {Demo, DocLayout},
    setup() {
        const tableData = [{
            property: 'data',
            description: '显示的数据',
            type: 'array',
            params: '——',
            default: '——',
        }]
        return {Table1Demo,tableData}
    }
}
</script>

<style scoped>
section {
    margin-bottom:24px;
}
</style>