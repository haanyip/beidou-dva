import React, { PureComponent, Suspense, Component } from "react"
import { FormattedMessage } from 'react-intl'
import { connect } from 'dva'
import { TabBar, Grid } from 'antd-mobile'

class Luxus extends Component {
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
              icon: 'http://www.luxuschair.com/4.3.9/static/P-8890.582a82a5.jpg',
              text: '2019新品',
            },
            {
                icon: 'http://www.luxuschair.com/4.3.9/static/c-2017.6616b96e.jpg',
                text: '职员椅(C系列)',
            },
            {
                icon: 'http://www.luxuschair.com/4.3.9/static/m-57280gae.73d99fe5.jpg',
                text: '主管椅(M系列)',
            },
            {
                icon: 'http://www.luxuschair.com/4.3.9/static/D-739.f3b50c7d.jpg',
                text: '经理椅(D系列)',
            },
            {
                icon: 'http://www.luxuschair.com/4.3.9/static/p-8590.9888f3d8.jpg',
                text: '大班椅(P系列)',
            },
            {
                icon: 'http://www.luxuschair.com/4.3.9/static/u-9389.cdb39995.jpg',
                text: '培训椅(U系列)',
            },
        ]

        return (
            <Grid data={data} square={false} className="not-square-grid" columnNum={3} square={true}/>
        );
    }

    render() {
        return (
            <div style={this.state.fullScreen ? {
                position: 'fixed',
                height: '100%',
                width: '100%',
                top: 0
            } : {height: 400}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="丽时产品"
                        key="丽时产品"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="丽时动态"
                        key="丽时动态"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="关于丽时"
                        key="关于丽时"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Luxus;
