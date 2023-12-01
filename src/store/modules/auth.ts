import { createSlice } from "@reduxjs/toolkit"
import { loginData } from "@/apis/auth/type"
import { reqLogin } from '@/apis/auth'
import { AppDispatch, RootState } from "@/types/store"
import { getAuthItem, setAuthItem } from "@/utils/auth"

const authStore = createSlice({
  name: 'auth',
  initialState: {
    token     : getAuthItem('token') || '',
    username  : getAuthItem('username') || '',
    user_id   : getAuthItem('user_id') || '',
    menu      : getAuthItem('menu') || [],
    permission: getAuthItem('permission') || [],
  },
  reducers: {
    setToken(state, action) {
      state.token      = action.payload.token
      state.username   = action.payload.username
      state.user_id    = action.payload.user_id
      state.menu       = action.payload.menu
      state.permission = action.payload.permission

      setAuthItem(action.payload, action.payload.expire)
    }
  }
})

export const userLogin = (data: loginData) => {
  return (dispatch: AppDispatch) => {
    reqLogin(data).then(res => {
      dispatch(setToken(res.data))
    })
  }
}

export const selectToken = (state: RootState) => state.auth.token
export const { setToken } = authStore.actions
export default authStore.reducer