import 'babel-polyfill';
import React from 'react';
import dva, { connect } from 'dva';
import { memoryHistory, browserHistory } from 'dva/router';
import { createBrowserHistory as createHistory } from 'history';
import router from './router/router';

function createApp(opts) {
  const app = dva(opts);
  app.router(router);
  return app;
}

export default class Index extends React.Component {
  static getPartial() {
    const app = createApp({
      history: memoryHistory,
      initialState: {

      },
    });
    return {
      html: app.start()(),
    };
  }

  render() {
    const { html, helper } = this.props;
    return (
      <html>
        <head>
          <title>dva </title>
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.assetWithHash('manifest.js')} />
          <script src={helper.assetWithHash('index.js')} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  const app = createApp({
    history: createHistory(),
    initialState: {
    },
  });
  app.start('#container');
}
