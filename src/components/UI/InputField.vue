<template>
    <div class="input_field" :class="{invalid:validation && validation.$error}">
        <label v-if="label">{{label}}</label>
        <input
                :type="type"
                :value="model"
                :name="name"
                :disabled="disable"
                v-on:change="$emit('change', $event.target.value)"
                @blur="validation && validation.$touch()"
        >

        <label class="error" :for="name" v-if="validation && validation.$error">
                This Field is invalid
        </label>
        <label class="error" :for="name" v-else-if="customValidation && customValidation.condition">
            {{customValidation.text}}
        </label>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop,Model} from "vue-property-decorator";
    import {InputFieldValidation} from "@/interfaces";

    @Component
    export default class InputField extends Vue { ///TODO refactor input related decorators in custom decorator
        @Prop({default:'text',type:String}) readonly type!: 'text' | 'password';
        @Prop({required: true}) readonly name!: 'string';
        @Prop({default:false}) readonly validation!: any;
        @Prop({default:false}) readonly disable!: boolean;
        @Prop({type:String}) readonly label!: string;
        @Prop() readonly customValidation!: InputFieldValidation;

        @Model('change', { type: String }) readonly model!: string;
    }
</script>

<style lang="scss">
    .input_field {
        .error {
            position: absolute;
            font-size: 14px;
            color: #ff0000;
        }
    }
</style>

