import React from 'react';
import styles from './index.module.less';
import ReactUeditor from '../Ueditor'

interface RichTextProps {
  
}
const RichText: React.FC<RichTextProps> = (props) => {
  return (
    <div className={styles['field-image']}>
      <div className={styles['item-image']}>
        <div className={styles['ui-label']}>
          <div className={styles['ui-label-title']}>
            内容
          </div>
        </div>
        <div className={styles['ui-content']}>
          <ReactUeditor />
        </div>
      </div>
    </div>
  )
}
export default RichText;