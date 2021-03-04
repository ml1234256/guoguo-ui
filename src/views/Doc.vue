<template>
    <div class="guoguo-layout">
        <Topnav toggleVisible class="guoguo-nav"/>
        <div class="guoguo-content">
            <aside v-if="menuVisible" class="guoguo-asideMenu">
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
.guoguo-layout{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eee;
    >.guoguo-nav {
        flex-shrink: 0;
    }
    >.guoguo-content{
        display: flex;
        flex-grow: 1;
        >.guoguo-asideMenu {
            border: 1px solid $border-color;
            background-color: lightblue;
            flex-shrink:0;
            text-align: left;
            padding-top:70px;
            height:100%;
            position:fixed;
            top:0;
            left:0;
            z-index:10;
            > h2 {
                font-size: 20px;
                padding: 8px 16px;
            }
            > ul {
                >li {
                    margin-bottom:4px;
                    >a{
                        display: block;
                        padding: 4px 16px;
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
            margin-left:156px;
        }
    }
}

</style>