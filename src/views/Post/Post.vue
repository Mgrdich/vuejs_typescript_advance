<template>
    <div class="container post_container">
        <div class="top" v-if="post && !loading">
            <div class="post_header">
                <h1>{{post.title}}</h1>
                <div
                class="post_img"
                :style="{'background':`url(${post.img})`}"
                >
                </div>
                <div class="post_content">
                    <div v-html="post.content">
                    </div>
                </div>
                <div class="post_rating">
                    Rating: <span>{{post.rating}}</span>
                </div>
            </div>
        </div>
        <app-loader v-else></app-loader>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {IPosts} from "@/interfaces";

    @Component
    export default class Post extends Vue {

        get post():IPosts {
            return this.$store.getters['posts/getPost'];
        }

        get loading():boolean {
            return this.$store.getters['posts/getLoading'];
        }

        created():void {
            let id:string = this.$route.params.id;
            this.$store.dispatch('posts/getPost',id);
        }

        destroyed() {
            this.$store.commit('posts/clearPosts');
        }
    }
</script>

<style lang="scss">
    .post_container {
        height: 87vh;
    }
</style>

