import React from 'react'
import { Layout } from 'antd'
import SidebarContainer from './sidebar'
import HeaderContainer from './header'
import ContentContainer from './content'

import styles from './index.module.scss'

const LayoutContainer: React.FC = () => {
  return (
    <Layout className={styles.layout} >
      <SidebarContainer />
      <Layout className="site-layout">
        <HeaderContainer />
        <ContentContainer />
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;