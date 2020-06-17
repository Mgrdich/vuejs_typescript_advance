import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '@/views/Home/Home.vue';
import SignIn from "@/views/Signin/Signin.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";


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
        component: SignIn
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
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
