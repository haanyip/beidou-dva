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
          link: "",
          title: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png'
        },
        defaultData:{
          img: "https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png",
          link: "",
          title: 'https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png'
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
    },
    // {
    //   componentId: '',
    //   title: '普通 Banner',
    //   img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh0ur6/3cc23a6c-2c8f-422c-85fa-46f4cf68f205.cms/images/857aff8f-75af-40b4-bb69-6cdaacea5c62.png?x-oss-process=image/resize,w_560/crop,h_560'
    // },{
    //   componentId: '',
    //   title: '手动轮播 Banner',
    //   img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh0p9c/91cfa04c-a80c-4bff-a96d-e3f9c1059c25.cms/images/5011f344-4655-4c57-bd8e-68b0258e05bc.png?x-oss-process=image/resize,w_560/crop,h_560'
    // },
    {
      componentId: '',
      title: '自动轮播 Banner',
      comp: "banner/Auto",
      data: {
        data: [
          {
            img: "https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png",
            link: "",
            title: "https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png"
          },
          {
            img: "http://img1.imgtn.bdimg.com/it/u=1411728850,1869975885&fm=26&gp=0.jpg",
            link: "",
            title: "https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png"
          },
        ],
        defaultData: {
          img: "http://img1.imgtn.bdimg.com/it/u=1411728850,1869975885&fm=26&gp=0.jpg",
          link: "",
          title: "https://gw.alipayobjects.com/zos/rmsportal/JRmzNcWymcwpVRSISlbM.png"
        },
        json: {
          description: 'Banner',
          properties: {
            img: {
              description: '图片',
              meta: {
                description: '建议尺寸：750*280'
              },
              type: 'image'
            },
            link: {
              description: '链接',
              type: 'url'
            }
          },
          type: 'array'
        }
      },
      img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh0hqm/4582999c-1330-49e8-b809-8f459410ed9e.cms/images/785bb68f-d5b0-44c1-967d-7b2e6cfeead9.png?x-oss-process=image/resize,w_560/crop,h_560'
    }]
  },
  {
    title: 'TAB',
    components:[
    //   {
    //   componentId: '',
    //   title: '左右滑动 Tab',
    //   img: 'https://gw.alipayobjects.com/os/q/cms/images/jnlh9wkr/46a6fec3-8b6a-4dc1-8aea-50df95bac390.cms/images/4c8abcb4-8b6e-4753-895b-648253b0648b.png?x-oss-process=image/resize,w_560/crop,h_560'
    // }
  ]
  }
  ,{
    title: '列表',
    components:[
    //   {
    //   componentId: '',
    //   title: '普通列表',
    //   comp: "list/Normal",
    //   data: {
    //     data: [{
    //       img: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",
    //       tags: [{
    //         title: '市场'
    //       },{
    //         title: '第一财经'
    //       }],
    //       title: '为什么这么多大企业都是云凤蝶的忠实用户？'
    //     }],
    //     defaultData:{
    //       img: "https://gw.alipayobjects.com/zos/rmsportal/qnMZzTAViDGQHHjgyICm.png",
    //       tags: [{
    //         title: '市场'
    //       },{
    //         title: '第一财经'
    //       }],
    //       title: '为什么这么多大企业都是云凤蝶的忠实用户？'
    //     },
    //     json: {
    //       description: '列表',
    //       properties: {
    //         img: {
    //           description: '封面',
    //           meta: {
    //             description: '建议尺寸：144*144'
    //           },
    //           type: 'image'
    //         },
    //         link: {
    //           description: '链接',
    //           type: 'url'
    //         },
    //         title: {
    //           description: "标题",
    //           type: 'text'
    //         },
    //         tags: {
    //           description: '标签列表',
    //           properties: {
    //             color: {
    //               description: '颜色',
    //               type: 'color'
    //             },
    //             text: {
    //               description: '文字',
    //               type: 'text'
    //             }
    //           },
    //           type: 'array'
    //         },
    //       },
    //       type: 'array'
    //     }
    //   },
    //   img: 'https://gw.alipayobjects.com/os/q/cms/images/jq3ga5vw/94c09180-f5a9-40d2-bc14-a40f2bc47555.cms/images/c9f74a8f-e605-4db8-924d-e4a663cc55c5.png?x-oss-process=image/resize,w_560/crop,h_560'
    // }
  ]
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
      // componentList = componentList.filter(item=>item.comp!=='');
      console.dir(state.selectComponentIndex)
      // state.previewData.componentList = [...componentList, changeComponent];
      componentList[state.selectComponentIndex] = changeComponent
      return fromJS(state).toJS()
    },
    // 选中组件 清空占位图片
    setSelectComponnetIndex(state, { payload }) {
      state.selectComponentIndex = payload;
      let { componentList } =  state.previewData;
      componentList.map((item)=> {
        if(item.comp==''){
          if(state.selectComponentIndex<payload){
            state.selectComponentIndex = payload-1>0?payload-1:0;
          }
        }
      })
      
      componentList = componentList.filter(item=>item.comp!=='');
      state.previewData.componentList = componentList;
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
      state.selectComponentIndex = payload;
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
    },
    // 更新数据
    updata(state, {payload}) {
      const { selectComponentIndex } = state;
      state.previewData.componentList[selectComponentIndex].data.data = payload;
      return fromJS(state).toJS();
    },
    // 上移动
    moveUp(state, {payload}){
      const { previewData:{ componentList } } = state;
      componentList.splice(payload,1,...componentList.splice(payload-1, 1 , componentList[payload]));
      state.previewData.componentList = componentList;
      state.selectComponentIndex = payload-1;
      return fromJS(state).toJS();
    },
    // 下移动
    moveDown(state, {payload}) {
      const { previewData:{ componentList } } = state;
      componentList.splice(payload,1,...componentList.splice(payload+1, 1 , componentList[payload]));
      state.previewData.componentList = componentList;
      state.selectComponentIndex = payload+1;
      return fromJS(state).toJS();
    },
    // 复制
    copy(state, {payload}) {
      let { previewData:{ componentList } } = state;
      componentList.push(componentList[payload])
      state.previewData.componentList = componentList;
      state.selectComponentIndex = componentList.length-1;
      return fromJS(state).toJS();
    },
    // 删除
    delete(state, {payload}) {
      let { previewData:{ componentList }, selectComponentIndex } = state;
      componentList.splice(payload,1)
      if(payload === selectComponentIndex ){
        state.menuModal = false;
        state.componentModal = false
      }
      selectComponentIndex = selectComponentIndex-1
      return fromJS(state).toJS();
    }
  },
};