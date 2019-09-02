import React, { PureComponent,Suspense } from "react";
import { FormattedMessage } from 'react-intl';
import { connect } from 'dva';


@connect(({ loading, home }) => ({
  test: home.test
}))

class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
   const { test } = this.props;
    return (
     
        <div>
          <FormattedMessage id="home"/>
          {test}
        </div>
 
     
    );
  }
}
export default Home;
