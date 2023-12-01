// 登陆表单
export interface loginData {
  username: string
  password: string
}

// 登陆返回数据格式
export interface loginResponseDataType {
  token: string
  expire: number
  username: string
  user_id: string
  // 返回的菜单
  menu: Array<object>
  // 返回的权限
  permission: Array<string>
}

// 登陆返回数据
export interface loginResponseData {
  code: number
  msg: string
  data: loginResponseDataType
}

export interface logoutResponseData {
  code: number
  msg: string
}