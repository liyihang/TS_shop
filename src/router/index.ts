import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/components/XtxLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/home/HomePage.vue"),
        },
      ],
    },
  ],
});

export default router;