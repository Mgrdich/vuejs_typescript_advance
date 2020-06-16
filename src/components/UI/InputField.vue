<template>
    <div>
        <input
                :type="type"
                :value="model"
                v-on:change="$emit('change', $event.target.value)"
                @blur="validation && validation['formData'].email.$touch()"
        >
        {{validation && validation[model]}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop,Model} from "vue-property-decorator";

    @Component
    export default class InputField extends Vue {
        @Prop({default:'text',type:String}) readonly type!: 'text' | 'password';
        @Prop({required: true}) readonly name!: 'string';
        @Prop({default:false}) readonly validation!: any;

        @Model('change', { type: String }) readonly model!: string;
    }
</script>

