import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
const { Sider } = Layout

import styles from './index.module.scss'

import React from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import Logo from './logo'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首页', '/', <PieChartOutlined />),

  getItem('系统管理', '/system', <MailOutlined />, [
    getItem('用户管理', '/user'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
  ]),
];

const onClickMenu = (menu) => {
  console.log(menu.key)
}

type SidebarProps = {
  collapsed: boolean
}

const SidebarContainer = ({
  collapsed
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
        items={items}
        onClick={onClickMenu}
      />
    </Sider>
  )
}

export default SidebarContainer