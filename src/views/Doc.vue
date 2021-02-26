<template>
    <div class="guoguo-layout">
        <Topnav class="guoguo-nav"/>
        <div class="guoguo-content">
            <aside class="guoguo-asidemenu">
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
        >.guoguo-asidemenu {
            border: 1px solid;
        }
    }
}
main {
    background: #eee;
    flex-grow: 1;
}
</style>