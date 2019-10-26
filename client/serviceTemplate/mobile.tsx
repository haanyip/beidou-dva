import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './app';
ReactDom.render(
  <div>
    <App/>
  </div>,
  document.getElementById('root') as HTMLElement,
);