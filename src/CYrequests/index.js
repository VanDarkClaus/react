import axios from 'axios'

const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/224477'
})

ajax.interceptors.response.use(resp => {
  if(resp.status === 200 && resp.data.code === 200) {
  return resp.data.data
  }
})

// CY书籍列表数据接口
export const CY_getProductList = () => {
  return ajax.get('/example/list')
}