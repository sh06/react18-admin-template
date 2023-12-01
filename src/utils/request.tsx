import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: import.meta.env.VITE_HTTP_TIMEOUT
})

/** 请求拦截器 */
http.interceptors.request.use((config) => {
  return config
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