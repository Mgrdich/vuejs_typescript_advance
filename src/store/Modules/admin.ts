import {IauthData, ISignIn} from "@/interfaces";
import Vue from "vue";
import router from "../../router"
import {localStorage_RemoveToken, localStorage_TokenSet} from "@/util/functions";

const apiKey = process.env.VUE_APP_API_KEY;
const restApi: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
const refreshApi: string = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`;


//TODO to be written in Vuex and typescript
export const admin = {
    namespaced: true,
    state: {
        token: null,
        refresh: null,
        authFailed: false,
        pageLoading: true,
        singInLoading:false,
    },
    getters: {
        isAuth(state: any):boolean {
            return !!state.token;
        },
        isPageLoading(state: any):boolean {
            return state.pageLoading;
        },
        isSignInLoading(state:any):boolean {
            return state.singInLoading;
        }
    },
    mutations: {
        authUser(state: any, authData: IauthData): void {
            state.token = authData.idToken;
            state.refresh = authData.refreshToken;

            if (authData.type === 'signin') {
                router.push('/dashboard')
                    .then(function () {
                    });
            }
        },
        authValidation(state: any, validateFail: boolean): void {
            state.authFailed = validateFail;
        },
        logOut(state: any) {
            state.token = null;
            state.refresh = null;
            localStorage_RemoveToken();
            router.push('/').then(function () {
            });
        },
        setPageLoader(state:any,loading:boolean) {
            state.pageLoading = loading;
        },
        setSignLoader(state:any,loading:boolean) {
            state.singInLoading = loading;
        }
    },
    actions: {
        singIn({commit}: any, payload: ISignIn) {
            commit('setSignLoader',true);
            (Vue as any).http.post(restApi, {
                ...payload,
                returnSecureToken: true
            }).then((res: any) => res.json())
                .then((authData: any) => {
                    commit('authUser', {...authData, type: 'signin'});
                    localStorage_TokenSet(authData);
                }).catch((err: any) => {
                commit('authValidation', true);
            }).finally(function () {
                commit('setSignLoader',false);
            })
        },
        refreshToken({commit}: any, payload: any) {
            const refreshToken: string | null = localStorage.getItem('refresh');

            if (refreshToken) {
                (Vue as any).http.post(refreshApi, {
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken
                }).then(((res: any) => res.json()))
                    .then((authData: any) => {
                        let aData: IauthData = {
                            idToken: authData.id_token,
                            refreshToken: authData.refresh_token,
                            type: 'refresh'
                        };
                        commit("authUser", aData);
                        localStorage_TokenSet(aData);
                        commit("setPageLoader", false);
                    })
            } else {
                commit("setPageLoader",false);
            }
        }
    },
}