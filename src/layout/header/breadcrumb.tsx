import { Breadcrumb } from 'antd';
import styles from './breadcrumb.module.scss'
import { useMatches } from 'react-router-dom';

const BreadcrumbContainer = () => {

  const match = useMatches()
  console.log(match)
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