import * as React from 'react';
import * as ReactDom from 'react-dom';
import Banner from 'client/components/Carousel/index';

ReactDom.render(
  <div>
   <Banner/>
  </div>,
  document.getElementById('root') as HTMLElement,
);