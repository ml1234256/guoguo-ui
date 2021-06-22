<template>
        <DocLayout :api-list="tableData">
            <template v-slot:title>Progress 进度条</template>
            <template v-slot:left>
                <section>
                    <Demo :component="Progress1Demo">
                    通过 color 属性设置进度条颜色。
                    </Demo>
                </section>
                <section>
                    <Demo :component="Progress2Demo">
                        通过 round 属性设置圆角的进度条。
                    </Demo>
                </section>
                <section>
                    <Demo :component="Progress3Demo">
                        通过 background-grey 属性设置进度条的背景色置为灰色。
                    </Demo>
                </section>
                        
            </template>
            <template v-slot:right>
                <section>
                    <Demo :component="Progress4Demo">
                        通过 stroke-width 属性设置进度条的宽度，单位为 px。
                    </Demo>
                </section>
                <section>
                    <Demo :component="Progress5Demo">
                        设置进度条内的自定义内容。
                    </Demo>
                </section>
                  <section>
                    <Demo :component="Progress6Demo">
                        
                    </Demo>
                </section>
            </template>
        </DocLayout>
    <Pages :pre-link="`/tabs`" :next-link="`/table`">
        <template v-slot:pre>
            Tabs 标签页
        </template>
        <template v-slot:next>
            Table 表格
        </template>
    </Pages>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import DocLayout from '../DocLayout.vue';
import Pages from '../Pages.vue';
import Progress1Demo from './Progress1.demo.vue';
import Progress2Demo from './Progress2.demo.vue';
import Progress3Demo from './Progress3.demo.vue';
import Progress4Demo from './Progress4.demo.vue';
import Progress5Demo from './Progress5.demo.vue';
import Progress6Demo from './Progress6.demo.vue';
import { computed, ref } from 'vue';
import Button from '../../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
const Prism = (window as any).Prism;

export default {
    components: {Demo, DocLayout,Pages,Button},
    setup () {
        const tableData = [{
            property: 'percentage',
            description: '设置百分比',
            type: 'number',
            params: '——',
            default: '50',
        },{
            property: 'color',
            description: '设置颜色',
            type: 'string',
            params: '——',
            default: '——',
        },{
           property: 'stroke-width',
            description: '设置宽度',
            type: 'number',
            params: '——',
            default: '6',
        },{
           property: 'round',
            description: '设置圆角',
            type: 'boolean',
            params: '——',
            default: 'false',
        },{
           property: 'background-grey',
            description: '将背景色置灰',
            type: 'boolean',
            params: '——',
            default: 'false',
        }];
        const codeVisible = ref(false);
        return {
            codeVisible,
            Prism,
            tableData,
            Progress1Demo,
            Progress2Demo,
            Progress3Demo,
            Progress4Demo,
            Progress5Demo,
            Progress6Demo
            }
    }
}
</script>

<style lang="scss" scoped>
section{
        margin-bottom:20px;
    }
</style>