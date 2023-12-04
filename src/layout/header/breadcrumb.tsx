import { Breadcrumb } from 'antd';
import styles from './breadcrumb.module.scss'
import { useMatches } from 'react-router-dom';

const BreadcrumbContainer = () => {

  const match = useMatches()
  let items = []

  for (let i of match) {
    items.push({
      title: <a href={i.pathname}>{i.id}</a>,
    })
  }

  return (
    <Breadcrumb className={styles.breadcrumb}
    items={items}
  />
  )
}

export default BreadcrumbContainer