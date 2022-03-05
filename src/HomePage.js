import React from "react";
import {TabBar} from 'antd-mobile';
import './HomePage.css'


import MachineList from './component/MachineList';
import UnavailableTimeList from './component/timelist/UnavailableTimeList';
// import NetChartItem from './component/chart/NetChartItem';
import NetChartList from './component/chart/NetChartList';
import Jsdemoc from './jsdemoc';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory() // history模式

const server_path = process.env.REACT_APP_SERVER_PATH;

class HomePage extends React.Component {
    constructor(props) {
        super(props);


        // debugger
        var selectedTab = "";
        if (this.props.match.params && this.props.match.params.selectedTab) {
            selectedTab = this.props.match.params.selectedTab;

            console.log("3.HomePage this.props.location.pathname=", this.props.location.pathname)
            console.log("4.HomePage this.props.match =", this.props.match)
            console.log("5.HomePage selectedTab =", selectedTab)
        }

        this.state = {
            selectedTab: selectedTab,
            hidden: false,
            fullScreen: true,
            onlineMachineCount: 0,
            tvState: "",
        };

        console.log("2.HomePage REACT_APP_SERVER_PATH=", process.env.REACT_APP_SERVER_PATH, process.env.NODE_ENV)

        if (process.env.NODE_ENV === 'development') {
            console.log('开发环境')
        } else if (process.env.NODE_ENV === 'production') {
            console.log('生产环境')
        }

    }

    modifyOnlineMachineCount = (result, msg) => {
        // console.log(result, msg)
        this.setState({
            onlineMachineCount: msg
        })
    }
    modifyTvState = (result, msg) => {
        // console.log(result, msg)
        this.setState({
            tvState: msg
        })
    }


    renderContent(pageText) {
        if (pageText === 'machine-list') {
            return <MachineList server_path={server_path} parent={ this } />
        } else if (pageText === 'time-list') {
            return <UnavailableTimeList server_path={server_path} {...this.props} />
            // } else if (pageText === 'net-chart-item') {
            //     return <NetChartItem server_path={server_path} machineName='X3-55'/>
        } else if (pageText === 'net-chart-list') {
            return <NetChartList server_path={server_path}/>
        } else if (pageText === 'jsdemoc') {
            return <Jsdemoc/>
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
                        title="设备开关"
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
                        selected={this.state.selectedTab === 'machine-list'}
                        badge={this.state.onlineMachineCount}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'machine-list',
                            });
                            history.push('/home/machine-list');
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('machine-list')}
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
                        title="TV定时"
                        key="Koubei"
                        badge={this.state.tvState}
                        selected={this.state.selectedTab === 'time-list'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'time-list',
                            });
                            history.push('/home/time-list');

                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('time-list')}
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
                        title="流量报表"
                        key="Koubei"
                        badge={''}
                        selected={this.state.selectedTab === 'net-chart-list'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'net-chart-list',
                            });
                            history.push('/home/net-chart-list');

                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('net-chart-list')}
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
                        title="待启用"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'jsdemoc'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'jsdemoc',
                            });
                            history.push('jsdemoc');

                        }}
                    >
                        {this.renderContent('/home/jsdemoc')}
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}

export default HomePage

