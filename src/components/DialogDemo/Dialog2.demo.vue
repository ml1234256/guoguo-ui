<demo>设置是否击遮罩层关闭</demo>
<template>  
        <Button @click="toggle">禁止点击遮罩层关闭</Button>
        <Dialog v-model:visible="x"  :closeOnClickOverlay="false">
          <template v-slot:title>
                <strong>登黄雀楼</strong>
            </template>
            <template v-slot:content>
                <p>白日依山尽，</p>                    
                <p>黄河入海流。</p> 
                <p>欲穷千里目，</p> 
                <p>更上一层楼。</p> 
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
        return {x, toggle}
    }
}
</script>