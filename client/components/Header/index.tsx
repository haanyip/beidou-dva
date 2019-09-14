import React from 'react';
import DropDown from './dropdown'
import styles from './index.module.less';

interface HeaderProps {

}
const Header:  React.FC<HeaderProps> = ( props ) =>(
  <div className={styles['header']}>
    <img className={styles['logo']} src={require('../../assets/images/icon_overseas_navbar_logo@2x.png')} />
    <DropDown/>
  </div>
)
export default Header;