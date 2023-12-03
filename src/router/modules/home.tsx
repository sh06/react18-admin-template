import { lazyLoad } from '@/utils/router'
import Layout from '@/layout/index'

const Home = lazy(() => import('@/views/Home/index'))

export default {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: lazyLoad(<Home />)
    }
  ]
}