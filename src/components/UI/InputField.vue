<template>
    <div class="input_field" :class="{invalid:validation && validation.$error}">
        <label v-if="label">{{label}}</label>
        <input
                :type="type"
                :value="model"
                :name="name"
                v-on:change="$emit('change', $event.target.value)"
                @blur="validation && validation.$touch()"
        >
        <div v-if="validation.$error">
            <label class="error" :for="name" v-if="validation && 0">
                This Field is required
            </label>
            <label class="error" :for="name" v-else-if="validation && validation.$error">
                This Field is invalid
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop,Model} from "vue-property-decorator";

    @Component
    export default class InputField extends Vue {
        @Prop({default:'text',type:String}) readonly type!: 'text' | 'password';
        @Prop({required: true}) readonly name!: 'string';
        @Prop({default:false}) readonly validation!: any;
        @Prop({type:String}) readonly label!: string;
        @Prop() readonly formValidation!: any;

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

