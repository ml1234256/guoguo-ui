<demo>用法示例</demo>
<template>  
<Card />
</template>
<script lang="ts">
import { ref } from 'vue';
import Card from '../../lib/Card.vue';

export default{
    components: {Card},
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