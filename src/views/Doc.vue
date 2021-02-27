<template>
    <div class="guoguo-layout">
        <Topnav class="guoguo-nav"/>
        <div class="guoguo-content">
            <aside class="guoguo-asideMenu">
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
            
            <main>
                <router-view />
            </main>
        </div>
        
    </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";

    export default{
        components: {Topnav}
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
                border: 1px solid #eee;
                padding: 8px 16px;
            }
            > ul {
                margin-top: 8px;
                >li {
                padding: 8px 48px 8px 24px;
                text-align: left;
                border: 1px solid #eee;
                }
            }
            
        }
    }
}
main {
    background: #eee;
    flex-grow: 1;
}
</style>