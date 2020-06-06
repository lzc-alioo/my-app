
import React from 'react';
import ReactDOM from 'react-dom';
import { Card, WhiteSpace } from 'antd-mobile';
import { List, InputItem, Switch, Stepper, Range, Button} from 'antd-mobile';
import {createForm} from "rc-form";

import axios from 'axios'


const Item = List.Item;

class JsDemo extends React.Component {

constructor(props){
        super(props);
        this.state={
        list:[],
        mychecked:true
        }
}

getDataA() {
    axios.get('http://192.168.1.109:80/statistic/getList')
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


accessCtrl(obj,event) {

    var alias=obj.alias;
    var switchCtrl=obj.switchCtrl==0?1:0;

    //debugger
    axios.get('http://192.168.1.109:80/statistic/accessCtrl?alias='+ alias+'&switchCtrl='+switchCtrl)
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


componentDidMount() {
        console.log("进来了。。。")
        this.getDataA();
}


render() {
const { getFieldProps } = this.props.form;

return (
    <div>
            <WhiteSpace size="lg"/>
            <List
            >


                    {
                            this.state.list.map(obj=>{
                                    console.log("obj="+JSON.stringify(obj))
                                    //switchCtrl 0 可以上网 ；1 不可以上网 ; null 可以上网，但是不能设置

                                    var mychecked=1==obj.switchCtrl ? false:true ;
                                    var mydisabled=null==obj.switchCtrl ? true:false ;
                                    console.log("mychecked="+mychecked);

                                    //debugger
                                    return (
                                        <Item>

                                        <Card full>
                                                <Card.Header
                                                    title={obj.alias + " ( "+obj.ip+" | "+obj.mac+")"}
                                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                                    extra={<Switch
                                                        checked={ mychecked }
                                                        // onChange={() => {
                                                            // this.setState({
                                                            // checked: !this.state.mychecked
                                                            //});
                                                            //alert("666");
                                                        // }}
                                                        onChange={this.accessCtrl.bind(this,obj)}
                                                        disabled={mydisabled}
                                                        />

                                                    }
                                                />
                                                <Card.Body>
                                                        <div>{ "累计流量: "+ obj.downloadTotal +"(download) | "+ obj.downloadTotal +"(upload)"} </div>
                                                </Card.Body>
                                                <Card.Footer content={ "实时下载速度："+ obj.downloadSpeed } extra={<div> { "实时上传速度："+ obj.uploadSpeed } </div>}/>
                                        </Card>

                                        </Item>)
                            })
                    }



            </List>


    </div>
);

}
}

const JsDemoWapper = createForm()(JsDemo);
ReactDOM.render(<JsDemoWapper />,  document.getElementById('root'));
export default JsDemoWapper

