<template>
    <header>
        <div class="container header_container">
            <div class="logo">
                <router-link to="/">
                    Game Center
                </router-link>
            </div>
            <div class="login">
                <router-link to="/signin">
                    <img :src="require('../../assets/images/login.png')" alt="">
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
    import {Vue,Component} from "vue-property-decorator";

    @Component
    export default class Header extends Vue{

    }
</script>
