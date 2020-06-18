<template>
    <div class="container">
        <div class="signin_container">
            <h1>Sign in</h1>
            <form @submit.prevent="onSubmit" action="">
                    <input-field
                            label="Email"
                            v-model.trim="formData.email"
                            :validation="$v.formData.email"
                            :customValidation="{
                                condition:authFailed,
                                text:'check your email or password'
                             }"
                            name="email"
                    />
                    <input-field
                            label="Password"
                            v-model.trim="formData.password"
                            :validation="$v.formData.password"
                            name="password"
                            type="password"
                    />
                <button class="button_default" type="submit" :disabled="isLoading">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {ISignIn} from "@/interfaces";
    import {required, email, minLength} from 'vuelidate/lib/validators';
    import InputField from "@/components/UI/InputField.vue";

    @Component({
        validations:{
            formData:{
                email:{required,email},
                password: {required,minLength:minLength(5)}
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

        public onSubmit(): void {
            this.$v.$touch();
            this.$store.dispatch('admin/singIn', this.formData);
        }

        get authFailed():boolean {
            return this.$store.state.admin.authFailed;
        }

        get isLoading():boolean {
            return this.$store.getters["admin/isSignInLoading"];
        }

        destroyed() {
            this.$store.commit('admin/authValidation',false);
        }

    }
</script>