import React from 'react';
import OnLineItem from "./OnLineItem";
import {List} from 'antd-mobile';
import moment from 'moment'



class OnLineList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        console.log("OnLineList componentDidMount 进来了。。。")
    }


    render() {

        const startTime= moment().format('YYYYMMDD0000');
        const endTime= moment().format('YYYYMMDDHHmm');

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


export default OnLineList





