<template>
    <div class="input_field" :class="{invalid:validation && validation.$error && validation.$dirty}">
        <label v-if="label">{{label}}</label>
        <input
                :type="type"
                :value="model"
                :name="name"
                v-on:change="$emit('change', $event.target.value)"
                @blur="validation && validation.$touch()"
        >
        <label :for="name" v-if="validation && validation.$error && validation.$dirty">
            This Field is required
        </label>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop,Model} from "vue-property-decorator";
    import { validationMixin } from 'vuelidate';

    @Component
    export default class InputField extends Vue {
        @Prop({default:'text',type:String}) readonly type!: 'text' | 'password';
        @Prop({required: true}) readonly name!: 'string';
        @Prop({default:false}) readonly validation!: any;
        @Prop({type:String}) readonly label!: string;

        @Model('change', { type: String }) readonly model!: string;

        mounted() {
            console.log(this.validation);
        }
    }
</script>

