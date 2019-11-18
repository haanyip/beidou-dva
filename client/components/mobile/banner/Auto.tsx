import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.module.less';
interface AutoProps {
  data: any[],
  onClick?: () => void;
  isPreview?: any;
}
const Auto: React.FC<AutoProps> = (props) => {
  const { data } = props.data;
  const link = (item) => {
    if (!props.isPreview) {
      location.href = item.link;
    }
    if(props.onClick){
      props.onClick()
    }
  }
  return (
    <div className={styles['banner-auto']}>
      <Carousel 
        autoplay
      >
        {
          data.map((item, index) => (
            <div
              key={index}
              className={styles['images-item']}
              onClick={(item)=>link(item)}
            >
              <img
                src={item.img}
                alt=""
                // onLoad={() => {
                //   window.dispatchEvent(new Event('resize'));
                // }}
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}
export default Auto;