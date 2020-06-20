<template>
    <div class="input_field" :class="{invalid:validation && validation.$error}">
        <label v-if="label">{{label}}</label>
        <select
        :value="model"
        :name="name"
        :disabled="disable"
        v-on:change="$emit('change', $event.target.value)"
        >
            <option v-for="item in data" :value="item.value">{{item.translation}}</option>
        </select>

        <label class="error" :for="name" v-if="validation && validation.$error && validation.$error">
            This Field is invalid
        </label>
        <label class="error" :for="name" v-else-if="customValidation && customValidation.condition">
            {{customValidation.text}}
        </label>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop, Model} from "vue-property-decorator";
    import {DropdownData} from "@/interfaces";

    @Component
    export default class DropDown extends Vue {
        @Prop({default:[],type:Array}) readonly data!: DropdownData;
        @Prop({required: true}) readonly name!: 'string';
        @Prop({default:false}) readonly disable!: boolean;
        @Model('change', { type: String }) readonly model!: string;
    }
</script>

<style lang="">

</style>
