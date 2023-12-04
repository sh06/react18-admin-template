import { lazyLoad } from '@/utils/router'
import Layout from '@/layout/index'
import { AuthRoute } from '@/components/AuthRoute'
import { DashboardOutlined } from '@ant-design/icons'

const Home = lazy(() => import('@/views/Home/index'))

export default {
  path: '/',
  element: <AuthRoute><Layout /></AuthRoute>,
  icon: <DashboardOutlined />,
  permission: 'PERMISSION_DASHBOARD',
  children: [
    {
      index: true,
      element: lazyLoad(<Home />),
      icon: <DashboardOutlined />,
      permission: 'PERMISSION_DASHBOARD',
    } 
  ]
} as RouteConfig