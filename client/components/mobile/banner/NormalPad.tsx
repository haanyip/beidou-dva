import React from 'react';
import styles from './index.module.less';

interface NormalPadProps {
  img?: string;
  link?: string;
  onClick?: () => void;
}
const NormalPad: React.FC<NormalPadProps> = (props) => {
  const link = () => {
    if (props.onClick) {
      props.onClick();
    } else {
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