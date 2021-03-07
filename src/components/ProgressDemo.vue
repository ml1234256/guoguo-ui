<template>
        <DocLayout :api-list="tableData">
            <template v-slot:title>Process 进度条</template>
            <template v-slot:left>
                <section>
                    <Demo :component="Progress1Demo" />
                </section>
                <section>
                    <Demo :component="Progress2Demo" />
                </section>
                <section>
                    <Demo :component="Progress3Demo" />
                </section>
                        
            </template>
            <template v-slot:right>
                <section>
                    <Demo :component="Progress4Demo" />
                </section>
                <section>
                    <Demo :component="Progress5Demo" />
                </section>
            </template>
        </DocLayout>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';
import Progress1Demo from './ProgressDemo/Progress1.demo.vue';
import Progress2Demo from './ProgressDemo/Progress2.demo.vue';
import Progress3Demo from './ProgressDemo/Progress3.demo.vue';
import Progress4Demo from './ProgressDemo/Progress4.demo.vue';
import Progress5Demo from './ProgressDemo/Progress5.demo.vue';

export default defineComponent({
    components: {Demo, DocLayout},
    setup () {
        let tableData = [{
            property: 'color',
            description: '设置进度条颜色',
            type: 'string',
            params: '——',
            default: '——',
        },{
           property: 'stroke-width',
            description: '设置进度条宽度',
            type: 'number',
            params: '——',
            default: '10',
        },{
           property: 'fillet',
            description: '设置圆角',
            type: 'boolean',
            params: '——',
            default: 'false',
        },{
           property: 'background-grey',
            description: '将进度条背景色置灰',
            type: 'boolean',
            params: '——',
            default: 'false',
        }]
        return {tableData,Progress1Demo,Progress2Demo,Progress3Demo,Progress4Demo,Progress5Demo}
    }
})
</script>

<style lang="scss" scoped>
section{
        margin-bottom:20px;
    }
</style>