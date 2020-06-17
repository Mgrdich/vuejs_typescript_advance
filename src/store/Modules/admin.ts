import {ISignIn} from "@/interfaces";
import Vue from "vue";

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
    getters: {},
    mutations: {
        authUser(state:any,authData:any):void {
            state.token = authData.idToken;
            state.refresh = authData.refreshToken;
        },
        authValidation(state:any,validateFail:boolean):void {
            state.authFailed = validateFail;
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