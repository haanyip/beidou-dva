import React from 'react';
import { IComponentData } from '../../../interface'
// import styles from './index.module.less';

interface NormalProps {
  data?: IComponentData;
  isPreview?: boolean;
  onClick?: ()=> void;
}
const Normal: React.FC<NormalProps> = () => {
  // const { data } = props;
  return (<div>sss</div>)
}
export default Normal;