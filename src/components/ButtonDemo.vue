<template>
<DocLayout api>
    <template v-slot:title>Button 按钮</template>
    <template v-slot:left>
        <section>
            <Demo :component="Button1Demo">
                设置 theme 为 button,link,text，默认 button
            </Demo>
        </section>
            
        <section>
            <Demo :component="Button2Demo">
            设置 size 为 big, small, 默认为normal
            </Demo>
        </section>
        <section>
            <Demo :component="Button3Demo">
            设置 level 为 main, danger, 默认为普通按钮
            </Demo>
        </section>
    </template>
    <template v-slot:right>
        <section>
            <Demo :component="Button4Demo">
            设置 disable
            </Demo>
        </section>
        <section>
            <Demo :component="Button5Demo">
                loading
            </Demo>
        </section>
    </template>
    <template v-slot:api>
        <table>
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>theme</td>
            <td>设置按钮类型</td>
            <td>string</td>
            <td>button/link/text</td>
            <td>button</td>
        </tr>
        <tr>
            <td>size</td>
            <td>设置按钮尺寸</td>
            <td>string</td>
            <td>big/normal/small</td>
            <td>normal</td>
        </tr>
        <tr>
            <td>level</td>
            <td>设置按钮等级</td>
            <td>string</td>
            <td>main/danger</td>
            <td>main</td>
        </tr>
        <tr>
            <td>disable</td>
            <td>设置禁用按钮</td>
            <td>boolean</td>
            <td>true/false</td>
            <td>false</td>
        </tr>
        <tr>
            <td>loading</td>
            <td>设置加载状态</td>
            <td>boolean</td>
            <td>true/false</td>
            <td>false</td>
        </tr>
    </tbody>
</table>
    </template>
</DocLayout>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './Demo.vue';
import Button1Demo from './ButtonDemo/Button1.demo.vue';
import Button2Demo from './ButtonDemo/Button2.demo.vue';
import Button3Demo from './ButtonDemo/Button3.demo.vue';
import Button4Demo from './ButtonDemo/Button4.demo.vue';
import Button5Demo from './ButtonDemo/Button5.demo.vue';
import DocLayout from './DocLayout.vue';

export default defineComponent({
    components: {Demo, DocLayout},
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

<style lang="scss" scoped>

section{
        margin-bottom:24px;
    }
table{
    width:100%;
    font-size: 14px;
    border-collapse: collapse;
    line-height: 1.5em;
    text-align: left;
    vertical-align: center;
    th{
        border-bottom: 1px solid #ebebeb;
        font-weight: 400;
        padding:15px;
        max-width: 250px;
        white-space: nowrap;
    }
    td{
        border-bottom: 1px solid #ebebeb;
        padding:15px;
        max-width:250px;
    }
}

</style>