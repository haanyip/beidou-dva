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
  const { data } = props.data;
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
        autoplay
      >
        {
          data.map((item, index) => (
            <a
              key={index}
              href={item.link}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
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