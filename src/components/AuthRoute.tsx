import { getAuthToken } from "@/utils/auth"

export const AuthRoute = ({ children }) => {
  const token = getAuthToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace />
  }
}