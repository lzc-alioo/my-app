import React from "react";

import {Card, Switch} from 'antd-mobile';
import {DatePicker, List} from 'antd-mobile';
// import {Col, Row} from "antd";

class TimeItem extends React.Component {

    render() {
        return (
            <List.Item key={this.props.i}>
                <Card >
                    <Card.Header
                        extra={<Switch checked={this.props.obj.checked} onChange={checked => this.props.onChangeSwitch(this.props.obj, checked)}/> }
                        title='禁用时间区间'
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    >
                    </Card.Header>
                    <Card.Body>
                        <div style={{width: "100%",overflow: "hidden" }}>
                            <div style={{float:"left",width: "50%" }}>
                                <DatePicker
                                    mode="time"
                                    minuteStep={1}
                                    // use12Hours
                                    value={new Date(this.props.obj.startTime)}
                                    onChange={time => this.props.onChangeTime(this.props.obj, this.props.i, 'startTimeStr', time)}
                                >
                                    <List.Item arrow="horizontal">开始时间</List.Item>
                                </DatePicker>
                            </div>
                            <div style={{float:"right",width: "50%" }}>
                                <DatePicker
                                    mode="time"
                                    minuteStep={1}
                                    // use12Hours
                                    value={new Date(this.props.obj.endTime)}
                                    onChange={time => this.props.onChangeTime(this.props.obj, this.props.i, 'endTimeStr', time)}
                                >
                                    <List.Item arrow="horizontal">结束时间</List.Item>
                                </DatePicker>
                            </div>
                        </div>


                        {/*<div>*/}
                        {/*    <DatePicker*/}
                        {/*        mode="time"*/}
                        {/*        minuteStep={1}*/}
                        {/*        // use12Hours*/}
                        {/*        value={new Date(this.props.obj.startTime)}*/}
                        {/*        onChange={time => this.props.onChangeTime(this.props.obj, this.props.i, 'startTimeStr', time)}*/}
                        {/*    >*/}
                        {/*        <List.Item arrow="horizontal">开始禁用时间</List.Item>*/}
                        {/*    </DatePicker>*/}

                        {/*    <DatePicker*/}
                        {/*        mode="time"*/}
                        {/*        minuteStep={1}*/}
                        {/*        // use12Hours*/}
                        {/*        value={new Date(this.props.obj.endTime)}*/}
                        {/*        onChange={time => this.props.onChangeTime(this.props.obj, this.props.i, 'endTimeStr', time)}*/}
                        {/*    >*/}
                        {/*        <List.Item arrow="horizontal">结束禁用时间</List.Item>*/}
                        {/*    </DatePicker>*/}
                        {/*</div>*/}

                    </Card.Body>
                </Card>
            </List.Item>
        )
    }
}


export default TimeItem
