import { UserOutlined } from '@ant-design/icons'

import Index from '@/views/index'
//const Index = lazy(() => import('@/views/User/backend/index'))
const UserCustomerList = lazy(() => import('@/views/User/customer/list'))
const UserCustomerAdd = lazy(() => import('@/views/User/customer/add'))
const UserBackendList = lazy(() => import('@/views/User/backend/list'))
const UserBackendAdd = lazy(() => import('@/views/User/backend/add'))

export default {
  path: 'user',
  element: <Index />,
  icon: <UserOutlined />,
  permission: 'USER',
  pageShow: false,
  children: [
    {
      path: 'backend',
      element: <Index />,
      permission: 'USER_BACKEND',
      children: [
        {
          index: true,
          element: <UserBackendList />,
          permission: 'USER_BACKEND',
        },
        {
          path: 'add',
          element: <UserBackendAdd />,
          permission: 'USER_BACKEND_ADD',
        }
      ]
    },
    {
      path: 'customer',
      element: <Index />,
      permission: 'USER_CUSTOMER',
      children: [
        {
          index: true,
          element: <UserCustomerList />,
          permission: 'USER_CUSTOMER',
        },
        {
          path: 'add',
          element: <UserCustomerAdd />,
          permission: 'USER_CUSTOMER_ADD',
        },
      ]
    }
  ]
} as RouteChildrenConfig