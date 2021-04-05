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
import DividerDemo from './components/DividerDemo.vue';
import Markdown from './components/Markdown.vue';
import { h } from 'vue';
  
const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key:filename})
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Doc, children: [
                {path: "", redirect: "intro"},
                { path: "intro", component: md('intro') },
                { path: "install", component: md('install') },
                { path: "get-start", component: md('get-start') },
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