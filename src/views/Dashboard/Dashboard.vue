<template>
    <div class="container dashboard_container">
        <div class="admin_nav">
            <ul>
                <li><router-link to="/dashboard/add_posts">Add posts</router-link></li>
                <li><router-link to="/dashboard/posts_list">Manage posts</router-link></li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class Dashboard extends Vue {


    }
</script>