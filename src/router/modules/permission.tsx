import { UserOutlined } from '@ant-design/icons'

const Index = lazy(() => import('@/views/index'))
const PermissionMenu = lazy(() => import('@/views/Permission/menu'))
const PermissionRole = lazy(() => import('@/views/Permission/role'))

export default {
  path: 'permission',
  element: <Index />,
  icon: <UserOutlined />,
  permission: 'PERMISSION',
  pageShow: false,
  children: [
    {
      path: 'menu',
      element: <Index />,
      permission: 'PERMISSION_MENU',
      children: [
        {
          index: true,
          element: <PermissionMenu />,
          permission: 'PERMISSION_MENU',
        }
      ]
    },
    {
      path: 'role',
      element: <Index />,
      permission: 'PERMISSION_ROLE',
      children: [
        {
          index: true,
          element: <PermissionRole />,
          permission: 'PERMISSION_ROLE',
        }
      ]
    }
  ]
} as RouteChildrenConfig