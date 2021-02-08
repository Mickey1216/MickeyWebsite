import axios from 'axios'

export function request(config){
    //1.创建axios的实例
    const insatance = axios.create({
        baseURL:'/reflex_1',
    })

    //2.响应拦截
    insatance.interceptors.response.use(res => {
       return res.data.data
    },err => {

    })

    //3.发送真正的网络请求 
    return insatance(config)
}