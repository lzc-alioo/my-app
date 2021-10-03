import React from "react";
import {TabBar} from 'antd-mobile';
import './HomePage.css'


import MachineList from './component/MachineList';
import UnavailableTimeList from './component/timelist/UnavailableTimeList';
// import NetChartItem from './component/chart/NetChartItem';
import NetChartList from './component/chart/NetChartList';
import Jsdemoc from './jsdemoc';

// const server_path = 'http://192.168.16.233:8081';
const server_path = process.env.REACT_APP_SERVER_PATH;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'machine-list-tab',
            hidden: false,
            fullScreen: true,
        };

        console.log("1.REACT_APP_BASE_URL=", process.env.REACT_APP_BASE_URL, process.env.NODE_ENV)
        console.log("2.REACT_APP_SERVER_PATH=", process.env.REACT_APP_SERVER_PATH, process.env.NODE_ENV)

        if (process.env.NODE_ENV === 'development') {
            console.log('开发环境')
            // debugger
        } else if (process.env.NODE_ENV === 'production') {
            console.log('生产环境')
        }

    }

    componentWillReceiveProps(nextProps){
        console.log("HomePage componentWillReceiveProps nextProps:",nextProps)
    }

    renderContent(pageText) {
        if (pageText === 'machine-list') {
            return <MachineList server_path={server_path}/>
        } else if (pageText === 'time-list') {
            // location.href=""
            return <UnavailableTimeList server_path={server_path}/>
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
                        title="路由开关"
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
                        selected={this.state.selectedTab === 'machine-list-tab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'machine-list-tab',
                            });
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
                        badge={'new'}
                        selected={this.state.selectedTab === 'time-list-tab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'time-list-tab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('time-list')}
                    </TabBar.Item>
                    {/*<TabBar.Item*/}
                        {/*icon={*/}
                            {/*<div style={{*/}
                                {/*width: '22px',*/}
                                {/*height: '22px',*/}
                                {/*background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'*/}
                            {/*}}*/}
                            {/*/>*/}
                        {/*}*/}
                        {/*selectedIcon={*/}
                            {/*<div style={{*/}
                                {/*width: '22px',*/}
                                {/*height: '22px',*/}
                                {/*background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'*/}
                            {/*}}*/}
                            {/*/>*/}
                        {/*}*/}
                        {/*title="图表"*/}
                        {/*key="Koubei"*/}
                        {/*badge={'new'}*/}
                        {/*selected={this.state.selectedTab === 'blackTab'}*/}
                        {/*onPress={() => {*/}
                            {/*this.setState({*/}
                                {/*selectedTab: 'blackTab',*/}
                            {/*});*/}
                        {/*}}*/}
                        {/*data-seed="logId1"*/}
                    {/*>*/}
                        {/*{this.renderContent('net-chart-item')}*/}
                    {/*</TabBar.Item>*/}
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
                        title="图表测试"
                        key="Koubei"
                        badge={''}
                        selected={this.state.selectedTab === 'net-chart-list-tab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'net-chart-list-tab',
                            });
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
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('jsdemoc')}
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}

export default HomePage

