<template>
        <div class="demo">
            <h2>标题</h2>
            <div class="demo-component">
                <component :is="component" />
            </div>
            <div class="demo-actions">
                <Button @click="toggleCode">显示代码</Button>
            </div>
            <div v-if="codeVisible" class="demo-code">
                <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from '../lib/Button.vue';

export default defineComponent({
    components: {Button},
    props: {
        component: Object
    },
    setup (props) {
        const codeVisible = ref(false);
        const toggleCode = () => {
            codeVisible.value = !codeVisible.value;
        }

        return {codeVisible, toggleCode}
    }
})
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
$border-radius: 4px;

.demo{
    border: 1px solid $border-color;
    border-radius: $border-radius;
    text-align: left;
    margin: 16px 32px;
    background: #fff;
    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }
    &-component{
        padding: 16px;
    }
    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }
    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
        > pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>