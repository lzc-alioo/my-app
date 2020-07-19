import React from "react";
import PropTypes from 'prop-types'

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hello lzc",
            // title: 333,
            date: new Date(),
            showWarning: true,
            mylistdata: [11, 22, 33, 44, 55]
        };
    }

    // componentDidMount() {
    //     this.timerID = setInterval(
    //         () => this.setState({date: new Date()}),
    //         1000
    //     );
    // }

    componentDidMount() {
        let that = this;
        setInterval(function () {
            that.setState({
                date: new Date()
            })
        }, 1000);
    }

    handleToggleClick = () => {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }


    render() {
        return (
            <div>
                <Title title={this.state.title}/>
                <FattmatDater date={this.state.date}/>
                <Toggle/>
                <div>
                    <WarningBanner warn={this.state.showWarning}/>
                    <button onClick={this.handleToggleClick}>
                        {this.state.showWarning ? '隐藏' : '显示'}
                    </button>
                </div>
                <ListUl listdata={this.state.mylistdata}/>
            </div>
        );
    }


}

class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string
};

function FattmatDater(props) {
    return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>

}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        //this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            警告!
        </div>
    );
}


function ListItem(props) {
    return (<li>{props.value}</li>);
}

function ListUl(props) {
    // debugger
    // const numbers = props.listdata;
    // const listItems = numbers.map((number) =>
    //     // 又对啦！key应该在数组的上下文中被指定
    //     <ListItem key={number.toString()}  value={number} />
    //
    // );
    //
    // return (<ul>{listItems}</ul>);

    // const listItems=props.listdata.map((number)=>{
    //     return <ListItem key={number.toString()}  value={number} />
    // })

    return (<ul>{
        props.listdata.map((number) => {
            return <ListItem key={number.toString()} value={number}/>
        })}
    </ul>)
}

//这里只能使用export default Clock，而不能是export default Example啥的
export default Clock
