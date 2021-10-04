import React from "react";

import {List} from 'antd-mobile';
import axios from "axios";
import TimeItem from "./TimeItem";

const server_path = process.env.REACT_APP_SERVER_PATH;


class UnavailableTimeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            mychecked: true
        }
    }

    componentDidMount() {
        console.log("UnavailableTimeList componentDidMount 进来了。。。")
        this.getList();
    }

    getList() {
        axios.get(server_path + '/statistic/getUnavailableTimeList')
            .then((res) => {
                // 注意this指向
                this.setState({
                    list: res.data
                });
                // console.log("res.data=" + JSON.stringify(res.data));
                //debugger

            })
            .catch((err) => {
                console.log(err)
            })
    }

    onChangeTime = (obj, i, type, time) => {
        // debugger
        const timeString = this.formatTime(time);
        console.log("onChangeTime===", i, time, timeString);

        if (type === 'startTimeStr') {
            obj.startTime = time.getTime();
            obj.startTimeStr = timeString;
        } else {
            obj.endTime = time.getTime();
            obj.endTimeStr = timeString;
        }

        console.log("this.state.list===", this.state.list);
        this.setState({list: this.state.list});

        this.updateList();
    }


    formatTime = (date) => {
        /* eslint no-confusing-arrow: 0 */
        const pad = n => n < 10 ? `0${n}` : n;
        // const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
        const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
        return `${timeStr}`;
    }

    updateList = () => {

        // let postData = {list:this.state.list};
        let postData = this.state.list;

        axios({
            url: this.props.server_path + '/statistic/updateUnavailableTimeList',
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

    render() {
        return (<form>
            <List className="date-picker-list">
                {
                    this.state.list.map((obj, i) => {
                        console.log("timelist i=" + i + ",obj=" + JSON.stringify(obj))

                        //debugger
                        return (<TimeItem key={i} obj={obj} onChange={this.onChangeTime}/>)
                    })
                }

            </List>
        </form>);
    }
}


export default UnavailableTimeList
