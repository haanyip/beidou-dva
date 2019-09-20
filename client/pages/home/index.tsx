import React, { PureComponent, Suspense } from "react";
import { FormattedMessage } from 'react-intl';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import { ConnectState } from '../../models/connect'
import { SettingModelState } from '../../models/setting'
import Header from '../../components/Header'
import styles from './index.module.less'
import Ueditor from '../../components/Ueditor'

interface HomeProps {
  dispatch: Dispatch<AnyAction>;
  setting: SettingModelState;
}
interface HomeState {
  show?: boolean,
  testValue?: string
}
@connect(({ setting }: ConnectState) => ({
  setting
}))
class Home extends PureComponent <HomeProps, HomeState >{
  
  private ueditorRef:any = null;
  constructor(props) {
    super(props);
    this.state= {
      testValue: 'pppppp'
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      // console.dir(this.ueditorRef.setContent('1111111'))
      this.setState({
        testValue: '2222222'
      })
    },3000)
  }
  uploadImage = e => {
    return new Promise(function(resolve, reject) {
      resolve(window.URL.createObjectURL(e.target.files[0]))
    })
  }
  getUeditor=(ref)=>{
    this.ueditorRef = ref
  }
  pasteImageStart = imageAmount => {
    console.log('paste start', 'image amount is ' + imageAmount)
  }
  render() {
    const modalContainerStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, .5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
    
    const modalStyle = {
      width: 500,
      height: 400,
      background: '#fff',
      borderRadius: 5,
      padding: 20,
    }
    
    const imageContainerStyle = {
      marginTop: 20,
    }
    
    const imageStyle = {
      margin: 10,
      width: 100,
      height: 100,
    }
    const Modal = ({style, onSelectImage}) => {
      let handleClick = e => {
        onSelectImage(e.target.src)
      }
      return (
        <div style={{...modalContainerStyle, ...style}}>
          <div style={modalStyle}>
            <div>请选择图片：</div>
            <div style={imageContainerStyle} onClick={handleClick}>
              <img style={imageStyle} src='https://cloud-minapp-7894.cloud.ifanrusercontent.com/1hGIy5OFK4JMKqxA.png' />
              <img style={imageStyle} src='https://cloud-minapp-7894.cloud.ifanrusercontent.com/1gAVF3QpMa7cvWYz.jpg' />
            </div>
          </div>
        </div>
      )
    }
    let uploadImagePlugin = function (ueditor) {
      return {
        menuText: '图片上传',
        cssRules: 'background-position: -726px -73px;',
        onIconClick: function () {console.log('imageUpload icon click')},
        render: (visible, closeModal) => {
          const handleSelectImage = (url) => {
            ueditor.focus()
            ueditor.execCommand('inserthtml', '<img src="' + url + '" />')
            closeModal()
          }
          return <Modal style={{display: visible ? 'flex' : 'none'}} onSelectImage={handleSelectImage} />
        }
      }
    }
    
    return (
      <>
        {/* <Header/> */}
       {/* <Button type="primary">default</Button> */}
       {/* {this.state.show && 
                } */}
                <Ueditor 
                  value={this.state.testValue}
                  getRef={this.getUeditor}
                  plugins={['uploadImage', 'insertCode', 'uploadVideo', 'uploadAudio', 'insertLink',uploadImagePlugin]}

                //  uploadImage={this.uploadImage}
                    // ueditorPath='../../assets/ueditor'
                            /> 
        {/* <div>{this.state.test}</div>
        <FormattedMessage id="please-wait" />
        <div className={styles['test']}>ssss</div> */}
      </>
    );
  }
}
export default Home;
