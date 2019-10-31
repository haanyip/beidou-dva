import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.module.less';

interface AutoProps {
  img?: string;
  link?: string;
  onClick?: () => void;
}
const Auto: React.FC<AutoProps> = (props) => {
  console.dir(props)
  const link = () => {
    if (props.onClick) {
      props.onClick();
    } else {
      location.href = props.link;
    }

  }
  return (
    <div className={styles['banner-auto']}>
      <Carousel 
        vertical
        autoplay
        infinite
        speed={200}
        autoplayInterval={300}
      >
        <a className={styles['images']}>
          <img src='https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png'/>
        </a>
        
      </Carousel>
    </div>
  )
}
export default Auto;