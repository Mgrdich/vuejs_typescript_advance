<template>
    <div class="container">
        <div class="signin_container">
            <h1>Sign in</h1>
            <form @submit.prevent="onSubmit" action="">
                <div class="input_field">
                    <label>Email</label>
                    <input type="text" name="email" v-model="formData.email">
                </div>
                <div class="input_field">
                    <label>Password</label>
                    <input type="password" name="password" v-model="formData.password">
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {ISignIn} from "@/interfaces";

    @Component
    export default class SignIn extends Vue {
        private formData:ISignIn = {
            email:'',
            password:''
        }
        public onSubmit():void {
           this.$store.dispatch('admin/singIn',this.formData);
        }

    }
</script>