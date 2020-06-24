<template>
    <div>
        sasdasd
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Post extends Vue {

        created() {
            let id:string = this.$route.params.id;
            this.$store.dispatch('posts/getPost',id);
        }
    }
</script>

