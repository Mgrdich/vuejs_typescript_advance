import Vue from 'vue';
import {IPosts} from "@/interfaces";
import has = Reflect.has;

export const posts = {
    namespaced: true,
    state:{
        posts:[],
        post:null,
        loading:false
    },
    getters:{
        getAllPosts(state:any):Array<IPosts> {
            return state.posts;
        },
        getPost(state:any):IPosts {
            return state.post;
        },
        getLoading(state: any): boolean {
            return state.loading;
        }
    },
    mutations: {
        getAllPosts(state:any,posts:Array<IPosts>):void {
            state.posts = posts;
        },
        getPost(state:any,post:IPosts):void {
            state.post = post;
            state.loading = false;
        },
        clearPosts(state:any) {
            state.post = null;
        },
        setLoading(state:any,loading:boolean) {
            state.loading = loading;
        }

    },
    actions: {
        getAllPosts({commit}:any, payload:any) {
            (Vue as any).http.get(`posts.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then((res:any)=>res.json())
                .then((res:any)=>{
                    let posts: Array<any> = Object.keys(res).map((hasKey:string,index:number)=>{
                        let obj = {...res[hasKey]};
                        obj.id = hasKey;
                        return obj;
                    })

                    commit('getAllPosts',posts.reverse());
                })
        },
        getPost({commit}: any, payload: string) {
            commit('setLoading',true);
            (Vue as any).http.get(`posts.json?orderBy="$key"&equalTo="${payload}"`)
                .then((res: any) => res.json())
                .then((res: any) => {
                    let hash:string = Object.keys(res)[0];
                    let post = res[hash];
                    post.id = hash;
                    commit('getPost',post);
                });
        }
    }
}