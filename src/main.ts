import { createApp } from "vue";
import App from "./App.vue";
//library
import ElementPlus from "element-plus";
// css
import "./style.css";
import "element-plus/dist/index.css";

const app = createApp(App);
app.mount("#app");
app.use(ElementPlus);
