import App from "./App.vue";
import { createApp } from "vue";

import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass,
  faGear,
  faHouse,
  faLayerGroup,
  faBell,
  faUserGroup,
  faDownload,
  faVolumeHigh,
  faMicrophone,
  faGamepad,
  faImagePortrait,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faMagnifyingGlass,
  faGear,
  faHouse,
  faLayerGroup,
  faBell,
  faUserGroup,
  faDownload,
  faVolumeHigh,
  faMicrophone,
  faGamepad,
  faImagePortrait,
  faPowerOff
);

createApp(App)
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
