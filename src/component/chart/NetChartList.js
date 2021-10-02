import React from 'react';
import NetChartItem from "./NetChartItem";
import {List} from 'antd-mobile';


class NetChartList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }


    render() {
        return (
            <List>
                <NetChartItem server_path={this.props.server_path} machineName='X3-55'/>
                <NetChartItem server_path={this.props.server_path} machineName='CM201-2'/>
                <NetChartItem server_path={this.props.server_path} machineName='ali6s'/>
                <NetChartItem server_path={this.props.server_path} machineName='alioo15'/>
                <NetChartItem server_path={this.props.server_path} machineName='hlnew50'/>

            </List>
        );
    }

}


export default NetChartList





