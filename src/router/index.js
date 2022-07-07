import { createRouter, createWebHistory } from "vue-router";
import Default from "../layouts/Default.vue";
import Home from "../views/Home.vue";

const routes = [
    {
      path: "/",
      name: "Default",
      component: Default,
      meta: { requireAuth: true },
      children: [
        // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
        {
          path: "",
          name: "Home",
          component: Home,
        },
      ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "active",
});

export default router;