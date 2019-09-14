import React, { PureComponent, Suspense } from "react";
import { FormattedMessage } from 'react-intl';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import { ConnectState } from '../../models/connect'
import { SettingModelState } from '../../models/setting'
import Header from '../../components/Header'
import styles from './index.module.less'

interface HomeProps {
  dispatch: Dispatch<AnyAction>;
  setting: SettingModelState;
}
interface HomeState {
  test: number
}
@connect(({ setting }: ConnectState) => ({
  setting
}))
class Home extends PureComponent <HomeProps, HomeState >{
  constructor(props) {
    super(props);
    this.state= {
      test: 11
    }
  }
  render() {
    return (
      <>
        <Header/>
        {/* <Button type="primary">{this.props.setting.lang}</Button>
        <div>{this.state.test}</div>
        <FormattedMessage id="please-wait" />
        <div className={styles['test']}>ssss</div> */}
      </>
    );
  }
}
export default Home;
