<template>
    <h2>Button 示例</h2>
    <h3>类型</h3>
    <p>设置 theme 为 button,link,text，默认 button</p>
    <div>
        <Button @click="onClick">普通按钮</Button>
        <Button theme="button">普通按钮</Button>
        <Button theme="link">文本按钮</Button>
        <Button theme="text">连接按钮</Button>
    </div>
   
    <h3>尺寸</h3>
    <p>设置 size 为 big, small, 不设置为中</p>
    <div>
         <Button size="big">尺寸大</Button>
        <Button>尺寸普通</Button>
        <Button size="small">尺寸小</Button>
    </div>
   
    <h3>普通按钮、主要按钮、危险按钮</h3>
    <p>设置 level 为 main, danger, 默认为普通按钮</p>
    <div>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
    </div>
    <div>
        <Button theme="link" level="main">主要连接按钮</Button>
        <Button theme="link">普通连接按钮</Button>
        <Button  theme="link" level="danger">危险连接按钮</Button>
    </div>
    <div>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
    </div>

    <h3>禁用按钮</h3>
    <p>设置 disable</p>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用连接按钮</Button>
        <Button theme="text" disabled>禁用文字按钮</Button>
    </div>

    <h3>加载选项</h3>
    <p>设置 loading</p>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from "../lib/Button.vue";

export default defineComponent({
    components: {Button},
    setup () {
        const onClick = () => {
            window.alert('Hi');
        }
        return {onClick};
    }
})
</script>

<style scoped>
div {
    margin:16px auto; padding: 24px; background: #fff;
    width: 50%; border-radius: 8px;
}
Button {
    margin: 0 4px;
}
</style>