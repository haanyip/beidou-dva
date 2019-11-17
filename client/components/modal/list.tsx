import React from 'react';
import styles from './index.module.less';
import { Icon } from 'antd';
interface ListProps {
  children?: React.ReactNode
}
const List: React.FC<ListProps> = (props) => {
  return (
    <div className={styles['field-image']}>
      <div className={styles['ui-content']}>
        <div className={styles['row']}>
          <div className={styles['title']}>
            <div className={styles['row-title']}>
              <Icon type="bars" />
              <div className={styles['title-name']}>标签一</div>
            </div>
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
            </div>
          </div>
        </div>
        <div className={styles['results']}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default List;