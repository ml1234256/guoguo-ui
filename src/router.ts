import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import IntroDemo from './components/IntroDemo.vue';
import InstallDemo from './components/InstallDemo.vue';
import GetStartDemo from './components/GetStartDemo.vue';

  
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc", component: Doc, children: [
                { path: "", component: DocDemo },
                { path: "intro", component: IntroDemo },
                { path: "install", component: InstallDemo },
                { path: "get-start", component: GetStartDemo },
                { path: "button", component: ButtonDemo },
                { path: "switch", component: SwitchDemo },
                { path: "dialog", component: DialogDemo },
                { path: "Tabs", component: TabsDemo}
        ] }
    ]
});

router.afterEach(() => {
    console.log('路由切换')
})