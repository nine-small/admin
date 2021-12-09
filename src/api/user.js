import request from './request';

// 登陆
export async function login(data){
    return await request({
        url:'/passport/login',
        method:'post',
        data
    })
} 