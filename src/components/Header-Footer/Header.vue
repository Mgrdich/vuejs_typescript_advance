<template>
    <header>
        <div class="container header_container">
            <div class="logo">
                <router-link to="/">
                    Game Center
                </router-link>
            </div>
            <div class="login" v-if="!isAuth">
                <router-link to="/signin">
                    <img :src="require('../../assets/images/login.png')" alt="">
                </router-link>
            </div>
            <div v-else>
                <ul class="links">
                    <li><span @click="logoutUser">Logout</span></li>
                    <li>
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Header extends Vue {
        get isAuth() {
            return this.$store.getters['admin/isAuth'];
        }

        private logoutUser(): void {
            this.$store.commit('admin/logOut');
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        &.links {
            li,a {
                &:hover {
                    color: red;
                }
            }
        }
    }
</style>