import React from 'react';
import OnLineItem from "./OnLineItem";
import {Button, List, WhiteSpace} from 'antd-mobile';

import moment from 'moment'

const monitor_machine_array = process.env.REACT_APP_monitor_machine.split(",");

class OnLineList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            startTime: "",
            endTime: ""
        }
    }

    componentDidMount() {
        console.log("OnLineList componentDidMount 进来了。。。")
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

        this.setState({
            startTime: startTimeTemp,
            endTime: endTimeTemp
        })
    }


    render() {
        const elements=[];
        monitor_machine_array.forEach((item)=>{
            elements.push(
                <OnLineItem server_path={this.props.server_path} startTime={this.state.startTime} endTime={this.state.endTime} machineName={item} key={item} />
            )
        })



        return (
            <div>
                <div>
                    <WhiteSpace/>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px',marginLeft: '4px'}} onClick={this.modifyQueryParam.bind(this, 1)}>最近1小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 3)}>最近3小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 6)}>最近6小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 12)}>最近12小时</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam.bind(this, 24)}>今天</Button>
                    <Button type="primary" className="quickBtn" inline size="small" style={{marginRight: '4px'}} onClick={this.modifyQueryParam2.bind(this, 1)}>昨天</Button>
                    <WhiteSpace/>

                </div>

                <List>
                    {elements}
                </List>


            </div>
        );
    }

}


export default OnLineList





