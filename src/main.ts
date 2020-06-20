import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueResource from 'vue-resource';
import Vuelidate from "vuelidate";
import wysiwyg from "vue-wysiwyg";
import { MdCard, MdButton , MdContent,MdDialog ,MdDialogConfirm} from 'vue-material/dist/components'

import store from './store';

import InputField from "@/components/UI/InputField.vue";
import Button from "@/components/UI/Button.vue";
import Loader from "@/components/UI/Loader.vue";
import DropDown from "@/components/UI/DropDown.vue";

/* Components */
Vue.component('app-button',Button);
Vue.component('app-loader',Loader);
Vue.component('app-input',InputField);
Vue.component('app-dropdown',DropDown);

/* Plugins */
/* MATERIAL */
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdDialog); //replace with Confirm
Vue.use(MdDialogConfirm); //replace with Confirm
Vue.use(MdContent);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(wysiwyg, {}); // config is optional. more below

console.log(MdDialogConfirm);

(Vue as any).http.options.root= '';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
