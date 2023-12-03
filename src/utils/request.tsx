import axios from 'axios'
import { message } from 'antd'
import router from '@/router/index'
import store from '@/store'

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: import.meta.env.VITE_HTTP_TIMEOUT
})

/** 请求拦截器 */
http.interceptors.request.use((config) => {
  const whiteList = ['/login']

  if (
    whiteList.find((url) => {
      return url === config.url
    })
  ) {
    return config
  } else {
    return new Promise((resolve) => {
      const token = store.getState().auth.token

      if (token) {
        config.headers['token'] = token
      }
      resolve(config)
    })
  }
})

/** 响应拦截器 */
http.interceptors.response.use(
  (response) => {
    if (response.data.code == 1) {
      return response.data
    } else {
      message.error(response.data.msg)
      return Promise.reject(response.data.msg)
    }
  },
  (error) => {
    const httpCode = error.response.status

    if (httpCode == 401) {
      store.dispatch({ type: "auth/clearToken" })
      error.message = '请重新登录'
      router.navigate('/login')
    } else {
      error.message = '请求错误，请稍后再试。'
    }
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default http