import React from 'react';
import styles from './index.module.less';
import { Input } from 'antd';
interface UrlProps {
  link: string;
  onUrlBlur: (value) => void;
}
const Url: React.FC<UrlProps> = (props) => {
  const { link, onUrlBlur } = props;
  return (
    <div className={styles['field-image']}>
      <div className={styles['item-image']}>
        <div className={styles['ui-label']}>
          <div className={styles['ui-label-title']}>
            链接
          </div>
        </div>
        <div className={styles['ui-content']}>
          <Input
            defaultValue={link}
            onBlur={onUrlBlur} />
        </div>
      </div>
    </div>
  )
}
export default Url;