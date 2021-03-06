<template>
<DocLayout>
    <template v-slot:title>Switch 开关</template>
    <template v-slot:left>
        <section>
                 <Demo :component="Switch1Demo" />
        </section>
    </template>
        <template v-slot:right>
        <section>
                <Demo :component="Switch2Demo" />
        </section>
    </template>
</DocLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Switch1Demo from './SwitchDemo/Switch1.demo.vue';
import Switch2Demo from './SwitchDemo/Switch2.demo.vue';
import Demo from './Demo.vue';
import DocLayout from './DocLayout.vue';


export default defineComponent({
    components:{ Demo, DocLayout},
    setup () {
        return {Switch1Demo, Switch2Demo};
    }
})
</script>

<style lang="scss" scoped>

</style>