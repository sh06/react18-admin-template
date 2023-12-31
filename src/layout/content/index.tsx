import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout

import styles from './index.module.scss'

const ContentContainer = () => {
  return (
    <>
      <Content className={styles.content}>
        <Outlet />
        <div>
          <p>long content</p>
          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
        </div>
      </Content>
    </>
  )
}

export default ContentContainer