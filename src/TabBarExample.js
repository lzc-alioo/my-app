import { TabBar } from 'antd-mobile';
import React from "react";
import './TabBarExample.css'


import Jsdemo from './jsdemo';
import Jsdemob from './jsdemob';
import Jsdemoc from './jsdemoc';


class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }


    renderContent(pageText) {
        if(pageText==='jsdemo'){
            return  <Jsdemo/>
        }else if(pageText==='jsdemob'){
            return  <Jsdemob/>
        }else if(pageText==='jsdemoc'){
            return  <Jsdemoc/>
        }
        // return (
        //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        //         <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        //         <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
        //            onClick={(e) => {
        //                e.preventDefault();
        //                this.setState({
        //                    hidden: !this.state.hidden,
        //                });
        //            }}
        //         >
        //             Click to show/hide tab-bar
        //         </a>
        //         <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
        //            onClick={(e) => {
        //                e.preventDefault();
        //                this.setState({
        //                    fullScreen: !this.state.fullScreen,
        //                });
        //            }}
        //         >
        //             Click to switch fullscreen
        //         </a>
        //     </div>
        // );
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="top"
                >
                    <TabBar.Item
                        title="路由"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
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
                        {this.renderContent('jsdemo')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="jsdemob"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('jsdemob')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="jsdemoc"
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

export default TabBarExample

