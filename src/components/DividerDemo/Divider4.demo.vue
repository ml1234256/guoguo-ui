<demo>设置分割线颜色</demo>
<template>  
咏鹅
<Divider vertical color='red'></Divider>
骆宾王
<Divider color='red'></Divider>
鹅鹅鹅，曲项向天歌
<Divider color='red'></Divider>
白毛浮绿水
<Divider color='blue' dashed></Divider>
红掌拨清波
<Divider color='blue' dashed></Divider>
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