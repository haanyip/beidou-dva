export interface HomeModelState{
  navBanner?: Array<any>;
  previewData?: {componentList: Array<any>}
}
export default {
  namespace: 'home',
  state: {
    previewData:{
      componentList: []
    },
    navBanner: [{
      title: 'BANNER',
      components:[{
        componentId: '',
        title: '非通栏 Banner - 1',
        name: "comp-banner-normal-pad",
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
    }]
  },
  effects: {
    
  },
  reducers: {
    
  },
};