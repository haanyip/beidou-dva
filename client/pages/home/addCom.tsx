import React, { PureComponent } from "react";
import { Icon, Tabs } from 'antd';
const { TabPane } = Tabs;
import styles from './index.module.less'

interface AddComProps{
  navBanner: Array<any>,
  onClick: (index:number, idx:number )=>void
}
class AddCom extends PureComponent <AddComProps >{
  static defaultProps = {
    navBanner: []
  }
  selectCompent = (index,inx) => {
    console.dir(index)
    if(this.props.onClick){
      this.props.onClick(index, inx)
    }
  }
  render() {
    const { navBanner } = this.props;
    return (
        <div className={styles['site-panel']} style={{width:'490px'}}>
            <div className={styles['page-container']}>
              <h3>
                添加组件
                <Icon type="close" className={styles['close']}/>
              </h3>
              <Tabs tabPosition='left' className={styles['menu-tabs']}>
                  {
                    navBanner.map((item,index)=>{
                      return (
                      <TabPane tab={item.title} key={index.toString()}>
                        {
                          item.components.map((c,inx)=>(
                            <div key={inx} className={styles['dnd-draggable-wrapper']} onClick={()=>this.selectCompent(index, inx)}>
                              <div>
                                <span className={styles['item-image']}>
                                  <img src={c.img} width={280}/>
                                </span>
                                <span className={styles['item-title']}>{c.title}</span>
                              </div>
                            </div>
                          ))
                        }
                      </TabPane>)
                    })
                  }
              </Tabs>
            </div>
          </div>
    )
  }
}
export default AddCom;