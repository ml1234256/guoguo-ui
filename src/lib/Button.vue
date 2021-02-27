<template>
    <button class="guoguo-button" :class="classes">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        theme: {
            type:String,
            default:"button",
        }
    },
    setup (props) {
        const {theme} = props;
        const classes = computed(()=>{
            return {
                [`guoguo-theme-${theme}`]: theme,
            };
        });
        return {classes};
    },
});
</script>

<style scoped>

</style>