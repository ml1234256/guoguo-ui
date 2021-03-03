<template>
    <div class="guoguo-topnav-banner">
        <Topnav />
        <div class="guoguo-banner">
            <h1>锅锅UI</h1>
            <h2>一个好用的 Vue UI 组件</h2> 
            <p class="guoguo-actions">
                <a class="guoguo-github" href="https://github.com/ml1234256/guoguo-ui">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p> 
        </div>
    </div>
   <div class="guoguo-features">
       <ul>
           <li>
                <svg class="icon">
                    <use xlink:href="#icon-guoguo-vue"></use>
                </svg> 
                <div>
                    <h3>基于Vue3</h3>
                    <p>使用Vue3写的组件</p>
                </div>       

           </li>
                <li>
                <svg class="icon">
                    <use xlink:href="#icon-guoguo-ts"></use>
                </svg>
                <div>
                    <h3>基于TypeScript</h3>
                    <p>使用TypeScript，代码严谨</p>
                </div>
           </li>
            <li>
                <svg class="icon">
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
        padding: 80px 0;
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
    margin: 64px auto;
    padding:0 24px;
   // border:1px solid;
    >ul{
        display: flex;
        flex-wrap: wrap;
        >li {
           // border:1px solid;
            width:360px;
            margin: 16px 0;
            display: flex;
            justify-content: start;
            >svg{
                grid-area: icon;
                width: 64px;
                height: 64px;
                margin-right: 12px;
            }
            h3 {
                font-size: 28px; 
            }
            p {
                padding-top:2px;
            }
        }
    }
    @media (min-width:500px) {
        width:500px;
    }
    @media (min-width: 800px) {
        width:800px;
        >ul{
            >li{ 
                width:50%;
                justify-content: center;
            }
        }
    }
    @media (min-width: 1200px) {
        width: 1200px;
        >ul{
            >li{ 
                width:33.3333%;
                justify-content: center;
            }
        }
    }
}
</style>