<template>
        <div class="demo">
            <h3>{{component.__sourceCodeTitle}}</h3>
            <p class="intro">
                <slot />
            </p>
            <div class="demo-component">
                <component :is="component" />
            </div>
            <div class="demo-actions">
                <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
                <Button @click="showCode" v-else>显示代码</Button>
               
            </div>
            <div v-if="codeVisible" class="demo-code">
                <pre class="language-html" v-html="code" />
            </div>
        </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
const Prism = (window as any).Prism;

export default{
    components: {Button},
    props: {
        component: Object
    },
    setup (props) {
        const code = computed(() => {
            console.log(props.component.__sourceCode);
            console.log(typeof props.component.__sourceCode);
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        const codeVisible = ref(false);
        const showCode = () => {
            codeVisible.value = true;
        }
        const hideCode = () => {
            codeVisible.value = false;
        }

        return {codeVisible, showCode, hideCode, Prism, code}
    }
}
</script>

<style lang="scss" scoped>
$border-color: #ebebeb;
$border-radius: 4px;
$padding: 20px;

.demo{
    box-shadow: 0 4px 6px #ebebeb;
    border-radius: $border-radius;
    text-align: left;
    background: #fff;
    >h3{
        font-size: 20px;
        padding: 8px $padding;
        border-bottom: 1px solid $border-color;
        margin: 0;
    }
    >.intro {
        padding: 1em $padding;
        font-size: 14px;
    }
    &-component{
        padding-bottom: $padding;
        padding-left: $padding;
        padding-right: $padding;
    }
    &-actions {
        padding: 8px $padding;
        border-top: 1px dashed $border-color;
    }
    &-code {
        padding: 8px $padding;
        border-top: 1px dashed $border-color;
        > pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>