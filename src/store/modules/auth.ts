import { createSlice } from "@reduxjs/toolkit"
import { loginData } from "@/apis/auth/type"
import { reqLogin } from '@/apis/auth'
import { AppDispatch, RootState } from "@/types/store"

const authStore = createSlice({
  name: 'auth',
  initialState: {
    token: ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
    }
  }
})

export const userLogin = (data: loginData) => {
  return (dispatch: AppDispatch) => {
    reqLogin(data).then(res => {
      dispatch(setToken(res.data.token))
    })
  }
}

export const selectToken = (state: RootState) => state.auth.token
export const { setToken } = authStore.actions
export default authStore.reducer