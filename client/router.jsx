import React, { Suspense } from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import Loading from './components/Loading'
import Loadable from 'react-loadable';
const Home =  Loadable.Map({
  loader: {
    Home: () => import('./pages/home')
  },
  delay: 200,
  timeout: 1000,
  loading: Loading,
  render(loaded, props) {
    let Home = loaded.Home.default;
    return <Home {...props} />;
  },
});
const { ConnectedRouter } = routerRedux; 
const Routers = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routers;