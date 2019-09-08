import React, { PureComponent,Suspense } from "react";
import { FormattedMessage } from 'react-intl';
import { connect } from 'dva';
class Test extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
   const { test } = this.props;
    return (
     
        <div>
        test
        </div>
 
     
    );
  }
}
export default Test;
