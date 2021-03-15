<demo>垂直分割线</demo>
<template>  
鹅鹅鹅，曲项向天歌
<Divider vertical></Divider>
白毛浮绿水
<Divider vertical></Divider>
红掌拨清波
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