<template>
<DocLayout>
    <template v-slot:title>Tab 标签页</template>
    <template v-slot:left>
        <section>
            <Demo :component="Tabs1Demo" />
        </section>
    </template>
</DocLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';
import Tabs1Demo from './TabsDemo/Tabs1.demo.vue';

export default defineComponent({
    components: {Demo, DocLayout},
    setup () {

        return {Tabs1Demo}
    }
})
</script>

<style lang="scss" scoped>

</style>