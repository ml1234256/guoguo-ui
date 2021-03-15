<template>
    <div class="divider" :class="classes" ref="divider">
        <div v-if="!vertical" class="divider-text" :class="`is-${orientation}`"><slot /></div>
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
        },
        orientation: {
            type: String,
            default: 'left'
        }
    },
    setup (props) {
        const {dashed, vertical, color, orientation} = props;
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
    margin: 24px 0;
    position: relative;
    &-dashed {
        border-style: dashed;
        border-width: 1px 0 0;
    }
    &-vertical {
        display: inline-block;
        width: 1px;
        height: 1em;
        border: none;
        margin: 0 8px;
    }
    &-text{
        position:absolute;
        transform: translateY(-50%);
        background: #fff;
        padding: 0 20px;
        font-size: 14px;
        &.is-left{
        left: 20px;
        }
        &.is-center{
            left: 50%;
            transform: translateX(-50%);
        }
        &.is-right{
            right: 20px;
        }
    }

}
</style>