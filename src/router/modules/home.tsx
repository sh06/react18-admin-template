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
      element: <Home />,
      icon: <DashboardOutlined />,
      permission: 'PERMISSION_DASHBOARD',
    },
    {
      path: 'dashboard',
      element: <Home />,
      icon: <DashboardOutlined />,
      permission: 'PERMISSION_DASHBOARD',
    }
  ]
} as RouteConfig