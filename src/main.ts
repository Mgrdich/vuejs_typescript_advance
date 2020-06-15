import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import Vuelidate from "vuelidate";

import store from './store';

// import InputField from "@/components/UI/InputField.vue";

import Button from "@/components/UI/Button.vue";

import {MdCard} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'

Vue.component('app-button',Button);

/* Material */
Vue.use(MdCard);

Vue.use(VueResource);

Vue.use(Vuelidate);

// Vue.use(InputField);

(Vue as any).http.options.root= '';

console.log(process.env);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
