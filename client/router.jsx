import React, { Suspense } from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import Loading from './components/Loading'
import Loadable from 'react-loadable';
import { IntlProvider } from 'react-intl';

const { ConnectedRouter } = routerRedux; 
const Routers = ({ history, app }) => {
  const Home =  Loadable.Map({
    loader: {
      Home: () => import('./pages/home'),
      model:  () => import('./pages/home/model'),
      zh: ()=>  import('./locales/zh-TW/home'),
      en: ()=> import('./locales/en-US/home'),
    },
    delay: 200,
    timeout: 1000,
    loading: Loading,
    render(loaded, props) {
      let zh_Tw = loaded.zh.default
      let en_Us = loaded.en.default
      let model = loaded.model.default
      let Home = loaded.Home.default
      app.model(model)
      return (
        <IntlProvider locale="zh"
            messages={zh_Tw}>
          <Home {...props} />
        </IntlProvider>
      )
    },
  })
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routers;