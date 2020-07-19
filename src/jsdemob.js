import React from "react";

import {Card, DatePicker, List} from 'antd-mobile';
import axios from "axios";

// import {moment} from "moment";
// import "moment/locale/zh-cn"

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));


const server_path = 'http://192.168.16.198:8081';

class JsDemob extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            mychecked: true
        }
    }

    getDataA() {
        axios.get(server_path + '/statistic/getUnavailableTimeList')
            .then((res) => {

                // 注意this指向
                this.setState({
                    list: res.data
                });
                console.log("res.data=" + JSON.stringify(res.data));
                //debugger

            })
            .catch((err) => {
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

    onChange1 = (obj, i, type, time) => {
        // debugger
        const timeString = this.formatDate(time);
        console.log("xxxx===", i, time, timeString);

        if (type === 'startTimeStr') {
            obj.startTime = time.getTime();
            obj.startTimeStr = timeString;
        } else {
            obj.endTime = time.getTime();
            obj.endTimeStr = timeString;
        }

        console.log("xxxx===", this.state.list);
        this.setState({list: this.state.list});

        this.updateDataA();

    }


    updateDataA = () => {

        // let postData = {list:this.state.list};
        let postData = this.state.list;


        axios({
            url: server_path + '/statistic/updateUnavailableTimeList',
            method: 'post',
            data: postData,
            // headers:{
            //     'Content-Type':'application/x-www-form-urlencoded'
            // }
        }).then((res) => {

            // 注意this指向
            this.setState({
                list: res.data
            });
            console.log("res.data=" + JSON.stringify(res.data));
            //debugger

        }).catch((err) => {
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

        this.props.form.validateFields({force: true}, (error) => {
            // debugger
            if (error) {
                console.log("出现异常" + error);
            }
        });


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
            setTimeout(() => this.props.form.setFieldsValue({dp: newDate}), 10);
            callback();
        }
    }
    validateDatePicker = (rule, date, callback) => {
        console.log("alioo date=" + date)
        // debugger
        if (date && date.getMinutes() !== 15) {
            callback();
        } else {
            callback(new Error('15 is invalid'));
        }
    }

    render() {
        // const {getFieldProps, getFieldError} = this.props.form;
        return (<form>
            <List
                className="date-picker-list"
            >
                {
                    this.state.list.map((obj, i) => {
                        console.log("i=" + i + ",obj=" + JSON.stringify(obj))

                        //debugger
                        return (

                            <List.Item key={i}>
                                <Card full>
                                    <Card.Header
                                        title='禁用时间区间'
                                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"

                                    />
                                    <Card.Body>
                                        <div>
                                            <DatePicker
                                                mode="time"
                                                minuteStep={2}
                                                // use12Hours
                                                value={new Date(obj.startTime)}
                                                onChange={time => this.onChange1(obj, i, 'startTimeStr', time)}
                                            >
                                                <List.Item arrow="horizontal">开始禁用时间</List.Item>
                                            </DatePicker>

                                            <DatePicker
                                                mode="time"
                                                minuteStep={2}
                                                // use12Hours
                                                value={new Date(obj.endTime)}
                                                onChange={time => this.onChange1(obj, i, 'endTimeStr', time)}
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

            </List>
        </form>);
    }
}


export default JsDemob
