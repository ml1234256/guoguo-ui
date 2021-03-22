<template>
    <div class="card">
        <div v-if="header" class="header" ref="cardHeader">{{header}}</div>
        <div class="content" ref="cardBody">
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
            default: {}
        },
        bodyStyle: {
            type: Object,
            default: {}
        }
    },
    setup (props) {
        const {headerStyle, bodyStyle} = props;
        const cardHeader = ref<HTMLDivElement>(null);
        const cardBody = ref<HTMLDivElement>(null);
        onMounted(() => { 
            if (cardHeader.value) cardHeader.value.style.padding =  "8px 16px";
            cardBody.value.style.padding = "16px";
            Object.keys(headerStyle).forEach(key => {
                   if (cardHeader.value) {
                       cardHeader.value.style[key] = headerStyle[key]
                   };
             })
            Object.keys(bodyStyle).forEach(key => {
                cardBody.value.style[key] = bodyStyle[key]
             })
            })
        return {cardHeader, cardBody}
    }
})
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid rgb(235, 238, 245);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    text-align: left;
    background: #fff;
   
}

.header {
    font-size: 20px;
    border-bottom: 1px solid #ebebeb;
}
</style>