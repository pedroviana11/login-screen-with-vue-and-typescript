import { Views } from "../views";
import { createRouter, createWebHistory } from "vue-router";
import { guardAuth } from "./guards/auth.guard";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: Views.InitialView,
    },
  ],
});

router.beforeEach((to, from, next) => {
   guardAuth(to, from, next);
 });

export default router; 


/*import { RouteRecordRaw } from 'vue-router'
 
export const unauthenticatedRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: '/first-access',
    name: 'FirstAccess',
    component: () => import("@/views/FirstAccess/FirstAccess.vue"), 
    meta: { auth: true }
  },
]*/