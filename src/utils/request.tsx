import axios from 'axios'
import { getAuthToken } from '@/utils/auth'

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
      const token = getAuthToken()

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
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http