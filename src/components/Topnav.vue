<template>
    <div class="guoguo-topnav">
        <div class="guoguo-logo">logo</div>

        <ul class="guoguo-menu">
            <li><router-link to="/doc">Document</router-link></li>
            <li><router-link to="/">Home</router-link></li>
        </ul>
        <span v-if="toggleVisible" class="toggle-aside" @click="toggleMenu">
             <svg class="icon">
                    <use xlink:href="#icon-guoguo-menu"></use>
            </svg>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
    props: {
      toggleVisible: {
          type: Boolean,
          default: false,
      }  
    },
    setup () {
        const menuVisible = inject<Ref<Boolean>>("menuVisible"); // get
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value;
        }

        return {toggleMenu}
    }
})
</script>

<style lang="scss" scoped>
.guoguo-topnav {
    background: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    position: relative;
    z-index: 10;
    >.guoguo-logo {
        max-width: 6em;
    }
    >.guoguo-menu{
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        >li {
            padding: 0 1em;
        }
    }
    >.toggle-aside{
        font-size: 24px;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }
    @media (max-width: 500px) {
        >.guoguo-menu {
            display: none;
        }
        >.guoguo-logo {
            margin: 0 auto;
        }
        >.toggle-aside {
            display: inline-block;
        }
    }
}
</style>