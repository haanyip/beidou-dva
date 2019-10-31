import React from 'react';
import styles from './index.module.less';

interface NormalPadProps {
  img?: string;
  link?: string;
  isPreview?: boolean;
}
const NormalPad: React.FC<NormalPadProps> = (props) => {
  const link = () => {
    if (!props.isPreview) {
      location.href = props.link;
    }
  }
  return (
    <div className={styles['normal-pad']} onClick={link}>
      <img src={props.img} />
    </div>
  )
}
export default NormalPad;