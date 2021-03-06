<template>
<DocLayout>
    <template v-slot:title>Dialog 对话框</template>
    <template v-slot:left>
        <section>
                    <Demo :component="Dialog1Demo" />
        </section>
    </template>
</DocLayout>

</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';
import Dialog1Demo from './DialogDemo/Dialog1.demo.vue';

export default defineComponent({
    components: {Demo, DocLayout},
    setup () {
        return {Dialog1Demo}
    }
})
</script>

<style lang="scss" scoped>

</style>