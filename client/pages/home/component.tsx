import React from 'react';
import { Icon, Avatar } from 'antd';
import styles from './index.module.less'
interface ComponentProps {
  onClose:()=> void;
}
const Component: React.FC<ComponentProps> = (props) => {
  const { onClose } = props;
  return (
    <div>
       <div className={styles['site-panel']}>
        <div className={styles['se-editor']}>
          <div className={styles['page-container']}>
            <h3>
              banner
              <Icon type="close" className={styles['close']} onClick={onClose}/>
            </h3>
            <div className={styles['schema-editor-scroll']}>
              <div className={styles['ui-label']}>
                <span className={styles['ui-label-title']}>图片</span>
                <span>建议尺寸: 750*280</span>
                <span>选择图片</span>
              </div>
              <div className={styles['ui-content']}>
                <div className={styles['item-image-preview']}>
                  <Avatar shape="square" size={64} icon="user" />
                  <span className={styles['item-image-preview-url']}>JRmzNcWymcwpVRSISlbM.png</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}
export default Component;