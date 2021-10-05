import React from 'react';
import OnLineItem from "./OnLineItem";
import {List} from 'antd-mobile';
import moment from 'moment'



class Least3HoursOnLineList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        console.log("Least3HoursNetChartList componentDidMount 进来了。。。")
    }


    render() {

        let startTime= moment().subtract(3, "hours").format('YYYYMMDDHHmm');
        let endTime= moment().format('YYYYMMDDHHmm');

        if(startTime.substring(0,8)!==endTime.substring(0,8)){
            startTime=moment().format('YYYYMMDD0000');
        }

        // debugger
        return (
            <List>
                <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='X3-55'/>
                <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='CM201-2'/>
                <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='ali6s'/>
                <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='ali11'/>
                <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='alioo15'/>
                <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='hlnew50'/>

            </List>
        );
    }

}


export default Least3HoursOnLineList





