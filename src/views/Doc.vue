<template>
    <div class="guoguo-layout">
        <Topnav toggleVisible class="guoguo-top-nav"/>
        <div class="guoguo-content">
            <aside :class="{menuVisible}">
                <h2>开发指南</h2>
                <ul @click="hideAside">
                    <li><router-link to="/intro">介绍</router-link></li>
                    <li><router-link to="/install">安装</router-link></li>
                    <li><router-link to="/get-started">快速上手</router-link></li>
                </ul>
                <h2>组件列表</h2>
                <ul @click="hideAside">
                    <li>
                        <router-link to="/button">Button 按钮</router-link>
                    </li>
                    <li>
                        <router-link to="/switch">Switch 开关</router-link>
                    </li>
                    <li>
                        <router-link to="/dialog">Dialog 对话框</router-link>
                    </li>
                    <li>
                        <router-link to="/tabs">Tabs 标签页</router-link>
                    </li>
                    <li>
                        <router-link to="/progress">Progress 进度条</router-link>
                    </li>
                    <li>
                        <router-link to="/table">Table 表格</router-link>
                    </li>
                    <li>
                        <router-link to="/card">Card 卡片</router-link>
                    </li>
                    <li>
                        <router-link to="/divider">Divider 分割线</router-link>
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
            const hideAside = () => {
                menuVisible.value = false;
            }
            return {menuVisible, hideAside};
        }
    }
</script>

<style lang="scss" scoped>
$border-color:#d9d9d9;
$content-background: #f5f5f5;
$topnav-background:#0B5E67;

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
        box-shadow: 0px 4px 6px fade-out($color: #000000, $amount: 0.8);
    }
    >.guoguo-content{
        display: flex;
        flex-grow: 1;
        background-color: $content-background;
        >aside {
            width:220px;
            border-right: 1px solid #ebebeb;
            box-shadow: 0 4px 6px #ebebeb;
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
            transition: all 250ms;
            @media(max-width:550px){
                transform: translateX(-230px);
                &.menuVisible{
                    transform: translateX(0);
                }
            }
            &::-webkit-scrollbar {
            display: none;
        }
            > h2 {
                font-size: 20px;
                padding: 8px 40px;
            }
            > ul {
                >li {
                    >a{
                        display: block;
                        padding: 8px 40px;
                        font-size: 16px;
                        &:hover{
                            background: darken($color: $content-background, $amount: 5%);
                            border-bottom: none;
                        }
                        &:active {
                            background:darken($color: $content-background, $amount: 10%);
                        }
                    }
                    .router-link-active {
                        background:#fff;
                        &:hover {
                            background:#fff;
                        }
                    }
                }
            }
        }
        >.guoguo-doc-content {
            flex-grow: 1;
            overflow: auto;
            margin-left:220px;
            padding-top:90px;
            background: inherit;
            @media (max-width:550px) {
                margin-left: auto;
            }
        }
    }
}

</style>