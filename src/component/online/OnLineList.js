import React, {useState} from 'react';
import OnLineItem from "./OnLineItem";
import {List, DatePicker, Toast, Button} from 'antd-mobile';
import moment from 'moment'


class OnLineList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            visible2:false
        }

        // const [visible2, setVisible2] = useState(false);

    }

    componentDidMount() {
        console.log("OnLineList componentDidMount 进来了。。。")
    }


    render() {

        const startTime = moment().format('YYYYMMDD0000');
        const endTime = moment().format('YYYYMMDDHHmm');


        // const now = new Date();
        // const visible2=this.state.visible2;

        return (
            <div>
                <Button
                    onClick={() => {
                        // setVisible2(true)
                        this.setState({
                            visible2:true
                        })
                    }}
                >
                    年-月-日-时-分
                </Button>
                <DatePicker
                    visible={this.state.visible2}
                    onClose={() => {
                        // setVisible2(false)
                        this.setState({
                            visible2:false
                        })
                    }}
                    precision='minute'
                    onConfirm={val => {
                        Toast.show(val.toString());
                        this.setState({
                            visible2:false
                        })
                        debugger
                    }}
                />


                <List>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='X3-55'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='CM201-2'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='ali6s'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='ali11'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='alioo15'/>
                    <OnLineItem subUrl='/statistic/getOnLineData' startTime={startTime} endTime={endTime} machineName='hlnew50'/>

                </List>

            </div>
        );
    }

}


export default OnLineList





