<template>
    <div class="container table">
        <app-loader v-if="loading"></app-loader>
        <md-table v-else>
            <md-table-row>
                <md-table-head>Title</md-table-head>
                <md-table-head>Description</md-table-head>
                <md-table-head>Rating</md-table-head>
                <md-table-head>Action</md-table-head>
            </md-table-row>
            <md-table-row v-for="(post,index) in posts">
                <md-table-cell>{{post.title}}</md-table-cell>
                <md-table-cell>{{post.desc}}</md-table-cell>
                <md-table-cell>{{post.rating}}</md-table-cell>
                <md-table-cell>
                    <div class="post_delete">
                        Delete
                    </div>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {IPosts} from "@/interfaces";

    @Component
    export default class PostsLists extends Vue {

        get posts():Array<IPosts> {
            return this.$store.getters["admin/adminPosts"];
        }

        get loading():boolean {
            return this.$store.getters["admin/adminPostLoading"];
        }

        created() {
            this.$store.dispatch('admin/getAdminPosts');
        }
    }
</script>
