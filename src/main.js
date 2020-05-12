import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import VueAnime from "vue-animejs";
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueAnime);
Vue.use(VueLazyLoad, {
  preLoad: 1,
  attempt: 1
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
