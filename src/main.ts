import { createApp } from "vue";
import App from "./App.vue";
//library
import ElementPlus from "element-plus";
import router from "./router";
// css
import "./style.css";
import "element-plus/dist/index.css";

const app = createApp(App);
app.mount("#app");
app.use(ElementPlus);
app.use(router);
