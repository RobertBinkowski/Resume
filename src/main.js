import { Vue, createApp } from "vue";

import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
Vue.use(VueI18n);
