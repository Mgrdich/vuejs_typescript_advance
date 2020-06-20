import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import {authGuard} from "@/router/guard";


import Home from '@/views/Home/Home.vue';
import SignIn from "@/views/Signin/Signin.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import MainDashboard from "@/views/Dashboard/Main.vue";
import AddPosts from "@/views/Dashboard/AddPosts.vue";
import PostsLists from "@/views/Dashboard/PostsLists.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: 'SignIn',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: SignIn,
        ...authGuard
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        ...authGuard,
        children:[
            {path: '', component: MainDashboard},
            {path:'add_posts',component:AddPosts},
            {path:'posts_list',component:PostsLists}
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(from, to, savedPosition) {
        return {
            x: 0,
            y: 0
        };
    }
})

export default router
