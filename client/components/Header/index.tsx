import React from 'react';
import { Icon,Button } from 'antd';
import styles from './index.module.less';

interface HeaderProps {

}
const Header:  React.FC<HeaderProps> = ( props ) =>(
  <div className={styles['header']}>
    <div className={styles['nav']}>
      <div className={styles['logo']}></div>
      <div className={styles['title']}>
        <Icon type="bars" />
        <span>界面:</span>
        <span>新建页面</span>
      </div>
    </div>
    <div className={styles['action']}>
      <span className={styles['action-save-time']}>保存于: 14:35:56</span>
      <span className={styles['action-preview']}>
        <Icon type="eye" />预览
      </span>
      <span className={styles['action-save']}>
        <Icon type="save" />保存
      </span>
      <div className={styles['action-wrap']}>
        <Button type="primary"  icon="global">发布</Button>
      </div>
    </div>
  </div>
)
export default Header;