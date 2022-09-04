import React from "react";
import {TabBar} from 'antd-mobile';
import './HomePage.css'


import MachineList from '../component/machinelist/MachineList';
import TimeList from '../component/timelist/TimeList';
import NetList from '../component/netlist/NetList';
import OnLineList from '../component/onlinelist/OnLineList';

import {createBrowserHistory} from 'history';

const history = createBrowserHistory() // history模式

const server_path = process.env.REACT_APP_SERVER_PATH;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        console.log("0.HomePage REACT_APP_SERVER_PATH=", process.env.REACT_APP_SERVER_PATH, "ENV", process.env.NODE_ENV, this.envString());

        // debugger
        var selectedTab = "machine-list";
        if (this.props.match.params && this.props.match.params.selectedTab) {
            selectedTab = this.props.match.params.selectedTab;

            console.log("1.HomePage this.props.location.pathname=", this.props.location.pathname)
            console.log("2.HomePage selectedTab =", selectedTab)
        }

        this.state = {
            selectedTab: selectedTab,
            hidden: false,
            fullScreen: true,
            onlineMachineCount: 0,
            tvState: "",
        };

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

    envString() {
        if (process.env.NODE_ENV === 'development') {
           return '开发环境';
        } else if (process.env.NODE_ENV === 'production') {
            return '生产环境';
        }
        return "未知环境"
    }

    renderContent(pageText) {
        if (pageText === 'machine-list') {
            return <MachineList server_path={server_path} parent={ this } />
        } else if (pageText === 'time-list') {
            return <TimeList server_path={server_path} abc="1" group="tv" />
        } else if (pageText === 'time-list-mobile') {
            return <TimeList server_path={server_path} abc="2" group="mobile" />
            // } else if (pageText === 'time-list-mobile') {
            //     return <NetChartItem server_path={server_path} machineName='X3-55'/>
        } else if (pageText === 'net-chart-list') {
            return <NetList server_path={server_path}/>
        } else if (pageText === 'online-list') {
            return <OnLineList server_path={server_path}/>
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
                        icon={  <span className="iconfont icon-shebeiguanli"> </span>  }
                        selectedIcon={  <span className="iconfont icon-shebeiguanli" style={{fontColor:'blue'}}> </span>  }
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
                        icon={  <span className="iconfont icon-dingshi"> </span>  }
                        selectedIcon={  <span className="iconfont icon-dingshi" style={{fontColor:'blue'}}> </span>  }
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
                        icon={  <span className="iconfont icon-dingshi"> </span>  }
                        selectedIcon={  <span className="iconfont icon-dingshi" style={{fontColor:'blue'}}> </span>  }
                        title="Mobile定时"
                        key="Mobile"
                        badge={''}
                        selected={this.state.selectedTab === 'time-list-mobile'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'time-list-mobile',
                            });
                            history.push('/home/time-list-mobile');

                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('time-list-mobile')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={  <span className="iconfont icon-tubiao-zhexiantu"> </span>  }
                        selectedIcon={  <span className="iconfont icon-tubiao-zhexiantu" style={{fontColor:'blue'}}> </span>  }
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
                        data-seed="logId2"
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
                        title="Test"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'online-list'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'online-list',
                            });
                            history.push('/home/online-list');

                        }}
                    >
                        {this.renderContent('online-list')}
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}

export default HomePage

