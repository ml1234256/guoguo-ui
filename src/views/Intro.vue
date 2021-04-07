<template>
    <article class="markdown-body" v-html="md">
        
    </article>
        <Pages :next-link="`/install`">
      <template v-slot:next>
         安装
      </template>
    </Pages>
</template>
<script>
import md from '../markdown/intro.md';
import Pages from '../components/Pages.vue';
export default {
  components:{Pages},
  data() {
 
    return {md}
  }
}
</script>