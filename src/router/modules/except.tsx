import { AuthRoute } from '@/components/AuthRoute'
import { lazyLoad } from '@/utils/router'

const Login = lazy(() => import('@/views/Login/index'))
const Error404 = lazy(() => import('@/views/Error/404'))

export default [
  {
    path: '/login',
    element: <AuthRoute><Login /></AuthRoute>,
  },
  {
    path: '*',
    element: lazyLoad(<Error404 />)
  }
]