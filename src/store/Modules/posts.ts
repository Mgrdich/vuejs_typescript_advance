import Vue from 'vue';
import {IPosts} from "@/interfaces";

export const posts = {
    namespaced: true,
    state:{
        posts:[]
    },
    getters:{
        getAllPosts(state:any):IPosts {
            return state.posts;
        }
    },
    mutations: {
        getAllPosts(state:any,posts:Array<any>) {
            state.posts = posts;
        }
    },
    actions: {
        getAllPosts({commit}:any, payload:any) {
            console.log(payload);
            (Vue as any).http.get(`posts.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then((res:any)=>res.json())
                .then((res:any)=>{
                    let posts: Array<any> = Object.keys(res).map((hasKey:string,index:number)=>{
                        console.log(res[hasKey]);
                        let obj = {...res[hasKey]};
                        obj.id = hasKey;
                        return obj;
                    })

                    commit('getAllPosts',posts.reverse());
                })
        }
    }
}