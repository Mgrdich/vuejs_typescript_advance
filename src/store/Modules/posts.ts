import Vue from 'vue';

export const posts = {
    namespaced: true,
    state:{
        posts:[]
    },
    getters:{

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
                    let posts: Array<any> = [];
                    for (let key of res) {
                        posts.push({
                            ...res[key],
                            id: key
                        })
                    }
                    console.log(posts);
                    commit('getAllPosts',posts.reverse());
                })
        }
    }
}