import { lazyLoad } from '@/utils/router'

const Home = lazy(() => import('@/views/Home/index'))

export default {
  path: '/',
  children: [
    {
      index: true,
      element: lazyLoad(<Home />)
    }
  ]
}