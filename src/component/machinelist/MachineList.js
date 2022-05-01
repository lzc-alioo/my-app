import React from 'react';
import {Card, List, Switch, WhiteSpace} from 'antd-mobile';

import axios from 'axios'


const Item = List.Item;

class MachineList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            downloadSpeed: 0,
            upSpeed: 0
        }

    }

    componentDidMount() {
        console.log("MachineList componentDidMount 进来了。。。")
        this.getList();
    }


    getList() {
        axios.get(this.props.server_path + '/machine/getMachineList')
            .then((res) => {

                // 注意this指向
                this.setState({
                    list: res.data.list,
                    downloadSpeed: res.data.downloadSpeed,
                    upSpeed: res.data.upSpeed,
                });
                // console.log("res.data=" + JSON.stringify(res.data));
                //debugger

                let onlineMachineCount=0;
                this.state.list.forEach((item,index,array)=>{
                    if(item.state === "on_line"){
                        onlineMachineCount++;
                    }
                });
                this.props.parent.modifyOnlineMachineCount(this, onlineMachineCount)

                let tvState="关";
                this.state.list.forEach((item,index,array)=>{
                    if(item.name === "X3-55" && item.state === "on_line"){
                        tvState="开";
                    }
                });
                this.props.parent.modifyTvState(this, tvState)


            })
            .catch((err) => {
                console.log(err)
            })
    }


    accessCtrl(obj, event) {

        var mac = obj.mac;
        var act = obj.checked ? "on" : "off";

        //debugger
        axios.get(this.props.server_path + '/machine/accessControl?mac=' + mac + '&act=' + act)
            .then((res) => {

                // 注意this指向
                this.setState({
                    list: res.data.list,
                    downloadSpeed: res.data.downloadSpeed,
                    upSpeed: res.data.upSpeed,
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
                    <div style={{paddingLeft:15}} >
                        下载速度：{this.state.downloadSpeed}kB/S 上传速度：{this.state.upSpeed}kB/S
                    </div>
                <WhiteSpace size="lg"/>
                <List  >

                    {
                        this.state.list.map((obj, i) => {
                            //console.log("obj="+JSON.stringify(obj))

                            return (
                                <Item key={i}>

                                    <Card full style={obj.state === "off_online" ? {background: "#EAEAEA"} : {background: "#F0FFFF"}}>
                                        <Card.Header
                                            title= {  obj.name + " (" + (obj.ip ? obj.ip : '--') + ") " }
                                            extra={<Switch
                                                checked={obj.checked}
                                                onChange={this.accessCtrl.bind(this, obj)}
                                            />

                                            }
                                        />
                                        <Card.Body>
                                            <div> {obj.mac}  </div>
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

