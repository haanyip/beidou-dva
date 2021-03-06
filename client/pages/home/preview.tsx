import React from 'react';
import { Modal, Spin } from 'antd';
var QRCode = require('qrcode.react');
import './index.less';

interface PreViewProps {
  title?: string;
  url?: string;
  visible?: boolean;
  spinning?: boolean;
  onCancel?:()=>void;
}
const PreView: React.FC<PreViewProps> = (props) => {
  const { title, url, visible, spinning, onCancel } = props;
  return (
    <Modal onCancel={onCancel} visible={visible} wrapClassName="preview-modal" footer={null}>
      <div className="preview-content">
        <div className='spl-view'>
          <div className='spl-view-iframe'>
            <div className='fdAnt-spin-nested-loading'>
              <div className='fdAnt-spin-container'>
                <div className='spl-view-title'>{title}</div>
                <div className='spl-view-main'>
                  <Spin spinning={spinning}>
                    {url?<iframe src={url}></iframe>: ''}
                  </Spin>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spl-qrcode">
          <h3>扫码预览</h3>
          <QRCode value={url} />
          
        </div>
      </div>
    </Modal>
  )
}
export default PreView;