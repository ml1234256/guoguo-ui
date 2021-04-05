<template>
<div class="doc-content">
   <h1>
        <slot name="title"/>
    </h1>
    <div class="left" ref="left">
       <slot name="left" />
    </div>
    <div class="right" v-if="!oneClo">
        <slot name="right"/>
    </div>
    <div class="api-list" v-if="apiList">
        <h3>API</h3>
         <Table :data="apiList">
            <TableColumn prop="property" label="参数"/>
            <TableColumn prop="description" label="介绍"/>
            <TableColumn prop="type" label="类型"/>
            <TableColumn prop="params" label="可选值"/>
            <TableColumn prop="default" label="默认"/>
        </Table>
    </div> 

</div>
 

</template>

<script lang="ts">
import {onMounted,ref } from 'vue';
import Table from '../lib/Table.vue';
import TableColumn from '../lib/TableColumn.vue';


export default{
    components:{Table,TableColumn},
    props: {
        apiList: {
            type:Object,
        },
        oneClo:{
            type:Boolean,
            default: false,
        }
    },
    setup (props) {
        const left = ref<HTMLDivElement>(null);
        onMounted(() => {
            if(props.oneClo) {
                console.log(2, left.value)
                left.value.style.width='100%';
            }
        })
        return {
            left
        };
    }
}
</script>

<style lang="scss" scoped>
$margin: 16px;
$margin-mobile: 16px;
.doc-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0 16px;
    @media (max-width: 800px) {
    padding: 0 8px;
}
}
h1 { 
    width: 100%;
    text-align: left;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 24px;
    padding:0 $margin;
    }

.left, .right {
    width:50%;
    padding: 0 $margin;
    @media(max-width:800px){
        width:100%;
    }
}
.left {
    &[onClo]{
        width:100%;
    }
}
.api-list{
        padding:8px 16px;
        margin: 0 $margin 60px $margin;
        background: #fff;
        border-radius: 4px;
        width: 100%;
        overflow:auto;
        box-shadow: 0 4px 6px #ebebeb;
        >h3{
            text-align: left;
            padding:8px 0;
            font-size:20px;
        }
}
</style>