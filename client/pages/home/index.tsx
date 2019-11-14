import React, { PureComponent } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import axios from 'axios';
import { ConnectState } from '../../models/connect'
import { SettingModelState } from '../../models/setting'
import { HomeModelState } from '../../models/home'
import Header from '../../components/Header'
import Menu from './menu'
import PreView from './preview'
import Component from './component'
import ViewActive from '../../components/viewActive'
import { Layout, Button, Icon, Empty } from 'antd';
import styles from './index.module.less'


interface HomeProps {
  dispatch: Dispatch<AnyAction>;
  setting: SettingModelState;
  home: HomeModelState;
}
interface HomeState {
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
      spinning: false,
      previewUrl: '',
      showPreviewModal: false,
    }
  }
  componentDidMount() {

  }
  // 选中菜单中某个组件
  menuComponentChange = (index, idx) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/addComponent',
      payload: [index, idx]
    });
    this.changeMenuModalStatus(false);
    this.changeComponentModalStatus(true);
  }
  // 预览
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
  // 关闭组件弹框
  componnetClose = () => {
    this.closeModal();
  }
  // 关闭菜单栏组件弹框
  menuClose = () => {
    this.closeModal();
  }
  // 关闭弹框统一处理
  closeModal() {
    this.changeMenuModalStatus(false);
    this.changeComponentModalStatus(false);
    this.filterFigureComponent();
  }
  // 点击组件面板 弹窗编辑组件界面
  clickPreviewPanelComponent = (index) => {
    this.changeComponentModalStatus(true);
    this.setChangeComponnetData(index);
  }
  setChangeComponnetData(index) {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/setSelectComponnetIndex',
      payload: index
    })
  }
  // 空界面点击事件
  clickEmpty = () => {
    this.addFigure({ direction: 'top', index: 0 })
  }
  // 控制组件编辑界面
  changeComponentModalStatus(status: boolean) {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/changeComponentModalStatus',
      payload: status
    })
  }
  // 去除占位组件 ，用于点击了关闭事件
  filterFigureComponent() {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/filterFigureComponent',
      payload: ''
    })
  }
  // 控制menu 菜单显示
  changeMenuModalStatus(status: boolean) {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/changeMenuModalStatus',
      payload: status
    })
  }
  // 增加占位组件事件
  addFigure = (data) => {
    if (data.direction === 'top') {
      this.addFigureToTop(data)
    } else {
      this.addFigureToBottom(data)
    }
    // 本来可以将这块业务写到 addFigure 业务里面，但是个人感觉一个业务函数里面应该只有改业务的代码
    this.changeMenuModalStatus(true)
  }
  // 当前组件上面增加一个组件占位图
  addFigureToTop = (data) => {
    const { dispatch } = this.props;
    const { index } = data;
    dispatch({
      type: 'home/addFigure',
      payload: index
    })
  }
  // 当前组件下面面增加一个组件占位图
  addFigureToBottom = (data) => {
    const { dispatch } = this.props;
    const { index } = data;
    dispatch({
      type: 'home/addFigure',
      payload: index == 0 ? 1 : index
    })
  }
  // 动态生成组件模块
  renderPreviewPanel = () => {
    const { previewData: { componentList } } = this.props.home
    // 判断组件列表是否有增加模块  增加模块只能存在一个
    const hasPlaceHoldCom = componentList.find(item => item.comp === '')
    return componentList.map((item, index) => {
      if (item.comp) {
        const Component = require(`../../components/mobile/${item.comp}`).default
        if (hasPlaceHoldCom) {
          return <Component {...item} key={index} isPreview={true} />
        } else {
          return (
            <ViewActive
              onClick={() => this.clickPreviewPanelComponent(index)}
              data={Object.assign({}, item, { index })}
              addFigure={this.addFigure}
              key={index}
            >
              <Component {...item} key={index} isPreview={true} />
            </ViewActive>
          )
        }
      } else {
        return <div className={styles['fengdie-drop']} key={index}>添加至此处</div>
      }
    })
  }
  render() {
    const { navBanner, previewData: { componentList }, menuModal, componentModal, selectComponentIndex } = this.props.home
    const changeComponentData = componentList[selectComponentIndex]
    const { spinning, previewUrl, showPreviewModal } = this.state;
    return (
      <Layout className={styles['base-layout']}>
        <Header onPreview={() => this.onPreview()} />
        <div className={styles['main-layout']}>
          {
            menuModal ? <Menu navBanner={navBanner} onClose={this.menuClose} onClick={this.menuComponentChange} /> :
              componentModal ? <Component selectIndex = {selectComponentIndex} onClose={this.componnetClose} data={changeComponentData} /> : ''
          }
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
                      this.renderPreviewPanel()
                      :
                      <Empty
                        image="https://gw.alipayobjects.com/zos/rmsportal/vCbMpJlWAzfHGqOtzFCD.png"
                        imageStyle={{
                          height: 180,
                        }}
                        description=''
                      >
                        <Button type="primary" onClick={this.clickEmpty}>请添加组件</Button>
                      </Empty>
                  }
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
