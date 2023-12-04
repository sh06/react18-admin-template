import { Layout, Menu } from 'antd'
const { Sider } = Layout
import { MenuItem } from '@/utils/menu'
import styles from './index.module.scss'
import Logo from './logo'
import router from '@/router/index'

const onClickMenu = (menu) => {
  router.navigate(menu.key)
}

type SidebarProps = {
  collapsed: boolean
  menuItems: MenuItem[]
}

const SidebarContainer = ({
  collapsed,
  menuItems
}: SidebarProps) => {
  return (
    <Sider className={[styles.sidebar, collapsed ? null : styles.sidebarOpen ].join(' ')} collapsed={collapsed}>
      <Logo />
      <Menu
        className={styles.sidebarMenu}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={menuItems}
        onClick={onClickMenu}
      />
    </Sider>
  )
}

export default SidebarContainer