import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Multiselect from 'vue-multiselect';
import CountryFlag from 'vue-country-flag'

import "./scss/index.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

Vue.config.productionTip = false;
Vue.component('multiselect', Multiselect);
Vue.component('country-flag', CountryFlag)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
