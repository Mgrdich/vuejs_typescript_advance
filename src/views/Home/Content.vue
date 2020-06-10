<template>

</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {posts} from '@/assets/posts'
    import {IPosts} from "@/interfaces";

    @Component
    export default class Content extends Vue {
        posts:Array<IPosts> = posts;
    }
</script>

