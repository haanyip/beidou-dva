import React from 'react';
import { Icon } from 'antd';
import styles from './index.module.less'
interface ComponentProps {
  onClose: () => void;
  data?: { data?: any, json?: any };
  selectIndex: number;
}
const Component: React.FC<ComponentProps> = (props) => {
  const { onClose, selectIndex } = props;
  const { data, json } = props.data;
  const onUpload = (url) => {
    console.dir(url)
  }
  const renderItem = () => {
    return Object.values(json.properties).map((item:any, index) => {
      const C = require(`../../components/modal/${item.type}`).default;
      const itemData = json.type === 'object'?Object.assign({},item, data):Object.assign({},item, data[index])
      return <C 
        data={itemData} 
        key={index}
        upload={onUpload}
      />
    })
  }
  return (
    <div>
      <div className={styles['site-panel']}>
        <div className={styles['se-editor']}>
          <div className={styles['page-container']}>
            <h3>
              {json.description}
              <Icon type="close" className={styles['close']} onClick={onClose} />
            </h3>
            <div className={styles['schema-editor-scroll']}>
              <div className={styles['schema-editor-container']}>
                {
                  renderItem()
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Component;