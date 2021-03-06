import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import IntroDemo from './views/Intro.vue';
import InstallDemo from './views/Install.vue';
import GetStartDemo from './views/GetStarted.vue';
import ProgressDemo from './components/ProgressDemo.vue';
import TableDemo from './components/TableDemo.vue';
import CardDemo from './components/CardDemo.vue';

  
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc", component: Doc, children: [
                {path: "", redirect: "/doc/intro"},
                { path: "intro", component: IntroDemo },
                { path: "install", component: InstallDemo },
                { path: "get-start", component: GetStartDemo },
                { path: "button", component: ButtonDemo },
                { path: "switch", component: SwitchDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "progress", component: ProgressDemo},
                { path: "table", component: TableDemo},
                { path: "card", component: CardDemo}
        ] }
    ]
});

router.afterEach(() => {
    console.log('路由切换')
})