import React from 'react';
import {Card, List, Switch, WhiteSpace} from 'antd-mobile';

import axios from 'axios'


const Item = List.Item;

class MachineList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            mychecked: true
        }

        // debugger

    }

    componentDidMount() {
        console.log("MachineList componentDidMount 进来了。。。")
        this.getList();
    }

    componentWillReceiveProps(nextProps){
        console.log("MachineList componentWillReceiveProps nextProps:",nextProps)
    }

    getList() {
        axios.get(this.props.server_path + '/statistic/getMachineList')
            .then((res) => {

                // 注意this指向
                this.setState({
                    list: res.data.terminals
                });
                // console.log("res.data=" + JSON.stringify(res.data));
                //debugger

            })
            .catch((err) => {
                console.log(err)
            })
    }


    accessCtrl(obj, event) {

        var mac = obj.mac;
        var mychecked = ('F' === obj.flag.substring(2, 3)) ? true : false;
        var act = mychecked ? "on" : "off";

        //debugger
        axios.get(this.props.server_path  + '/statistic/setNetWorkSwitch?mac=' + mac + '&act=' + act)
            .then((res) => {

                // 注意this指向
                this.setState({
                    list: res.data.terminals
                });
                // console.log("res.data=" + JSON.stringify(res.data));
                //debugger

            })
            .catch((err) => {
                console.log(err)
            })

    }


    render() {
        return (
            <div>
                <WhiteSpace size="lg"/>
                <List
                >

                    {
                        this.state.list.map((obj,i) => {
                            //console.log("obj="+JSON.stringify(obj))

                            //TTFFFFTFFTFF ali15可上网   ；TTTFFFTFFTFF 不可上网
                            //FTFFFFTFFTFF ali11可上网   ；FFTFFFTFFTFF 不可上网
                            //FTFFFFFFFTFF x55  可上网   ；FTTFFFFFFTFF 不可上网
                            //FFFFFFTFFTFF 离线设备可上网 ；FFTFFFTFFTFF 不可上网
                            //var mychecked = ('FTFFFFTFFTFF' == obj.flag || 'FTFFFFFFFTFF' == obj.flag || 'FFFFFFTFFTFF' == obj.flag || 'TTFFFFTFFTFF' == obj.flag) ? true : false;

                            //第3位是F 可以上网，第3位是T不可上网
                            var mychecked = ('F' === obj.flag.substring(2, 3)) ? true : false;

                            // console.log("terminallist i=" + i + ",obj=" + JSON.stringify(obj))

                            //debugger
                            return (
                                <Item key={i}>

                                    <Card full>
                                        <Card.Header
                                            title={obj.name + " ( " + (obj.ip ? obj.ip:'--') + ")"}
                                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                            extra={<Switch
                                                checked={mychecked}
                                                onChange={this.accessCtrl.bind(this, obj)}
                                            />

                                            }
                                        />
                                        <Card.Body>
                                            <div>{obj.mac} </div>
                                        </Card.Body>
                                        <Card.Footer content={"实时下载速度：" + obj.speed} extra={<div> {"实时上传速度：" + obj.upSpeed} </div>}/>
                                    </Card>

                                </Item>)
                        })
                    }


                </List>


            </div>
        );

    }
}

export default MachineList

