import { createSlice } from "@reduxjs/toolkit"
import { clearAuth, getAuthItem, setAuthItem } from "@/utils/auth"
import { RootState } from "@/types/store"

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
    },
    clearToken(state) {
      state.token      = ''
      state.username   = ''
      state.user_id    = ''
      state.menu       = []
      state.permission = []
      clearAuth()
    }
  }
})

export const selectToken = (state: RootState) => state.auth.token
export const { setToken } = authStore.actions
export default authStore.reducer