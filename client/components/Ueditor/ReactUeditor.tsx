import React from 'react'
import { Modal } from 'antd';
import UploadImage from './UploadImage'
import { Ueditor } from './utils'

interface UeditorState {
  pluginsRender?: Array< any >;
}
interface UeditorProps {
  value?: string;
  config?: {};
  ueditorPath?: string;
  plugins?: Array< any >;
  onChange?: (args?:{}) => void;
  progress?: any;
  getRef?: (args?:{}) => void;
  onReady?: (args?:{}) => void;
  debug?: boolean
}

interface UEProps{
  Editor?: (args?:void)=> void;
  getEditor?:(args?:string,config?:{})=> null;
  registerUI?: (name:string, f:(ueditor?:void, uiName?:void)=>void, number?: number, containerID?: string| number ) => void;
  ui?: { 
    Button(args?:{}):void;
  }
}



declare var window: Window & { 
  UE?: UEProps;
  UE_LOADING_PROMISE?: Promise<any>;
}



class ReactUeditor extends React.Component<UeditorProps,UeditorState> {
  static defaultProps = {
    value: '',
    debug: false,
    ueditorPath: 'public/ueditor'
  }
  private content:string = this.props.value || ''
  public ueditor:Ueditor = null
  private containerID:string = 'reactueditor' + Math.random().toString(36).substr(2)
  
  constructor(props) {
    super(props)
    this.state = {
      pluginsRender:[]
    }
  }
  componentDidMount() {
    let {ueditorPath} = this.props
    if (!window.UE && !window.UE_LOADING_PROMISE) {
      window.UE_LOADING_PROMISE = this.createScript(ueditorPath + '/ueditor.config.js').then(() => {
        return this.props.debug
          ? this.createScript(ueditorPath + '/ueditor.all.js')
          : this.createScript(ueditorPath + '/ueditor.all.min.js')
      })
    }
    window.UE_LOADING_PROMISE.then(() => {
      this.initEditor()
    })
  }

  componentDidUpdate(prevProps){
    if (this.props.value !== prevProps.value) {
      if (this.ueditor) {
        this.ueditor.ready(() => {
          this.ueditor.setContent(this.props.value)
        })
      }
    }
  }
  // 销毁 ueditor
  componentWillUnmount() {
    if (this.ueditor) {
      this.ueditor.destroy()
    }
  }
  // 动态创建插入 script 脚本
  createScript = url => {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =  url;
      script.onload  = resolve
      document.body.appendChild(script);
    })
    
    // let scriptTags = window.document.querySelectorAll('script')
    // let len = scriptTags.length
    // console.dir(scriptTags)
    // console.dir(len)
    // let i = 0
    // let _url = window.location.origin + url
    // return new Promise((resolve, reject) => {
    //   for (i = 0; i < len; i++) {
    //     var src = scriptTags[i].src
    //     if (src && src === _url) {
    //       scriptTags[i].parentElement.removeChild(scriptTags[i])
    //     }
    //   }

    //   let node = document.createElement('script')
    //   node.src = url
    //   node.onload = resolve
    //   document.body.appendChild(node)
    // })
  }

  registerUiPlugin(plugin){
    let name = Math.random().toString(36).slice(2)
    window.UE.registerUI(name, (ueditor, uiName) => {
      let { title, cssRules, onClick, render } = plugin(ueditor)
      
      var btn = new window.UE.ui.Button({
          //按钮的名字
          name: uiName,
          //提示
          title: title,
          //添加额外样式，指定icon图标，这里默认使用一个重复的icon
          cssRules: cssRules || '',
          //点击时执行的命令
          onclick: ()=>{
            // 显示modal
            if(render)
              this.setState({[this.getVisibleModalName(name)]: true})
            onClick&&onClick()
          }
      });
      if (render) {
        this.setState({
          pluginsRender: [...this.state.pluginsRender, { name, ...plugin(ueditor) }]
        })
      }
      return btn
    })
  }

  getVisibleModalName = name => {
    return name + 'VisibleModal'
  }
  registerImageUpload = () =>  this.registerUiPlugin(()=>({
      title: '图片设置',
      cssRules: 'background-position: -726px -77px;',
      render: UploadImage
  }))
  
  initEditor = () => {
    const {config, plugins, onChange, value, getRef, onReady} = this.props
    // this.registerImageUpload()
    this.registerUiPlugin((ueditor)=>({
      title: '图片设置',
      cssRules: 'background-position: -726px -77px;',
      render: <UploadImage ueditor={ueditor}/>
    }))
    // this.registerUiPlugin((ueditor)=>({
    //   name: 'test',
    //   title: '测试插件',
    //   cssRules: 'background-position: -504px 0px;',
    //   onClick: ()=> { ueditor.focus() ; ueditor.execCommand('insertcode')}
    // }))
    // 注册自定义插件
    // if (plugins && Array.isArray(plugins)) {
    //   plugins.forEach(plugin => {
    //     if (typeof plugin === 'string') {
    //       return this.registerInternalPlugin(plugin)
    //     } else {
    //       return this.registerUiPlugin(plugin)
    //     }
    //   })
    // }
    // 实例化ueditor
    this.ueditor = config ? window.UE.getEditor(this.containerID, config) : window.UE.getEditor(this.containerID)
    // 
    getRef && getRef(this.ueditor)
    this.ueditor.ready(() => {
      // 初始化值
      if(value){
        this.ueditor.setContent(value)
      }
      this.ueditor.addListener('contentChange', () => {
        this.content = this.ueditor.getContent()
        onChange && onChange(this.content)
      })
      // this.ueditor.addListener('afterpaste', () => {
      //   this.handlePasteImage()
      // })
      onReady && onReady()
    })
  }
  onModalClose=(name)=>{
    this.setState({[this.getVisibleModalName(name)]: false})
  }
  onOk = (values) => {
    console.dir(values)
  }
  render() {
    let { pluginsRender } = this.state
    const pluginsModalRender =  pluginsRender.map( plugin => {
      const visible = this.state[this.getVisibleModalName(plugin.name)]
      const C =  plugin.render
        return (
          <Modal
            key={plugin.name}
            title={plugin.title}
            visible={visible}
            // footer={null}
            okText="确认"
            cancelText="取消"
            onCancel={()=>{this.onModalClose(plugin.name);plugin.onClose&&plugin.onClose() }}
            onOk={plugin.onConfirm}
          >
            {plugin.render}
              {/* <C onOk={(values)=>{this.onOk(values); plugin.onConfirm&&plugin.onConfirm()}} onCancel={()=>{this.onModalClose(plugin.name);plugin.onClose&&plugin.onClose()}}/> */}
          </Modal>
        )
    })


    return (
      <div>
        <script id={this.containerID} name={this.containerID} type='text/plain'></script>
        {/* <input type='file'
          id={this.fileInputID}
          onChange={this.uploadImage}
          style={{visibility: 'hidden', width: 0, height: 0, margin: 0, padding: 0, fontSize: 0}}
          multiple={multipleImagesUpload} /> */}
        { pluginsModalRender }
        
      </div>
    )
  }
}

export default ReactUeditor
