import React, { PureComponent } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { ConnectState } from '../../models/connect'
import { SettingModelState } from '../../models/setting'
import { HomeModelState } from '../../models/home'
import Header from '../../components/Header'
import  AddCom from './addCom'
import { Layout, Button, Icon, Empty } from 'antd';
import styles from './index.module.less'


interface HomeProps {
  dispatch: Dispatch<AnyAction>;
  setting: SettingModelState;
  home: HomeModelState;
}
interface HomeState {
  showAddCom: boolean
}
@connect(({ setting, home }: ConnectState) => ({
  setting,
  home
}))
class Home extends PureComponent <HomeProps, HomeState >{
  
  constructor(props) {
    super(props);
    this.state= {
      showAddCom: false
    }
  }
  componentDidMount(){
    
  }
  addClick=()=>{
    this.setState({
      showAddCom:true
    })
  }
  render() {
    const { navBanner, previewData:{ componentList } } = this.props.home
    const { showAddCom } = this.state;
    return (
      <Layout className={styles['base-layout']}>
        <Header />
        <div className={styles['main-layout']}>
          {showAddCom && <AddCom navBanner={navBanner}/>}
          <div className={styles['content-layout']}>
              <div className={styles['page-path-container']}>
                <div className={styles['page-path']}>
                  <div className={styles['url']}>
                    <span>https://render.yunfengdie.cn/p/q/k0xfswgz/1569305241791.html</span>
                    <Icon type="edit" className={styles['eidt']}/>
                  </div>
                  <div className={styles['share']}>
                    <Icon type="share-alt" />
                  </div>
                </div>
              </div>
              <div className={styles['preview-box']}>
                <div className={styles['preview-iframe']}>
                  <div className={styles['preview-scroll']}>
                    {
                      componentList.length>0?'': 
                      <Empty
                        image="https://gw.alipayobjects.com/zos/rmsportal/vCbMpJlWAzfHGqOtzFCD.png"
                        imageStyle={{
                          height: 180,
                        }}
                        description=''
                      >
                        <Button type="primary" onClick={this.addClick}>请添加组件</Button>
                      </Empty>
                    }
                    {/* <Spin tip="更新中..." spinning={this.state.loading} >
                      <div className={styles['spin-container']}>
                        <iframe src="https://xtech.antfin.com/"  style={{width:'375px',height: '100%'}}></iframe>
                      </div>
                    </Spin> */}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home;
