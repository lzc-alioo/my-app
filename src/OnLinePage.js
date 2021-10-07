import React from "react";
import {TabBar} from 'antd-mobile';

import './OnLinePage.css'


import OnLineList from './component/online/OnLineList';
import Least3HoursOnLineList from './component/online/Least3HoursOnLineList';
import Least1HoursOnLineList from './component/online/Least1HoursOnLineList';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory() // history模式

class OnLinePage extends React.Component {
    constructor(props) {
        super(props);

        // debugger
        var selectedTab = "online-list";
        if (this.props.match.params && this.props.match.params.selectedTab) {
            selectedTab = this.props.match.params.selectedTab;

            console.log("1.OnLinePage this.props.location.pathname=", this.props.location.pathname)
            console.log("2.OnLinePage this.props.match =", this.props.match)
            console.log("3.OnLinePage selectedTab =", selectedTab)
        }

        this.state = {
            selectedTab: selectedTab,
            hidden: false,
            fullScreen: true,
        };

        if (process.env.NODE_ENV === 'development') {
            console.log('开发环境 REACT_APP_SERVER_PATH:'+process.env.REACT_APP_SERVER_PATH)
        } else if (process.env.NODE_ENV === 'production') {
            console.log('生产环境 REACT_APP_SERVER_PATH:'+process.env.REACT_APP_SERVER_PATH)
        }

    }

    renderContent(pageText) {
        if (pageText === 'online-list') {
            return <OnLineList/>
        } else if (pageText === 'least3-online-list') {
            return <Least3HoursOnLineList/>
        } else if (pageText === 'least1-online-list') {
            return <Least1HoursOnLineList/>
        }

    }

    render() {
        return (
            <div style={this.state.fullScreen ? {position: 'fixed', height: '100%', width: '100%', top: 0} : {height: 400}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="top"
                >
                    <TabBar.Item
                        title="联网时间"
                        key="Life"
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
                        selected={this.state.selectedTab === 'online-list'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'online-list',
                            });
                            history.push('online-list');
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('online-list')}
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
                        title="最近3小时"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'least3-online-list'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'least3-online-list',
                            });
                            history.push('least3-online-list');

                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('least3-online-list')}
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
                        title="最近1小时"
                        key="Koubei2"
                        badge={''}
                        selected={this.state.selectedTab === 'least1-online-list'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'least1-online-list',
                            });
                            history.push('least1-online-list');

                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('least1-online-list')}
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}

export default OnLinePage

