<template>
    <div class="dashboard_form">
        <h1>add Posts</h1>
        <form @submit.prevent="submit">
            <div class="input_field">
                <input
                        type="file"
                        @change="processFiles($event)"
                >
            </div>
            <app-input
                    label="Text"
                    v-model.trim="formData.title"
                    :validation="$v.formData.title"
                    name="title"
            />
            <app-input
                    label="Description"
                    v-model.trim="formData.desc"
                    :customValidation="{
                                condition:!$v.formData.desc.maxLength,
                                text:`max length is ${$v.formData.desc.maxLength.max} elements`
                             }"
                    :validation="$v.formData.desc"
                    name="title"
            />
            <wysiwyg v-model="formData.contents"/>
            <app-dropdown
                    label="Rating"
                    v-model="formData.rating"
                    :validation="$v.formData.rating"
                    name="rating"
                    :data="[
                        {value:1,translation:1},
                        {value:2,translation:2},
                        {value:3,translation:3},
                        {value:4,translation:4},
                        {value:5,translation:5},
                    ]"
            />
            <button type="submit" class="button_default">Submit</button>
        </form>
        <md-dialog-confirm
                :md-active.sync="modal"
                md-content="your post has no content, are you sure you want to post this ?"
                md-confirm-text="Agree"
                md-cancel-text="Disagree"
                @md-cancel="onCancelModal"
                @md-confirm="onConfirmModal"
        />
        <div class="post_succesfull" v-if="addpost">
            you post was posted
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {required, maxLength} from 'vuelidate/lib/validators';
    import {IAddPosts} from "@/interfaces";

    @Component({
        validations: {
            formData: {
                title: {required},
                desc: {required, maxLength: maxLength(100)},
                rating: {required},
            }
        }
    })
    export default class AddPosts extends Vue {
        private formData: IAddPosts = {
            title: '',
            desc: '',
            contents: '',
            rating: ''
        };
        private modal: boolean = false;

        get addpost():boolean {
            let status:boolean =  this.$store.getters['admin/addPostStatus'];
            if(status) {
                this.clearPost();
            }
            return status;
        }

        public submit(): void {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                if (this.formData.contents === '') {
                    this.modal = true;
                } else {
                    this.addPost();
                }
            }
        }

        public addPost(): void {
           this.$store.dispatch('admin/addPost',this.formData);
        }

        public clearPost():void {
            this.formData = {
                title: '',
                desc: '',
                contents: '',
                rating: ''
            };
            this.$v.$reset();
        }

        public onCancelModal(): void {
            this.modal = false;
        }

        public onConfirmModal(): void {
            this.modal = false;
            this.addPost();
        }

        public processFiles(event:any) {
            let file = event.target.files[0];
            this.$store.dispatch('admin/imageUpload',file);
        }

    }
</script>