<template>
 <DocLayout>
    <template v-slot:title>Table 表格</template>
    <template v-slot:left>
        <section>
                 <Demo :component="Table1Demo" />
        </section>
    </template>
</DocLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';
import Table1Demo from './TableDemo/Table1.demo.vue'

export default defineComponent({
    components: {Demo, DocLayout},
    setup() {
        return {Table1Demo}
    }
})
</script>

<style scoped>

</style>