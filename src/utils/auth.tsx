import { loginResponseDataType } from "@/apis/auth/type"
import Cookies from "js-cookie"

const cookieKey = '_auth'

export function setAuthItem(data: loginResponseDataType, expire: number) {
  Cookies.set(cookieKey, JSON.stringify(data), {
    expires: (expire - Date.now()) / 86400000
  })
}

export function getAuthItem(key: string) {
  let value = null
  if (Cookies.get(cookieKey)) {
    const v = JSON.parse(Cookies.get(cookieKey) as string)
    if (v[key]) {
      value = v[key]
    }
  }

  return value
}

export function getAuthToken() {
  return getAuthItem('token')
}

export function getAuthUserName() {
  return getAuthItem('username')
}