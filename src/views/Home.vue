<template>
    <Topnav />
    <div class="guoguo-banner">
        <h1>锅锅UI</h1>
        <h2>一个好用的 Vue UI 组件</h2> 
        <p class="guoguo-actions">
            <a class="guoguo-github" href="https://github.com/ml1234256/guoguo-ui">GiHhub</a>
            <router-link to="/doc">开始</router-link>
            </p> 
    </div>

</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
    components: {Topnav}
}

</script>

Topnav
<style lang="scss" scoped>
.guoguo-banner {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightblue;
    >.guoguo-actions {
        padding: 8px 0;
        >.guoguo-github {
            margin: 0 8px;
            background: #fff;
            $h: 28px;
            display: inline-block;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 8px;
        }

    }

}
</style>