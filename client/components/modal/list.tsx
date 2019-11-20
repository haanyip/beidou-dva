import React from 'react';
import styles from './index.module.less';
import { Icon, Collapse } from 'antd';
const { Panel } = Collapse;
interface ListProps {
  title: string;
  children?: React.ReactNode;
}
const List: React.FC<ListProps> = (props) => {
  const genExtra = () => {
    return (
      <div className={styles['row-options']}>
        <div className={styles['row-item']}>
          <Icon type="edit" />
        </div>
        <div className={styles['row-item']}>
          <Icon type="copy" />
        </div>
        <div className={styles['row-item']}>
          <Icon type="delete" />
        </div>
      </div>)
  }
  return (
    <Collapse
    >
      <Panel header={<div className={styles['panel-title']}>{props.title}</div>} className={styles['panel']} extra={genExtra()}>
        {props.children}
      </Panel>
    </Collapse>
  )
}
export default List;