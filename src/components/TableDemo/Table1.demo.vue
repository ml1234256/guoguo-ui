<demo>常规用法</demo>
<template>  
    <Table :data="tableData">
        <Table-Column prop="name" label="姓名"/>
        <Table-Column prop="age" label="年龄"/>
        <Table-Column prop="hobby" label="爱好"/>
    </Table>
</template>

<script lang="ts">
import Table from '../../lib/Table.vue';
import TableColumn from '../../lib/TableColumn.vue';

export default{
    components: {Table, TableColumn},
    setup () {
        let tableData = [{
            name: "小兰",
            age: "18",
            hobby: '吃饭'
        },
        {
            name: "小恁",
            age: "25",
            hobby: '睡觉',
        },
        {
            name: "梅尼",
            age: "22",
            hobby: '打豆豆',
        }]
        return {tableData}
    }
}
</script>
