<template>
    <header>
        <div class="container header_container">
            <div class="logo">
                <a href="/">
                    Game Center
                </a>
            </div>
            <div class="login">
                <a href="/signin">
                    <img :src="require('../../assets/images/login.png')" alt="">
                </a>
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
