<template>
    <div class="pages">
        <router-link  v-if="preLink" :to="preLink" class="pre">
            <svg class="icon">
                <use xlink:href="#icon-left-arrow"></use>
            </svg>
            <slot name="pre"></slot>
        </router-link>
        <router-link  v-if="nextLink" :to="nextLink" class="next">
            <slot name="next"></slot>
            <svg class="icon">
                <use xlink:href="#icon-right-arrow"></use>
            </svg>
        </router-link>
    </div>
</template>
<script>
export default {
   props: {
        preLink: {
           type: String,
           default: '',
           required: true
       },
        nextLink: {
           type: String,
           default: '',
           required: true
       }
   }
}
</script>
<style lang="scss" scoped>
.pages {
    margin: 28px 24px;
    color: rgb(3, 102, 214);
    font-size: 14px;
    &::after {
        content: "";
        display: block;
        clear: both;
    }
    >.pre{
        float: left;
    }
    >.next{
        float: right;
    }
}
</style>