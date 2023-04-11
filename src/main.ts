import { createApp } from "vue";
import App from "./App.vue";

//library
import ElementPlus from "element-plus";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";

//library config
import router from "./router";
import axios from "./plugins/axios";
import auth from "./plugins/auth";

// css
import "./style.css";
import "element-plus/dist/index.css";

//icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

//layouts
import defaultLayout from "./layouts/default.vue";
import loggedInLayout from "./layouts/loggedIn.vue";

//directive
import * as directives from "./directive";

let app = createApp(App);

app.use(createPinia());
app.use(auth);
app.use(router);
app.use(ElementPlus);
app.use(VueAxios, axios);
app.component("default", defaultLayout);
app.component("loggedIn", loggedInLayout);

for (const [key, directive] of Object.entries(directives)) {
  app.directive(key, directive);
}

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
