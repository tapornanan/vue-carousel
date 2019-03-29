import Vue from "vue";
import App from "./App.vue";
import router from "./router";

window.$ = window.jQuery = require('jquery');
require('owl.carousel/dist/assets/owl.carousel.css')
require('owl.carousel');

window.Vue = require('vue');


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
