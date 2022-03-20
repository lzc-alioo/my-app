import React, {Component} from 'react';
import {Line} from '@ant-design/charts';
import axios from "axios";
import './NetItem.css'

const server_path = process.env.REACT_APP_SERVER_PATH;

class NetItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],

        }
    }

    componentDidMount() {
        console.log("NetChartItem componentDidMount 进来了。。。")
        this.getList(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("NetChartItem componentWillReceiveProps ", nextProps)

        this.getList(nextProps);
    }


    getList(props) {
        let startTime = props.startTime;
        let endTime = props.endTime;
        let machineName = props.machineName;

        axios.get(server_path + '/statistic/getNetWorkData?startTime=' + startTime + '&endTime=' + endTime + '&machineName=' + machineName)
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


    render() {

        const data = [];

        // for (let i = 0; i < 12 * 24; i++) {
        //     var item = {time: i, value: 3 * i * 0.1};
        //     data.push(item)
        // }


        this.state.list.map((obj, i) => {
            var item = {time: obj.timeStr, value: obj.net};
            data.push(item);
            return 0;
        });

        const config = {
            data,
            height: 400,
            padding: [40, 20, 40, 20],
            xField: 'time',
            yField: 'value',
            point: {
                size: 5,
                shape: 'diamond',
            },
            label: {
                style: {
                    stroke: 'green',  //文字的描边
                    fill: 'red', //文字的填充色

                },
            },

        };

        // return <Line {...config} />;

        return (
            <div className="g2">
                <div>{this.props.machineName}</div>
                <Line {...config} />
            </div>
        )
    }
}

export default NetItem;
