import React from 'react';
import styles from './index.module.less';
import { Input } from 'antd';
const { TextArea } = Input;
interface TextProps {
  data: {
    description: string;
  };
}
const Text: React.FC<TextProps> = (props) => {
  const { description } = props.data;
  return (
    <div className={styles['field-image']}>
      <div className={styles['item-image']}>
        <div className={styles['ui-label']}>
          <div className={styles['ui-label-title']}>
            {description}
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