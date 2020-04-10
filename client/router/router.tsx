import React from 'react';
import { Switch, Route, routerRedux, Redirect } from 'dva/router';
import Loading from '../components/Loading'
import Loadable from 'react-loadable';
// import { IntlProvider } from 'react-intl';
// import  queryString   from 'query-string';
const { ConnectedRouter } = routerRedux;
// import { getLanguage, chooseLocale } from '../locales/index'
// import BaseLayout from '../layouts/basicLayout'
// const Home = Loadable({
//   loader: () => import('../pages/home'),
//   loading: Loading
// });
import Home from '../pages/home'
import Luxus from '../pages/luxus'
import List from '../pages/list'
const Routers = ({ history, app }) => {

  // const { lang } : { lang?: string } =  queryString.parse(history.location.search)
  // const defaultLang:string = getLanguage(lang)
  // const messages : Record<string, any> = chooseLocale(lang)
  // const routeList = getRoutes(app);

  return (
    <ConnectedRouter history={history}>
      {/* <Switch>
        <Route path="/" render={props=> <BaseLayout {...props} app={app}/> } />
      </Switch> */}
      {/* <IntlProvider locale={defaultLang} messages={messages}> */}
        <Switch>
          <Route exact path="/" component={Home} render={() => (<Redirect to="/" />)} />
          <Route path="/luxus"  component={Luxus} />
          <Route path="/list"  component={List} />
          {/* {routeList.map(({path,component:Component},index) => (
            <Route path={path} key={index} exact render={props => <Component {...props}  /> }/>
          ))} */}
        </Switch>
      {/* </IntlProvider> */}
    </ConnectedRouter>
  );
};

export default Routers;
