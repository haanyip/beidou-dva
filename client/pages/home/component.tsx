import React from 'react';
import { Icon, Collapse } from 'antd';
import styles from './index.module.less'
const { Panel } = Collapse;
interface ComponentProps {
  onClose: () => void;
  data?: { data?: any, json?: any };
  upChangeData: (data) => void;
}
const Component: React.FC<ComponentProps> = (props) => {
  const { onClose, upChangeData } = props;
  const { data, json } = props.data;
  // 图片改变
  const onUpload = (url, index) => {
    if (json.type === 'object') {
      data.img = url
    } else {
      data[index].img = url
    }
    upChangeData(data)
  }
  // URL 事件
  const onUrlBlur = (e, index) => {
    if (json.type === 'object') {
      data.link = e.target.value
    } else {
      data[index].link = e.target.value
    }
    upChangeData(data)
  }
  // 操作栏
  const genExtra = () => {
    return (
      <div className={styles['row-options']}>
        <div className={styles['row-item']}>
          <Icon type="edit" />
        </div>
        <div className={styles['row-item']}>
          <Icon type="copy" />
        </div>
        <div className={styles['row-item']}>
          <Icon type="delete" />
        </div>
      </div>)
  }
  const renderList = (values: any) => {
    if (json.type === 'object') {
      return renderItem(values, 0)
    } else {
      return (
      <Collapse>
        {
          values.map((item, index) => (
            <Panel header={<div className={styles['panel-title']}>{item.title}</div>} className={styles['panel']} extra={genExtra()}>
              {renderItem(item, index)}
            </Panel>
          ))
        }
      </Collapse>)

    }
  }
  const renderItem = (value, currentIndex) => {
    return Object.values(json.properties).map((item: any, index) => {
      const C = require(`../../components/modal/${item.type}`).default;
      return <C
        data={Object.assign({}, item, value)}
        key={index}
        upload={(url) => onUpload(url, currentIndex)}
        onUrlBlur={(link) => onUrlBlur(link, currentIndex)}
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
                  renderList(data)
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