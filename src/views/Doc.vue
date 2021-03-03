<template>
    <div class="guoguo-layout">
        <Topnav class="guoguo-nav"/>
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
.guoguo-layout{
    height: 100vh;
    display: flex;
    flex-direction: column;
    >.guoguo-content{
        display: flex;
        flex-grow: 1;
        >.guoguo-asideMenu {
            border: 1px solid #aaa;
            background-color: lightblue;
            padding: 24px 16px;
            > h2 {
                font-size: 20px;
                padding: 8px 0;
            }
            > ul {
                margin-top: 8px;
                >li {
                padding: 8px 48px 8px 24px;
                text-align: left;
                }
            }
        }
        >.guoguo-doc-content {
            background: #eee;
            flex-grow: 1;
            overflow: auto;
        }
    }
}

</style>