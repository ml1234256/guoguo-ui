<template>
    <article class="markdown-body" v-html="md">
        
    </article>
    <Pages :pre-link="`/install`" :next-link="`/button`">
      <template v-slot:pre>
          安装
      </template>
      <template v-slot:next>
         Button 按钮
      </template>
    </Pages>
</template>
<script>
import md from '../markdown/get-started.md';
import Pages from '../components/Pages.vue';

export default {
  components:{Pages},
  data() {
      return {md}
  }
}
</script>