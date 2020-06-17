import {ISignIn} from "@/interfaces";
import Vue from "vue";
import router from "../../router"

const restApi:string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
const apiKey = process.env.VUE_APP_API_KEY;

//TODO to be written in Vuex and typescript
export const admin = {
    namespaced: true,
    state: {
        token: null,
        refresh: null,
        authFailed: false
    },
    getters: {
        isAuth(state:any) {
            return !!state.token;
        }
    },
    mutations: {
        authUser(state:any,authData:any):void {
            state.token = authData.idToken;
            state.refresh = authData.refreshToken;

            if(authData.type === 'signin') {
                router.push('/dashboard')
                    .then(function () {});
            }
        },
        authValidation(state:any,validateFail:boolean):void {
            state.authFailed = validateFail;
        },
        logOut(state:any){
            state.token = null;
            state.refresh = null;
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            router.push('/').then(function () {});
        }
    },
    actions: {
        singIn({commit}: any, payload: ISignIn) {
            (Vue as any).http.post(`${restApi}${apiKey}`, {
                ...payload,
                returnSecureToken: true
            }).then((res: any) => res.json())
                .then((authData: any) => {
                    commit('authUser', {...authData, type: 'signin'});
                    localStorage.setItem('token', authData.idToken);
                    localStorage.setItem('refresh', authData.refreshToken);
                }).catch((err: any) => {
                    commit('authValidation',true);
            });
        }
    },
}