import { lazyLoad } from '@/utils/router'
import Layout from '@/layout/index'
import { AuthRoute } from '@/components/AuthRoute'

const Home = lazy(() => import('@/views/Home/index'))

export default {
  path: '/',
  element: <AuthRoute><Layout /></AuthRoute>,
  children: [
    {
      index: true,
      element: lazyLoad(<Home />)
    }
  ]
}