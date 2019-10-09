import { SettingModelState  } from './setting'
import { HomeModelState  } from './home'
export interface ConnectState {
  setting: SettingModelState;
  home: HomeModelState
}