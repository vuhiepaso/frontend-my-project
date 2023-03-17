import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ProductDetail from "./views/ProductDetail.vue";
import HelloWorld from "./components/HelloWorld.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/product/:id",
          component: ProductDetail,
        },
      ],
    },
    { path: "/hello", name: "hello", component: HelloWorld },
    { path: "/login", name: "Login", component: Login },
  ],
});

export default router;
