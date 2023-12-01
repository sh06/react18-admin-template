/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // HTTP 请求的 URL
  readonly VITE_APP_BASE_URL: string
  // HTTP 请求 URL 的统一前缀 比如 /api
  readonly VITE_APP_BASE_API: string
  // HTTP 超时时间 单位：毫秒
  readonly VITE_HTTP_TIMEOUT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}