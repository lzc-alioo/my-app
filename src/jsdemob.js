import React from "react";
import ReactDOM from 'react-dom';

import { DatePicker, List, Button, InputItem,Card } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from "axios";

import {moment} from "moment";
import "moment/locale/zh-cn"


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
// console.log(now, utcOffset, now.toISOString(), utcOffset.toISOString());


const server_path='http://192.168.16.233:8081';


class Test extends React.Component {

    constructor(props){
        super(props);
        this.state={
            list:[],
            mychecked:true
        }
    }


    getDataA() {
        axios.get(server_path+'/statistic/getUnavailableTimeList')
            .then((res)=>{

                // 注意this指向
                this.setState({
                    list:res.data
                });
                console.log("res.data=" + JSON.stringify(res.data) );
                //debugger

            })
            .catch((err)=>{
                console.log(err)
            })
    }


    formatDate = (date) => {
        /* eslint no-confusing-arrow: 0 */
        const pad = n => n < 10 ? `0${n}` : n;
        // const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
        const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
        return `${timeStr}`;
    }

    onChange1=(obj,i,type,time) => {
       // debugger
        const timeString=this.formatDate(time);
        console.log("xxxx===" ,i, time, timeString);

        if(type==='startTimeStr'){
            obj.startTime=time.getTime();
            obj.startTimeStr=timeString;
        }else {
            obj.endTime=time.getTime();
            obj.endTimeStr=timeString;
        }

        console.log("xxxx===" ,this.state.list);
        this.setState({list:this.state.list});

        this.updateDataA();

    }



    updateDataA =()=> {

        // let postData = {list:this.state.list};
        let postData =this.state.list;


        axios({
            url:server_path+'/statistic/updateUnavailableTimeList',
            method: 'post',
            data:postData,
            // headers:{
            //     'Content-Type':'application/x-www-form-urlencoded'
            // }
        }).then((res)=>{

                // 注意this指向
                this.setState({
                    list:res.data
                });
                console.log("res.data=" + JSON.stringify(res.data) );
                //debugger

            })
            .catch((err)=>{
                console.log(err)
            })
    }


    componentDidMount() {
        console.log("jsdemob componentDidMount 进来了。。。")
        this.getDataA();
    }


    state = {
        dpValue: now,
        idt: utcOffset.toISOString().slice(0, 10),
    }



    onSubmit = () => {
        debugger

        this.props.form.validateFields({ force: true }, (error) => {

            console.log("aliooalioo this.props.form.getFieldsValue()="+this.props.form.getFieldsValue())
            // debugger

            // if (!error) {
            //     console.log(this.props.form.getFieldsValue());
            // } else {
            //     console.log(error);
            //     alert('Validation failed');
            // }
        });



    }
    onReset = () => {
        this.props.form.resetFields();
        setTimeout(() => console.log(this.state), 0);
    }
    validateIdp = (rule, date, callback) => {
        if (isNaN(Date.parse(date))) {
            callback(new Error('Invalid Date'));
        } else {
            const cDate = new Date(date);
            const newDate = new Date(+this.state.dpValue);
            newDate.setFullYear(cDate.getFullYear());
            newDate.setMonth(cDate.getMonth());
            newDate.setDate(cDate.getDate());
            // this.setState({ dpValue: newDate });
            setTimeout(() => this.props.form.setFieldsValue({ dp: newDate }), 10);
            callback();
        }
    }
    validateDatePicker = (rule, date, callback) => {
        console.log("alioo date="+date)
        // debugger
        if (date && date.getMinutes() !== 15) {
            callback();
        } else {
            callback(new Error('15 is invalid'));
        }
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (<form>
            <List
                className="date-picker-list"
                renderFooter={() => getFieldError('dp') && getFieldError('dp').join(',')}
            >


                {
                    this.state.list.map( (obj, i )=>{
                        console.log("i="+i+",obj="+JSON.stringify(obj))

                        // //TTFFFFTFFTFF ali15可上网   ；TTTFFFTFFTFF 不可上网
                        // //FTFFFFTFFTFF ali11可上网   ；FFTFFFTFFTFF 不可上网
                        // //FTFFFFFFFTFF x55  可上网   ；FTTFFFFFFTFF 不可上网
                        // //FFFFFFTFFTFF 离线设备可上网 ；FFTFFFTFFTFF 不可上网
                        // //var mychecked = ('FTFFFFTFFTFF' == obj.flag || 'FTFFFFFFFTFF' == obj.flag || 'FFFFFFTFFTFF' == obj.flag || 'TTFFFFTFFTFF' == obj.flag) ? true : false;
                        //
                        // //第3位是F 可以上网，第3位是T不可上网
                        // var mychecked = ( 'F' === obj.flag.substring(2,3) )  ? true : false;
                        //
                        // console.log(obj.name+","+ obj.flag+",mychecked="+mychecked);

                        //debugger
                        return (



                            <List.Item>
                                <Card full>
                                    <Card.Header
                                        title='禁用时间区间'
                                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"

                                    />
                                    <Card.Body>
                                        <div>
                                            {/*<DatePicker mode='time' onChange={v=>this.onChange1(v,'aavv') }*/}
                                                        {/*{...getFieldProps('dpStartTime'+i , {*/}
                                                            {/*initialValue: new Date(obj.startTime),*/}
                                                            {/*rules: [*/}
                                                                {/*{ required: true, message: 'Must select a date' },*/}
                                                                {/*{ validator: this.validateDatePicker },*/}
                                                            {/*],*/}
                                                        {/*})}*/}
                                            {/*>*/}
                                                {/*<List.Item arrow="horizontal">开始禁用时间</List.Item>*/}
                                            {/*</DatePicker>*/}

                                            {/*<DatePicker mode='time'*/}
                                                        {/*{...getFieldProps('dpEndTime'+i , {*/}
                                                            {/*initialValue: new Date(obj.endTime),*/}
                                                            {/*rules: [*/}
                                                                {/*{ required: true, message: 'Must select a date' },*/}
                                                                {/*{ validator: this.validateDatePicker },*/}
                                                            {/*],*/}
                                                        {/*})}*/}
                                            {/*>*/}
                                                {/*<List.Item arrow="horizontal">结束禁用时间</List.Item>*/}
                                            {/*</DatePicker>*/}


                                            <DatePicker
                                                mode="time"
                                                minuteStep={2}
                                                // use12Hours
                                                value= {new Date(obj.startTime)}
                                                onChange={time => this.onChange1(obj,i,'startTimeStr',time )}
                                            >
                                                <List.Item arrow="horizontal">开始禁用时间</List.Item>
                                            </DatePicker>

                                            <DatePicker
                                                mode="time"
                                                minuteStep={2}
                                                // use12Hours
                                                value= {new Date(obj.endTime)}
                                                onChange={time => this.onChange1(obj,i,'endTimeStr',time )}
                                            >
                                                <List.Item arrow="horizontal">结束禁用时间</List.Item>
                                            </DatePicker>


                                        </div>


                                    </Card.Body>
                                    {/*<Card.Footer content={ "实时下载速度：222" } extra={<div> { "实时上传速度：222"  } </div>}/>*/}
                                </Card>
                            </List.Item>



                        )
                    })
                }



                <List.Item>
                    <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
                    {/*<Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>Reset</Button>*/}
                </List.Item>
            </List>
        </form>);
    }
}

const TestWrapper = createForm()(Test);

ReactDOM.render(<TestWrapper />,  document.getElementById('root'));

export default TestWrapper
