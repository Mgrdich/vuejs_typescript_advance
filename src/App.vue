<template>
  <div id="app">
    <div v-if="!isLoading">
      <comp-header></comp-header>
      <router-view/>
      <comp-footer></comp-footer>
    </div>
    <app-loader v-else></app-loader>
  </div>
</template>
<script lang="ts">

  import {Vue, Component} from "vue-property-decorator";
  import Header from "@/components/Header-Footer/Header.vue";
  import Footer from "@/components/Header-Footer/Footer.vue";


  @Component({
    components: {
      'comp-header':Header,
      'comp-footer':Footer
    }
  })
  export default class App extends Vue {
    created() {
        this.$store.dispatch('admin/refreshToken');
      }
    get isLoading():boolean {
      return this.$store.getters["admin/isPageLoading"];
    }
  }
</script>
<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
 @import "~vue-wysiwyg/dist/vueWysiwyg.css";
 @import "~vue-material/dist/vue-material.min.css";
 @import "assets/style.css";
</style>
