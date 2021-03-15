<demo>分割线文案</demo>
<template>  
鹅鹅鹅，曲项向天歌
<Divider>咏鹅</Divider>
白毛浮绿水
<Divider orientation='center'>咏鹅</Divider>
红掌拨清波
<Divider orientation='right'>咏鹅</Divider>
</template>

<script lang="ts">
import { ref } from 'vue';
import Divider from '../../lib/Divider.vue';

export default{
    components: {Divider},
    setup () {
         const x = ref(false);
        const toggle = ()=>{
           x.value = !x.value;
        }
        return {x, toggle}
    }
}
</script>
