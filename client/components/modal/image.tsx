import React from 'react';
import styles from './index.module.less';
import { Upload, Icon } from 'antd'
interface ImageProps {
  data: any;
  upload:(url)=>void;
}
const Image: React.FC<ImageProps> = (props) => {
  const { description, meta, img} = props.data;
  const onChange = (info) => {
    if (info.file.status === 'done') {
      console.log(info)
      props.upload(info.file.response.data.url)
    }
  }
  return (
    <div className={styles['field-image']}>
      <div className={styles['item-image']}>
        <div className={styles['ui-label']}>
          <div className={styles['ui-label-title']}>
            {description}
            <p title={meta.description}>{meta.description}</p>
          </div>
          <div>
            <Upload
              action="/api/upload"
              onChange={onChange}
            >
              <Icon type="picture" /> 选择图片
            </Upload>
          </div>
        </div>
        <div className={styles['ui-content']}>
          <div className={styles['item-image-preview']}>
            <img src={img} className={styles['image']}/>
            <div className={styles['item-image-preview-ur']}>
              {img&&img.split('/').pop()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Image;