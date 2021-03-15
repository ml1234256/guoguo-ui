<template>
   <button @click="toggle" class="guoguo-switch" :class="{checked:value}" :disabled="disabled" ref="button">
       <span></span>
   </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'

export default defineComponent({
    props: {
            value: Boolean,
            disabled: {
                type: Boolean,
                default: false,
            },
            activeColor:{
                type: String,
                default: "#3366ff",
            },
            inactiveColor:{
                type: String,
                default: "#bfbfbf",
            }
        },
    setup (props, context) {
        const button = ref<HTMLDivElement>(null);
        const toggle = () => {
            context.emit("update:value", !props.value);
        }
        const setColor = () => {
            button.value.style.backgroundColor = props.inactiveColor;
            if((button.value.className).split(" ").indexOf('checked')>-1){
                button.value.style.backgroundColor = props.activeColor;
            }
        }
        onMounted(setColor);
        onUpdated(setColor)
        return {toggle,button}
    }
})
</script>

<style lang="scss" scoped>
@import "../assets/helper.scss";
$h: 22px;
$h2: $h - 4px;
.guoguo-switch {
    height: $h; width: $h*2; border: none; background-color: #bfbfbf;
    border-radius: $h/2; position: relative;  margin: 6px;
    &[disabled] {
        cursor:not-allowed;
        opacity: 0.6;
        &:active {
            >span{
                width: $h2;
            }
        }
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
        >span{
            left: calc(100% - #{$h2} - 2px);
        }
        &:active {
            >span{
                width: $h2+4px; margin-left: -4px;
            }
        }
        &[disabled] {
                &:active {
                    >span{
                        width: $h2;
                        margin-left: 0;
                    }
                }
        }
    }

}
</style>