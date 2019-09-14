import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';
import { fromJS } from 'immutable';
export interface SettingModelState{
  lang: string
}
export interface SettingModelType {
  namespace: 'setting';
  state: SettingModelState;
  effects: {
    // fetchNotices: Effect;
  };
  reducers: {
    // changeLayoutCollapsed: Reducer<SettingModelState>;
  };
  // subscriptions: { setup: Subscription };
}
const inintState:SettingModelState = {
  lang: 'en'
}
const SettingModel : SettingModelType =  {
  namespace: "setting",
  state: fromJS(inintState).toJS(),
  effects: {
   
  },
  reducers: {
    
  }
};
export default SettingModel;