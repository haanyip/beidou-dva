import React, { PureComponent, Suspense, Component } from "react"
import { FormattedMessage } from 'react-intl'
import { connect } from 'dva'
import { TabBar, Grid } from 'antd-mobile'
import newImg from '../../assets/images/new.jpg'
import cImg from '../../assets/images/c.jpg'
import mImg from '../../assets/images/m.jpg'
import dImg from '../../assets/images/d.jpg'
import pImg from '../../assets/images/p.jpg'
import uImg from '../../assets/images/u.jpg'
import Page from "client/pages/page"

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }

    renderContent(pageText) {

        const data = [
            {
              icon: newImg,
              text: '2019新品',
            },
            {
                icon: cImg,
                text: '职员椅(C系列)',
            },
            {
                icon: mImg,
                text: '主管椅(M系列)',
            },
            {
                icon: dImg,
                text: '经理椅(D系列)',
            },
            {
                icon: pImg,
                text: '大班椅(P系列)',
            },
            {
                icon: uImg,
                text: '培训椅(U系列)',
            },
        ]

        return (
            <Grid data={data} square={false} className="not-square-grid" columnNum={2}/>
        );
    }

    render() {
        return (
            <Page>
                {this.renderContent('')}
            </Page>
        );
    }
}

export default Category;
