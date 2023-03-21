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

//layouts
import defaultLayout from "./layouts/default.vue";
import loggedInLayout from "./layouts/loggedIn.vue";

createApp(App)
  .use(createPinia())
  .use(auth)
  .use(router)
  .use(ElementPlus)
  .use(VueAxios, axios)
  .component("default", defaultLayout)
  .component("loggedIn", loggedInLayout)
  .mount("#app");
