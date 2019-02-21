import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import VueFullPage from "vue-fullpage.js";

import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.use(VueFullPage);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
