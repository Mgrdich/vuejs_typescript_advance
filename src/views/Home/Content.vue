<template>
    <div class="container">
        <div class="home_container">
            <md-card v-for="(post,index) in posts" :key="index">
                <md-card-media md-ratio="4:3">
                    <img :src="post.img"/>
                </md-card-media>

                <md-card-header>
                    <h2 class="md-title">{{ post.title }}</h2>
                    <div class="md-subhead">
                        <div>{{ post.desc }}</div>
                    </div>
                </md-card-header>


                <md-card-actions>
                    <app-button
                            type="link"
                            :linkTo="`/posts/${post.id}`"
                            :addClass="['small_link']"
                    >
                        See review
                    </app-button>

                </md-card-actions>
            </md-card>
        </div>

        <div class="load_more">
            <app-button
                type="btn"
                :addClass="['small_link']"
                :action="loadMore"
            >
            Load More
            </app-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {IPosts} from "@/interfaces";

    @Component
    export default class Content extends Vue {

        get posts():Array<IPosts> {
            return  this.$store.getters['posts/getAllPosts'];
        }

        public loadMore():void {
            this.$store.dispatch('posts/getAllPosts',{
                limit:this.posts.length + 3
            });
        }
        created(){
            this.$store.dispatch('posts/getAllPosts',{
                limit:3
            });
        }
    }
</script>

