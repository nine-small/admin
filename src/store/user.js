import {login} from '@/api/user'
export default {
    state:{
        user:null
    },
    mutations:{
        SETUSER(state,payload){
            state.user = payload
        }
    },
    actions:{
        async login({commit},payload){
            const resp = await login(payload);
            if(resp.status === 'success'){
                commit('SETUSER',resp.data)
                return Promise.resolve(resp)
            }else{
                return Promise.reject(resp.msg)
            }
        }
    },
    namespaced:true
}