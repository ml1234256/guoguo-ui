<template>
    <div class="card">
        <div v-if="header" class="header" ref="head">{{header}}</div>
        <div class="content">
            <slot />
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    props: {
        header: {
            type: String,
        },
        headerStyle: {
            type: Object,
            dafault: {padding: "8px 16px"}
        }
    },
    setup (props) {
        const {headerStyle} = props;
        const head = ref<HTMLDivElement>(null);
        onMounted(() => { 
            console.log(headerStyle)
        }) 
        return {head}
    }
})
</script>

<style lang="scss"scoped>
.card {
    border: 1px solid #d9d9d9;
    box-shadow: 0 4px 6px #ebebeb;
    border-radius: 4px;
    text-align: left;
    background: #fff;
   
}
.content {
 padding: 16px;
}
.header {
    font-size: 20px;
    border-bottom: 1px solid #ebebeb;
}
</style>