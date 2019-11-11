/**组件菜单列表 */
import React from "react";
import { Icon, Tabs } from 'antd';
const { TabPane } = Tabs;
import styles from './index.module.less'

interface MenuProps {
  navBanner: Array<any>;
  onClick: (index: number, idx: number) => void;
  onClose?: () => void;
}
const Menu: React.FC<MenuProps> = (props) => {
  const { navBanner, onClick, onClose } = props;
  const onChange = (index, inx) => {
    if (onClick) {
      onClick(index, inx)
    }
  }
  return (
    <div className={styles['site-panel']}>
      <div className={styles['page-container']}>
        <h3>
          添加组件
          <Icon type="close" className={styles['close']} onClick={onClose} />
        </h3>
        <Tabs tabPosition='left' className={styles['menu-tabs']}>
          {
            navBanner.map((item, index) => {
              return (
                <TabPane tab={item.title} key={index.toString()}>
                  {
                    item.components.map((c, inx) => (
                      <div key={inx} className={styles['dnd-draggable-wrapper']} onClick={() => onChange(index, inx)}>
                        <div>
                          <span className={styles['item-image']}>
                            <img src={c.img} width={280} />
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
export default Menu;