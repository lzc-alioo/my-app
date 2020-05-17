
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
axios.get('http://192.168.1.100:8080/statistic/index')
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
                                    //switchCtl 0 可以上网 ；1 不可以上网 ; null 可以上网，但是不能设置

                                    var mychecked=1==obj.switchCtl ? false:true ;
                                    var mydisabled=null==obj.switchCtl ? true:false ;
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
                                                        onChange={() => {
                                                            this.setState({
                                                            checked: !this.state.mychecked,
                                                            });
                                                        }}
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

