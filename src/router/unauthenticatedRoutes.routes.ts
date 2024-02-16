import { RouteRecordRaw } from 'vue-router'
import { Views } from "../views";
 
export const unauthenticatedRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: Views.InitialView,
  },
]