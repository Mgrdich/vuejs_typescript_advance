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
        @Prop({required: true}) readonly linkTo: string | undefined;
        @Prop({required: true}) readonly type: 'btn' | 'link' | undefined;
        @Prop({required: false}) readonly opStyle: Object | undefined;
        @Prop({required: false}) readonly addClass: Array<string> | undefined;
        @Prop({required: false}) readonly action: Function | undefined;

    }
</script>

