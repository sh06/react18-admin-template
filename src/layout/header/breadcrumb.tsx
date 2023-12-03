import { Breadcrumb } from 'antd';
import styles from './breadcrumb.module.scss'

const BreadcrumbContainer = () => {
  return (
    <Breadcrumb className={styles.breadcrumb}
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
  )
}

export default BreadcrumbContainer