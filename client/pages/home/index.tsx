import React, { PureComponent } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import axios from 'axios';
import { ConnectState } from '../../models/connect'
import { SettingModelState } from '../../models/setting'
import { HomeModelState } from '../../models/home'
import Header from '../../components/Header'
import AddCom from './addCom'
import PreView from './preview'
import ViewActive from '../../components/ViewActive'
import { Layout, Button, Icon, Empty, Spin, Progress } from 'antd';
import styles from './index.module.less'


interface HomeProps {
  dispatch: Dispatch<AnyAction>;
  setting: SettingModelState;
  home: HomeModelState;
}
interface HomeState {
  showAddCom: boolean,
  spinning: boolean,
  previewUrl: string,
  showPreviewModal: boolean;
}
@connect(({ setting, home }: ConnectState) => ({
  setting,
  home
}))
class Home extends PureComponent<HomeProps, HomeState>{

  constructor(props) {
    super(props);
    this.state = {
      showAddCom: false,
      spinning: false,
      previewUrl: '',
      showPreviewModal: false,
    }
  }
  componentDidMount() {

  }
  addClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/addPlaceholderComp',
      payload: 0
    })
    this.setState({
      showAddCom: true,
    })
  }
  bannerClick = (index, idx) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/addComp',
      payload: [index, idx]
    })
  }
  async onPreview() {
    const { previewData: { componentList } } = this.props.home
    this.setState({
      spinning: true,
      showPreviewModal: true
    })
    const res = await axios.post('/api/preview', {
      mobile: true,
      previewData: componentList
    })
    this.setState({
      spinning: false,
      previewUrl: res.data.data
    })
  }
  cancelPreView = () => {
    this.setState({
      showPreviewModal: false
    })
  }
  // 点击组件显示编辑
  eidtCompoent = (data) => {
    console.log('eidtCompoent')
    console.dir(data)
  }
  // 增加组件
  addTopCom = (data) => {
    const { dispatch } = this.props;
    const { index } = data;
    dispatch({
      type: 'home/addPlaceholderComp',
      payload: index
    })
  }
  // 增加组件
  addBottomCom = (data) => {
    const { dispatch } = this.props;
    const { index } = data;
    dispatch({
      type: 'home/addPlaceholderComp',
      payload: index==0?1:index
    })
  }
  renderComponent = () => {
    const { previewData: { componentList } } = this.props.home
    return componentList.map((item, index) => {
      if (item.comp) {
        const Component = require(`../../components/mobile/${item.comp}`).default
        return (
          <ViewActive
            onClick={this.eidtCompoent}
            data={Object.assign({}, item, { index })}
            addTopCom={this.addTopCom}
            addBottomCom={this.addBottomCom}
            key={index}
          >
            <Component {...item} key={index} isPreview={true} />
          </ViewActive>
        )
      } else {
        return <div className={styles['fengdie-drop']} key={index}>添加至此处</div>
      }
    })
  }
  render() {
    const { navBanner, previewData: { componentList } } = this.props.home
    const { showAddCom, spinning, previewUrl, showPreviewModal } = this.state;
    return (
      <Layout className={styles['base-layout']}>
        <Header onPreview={() => this.onPreview()} />
        <div className={styles['main-layout']}>
          {showAddCom && <AddCom navBanner={navBanner} onClick={this.bannerClick} />}
          <div className={styles['content-layout']}>
            <div className={styles['page-path-container']}>
              <div className={styles['page-path']}>
                <div className={styles['url']}>
                  <span>https://render.yunfengdie.cn/p/q/k0xfswgz/1569305241791.html</span>
                  <Icon type="edit" className={styles['eidt']} />
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
                    componentList.length > 0 ?
                      this.renderComponent()
                      :
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
        <PreView visible={showPreviewModal} onCancel={this.cancelPreView} url={previewUrl} spinning={spinning} />
      </Layout>
    );
  }
}
export default Home;
