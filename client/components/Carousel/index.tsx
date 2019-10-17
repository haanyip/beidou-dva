import React from 'react';
import { Carousel } from 'antd-mobile';

import styles from './index.module.less';

interface HeaderProps {

}
const Banner:  React.FC<HeaderProps> = ( props ) =>(
  <div className={styles['carousel']}>
     <Carousel
          autoplay={false}
          infinite
        >

              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png"
                alt=""
                className={styles['image']}
              />
        </Carousel>
  </div>
)
export default Banner;