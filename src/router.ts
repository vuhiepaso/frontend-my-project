import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./store/useAuth";

const redirectToHomeOnLoggedIn = (to: any, from: any, next: any) => {
  if (useAuthStore().loggedIn) next({ name: "Home" });
  else next();
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue"),
      meta: { requireAuth: false },
      children: [
        {
          name: "product",
          path: "/product/:id",
          component: () => import("./views/ProductDetail.vue"),
        },
      ],
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue"),
      meta: { layout: "loggedIn" },
    },

    {
      path: "/register",
      name: "Register",
      component: () => import("./views/Register.vue"),
      beforeEnter: redirectToHomeOnLoggedIn,
      meta: { requireAuth: false, layout: "loggedIn" },
    },
    {
      path: "/equipment",
      name: "Equipment",
      component: () => import("./views/equipment/index.vue"),
      meta: { requireAuth: false },
    },

    {
      path: "/:pathMatch(.*)*",
      component: () => import("./views/404.vue"),
      meta: { layout: "loggedIn" },
    },
  ],
});
router.beforeEach((to: any, from: any, next: any) => {
  if (to.meta.requireAuth && !useAuthStore().loggedIn) {
    next({ name: "Login" });
  } else next();
});

export default router;
