<template>
    <div class="container">
        <div class="signin_container">
            <h1>Sign in</h1>
            <form @submit.prevent="onSubmit" action="">
                <div class="input_field">
                    <label>Email</label>
                    <input-field $model="formData.email" validation="true" name="email"/>
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
    import { required } from 'vuelidate/lib/validators';
    import InputField from "@/components/UI/InputField.vue";

    @Component({
        validations:{
            formData:{
                email:{required},
                password: {required}
            }
        },
        components:{
            'input-field':InputField
        }
    })
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