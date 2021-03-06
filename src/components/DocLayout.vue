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