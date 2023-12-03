import store from "@/store"

type RouteProps = {
  children?: React.ReactNode
}

const homeRoute = '/'
const loginRoute = '/login'

export const AuthRoute: React.FC<RouteProps> = ({ children }) => {
  const token = store.getState().auth.token

  if (location.pathname == '/login') {
    if (token) {
      return <Navigate to={homeRoute} replace />
    } else {
      return <>{children}</>
    }
  } else {
    if (token) {
      return <>{children}</>
    } else {
      return <Navigate to={loginRoute} replace />
    }
  }
}