import { Components } from "../components";
import { App } from "vue";

export default function setComponent(app: App): void {
  app.component("SideBar", Components.SideBar());
  app.component("TopBar", Components.TopBar());
  app.component("MenuBar", Components.MenuBar());
  app.component("TableVue", Components.TableVue());
}
