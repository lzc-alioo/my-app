import React from 'react';
import OnLineItem from "./OnLineItem";
import {DatePicker, Button, Space,} from 'antd-mobile-v5';
import moment from 'moment'


class Least3HoursOnLineList extends React.Component {

    constructor(props) {
        super(props);

        let startTime = moment().subtract(3, "hours").format('YYYY-MM-DD HH:mm');
        let endTime = moment().format('YYYY-MM-DD HH:mm');

        if (startTime.substring(0, 8) !== endTime.substring(0, 8)) {
            startTime = moment().format('YYYY-MM-DD 00:00');
        }

        this.state = {
            visible1: false,
            startTime: startTime,
            visible2: false,
            endTime: endTime,
        }

    }

    componentDidMount() {
        console.log("Least3HoursNetChartList componentDidMount 进来了。。。")
    }

    getYYYYMMDDHHmm = (timeStr) => {
        return moment(timeStr, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm');
    }

    render() {

        // debugger
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
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='raspberrypi'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='hlnew50'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={this.getYYYYMMDDHHmm(this.state.startTime)} endTime={this.getYYYYMMDDHHmm(this.state.endTime)} machineName='hlold'/>

                </div>

            </div>
        );
    }

}


export default Least3HoursOnLineList





