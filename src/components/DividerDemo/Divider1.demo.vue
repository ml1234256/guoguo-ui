<demo>实线/虚线分割线</demo>
<template>  
鹅鹅鹅，曲项向天歌
<Divider></Divider>
白毛浮绿水
<Divider dashed></Divider>
红掌拨清波
<Divider dashed></Divider>
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