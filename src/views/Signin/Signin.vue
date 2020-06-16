<template>
    <div class="container">
        <div class="signin_container">
            <h1>Sign in</h1>
            <form @submit.prevent="onSubmit" action="">
                    <input-field
                            label="Email"
                            v-model="formData.email"
                            :validation="$v.formData.email"
                            name="email"
                    />
                    <input-field
                            label="Password"
                            v-model="formData.password"
                            :validation="$v.formData.password"
                            name="password"
                            type="password"
                    />
                <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {ISignIn} from "@/interfaces";
    import { required ,email} from 'vuelidate/lib/validators';
    import InputField from "@/components/UI/InputField.vue";

    @Component({
        validations:{
            formData:{
                email:{required,email},
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
            console.log(this.formData);
            console.log(this.$v.formData);
           // this.$store.dispatch('admin/singIn',this.formData);
        }
    }
</script>