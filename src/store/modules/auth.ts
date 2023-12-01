import { createSlice } from "@reduxjs/toolkit"
import { loginData } from "@/apis/auth/type"
import { reqLogin } from '@/apis/auth'
import { AppDispatch, RootState } from "@/types/store"
import { getAuthItem, setAuthItem } from "@/utils/auth"

const authStore = createSlice({
  name: 'auth',
  initialState: {
    token: getAuthItem('token') || ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token
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