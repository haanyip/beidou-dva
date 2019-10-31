import React from 'react';
import { Icon } from 'antd';
import styles from './index.module.less';

interface ViewActiveProps {
  children?: any;
  data?: object;
  onClick?: any;
  addTopCom?: any;
  addBottomCom?: any;
}
const ViewActive:  React.FC<ViewActiveProps> = ( props ) =>{
  const { children, onClick, data, addTopCom, addBottomCom } = props;
  const onViewClick = (e) => {
    e.preventDefault();
    onClick(data)
  }
  const onTopClick = (e) => {
    e.preventDefault();
    addTopCom(data)
  }
  const onBottomClick = (e) => {
    e.preventDefault();
    addBottomCom(data);
  }
  return (
    <div className={styles['se-preview-container']} >
      <div className={styles['tools-item-top']} onClick={onTopClick}></div>
      <div>
        <div onClick={onViewClick}>{children}</div>
      </div>
      <div className={styles['se-view-tools']}>
        <div className={styles['sev-tools-move']}>
          <Icon type="arrow-up" />
          <Icon type="arrow-down" />
        </div>
        <div className={styles['sev-tools-copy']}></div>
        <div className={styles['sev-tools-delete']}></div>
      </div>
      <div className={styles['tools-item-bottom']} onClick={onBottomClick}></div>
    </div>
  )
}
export default ViewActive;