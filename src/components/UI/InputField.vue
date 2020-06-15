<template>
    <div>
        <input
                :type="type"
                :name="name"
                v-model="model"
                @blur="validation && validation.model.$touch()"
        >
        {{validation && validation[$model]}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop,Model} from "vue-property-decorator";

    @Component
    export default class InputField extends Vue {
        @Prop({default:'text',type:String}) readonly type!: 'text' | 'password';
        @Prop({required: true}) readonly name: 'string' | unknown;
        @Prop({default:false}) readonly validation: any | unknown;

        @Model('change', { type: String }) readonly model!: string;
    }
</script>

