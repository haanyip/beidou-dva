import React from 'react';
import styles from './index.module.less';
import { Input } from 'antd';
const { TextArea } = Input;
interface TextProps {
  
}
const Text: React.FC<TextProps> = (props) => {
  return (
    <div className={styles['field-image']}>
      <div className={styles['item-image']}>
        <div className={styles['ui-label']}>
          <div className={styles['ui-label-title']}>
            文案
          </div>
        </div>
        <div className={styles['ui-content']}>
          <TextArea  rows={4} />
        </div>
      </div>
    </div>
  )
}
export default Text;