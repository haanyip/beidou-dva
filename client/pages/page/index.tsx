import React, {PureComponent, Suspense, Component} from "react"
import {FormattedMessage} from 'react-intl'
import {connect} from 'dva'
import {TabBar, Grid} from 'antd-mobile'

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { children } = this.props
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
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
                    selected={window.location.hash === '#/'}
                    onPress={() => window.location.hash = '#/'}
                    data-seed="logId"
                >
                    {children}
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
                    selected={window.location.hash === '#/news'}
                    onPress={() => window.location.hash = '#/news'}
                    data-seed="logId1"
                >
                    {children}
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
                    selected={window.location.hash === '#/about'}
                    onPress={() => window.location.hash = '#/about'}
                >
                    {children}
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default Page;
