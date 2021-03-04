<template>
    <h2>Button 示例</h2>
    <h3>类型</h3>
    <p>设置 theme 为 button,link,text，默认 button</p>
    <Demo :component="Button1Demo" />
   
    <h3>尺寸</h3>
    <p>设置 size 为 big, small, 不设置为中</p>
    <Demo :component="Button2Demo" />
   
    <h3>普通按钮、主要按钮、危险按钮</h3>
    <p>设置 level 为 main, danger, 默认为普通按钮</p>
    <Demo :component="Button3Demo" />

    <h3>禁用按钮</h3>
    <p>设置 disable</p>
    <Demo :component="Button4Demo" />

    <h3>加载选项</h3>
    <p>设置 loading</p>
    <Demo :component="Button5Demo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from "../lib/Button.vue";
import Demo from './Demo.vue';
import Button1Demo from './ButtonDemo/Button1.demo.vue';
import Button2Demo from './ButtonDemo/Button2.demo.vue';
import Button3Demo from './ButtonDemo/Button3.demo.vue';
import Button4Demo from './ButtonDemo/Button4.demo.vue';
import Button5Demo from './ButtonDemo/Button5.demo.vue';

export default defineComponent({
    components: {Demo},
    setup () {
        const onClick = () => {
            window.alert('Hi');
        }
        return {
            onClick, 
            Button1Demo, 
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo
        };
    }
})
</script>

<style scoped>
div {
    margin:16px auto; padding: 24px; background: #fff;
border-radius: 8px;
}
</style>