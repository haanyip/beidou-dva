import React, { PureComponent } from "react";
import { connect } from 'dva';
import { Switch, Route, routerRedux } from 'dva/router';
import Loadable from 'react-loadable';
import { IntlProvider } from 'react-intl';
import Loading from '../components/Loading'
import { getRoutes } from '../router/router.config'
class BasicLayout extends PureComponent {
  componentDidMount(){

  }
  render() {
    const { children, location, loading, dispatch, language, app } = this.props;
    const { href } = window.location; // 浏览器地址栏中地址
    const routeList = getRoutes(app);
    return (
      <div>
         <div>tets</div>
         <Switch>
            {routeList.map(({path,component:Component},index) => (
              <Route path={path} key={index} exact render={props => <Component {...props}  /> }/>
            ))}
          </Switch>
      </div>
      
    )
  }
}
export default BasicLayout
