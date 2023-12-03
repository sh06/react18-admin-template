import { lazyLoad } from '@/utils/router'
import Layout from '@/layout/index'
import { AuthRoute } from '@/components/AuthRoute'

const User = lazy(() => import('@/views/User/index'))
const UserAdd = lazy(() => import('@/views/User/add'))

export default {
  path: '/user',
  element: <AuthRoute><Layout /></AuthRoute>,
  children: [
    {
      index: true,
      element: lazyLoad(<User />)
    },
    {
      path: 'add',
      element: lazyLoad(<UserAdd />)
    }
  ]
}