import axios from 'axios'

const ajax = axios.create ({
    baseURL: 'http://rap2api.taobao.org/app/mock/224187/'
})

ajax.interceptors.response.use(resp => {
    if(resp.data.res_code === 200 && resp.status === 200){
        return resp.data.res_body
    }
})

export const getListData = () => {
    return ajax.get('api/v1/article')
}