import { createRouter, createWebHistory } from "vue-router";
import { guardAuth } from "./guards/auth.guard";
import { unauthenticatedRoutes } from "./unauthenticatedRoutes.routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...unauthenticatedRoutes
  ],
});

router.beforeEach((to, from, next) => {
   guardAuth(to, from, next);
 });

export default router; 