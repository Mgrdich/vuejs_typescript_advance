<template>

</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {IPosts} from "@/interfaces";

    @Component
    export default class PostsLists extends Vue {

        get posts():Array<IPosts> {
            return this.$store.getters["admin/adminPosts"];
        }

    }
</script>
