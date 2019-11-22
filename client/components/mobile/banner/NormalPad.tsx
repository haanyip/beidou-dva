import React from 'react';
import { IComponentData } from '../../../interface'
import styles from './index.module.less';

interface NormalPadProps {
  data?: IComponentData;
  isPreview?: boolean;
  onClick?: ()=> void;
}
const NormalPad: React.FC<NormalPadProps> = (props) => {
  const { data} = props;
  const link = () => {
    if (!props.isPreview && data.data.link) {
      location.href = data.data.link;
    }
    if(props.onClick){
      props.onClick()
    }
  }
  return (
    <div className={styles['normal-pad']} onClick={link}>
      <img src={ data.data.img } />
    </div>
  )
}
export default NormalPad;