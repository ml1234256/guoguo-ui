<template>
    <div class="guoguo-topnav">
        <div class="guoguo-logo">
            <router-link to="/">
             <svg class="icon">
                    <use xlink:href="#icon-guo"></use>
            </svg>
            PotUI
            </router-link>
        </div>

        <ul class="guoguo-menu">
            <li><a href="https://github.com/ml1234256/guoguo-ui" target="_blank">GitHub</a></li>
        </ul>
        <span v-if="toggleVisible" class="toggle-aside" @click="toggleMenu">
                <svg class="icon">
                    <use xlink:href="#icon-guoguo-menu"></use>
                </svg>
        </span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
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
}
</script>

<style lang="scss" scoped>
.guoguo-topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    position: relative;
    z-index: 20;
    >.guoguo-logo {
        max-width: 6em;
        font-size:24px;
        color:#fff;
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
    @media (max-width: 550px) {
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