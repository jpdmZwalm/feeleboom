import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
//import VueMeta from 'vue-meta'

Vue.config.productionTip = false

new Vue({
  router,
  //VueMeta,
  render: h => h(App),
}).$mount('#app')
