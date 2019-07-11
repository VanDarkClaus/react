import axios from 'axios'

const ajax = axios.create ({
    baseURL: 'http://rap2api.taobao.org/app/mock/224187'
})

ajax.interceptors.response.use(resp => {
    if(resp.data.res_code === 200 && resp.status === 200){
        console.log(resp)
        return resp.data.res_body
    }
})
//请求列表数据
export const getListData = () => {
    return ajax.get('/api/v1/article')
}
//通过id请求详情
export const getListDetails = (id) => {
    return axios.get(`http://rap2api.taobao.org/app/mock/224187/api/v1/article/edit?id=${id}`)
}
<<<<<<< HEAD
//请求待办事项
export const getTodoList = () => {
    return ajax.get('/api/v1/todolist?page=1')
}
=======
>>>>>>> 2fe9f98cdf054ec15674f30665e4f58cd8e02a5b
