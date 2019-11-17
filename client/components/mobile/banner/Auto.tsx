import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.module.less';
interface AutoProps {
  data: any[],
  onClick?: () => void;
}
const Auto: React.FC<AutoProps> = (props) => {
  const { data } = props.data;
  const link = (item) => {
    if (props.onClick) {
      props.onClick();
    } else {
      location.href = item.link;
    }

  }
  return (
    <div className={styles['banner-auto']}>
      <Carousel 
        autoplay
      >
        {
          data.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={styles['images-item']}
              onClick={(item)=>link(item)}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${item.img}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))
        }
      </Carousel>
    </div>
  )
}
export default Auto;