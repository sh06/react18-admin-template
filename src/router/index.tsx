import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import { lazyLoad } from '@/utils/router'

const Home = lazy(() => import('@/views/Home/index'))
const Login = lazy(() => import('@/views/Login/index'))

const router = createBrowserRouter([
  {
    path: '/login',
    element: lazyLoad(<Login />)
  },
  {
    path: '/',
    element: lazyLoad(<Home />)
  },
])

export default router