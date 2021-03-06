<template>
<div class="doc-content">
   <h1>
        <slot name="title"/>
    </h1>
    <div class="left">
       <slot name="left" />
    </div>
    <div class="right">
        <slot name="right"/>
    </div>
    <div class="api-list" v-if="api">
        <h3>API</h3>
        <slot name="api" />
    </div> 

</div>
 

</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        api:{
            type: Boolean,
            default: false,
        }
    },
    setup () {
 
        return {
  
        };
    }
})
</script>

<style lang="scss" scoped>
.doc-content {
    display: flex;
    flex-wrap: wrap;
}
h1 { 
    width: 100%;
    text-align: left;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 24px;
    }

.left, .right {
    width:50%;
    @media(max-width:800px){
        width:100%;
    }
}
.left{
    padding-right:16px;
}
.right {
    padding-left: 16px;
}
.api-list{
        padding: 16px;
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