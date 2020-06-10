<template>
    <div class="container">
        <div class="home_container">
            <md-card v-for="(post,index) in posts" :key="index">
                <md-card-media md-ratio="4:3">
                    <img :src="require(`../../assets/images/featured/${post.img}`)"/>
                </md-card-media>

                <md-card-header>
                    <h2 class="md-title">{{ post.title }}</h2>
                    <div class="md-subhead">
                        <div>{{ post.description }}</div>
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
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {posts} from '@/assets/posts'
    import {IPosts} from "@/interfaces";

    @Component
    export default class Content extends Vue {
        private posts:Array<IPosts> = posts;
    }
</script>

