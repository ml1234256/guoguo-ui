import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/ButtonDemo/ButtonDemo.vue";
import SwitchDemo from "./components/SwitchDemo/SwitchDemo.vue";
import DialogDemo from "./components/DialogDemo/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo/TabsDemo.vue";
import ProgressDemo from './components/ProgressDemo/ProgressDemo.vue';
import TableDemo from './components/TableDemo/TableDemo.vue';
import CardDemo from './components/CardDemo/CardDemo.vue';
import DividerDemo from './components/DividerDemo/DividerDemo.vue';
import IntroDemo from './views/Intro.vue';
import InstallDemo from './views/Install.vue';
import GetStartedDemo from './views/GetStarted.vue';
import Markdown from './components/Markdown.vue';
import { h } from 'vue';
  
const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key:filename})
export const router = createRouter({
    history: history,
    routes: [
        {
            path: "/",
            component: Doc,
            children: [
                {path: "", redirect: "intro"},
                { path: "intro", component: IntroDemo },
                { path: "install", component: InstallDemo },
                { path: "get-started", component: GetStartedDemo },
                { path: "button", component: ButtonDemo },
                { path: "switch", component: SwitchDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "progress", component: ProgressDemo},
                { path: "table", component: TableDemo},
                { path: "card", component: CardDemo },
                { path: "divider", component: DividerDemo}
        ]  },
    ]
});

router.afterEach(() => {
    console.log('路由切换')
})