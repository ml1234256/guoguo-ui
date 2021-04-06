<template>
    <article class="markdown-body" v-html="md">
        
    </article>
</template>
<script>
import md from '../markdown/intro.md';
import Markdown from '../components/Markdown.vue';
export default {
  components:{Markdown},
  data() {
 
    return {md}
  }
}
</script>