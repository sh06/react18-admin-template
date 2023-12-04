import React from 'react'
import { Layout } from 'antd'
import SidebarContainer from './sidebar'
import HeaderContainer from './header'
import ContentContainer from './content'
import { makeMenu } from '@/utils/menu'

import styles from './index.module.scss'

import store from '@/store/index'

const LayoutContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const menuItems = makeMenu(store.getState().auth.menu)

  return (
    <Layout className={styles.layout} >
      <SidebarContainer collapsed={collapsed} menuItems={menuItems} />
      <Layout className="site-layout">
        <HeaderContainer collapsed={collapsed} setCollapsed={setCollapsed} />
        <ContentContainer />
      </Layout>
    </Layout>
  );
};

export default LayoutContainer