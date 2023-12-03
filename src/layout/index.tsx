import React from 'react'
import { Layout } from 'antd'
import SidebarContainer from './sidebar'
import HeaderContainer from './header'
import ContentContainer from './content'

import styles from './index.module.scss'

const LayoutContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className={styles.layout} >
      <SidebarContainer collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderContainer collapsed={collapsed} setCollapsed={setCollapsed} />
        <ContentContainer />
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;