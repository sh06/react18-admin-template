import { Layout, Dropdown, Space, MenuProps } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import BreadcrumbContainer from './breadcrumb'
import { getAuthUserName } from '@/utils/auth'
import store from '@/store'

const { Header } = Layout

type HeaderProps = {
  collapsed: boolean,
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderContainer = ({
  collapsed,
  setCollapsed
}: HeaderProps) => {
  const username = getAuthUserName()
  const navigate = useNavigate()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onDropdownClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      onLogout()
    }
  };

  const onLogout = () => {
    store.dispatch({ type: "auth/clearToken" })
    navigate('/login')
  }

  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: '退出登录',
    }
  ];

  return (
    <Header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.headerLeftLogo} onClick={toggleCollapsed} >
          {collapsed ? <MenuUnfoldOutlined style={{fontSize: 16}} /> : <MenuFoldOutlined style={{fontSize: 16}} />}
        </div>
        <BreadcrumbContainer />
      </div>
      <div className={styles.headerRight}>
        <Dropdown menu={{ items, onClick: onDropdownClick }} >
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