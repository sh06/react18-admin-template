import { Layout, Dropdown, Space, MenuProps } from 'antd'
const { Header } = Layout
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import BreadcrumbContainer from './breadcrumb'
import { getAuthUserName } from '@/utils/auth'

const HeaderContainer = () => {
  const collapsed = false
  const username = getAuthUserName()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a href="/logout">退出登录</a>
      ),
    }
  ];

  return (
    <Header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLeftLogo}>
          {collapsed ? <MenuUnfoldOutlined style={{fontSize: 16}} /> : <MenuFoldOutlined style={{fontSize: 16}} />}
        </div>
        <BreadcrumbContainer />
      </div>
      <div className={styles.headerRight}>
        <Dropdown menu={{ items }}>
          <a className={styles.headerRightMenu} onClick={(e) => e.preventDefault()}>
            <Space>
              {username}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  )
}

export default HeaderContainer