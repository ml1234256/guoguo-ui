<template>
    <button class="guoguo-button" :class="classes" :disabled="disabled" ref="button">
        <span v-if="loading" class="guoguo-loadingIndicator" ref="loadingIndicator"></span>
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'


export default defineComponent({
    props: {
        theme: {
            type:String,
            default:"basic",
        },
        size: {
            type:String,
            default: "medium",
        },
        round:{
            type:Boolean,
            default: false,
        },
        circle:{
            type:Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            dafault: false,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup (props) {
        const {theme, size, round, circle, loading} = props;
        const button = ref<HTMLDivElement>(null);
        const loadingIndicator = ref<HTMLDivElement>(null);
        onMounted(() => {
            if(round){
                const {height} = button.value.getBoundingClientRect();
                button.value.style.borderRadius = Math.round(height/2) + 'px';
            }
            if(loading && button.value.className.split(" ").indexOf('guoguo-theme-basic')>-1){
                console.log(loadingIndicator.value)
                loadingIndicator.value.style.borderColor = "#d9d9d9";
                loadingIndicator.value.style.borderLeft = "transparent";
            }
        })

        const classes = computed(()=>{
            return {
                [`guoguo-theme-${theme}`]: theme,
                [`guoguo-size-${size}`]: size,
                ['guoguo-loading']: loading,
                ['guoguo-circle']: circle,
            };
        });
        return {classes, button, loadingIndicator};
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/helper.scss";
$h: 32px;
$active: 6%;
$focus: 10%;
$disabled: 22%;
.guoguo-button{
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    font-size: 14px;
    background-color: #fff;
    color: $text-color;
    border: 1px solid $border-color;
    border-radius: $radius;
    // ??
    box-shadow: 0px 1px 0 fade-out(#000,0.95);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    margin:6px 8px 6px 0;
    &.guoguo-circle{
        width: $h;
        border-radius: 50%;
    }
    &:hover, &:focus {
        outline: none;
        color: lighten($blue,$focus);
        border-color: lighten($blue,$focus);
    }
    &:active{
        color:darken($color: $blue, $amount: $active);
        border-color:darken($color: $blue, $amount: $active);
    }
    &[disabled] {
        cursor:not-allowed;
    }
    // ??
    &::-moz-focus-inner {
        border: 0;
    }
    &.guoguo-theme-basic {
        &.guoguo-loading, &[disabled] {
            color: $grey;
            border-color: $border-color;
        }
    }
    &.guoguo-theme-primary{
        background-color: $blue;
        color: #fff;
        border-color: $blue;
        &:hover, &:focus{
            background-color: lighten($blue, $focus);
            border-color: lighten($blue, $focus);
        }
        &:active {
            background-color: darken($blue, $active);
            border-color: darken($blue, $active);
        }
        &.guoguo-loading, &[disabled] {
            background-color: lighten( $blue, $disabled);
            border:lighten( $blue, $disabled);
        }
    }
    &.guoguo-theme-danger {
            background-color:  $red;
            border-color: $red;
            color: #fff;
            &:hover, &:focus {
                background-color: lighten($red, $focus);
                border-color: lighten($red, $focus);
        }
        &:active {
            background-color: darken($red, $active);
            border-color: darken($red, $active);
        }
        &.guoguo-loading, &[disabled] {
            background-color: lighten( $red, $disabled);
            border:lighten( $red, $disabled);
        }
   }
    &.guoguo-theme-success {
        background-color:  $green;
        border-color: $green;
        color: #fff;
        &:hover,
        &:focus {
                opacity: 0.76;
        }
        &:active {
            background-color: darken($green, $active);
            border-color: darken($green, $active);
        }
        &.guoguo-loading, &[disabled] {
            background-color:rgb(135,225,178);
            border:rgb(135,225,178);
            &:hover,
            &:focus {
                    opacity: 1;
            }
        }
    }
    &.guoguo-theme-warning {
        background-color:  $orange;
        border-color: $orange;
        color: #fff;
          &:hover, &:focus {
                background-color: lighten($orange, $focus);
                border-color: lighten($orange, $focus);
        }
        &:active {
            background-color: darken($orange, $active);
            border-color: darken($orange, $active);
        }
        &.guoguo-loading, &[disabled] {
            background-color: lighten( $orange, $disabled);
            border:lighten( $orange, $disabled);
        }
    }
    &.guoguo-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;
        &:hover, &:focus {
            color: lighten($blue, $focus);
        }
        &:active {
            color: darken($blue, $active)
        }
        &[disabled] {
            color: $grey;
        }
    }
    &.guoguo-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover, &:focus {
            background-color: darken(#fff, 5%);
        }
        &:active {
            background-color: darken(#fff, 10%)
        }
        &[disabled] {
            color: $grey;
            &:hover{
                background-color: #fff;
            }
        }
    }
    &.guoguo-size-large {
        font-size: 16px;
        height: 40px;
        padding: 0 15px;
        &.guoguo-circle{
        width: 40px;
        }
    }
    &.guoguo-size-small {
        font-size: 12px;
        height: 20px;
        padding: 2px 6px;
        &.guoguo-circle{
            width: 20px;
        }
    }
    &.guoguo-loading{
        cursor:default;
    }
   
    >.guoguo-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: #fff;
        border-left: transparent;
        border-width: 2px;
        border-style: solid;
        animation: guoguo-spin 1s infinite linear; 
    }

}
@keyframes guoguo-spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
</style>