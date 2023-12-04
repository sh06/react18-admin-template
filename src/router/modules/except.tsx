import { AuthRoute } from '@/components/AuthRoute'

import Login from '@/views/Login/index'
const Error404 = lazy(() => import('@/views/Error/404'))

export default [
  {
    path: '/login',
    element: <AuthRoute><Login /></AuthRoute>,
  },
  {
    path: '*',
    element: <Error404 />
  }
] as RouteConfig[]