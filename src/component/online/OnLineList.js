import React from 'react';
import OnLineItem from "./OnLineItem";
import {DatePicker, Button, Space,} from 'antd-mobile-v5';
import moment from 'moment'


class OnLineList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible1: false,
            startTime: moment().format('YYYY-MM-DD 00:00'),
            visible2: false,
            endTime: moment().format('YYYY-MM-DD 23:59'),
        }

    }


    componentDidMount() {
        console.log("OnLineList componentDidMount 进来了。。。")
    }

    getYYYYMMDDHHmm = (timeStr) => {
        return moment(timeStr, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm');
    }


    render() {

        // const startTime = moment().format('YYYYMMDD0000');
        // const endTime = moment().format('YYYYMMDDHHmm');
        // const startTime = moment(this.state.startTime, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm');
        // const endTime = moment(this.state.endTime, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm');

        return (
            <div>
                <div>
                    <Space wrap>
                        <>
                            开始时间：<Button
                            onClick={() => {
                                this.setState((prevState) => {
                                    return {visible1: true}
                                })
                            }}
                        >
                            {this.state.startTime}
                        </Button>
                            <DatePicker
                                visible={this.state.visible1}
                                defaultValue={new Date(this.state.startTime + ":00")}
                                precision='minute'
                                onClose={() => {
                                    this.setState((prevState) => {
                                        return {visible1: false}
                                    })
                                }}

                                onConfirm={val => {
                                    // debugger
                                    this.setState({
                                        startTime: moment(val).format('YYYY-MM-DD HH:mm')
                                    })
                                    // debugger
                                }}
                            />
                        </>
                        <>
                            结束时间：<Button
                            onClick={() => {
                                this.setState((prevState) => {
                                    return {visible2: true}

                                })
                            }}
                        >
                            {this.state.endTime}
                        </Button>
                            <DatePicker
                                visible={this.state.visible2}
                                defaultValue={new Date(this.state.endTime + ":00")}
                                precision='minute'
                                onClose={() => {
                                    this.setState((prevState) => {
                                        return {visible2: false}
                                    })
                                }}

                                onConfirm={val2 => {
                                    this.setState({
                                        endTime: moment(val2).format('YYYY-MM-DD HH:mm')
                                    })
                                }}
                            />
                        </>
                    </Space>

                </div>

                <div>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='X3-55'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='CM201-2'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='ali6s'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='ali11'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='alioo15'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='hlnew50'/>
                </div>

            </div>
        );
    }

}


export default OnLineList





