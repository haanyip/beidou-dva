import React from 'react';
import Icon from '../Icon/index';

import styles from './index.module.less';

interface DropDownProps {

}
const DropDown:  React.FC<DropDownProps> = ({}) =>{
  const onClick = () => {
    console.log('========')
  }
  return(
    <div className={styles['dropdown']}>
      <Icon type="arrow_multi-trip-" onClick={onClick}/>
    </div>
  )
  
}
export default DropDown;