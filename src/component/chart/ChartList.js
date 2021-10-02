import React from 'react';
import ChartItem from "ChartItem";
import {List} from 'antd-mobile';


class ChartList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }


    render() {
        return (<form>
            <List className="date-picker-list">
                <ChartItem server_path={this.props.server_path} machineName='X3-55'/>
                <ChartItem server_path={this.props.server_path} machineName='CM201-2'/>
                <ChartItem server_path={this.props.server_path} machineName='ali6s'/>
                <ChartItem server_path={this.props.server_path} machineName='hlnew50'/>

            </List>
        </form>);
    }


}


export default ChartList





