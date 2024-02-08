import { defineAsyncComponent } from "vue";

export class Components {
  static SideBar(): any {
    return defineAsyncComponent(
      () => import("@/components/SideBar/SideBar.vue")
    );
  }
  static TopBar(): any {
    return defineAsyncComponent(
      () => import("@/components/TopBar/TopBar.vue")
    );
  }
  static MenuBar(): any {
    return defineAsyncComponent(
      () => import("@/components/MenuBar/MenuBar.vue")
    );
  }
  static TableVue(): any {
    return defineAsyncComponent(
      () => import("@/components/Table/Table.vue")
    );
  }
}
