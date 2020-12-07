import Vue from "vue";
import App from "./App.vue";

import "./assets/style/reset.scss";
import "./assets/iconfonts/iconfont.css";
import "amfe-flexible";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
