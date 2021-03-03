<template>
    <div class="guoguo-topnav-banner">
        <Topnav />
        <div class="guoguo-banner">
            <h1>锅锅UI</h1>
            <h2>一个好用的 Vue UI 组件</h2> 
            <p class="guoguo-actions">
                <a class="guoguo-github" href="https://github.com/ml1234256/guoguo-ui">GiHhub</a>
                <router-link to="/doc">开始</router-link>
            </p> 
        </div>
    </div>
   <div class="guoguo-features">
       <ul>
           <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guoguo-vue"></use>
                </svg>
                <div>          
                    <h3>基于Vue3</h3>
                    <p>使用Vue3写的组件</p>
                </div>
           </li>
                <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guoguo-ts"></use>
                </svg>
                <div>
                    <h3>基于TypeScript</h3>
                    <p>使用TypeScript，代码严谨</p>
                </div>
           </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guoguo-light"></use>
                </svg>
                <div>
                    <h3>简单易用</h3>
                    <p>用起来很方便</p>
                </div>
           </li>
       </ul>
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
$border-radius: 4px;

.guoguo-topnav-banner{
    background: pink;
    .guoguo-banner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >h1 {
            font-size: 64px;
        }
        >h2{
            margin: 12px 0;;
        }
        >.guoguo-actions {
            padding: 8px 0;
            a {
                margin: 0 8px;
                background: #fff;
                display: inline-block;
                border-radius: $border-radius;
                padding: 8px 24px;
                &:hover {
                    text-decoration: none;
                }
            }

        }
    }
}
.guoguo-features {
    width: 400px;
    margin: 64px auto;

    @media (min-width: 800px) {
        width:800px;
    }
    @media (min-width: 1200px) {
        width: 1200px;
    }
    >ul{
        display: flex;
        justify-content: center;
        >li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 400px;
            margin: 16px 0;
            >svg{
                width: 64px;
                height: 64px;
            }
            h3 {font-size: 28px; padding: 8px;}
            p {padding: 8px;}
        }
    }
}
</style>