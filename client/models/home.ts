import { fromJS } from 'immutable';
export interface HomeModelState{
  navBanner?: Array<any>;
  previewData?: {componentList: Array<any>};
  menuModal?: boolean;
  componentModal?: boolean;
  changeComponentData?: any;
  selectComponentIndex?: number;
}
const inintState = {
  previewData:{
    componentList: []
  },
  navBanner: [{
    title: 'BANNER',
    components:[{
      componentId: '',
      title: '非通栏 Banner - 1',
      comp: "banner/NormalPad",
      data: {
        data: {
          img: "https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png",
          link: ""
        },
        json: {
          description: 'Banner',
          properties: {
            img: {
              description: '图片',
              meta: {
                description: '建议尺寸：686*220'
              },
              type: 'image'
            },
            link: {
              description: '链接',
              type: 'url'
            }
          },
          type: 'object'
        }
      },
      img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh10g7/0993e70d-7d4f-4e65-86d6-dfbb14a7da05.cms/images/0178ff2a-35ba-4c8c-9b54-29df6688b0c4.png?x-oss-process=image/resize,w_560/crop,h_560'
    },{
      componentId: '',
      title: '普通 Banner',
      img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh0ur6/3cc23a6c-2c8f-422c-85fa-46f4cf68f205.cms/images/857aff8f-75af-40b4-bb69-6cdaacea5c62.png?x-oss-process=image/resize,w_560/crop,h_560'
    },{
      componentId: '',
      title: '手动轮播 Banner',
      img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh0p9c/91cfa04c-a80c-4bff-a96d-e3f9c1059c25.cms/images/5011f344-4655-4c57-bd8e-68b0258e05bc.png?x-oss-process=image/resize,w_560/crop,h_560'
    },{
      componentId: '',
      title: '自动轮播 Banner',
      comp: "banner/Auto",
      img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh0hqm/4582999c-1330-49e8-b809-8f459410ed9e.cms/images/785bb68f-d5b0-44c1-967d-7b2e6cfeead9.png?x-oss-process=image/resize,w_560/crop,h_560'
    }]
  },{
    title: 'TAB',
    components:[{
      componentId: '',
      title: '左右滑动 Tab',
      img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh9wkr/46a6fec3-8b6a-4dc1-8aea-50df95bac390.cms/images/4c8abcb4-8b6e-4753-895b-648253b0648b.png?x-oss-process=image/resize,w_560/crop,h_560'
    }]
  },{
    title: '列表',
    components:[]
  },{
    title: '标题',
    components:[]
  },{
    title: '引言',
    components:[]
  },{
    title: '配图',
    components:[]
  },{
    title: '段落',
    components:[]
  },{
    title: '按钮',
    components:[]
  },{
    title: 'FAQ',
    components:[]
  },{
    title: '规则',
    components:[]
  },{
    title: '页脚',
    components:[]
  },{
    title: '步骤',
    components:[]
  }],
  menuModal: false, //控制显示组件列表
  componentModal: false, //控制编辑组件详情页
  selectComponentIndex: 0, //编辑选中组件索引值
}
export default {
  namespace: 'home',
  state: fromJS(inintState).toJS(),
  effects: {
    
  },
  reducers: {
    // 新增组件 
    addComponent(state, { payload }) {
      const changeComponent = state.navBanner[payload[0]].components[payload[1]];
      let { componentList } =  state.previewData;
      componentList = componentList.filter(item=>item.comp!=='');
      state.previewData.componentList = [...componentList, changeComponent];
      state.selectComponentIndex = state.previewData.componentList.length-1;
      return fromJS(state).toJS()
    },
    setSelectComponnetIndex(state, { payload }) {
      state.selectComponentIndex = payload;
      return fromJS(state).toJS();
    },
    // 清空占位组件
    filterFigureComponent(state, { payload }) {
      let { componentList } =  state.previewData;
      state.previewData.componentList = componentList.filter(item=>item.comp!=='');
      return fromJS(state).toJS()
    },
    // 增加占位组件
    addFigure(state, { payload }) {
      state.previewData.componentList.splice(payload,0,{comp: '',componentId:''});
      return fromJS(state).toJS();
    },
    // 控制组件列表显示和隐藏函数
    changeMenuModalStatus(state, { payload }) {
      state.menuModal = payload;
      return fromJS(state).toJS();
    },
    // 控制组件编辑界面
    changeComponentModalStatus(state, {payload}) {
      state.componentModal = payload;
      return fromJS(state).toJS();
    }
  },
};