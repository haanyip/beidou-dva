import React from 'react';
import { Icon } from 'antd';
import styles from './index.module.less';

interface ViewActiveProps {
  children?: any;
  data?: object;
  onClick?: any;
  addFigure:(data:object)=> void;
}
const ViewActive:  React.FC<ViewActiveProps> = ( props ) =>{
  const { children, onClick, data, addFigure  } = props;
  const onViewClick = (e) => {
    e.preventDefault();
    onClick(data)
  }
  const addTop = (e) => {
    e.preventDefault();
    addFigure({...data, direction: 'top'})
  }
  const addBottom = (e) => {
    e.preventDefault();
    addFigure({...data, direction: 'bottom'})
  }
  return (
    <div className={styles['se-preview-container']} >
      <div className={styles['tools-item-top']} onClick={addTop}></div>
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
      <div className={styles['tools-item-bottom']} onClick={addBottom}></div>
    </div>
  )
}
export default ViewActive;