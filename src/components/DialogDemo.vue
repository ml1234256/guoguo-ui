<template>
        <h2>Dialog 组件</h2>
        <h1>示例1</h1>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
            <template v-slot:content>
                <div>猪猪子是高级忍者</div>
            </template>
            <template v-slot:title>
                <strong>Title</strong>
            </template>
        </Dialog>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

export default defineComponent({
    components: {Dialog, Button},
    setup () {
        const x = ref(false);
        const toggle = ()=>{
           x.value = !x.value;
           console.log(x);
           console.log(x.value);
        }
        const f1 = () => {
            return false
        }
        const f2 = () => {}
        return {x, toggle, f1, f2}
    }
})
</script>

<style scoped>

</style>