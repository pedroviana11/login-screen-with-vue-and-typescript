import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Paginator from "primevue/paginator";
import InputText from "primevue/inputtext";
import Tooltip from 'primevue/tooltip';
import { App } from "vue";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

export default function setPrime(app: App): void {
  app.use(PrimeVue);
  app.component("Dialog", Dialog);
  app.component("Paginator", Paginator);
  app.component("InputText", InputText);
  app.directive('tooltip', Tooltip);
  app.component("IconField", IconField);
  app.component("InputIcon", InputIcon);

}
