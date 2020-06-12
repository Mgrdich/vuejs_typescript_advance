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
                    <input type="text" name="password" v-model="formData.password">
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class SignIn extends Vue {
        private formData:{email:string,password:string} = {
            email:'',
            password:''
        }
        public onSubmit():void {
            console.log(this.formData);
        }

    }
</script>