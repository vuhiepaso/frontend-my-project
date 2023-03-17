import { createApp } from "vue";
import App from "./App.vue";

//library
import ElementPlus from "element-plus";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";

//library config
import router from "./router";
import axios from "./plugins/axios";

// css
import "./style.css";
import "element-plus/dist/index.css";

createApp(App)
  .use(createPinia())
  .use(ElementPlus)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
