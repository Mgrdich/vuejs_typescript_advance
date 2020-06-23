import Vue from 'vue'
import Vuex from 'vuex'
import {admin} from "@/store/Modules/admin";
import {posts} from "@/store/Modules/posts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      admin,
      posts
  }
})
