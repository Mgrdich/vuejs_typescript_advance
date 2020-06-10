import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Button from "@/components/UI/Button.vue";

Vue.component('app-button',Button);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
