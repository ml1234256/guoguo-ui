<template>
<DocLayout :api-list="tableData">
    <template v-slot:title>Dialog 对话框</template>
    <template v-slot:left>
        <section>
                    <Demo :component="Dialog1Demo">
                    最常用
                    </Demo>
        </section>
                <section>
                    <Demo :component="Dialog2Demo">
                    通过 closeOnClickOverlay 属性设置是否点击遮罩层关闭
                    </Demo>
        </section>
    </template>
    <template v-slot:right>
        <section>
                    <Demo :component="Dialog3Demo">
                       通过 footer 设置是否显示底部按钮
                    </Demo>
        </section>
    </template>
</DocLayout> 
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';
import Dialog1Demo from './DialogDemo/Dialog1.demo.vue';
import Dialog2Demo from './DialogDemo/Dialog2.demo.vue';
import Dialog3Demo from './DialogDemo/Dialog3.demo.vue';

export default defineComponent({
    components: {Demo, DocLayout},
    setup () {
            const tableData = [{
           property: 'footer',
            description: '是否有底部按钮',
            type: 'boolean',
            params: '——',
            default: 'true',
        },{
            property: 'closeOnClickOverlay',
            description: '设置是否点击遮罩层关闭',
            type: 'boolean',
            params: '——',
            default: 'true',
        }];
        return {Dialog1Demo, Dialog2Demo, Dialog3Demo, tableData}
    }
})
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 24px;
}
</style>