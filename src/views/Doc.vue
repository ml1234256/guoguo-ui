<template>
    <div class="guoguo-layout">
        <Topnav toggleVisible class="guoguo-top-nav"/>
        <div class="guoguo-content">
            <aside v-if="menuVisible" class="guoguo-side-nav">
                <h2>开发指南</h2>
                <ul>
                    <li><router-link to="/doc/intro">介绍</router-link></li>
                    <li><router-link to="/doc/install">安装</router-link></li>
                    <li><router-link to="/doc/get-start">快速上手</router-link></li>
                </ul>
                <h2>组件列表</h2>
                <ul>
                    <li>
                        <router-link to="/doc/button">Button</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/switch">Switch</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs</router-link>
                    </li>
                                        <li>
                        <router-link to="/doc/progress">Progress</router-link>
                    </li>
                </ul>
            </aside>
            
            <main class="guoguo-doc-content">
                <router-view />
            </main>
        </div>
        
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from "../components/Topnav.vue";

    export default{
        components: {Topnav},
        setup() {
            const menuVisible = inject<Ref<Boolean>>("menuVisible"); // get
            return {menuVisible};
        }
    }
</script>

<style lang="scss" scoped>
$border-color:#d9d9d9;
$content-background: rgb(245,245,245);
$topnav-background:rgb(11,94,103);

.guoguo-layout{
    height: 100vh;
    display: flex;
    flex-direction: column;
    >.guoguo-top-nav {
        flex-shrink: 0;
        position:fixed;
        top: 0;
        left: 0;
        background:$topnav-background;
        color:#fff;
        box-shadow: 0px 2px 4px fade-out($color: #000000, $amount: 0.9);
    }
    >.guoguo-content{
        display: flex;
        flex-grow: 1;
         background-color: $content-background;
        >.guoguo-side-nav {
            width:220px;
            border-right: 1px solid $border-color;
            background-color: $content-background;
            flex-shrink:0;
            text-align: left;
            padding-top:70px;
            height:100%;
            position:fixed;
            top:0;
            left:0;
            overflow: auto;
            z-index:10;
            &::-webkit-scrollbar {
            display: none;
        }
            > h2 {
                font-size: 20px;
                padding: 8px 40px;
            }
            > ul {
                >li {
                    margin-bottom:4px;
                    >a{
                        display: block;
                        padding: 4px 40px;
                        text-decoration: none;
    
                    }
                    .router-link-active {
                        background:#fff;
                    }
                }
            }
        }
        >.guoguo-doc-content {
            flex-grow: 1;
            overflow: auto;
            margin-left:220px;
            padding-top:80px;
            background: inherit;
            display: flex;
            flex-wrap: wrap;
            @media (max-width:500px) {
                margin-left: auto;
            }
        }
    }
}

</style>