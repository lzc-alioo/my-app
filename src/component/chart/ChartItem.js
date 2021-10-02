import React, {Component} from 'react';
import {Line} from '@ant-design/charts';
import axios from "axios";


class ChartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        console.log("ChartItem componentDidMount 进来了。。。")
        this.getList();
    }

    getList() {
        axios.get(this.props.server_path + '/statistic/netWorkData?datestr=&machineName=' + this.props.machineName)
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
            xField: 'time',
            yField: 'value',
            point: {
                size: 5,
                shape: 'diamond',
            },
        };

        return <Line {...config} />;

    }
}

export default ChartItem;
