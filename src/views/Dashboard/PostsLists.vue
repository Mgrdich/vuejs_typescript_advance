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
                    <div class="post_delete" @click="deleteHandler(post.id)">
                        Delete
                    </div>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <md-dialog-confirm
                :md-active.sync="modal"
                md-content="are you sure want to delete?"
                md-confirm-text="Agree"
                md-cancel-text="Disagree"
                @md-cancel="onCancelModal"
                @md-confirm="onConfirmModal"
        />
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {IPosts} from "@/interfaces";

    @Component
    export default class PostsLists extends Vue {
        private modal: boolean = false;
        private toDeleteId: string = '';


        get posts(): Array<IPosts> {
            return this.$store.getters["admin/adminPosts"];
        }

        get loading(): boolean {
            return this.$store.getters["admin/adminPostLoading"];
        }

        public deleteHandler(id: string): void {
            this.toDeleteId = id;
            this.modal = true;
        }

        public onCancelModal(): void {
            this.modal = false;
        }

        public onConfirmModal(): void {
            this.$store.dispatch('admin/deletePost', this.toDeleteId);
            this.modal = false;
        }

        created() {
            this.$store.dispatch('admin/getAdminPosts');
        }
    }
</script>
