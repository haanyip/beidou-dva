import React from 'react';
import { Carousel } from 'antd-mobile';
import { IComponentData } from '../../../interface'
import styles from './index.module.less';
interface AutoProps {
  data: IComponentData,
  onClick?: () => void;
  isPreview?: any;
}
const Auto: React.FC<AutoProps> = (props) => {
  const { data } = props.data;
  const link = (item) => {
    if (!props.isPreview && item.link) {
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
        infinite
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
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}
export default Auto;