import 'babel-polyfill';
import { ViewProps } from 'beidou';
import React from 'react';
import dva from 'dva';
// import { createBrowserHistory , createMemoryHistory } from 'history';
import { memoryHistory, browserHistory } from 'dva/router';
import router from './router/router';
import setting from './models/setting'
import home from './models/home'
import './index.less'
function createApp(opts) {
  const app = dva(opts);
  app.model(setting)
  app.model(home)
  app.router(router);
  
  return app;
};

export default class Index extends React.Component<ViewProps> {
  static doctype = '<!DOCTYPE html>';

  static getPartial(props) {
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
          {/* <script type="application/javascript" dangerouslySetInnerHTML={{ __html: `!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\\S\\s]+AppleWebkit\\/(\\d{3})/i),l=o.match(/U3\\/((\\d+|\\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector(\'meta[name="viewport"]\');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);flex(100, 1);` }}/> */}
          <link rel="stylesheet" href={helper.assetWithHash('manifest.css')} />
          <link rel="stylesheet" href={helper.assetWithHash('index.css')} />
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
    history: browserHistory,
    initialState: {
    },
  });
  app.start('#container');
}
