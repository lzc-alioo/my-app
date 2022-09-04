import React from 'react';
import NetItem from "./NetItem";
import {Button, List, WhiteSpace} from 'antd-mobile';
import './NetList.css'

import moment from 'moment'
import axios from "axios";

// const monitor_machine_array = process.env.REACT_APP_monitor_machine.split(",");

class NetList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            startTime: "",
            endTime: "",
            monitor_machine_array: []
        }
    }

    componentDidMount() {
        console.log("NetList componentDidMount 进来了。。。")
        this.getMachineList();
    }

    getMachineList() {
        const monitor_machine_array = [];
        axios.get(this.props.server_path + '/machine/getMonitorMachineList')
            .then((res) => {
                res.data.forEach((item, index, array) => {
                    monitor_machine_array.push(item.name);
                });
                return monitor_machine_array;

            })
            .then((monitor_machine_array) => {
                this.setState({
                    monitor_machine_array: monitor_machine_array
                })

            })
            .catch((err) => {
                console.log(err)
            })
    }

    modifyQueryParam = (hourOffset, e) => {
        let today = moment().format("YYYYMMDD");
        let startTimeTemp = moment().subtract(hourOffset, "hours").format("YYYYMMDDHHmm");
        if (startTimeTemp.substring(0, 8) !== today) {
            startTimeTemp = today + "0000";
        }
        let endTimeTemp = moment().format("YYYYMMDDHHmm");

        console.log("startTimeTemp:" + startTimeTemp, "endTimeTemp:" + endTimeTemp)

        this.setState({
            startTime: startTimeTemp,
            endTime: endTimeTemp
        })
    }

    modifyQueryParam2 = (dayOffset, e) => {
        let startTimeTemp = moment().subtract(1, "days").format("YYYYMMDD") + "0000";
        let endTimeTemp = moment().subtract(1, "days").format("YYYYMMDD") + "2359";

        console.log("startTimeTemp:" + startTimeTemp, "endTimeTemp:" + endTimeTemp)

        this.setState({
            startTime: startTimeTemp,
            endTime: endTimeTemp
        })
    }


    render() {

        const elements = [];
        this.state.monitor_machine_array.forEach((item) => {
            elements.push(
                <NetItem server_path={this.props.server_path} startTime={this.state.startTime} endTime={this.state.endTime} machineName={item} key={item}/>
            )
        })

        return (
            <div>
                <div>
                    <WhiteSpace/>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px', marginLeft: '4px'}} onClick={this.modifyQueryParam.bind(this, 1)}>最近1小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 3)}>最近3小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 6)}>最近6小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 12)}>最近12小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 24)}>今天</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam2.bind(this, 1)}>昨天</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam2.bind(this, 2)}>前天</Button>
                    <WhiteSpace/>

                </div>

                <List>
                    {elements}
                </List>


            </div>
        );
    }

}


export default NetList





