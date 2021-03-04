<demo>用法示例</demo>
<template>  
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
import { ref } from 'vue';
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';

export default{
    components: {Dialog, Button},
    setup () {
         const x = ref(false);
        const toggle = ()=>{
           x.value = !x.value;
        }
        const f1 = () => {
            return true;
        }
        const f2 = () => {}
        return {x, toggle, f1, f2}
    }
}
</script>