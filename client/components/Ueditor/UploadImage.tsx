import React, { useState } from 'react';
import { Upload, Form, Icon, Input, InputNumber, Button, message, Radio, Card } from 'antd';
import { FormProviderProps as RcFormProviderProps } from 'rc-field-form/lib/FormContext';
import { Ueditor } from './utils'

interface UploadProps {
  onChange?: () => void;
  form?: RcFormProviderProps;
  onOk?:  (values?:{}) => void;
  onCancel?:() => void;
  ueditor:Ueditor
};
const UploadImage: React.FC<UploadProps> = (props: UploadProps) => {
  console.dir(props)
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //       const { file:{response:{data:{key}}} } = values.image
  //       // props.onOk&&props.onOk(values)
  //       props.ueditor.focus();
  //     const html = `<img src="${key}" />`
  //     //   props.ueditor.execCommand('inserthtml', )
  //     }
  //   });
  // };
  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">上传图片</div>
    </div>
  );
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = info => {
    console.dir(info)
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      const {url} = info.file.response.data
      setImageUrl(url)
      // props.form.setFieldsValue({image:url})
      setLoading(false)
    }
  };
  const { getFieldDecorator, getFieldValue } = props.form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
  return (
    <Form  {...formItemLayout}>
      <Form.Item label="上传图片:">
        {getFieldDecorator('image', {
          initialValue: imageUrl,
          rules: [{ required: true, message: '请选择上传图片' }],
        })(
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        )}
      </Form.Item>

      <Form.Item label="样式设置:">
        {getFieldDecorator('check', {
          initialValue: 1,
          rules: [{ required: true, message: '' }],

        })(
          <Radio.Group  >
            <Radio value={1}>比例(100%)</Radio>
            <Radio value={2}>自定义高宽</Radio>
          </Radio.Group>
        )}
      </Form.Item>
      {
        getFieldValue('check') == 1 ?
          <Form.Item label="所占比例(100%):">
            {getFieldDecorator('percentage', {
              initialValue: 1,
              rules: [{ required: true, message: '请填写所占比例' }],

            })(
              <InputNumber />
            )}
          </Form.Item>
          : <>
            <Form.Item label="宽度(px):">
              {getFieldDecorator('width', {
                rules: [{ required: true, message: '请填写宽度' }],
                initialValue: ''
              })(
                <InputNumber />
              )}
            </Form.Item>
            <Form.Item label="高度(px):">
              {getFieldDecorator('height', {
                rules: [{ required: true, message: '请填写高度' }],
                initialValue: ''
              })(
                <InputNumber />
              )}
            </Form.Item>
          </>
      }
      <Form.Item label="点击跳转链接:">
        {getFieldDecorator('link', {
          rules: [{ pattern: /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/, message: '网址必须以http://或者https://开头，且必须是个网址^_^！' }],
          initialValue: ''
        })(
          <Input />
        )}
      </Form.Item>
    </Form>
  )
}
export default Form.create({})(UploadImage);
