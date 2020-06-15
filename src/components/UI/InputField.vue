<template>
    <div>
        <input
                :type="type"
                :name="name"
                v-model="$model"
                @blur="validation && validation[$model].$touch()"
        >
        {{validation && validation[$model]}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class InputField extends Vue {
        @Prop({default:'text'}) readonly type: 'text' | 'password' | undefined;
        @Prop({required: true}) readonly name: 'string' | unknown;
        @Prop({required: true}) readonly $model: 'string' | unknown;
        @Prop({default:false}) readonly validation: any | unknown;
    }
</script>

