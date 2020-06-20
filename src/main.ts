import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import Vuelidate from "vuelidate";

import store from './store';

import InputField from "@/components/UI/InputField.vue";

import Button from "@/components/UI/Button.vue";

import {MdCard} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css'
import Loader from "@/components/UI/Loader.vue";

Vue.component('app-button',Button);
Vue.component('app-loader',Loader);
Vue.component('app-input',InputField);

/* Material */
Vue.use(MdCard);

Vue.use(VueResource);

Vue.use(Vuelidate);



(Vue as any).http.options.root= '';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
