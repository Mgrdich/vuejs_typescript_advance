import {NavigationGuardNext, Route} from "vue-router/types/router";
import store from "@/store";

export const authGuard = {
    beforeEnter: (to: Route, from: Route, next: NavigationGuardNext) => {
        const redirect: () => void = function (): void {

            if (store.getters['admin/isAuth']) {
                if (to.path === '/signin') {
                    next('/dashboard');
                } else {
                    next();
                }
            } else {
                if(to.path==='/signin') {
                    next()
                } else {
                    next('/');
                }
            }
        }
        if(store.getters["admin/isPageLoading"]){
            store.watch((state, getters)=>getters["admin/isPageLoading"],()=>{
                redirect();
            })
        } else {
            redirect();
        }

    }
};
