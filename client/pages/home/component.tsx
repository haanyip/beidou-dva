import React, { useState } from 'react';
import { Icon, Collapse, Button } from 'antd';
import styles from './index.module.less'
const { Panel } = Collapse;
interface ComponentProps {
  onClose: () => void;
  data?: { data?: any, json?: any; defaultData?: any };
  upChangeData: (data) => void;
}
const Component: React.FC<ComponentProps> = (props) => {
  const { onClose, upChangeData } = props;
  const { data, json, defaultData } = props.data;
  // const [selectindex, setSelectIndex] = useState[0]
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
  // 
  const copyItem = (index, e) => {
    e.stopPropagation()
    index.split('-').map(item=>{
      const j = item.split(':');
      if(j.length === 0){
        data.push(data[index])
      }else{
        data[j[1]][j[0]].push(defaultData[j[0]][0])
      }
    })
    upChangeData(data)
  }
  const deleteItem = (index, e) => {
    e.stopPropagation()
    console.dir(index)
    index.split('-').map(item=>{
      const j = item.split(':');
      if(j.length === 0){
        data.splice(index, 1)
      }else{
        // data[j[1]][j[0]].splice(j[1],1)
      }
    })
    upChangeData(data)
  }
  // 操作栏
  const genExtra = (index) => {
    return (
      <div className={styles['row-options']}>
        <div className={styles['row-item']}>
          <Icon type="edit" />
        </div>
        <div className={styles['row-item']} >
          <Icon type="copy" onClick={(e) => copyItem(index, e)} />
        </div>
        <div className={styles['row-item']} >
          <Icon type="delete" onClick={(e) => deleteItem(index, e)} />
        </div>
      </div>)
  }
  const addItem = (key) => {
    if (key) {
      const keys = key.split('-')
      keys.map(item=>{
        const j = item.split(':')
        data[j[1]][j[0]].push(defaultData[j[0]][0])
        upChangeData(data)
      })
    } else {
      upChangeData([...data, defaultData])
    }
  }
  const renderList = (values: any, json, key) => {
    if (json.type === 'object') {
      return renderItem(values, 0, json, key)
    } else {
      return (
        <>
          <Collapse
            accordion={true}
            bordered={false}
          >
            {
              values.map((item, index) => (
                <Panel
                  key={index}
                  header={
                  <div className={styles['panel-title']}>{index+1}. {item.title}</div>
                  }
                  className={styles['panel']}
                  extra={genExtra(key?key:`${index}`)}>
                  {renderItem(item, index, json, key)}
                </Panel>
              ))
            }
          </Collapse>
          <div className={styles['add-link']}>
            <Button type="link" block onClick={() => addItem(key)}>
              <Icon type="plus" /> 新增列表项
            </Button>
          </div>
        </>
      )
    }
  }
  const renderItem = (value, currentIndex, json, key) => {
    return Object.keys(json.properties).map((item: any, index) => {
      if (json.properties[item].properties) {
        return renderList(data[currentIndex][item], json.properties[item], key ? `${key}-${item}:${currentIndex}` : `${item}:${currentIndex}`)
      } else {
        const C = require(`../../components/modal/${json.properties[item].type}`).default;
        return <C
          data={Object.assign({}, json.properties[item], value)}
          key={index}
          upload={(url) => onUpload(url, currentIndex)}
          onUrlBlur={(link) => onUrlBlur(link, currentIndex)}
        />
      }
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
                  renderList(data, json, null)
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