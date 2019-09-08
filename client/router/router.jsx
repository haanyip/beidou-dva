import React, { Suspense } from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import Loading from '../components/Loading'
import Loadable from 'react-loadable';
import { IntlProvider } from 'react-intl';
import  queryString   from 'query-string';
const { ConnectedRouter } = routerRedux; 
// import BaseLayout from '../layouts/basicLayout'
// const Home = Loadable({
//   loader: () => import('../pages/home'),
//   loading: Loading
// });
import Home from '../pages/home'
import Test from '../pages/test'
// import { getRoutes } from './router.config'
const Routers = ({ history, app }) => {
  // console.dir(queryString.parse(history.location.search))
  const { lang } =  queryString.parse(history.location.search)
  // const routeList = getRoutes(app);
  return (
    <ConnectedRouter history={history}>
      {/* <Switch>
        <Route path="/" render={props=> <BaseLayout {...props} app={app}/> } />
      </Switch> */}
      <Switch>
        <Route path="/"  component={Home} />
        <Route path="/test"  exact component={Test} />
        {/* {routeList.map(({path,component:Component},index) => (
          <Route path={path} key={index} exact render={props => <Component {...props}  /> }/>
        ))} */}
      </Switch>
    </ConnectedRouter>
  );
};

export default Routers;