import { createApp } from "vue";
import App from "./App.vue";
import "./services/registerServiceWorker.js";
import FontAwesomeIcon from "./services/fontAwesomeIcons.js";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
