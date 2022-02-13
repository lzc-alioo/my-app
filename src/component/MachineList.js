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

    }

    componentDidMount() {
        console.log("MachineList componentDidMount 进来了。。。")
        this.getList();
    }


    getList() {
        axios.get(this.props.server_path + '/statistic/getMachineList2')
            .then((res) => {

                // 注意this指向
                this.setState({
                    // list: res.data.terminals
                    list: res.data
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
        var act = obj.checked ? "on" : "off";

        //debugger
        axios.get(this.props.server_path + '/statistic/setNetWorkSwitch?mac=' + mac + '&act=' + act)
            .then((res) => {

                // 注意this指向
                this.setState({
                    // list: res.data.terminals
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
        return (
            <div>
                <WhiteSpace size="lg"/>
                <List  >

                    {
                        this.state.list.map((obj, i) => {
                            //console.log("obj="+JSON.stringify(obj))

                            var mychecked = obj.checked;

                            //debugger
                            return (
                                <Item key={i}>

                                    <Card full style={obj.state == "off_online" ? {background: "#EAEAEA"} : {background: "#F0FFFF"}}>
                                        <Card.Header
                                            title={obj.name + " (" + (obj.ip ? obj.ip : '--') + ")"}
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
                                        <Card.Footer content={"实时下载速度：" + obj.downSpeed} extra={<div> {"实时上传速度：" + obj.upSpeed} </div>}/>
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

