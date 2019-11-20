import React from 'react';
import { Button } from 'antd';
import styles from './index.module.less';
interface IData {
  index?: number;
  listLength?: number;
}
interface ViewActiveProps {
  children?: any;
  data?: IData;
  onClick?: (data)=>void ;
  addFigure: (data: object) => void;
  onMoveUp: (data) => void;
  onMoveDown: (data) => void;
  onCopy: (data) => void;
  onDelete: (data) => void;
}
const ViewActive: React.FC<ViewActiveProps> = (props) => {
  const { children, onClick, data, addFigure, onMoveUp, onMoveDown, onCopy, onDelete  } = props;
  const { index, listLength } = data;
  const onViewClick = (e) => {
    e.preventDefault();
    onClick(data)
  }
  const addTop = (e) => {
    e.preventDefault();
    addFigure({ ...data, direction: 'top' })
  }
  const addBottom = (e) => {
    e.preventDefault();
    addFigure({ ...data, direction: 'bottom' })
  }
  const moveUp = (e) => {
    e.preventDefault();
    onMoveUp(data)
  }
  const moveDown = (e) => {
    e.preventDefault();
    onMoveDown(data)
  }
  const copy = (e) => {
    e.preventDefault();
    onCopy(data)
  }
  const deleted = (e) => {
    e.preventDefault();
    onDelete(data)
  }
  return (
    <div className={styles['se-preview-container']} >
      <div className={styles['tools-item-top']} onClick={addTop}></div>
      <div>
        <div onClick={onViewClick}>{children}</div>
      </div>
      <div className={styles['se-view-tools']}>
        {
          index > 0 ? <div className={styles['arrow-up']} >
            <Button shape="circle" icon="arrow-up" onClick={moveUp} />
          </div> : ""
        }
        {
          index < listLength-1?  <div className={styles['arrow-down']}>
          <Button shape="circle" icon="arrow-down" onClick={moveDown} />
        </div>:''
        }
       
        <div className={styles['sev-tools-copy']}>
          <Button shape="circle" icon="copy" onClick={copy}/>
        </div>
        <div className={styles['sev-tools-delete']}>
          <Button shape="circle" icon="delete" onClick={deleted}/>
        </div>
      </div>
      <div className={styles['tools-item-bottom']} onClick={addBottom}></div>
    </div>
  )
}
export default ViewActive;