<demo>常规用法</demo>
<template>  
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="x">
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
import {Dialog} from '../../lib/index';
import {Button} from '../../lib/index';

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