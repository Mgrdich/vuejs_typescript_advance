<template>
    <div>
        <router-link
                v-if="type==='link'"
                to="/"
                :class="['button_default',...addClass]"
                :style="opStyle"
        >
            <slot/>
        </router-link>

        <div
            v-if="type==='btn'"
            :class="['button_default',...addClass]"
            :style="opStyle"
            @click="action"
        >
        <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component,Prop} from "vue-property-decorator";

    @Component
    export default class Button extends Vue {
        @Prop() readonly linkTo!: string;
        @Prop({required: true,default:'btn'}) readonly type!: 'btn' | 'link';
        @Prop({required: false}) readonly opStyle!: Object;
        @Prop({required: false}) readonly addClass!: Array<string>;
        @Prop({required: false}) readonly action!: Function;

    }
</script>

