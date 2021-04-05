<template>
    <table>
        <thead>
            <tr>
                <th v-for="th in defaults" :key="th.props.label"> {{th.props.label}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tableData, index) in data" :key="index">
                <td v-for="td in tableData" :key="td.arg">{{td}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import TableColumn from "./TableColumn.vue";

export default {
    props: {
        data:{
            type: Object,
            required: true,
        }
    },
    setup (props, context) {
        const defaults = context.slots.default();
        defaults.forEach(tag => {if (tag.type !== TableColumn) throw new Error('Table 子标签必须是 TableColumn')});


        const prop = defaults.map(tag => tag.props.prop);
        const label = defaults.map(tag => tag.props.label); 
        return {prop, label,defaults}
    }
}
</script>

<style lang="scss" scoped>
table{
    width:100%;
    font-size: 14px;
    border-collapse: collapse;
    line-height: 1.5em;
    text-align: left;
    vertical-align: center;
    th{
        border-bottom: 1px solid #ebebeb;
        font-weight: 400;
        padding:15px;
        max-width: 250px;
        white-space: nowrap;
    }
    td{
        border-bottom: 1px solid #ebebeb;
        padding:15px;
        max-width:250px;
    }
}
</style>