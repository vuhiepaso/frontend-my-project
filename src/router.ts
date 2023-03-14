import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ProductDetail from "./views/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/login", name: "Login", component: Login },
    { path: "/product/:id", name: "product", component: ProductDetail },
  ],
});

export default router;
