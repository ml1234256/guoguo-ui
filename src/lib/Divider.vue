<template>
    <div class="divider" :class="classes" ref="divider">
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    props:{
        dashed: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#DCDFE6'
        }
    },
    setup (props) {
        const {dashed, vertical, color} = props;
        const divider = ref<HTMLDivElement>(null);
        const classes = computed(()=>{
            return {
                [`divider-dashed`]: dashed,
                [`divider-vertical`]: vertical,
            };
        });
        onMounted(() => {
            divider.value.style.backgroundColor = color
            if(divider.value.className.split(' ').indexOf('divider-dashed')>-1) {
                divider.value.style.background = 'none';
                divider.value.style.borderColor = color; 
            }
        })
        return {classes, divider}
    }
})
</script>

<style lang='scss' scoped>
.divider{
    width:100%;
    height:1px;
    border: none;
    //background-color: #DCDFE6;
    margin: 24px 0;
    &-dashed {
       //background: none;
        border-style: dashed;
        border-width: 1px 0 0;
    }
}
</style>