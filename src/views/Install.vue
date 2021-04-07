<template>
    <article class="markdown-body" v-html="md">
        
    </article>
        <Pages :pre-link="`/intro`" :next-link="`/get-started`">
      <template v-slot:pre>
          介绍
      </template>
      <template v-slot:next>
         快速上手
      </template>
    </Pages>
</template>
<script>
import md from '../markdown/install.md';
import Pages from '../components/Pages.vue';
export default {
  components:{Pages},
  data() {
      return {md}
  }
}
</script>