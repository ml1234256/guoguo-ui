<template>
   <button @click="toggle" class="guoguo-switch" :class="{checked:value}" :disabled="disabled">
       <span></span>
   </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
            value: Boolean,
            disabled: {
                type: Boolean,
                default: false,
            }
        },
    setup (props, context) {
        const toggle = () => {
            context.emit("update:value", !props.value);
        }

        return {toggle}
    }
})
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
.guoguo-switch {
    height: $h; width: $h*2; border: none; background-color: #bfbfbf;
    border-radius: $h/2; position: relative; 
    &[disabled] {
        cursor:not-allowed;
    }
    >span {
        position: absolute; top: 2px; left: 2px;
        height: $h2; width: $h2; background-color: #fff;
        border-radius: $h2/2; transition: all 250ms;
    }
    &:focus { outline: none;}
    &:active {
        >span {
            width: $h2 + 4px;
        }
    }
    &.checked {
        background-color: #1890ff;
        >span{
            left: calc(100% - #{$h2} - 2px);
        }
        &:active {
            >span{
                width: $h2+4px; margin-left: -4px;
            }
        }
    }

}
</style>