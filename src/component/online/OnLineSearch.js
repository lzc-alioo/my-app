// import React from 'react';
// import {DatePicker, Button, Space,} from 'antd-mobile-v5';
// import moment from 'moment'
//
//
// class OnLineSearch extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible1: false,
//             startTime: moment().format('YYYY-MM-DD 00:00'),
//             visible2: false,
//             endTime: moment().format('YYYY-MM-DD 23:59'),
//         }
//
//     }
//
//     render() {
//
//         // const startTime = moment().format('YYYYMMDD0000');
//         // const endTime = moment().format('YYYYMMDDHHmm');
//         // const startTime = moment(this.state.startTime, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm');
//         // const endTime = moment(this.state.endTime, 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm');
//
//         return (
//             <div>
//                 <Space wrap>
//                     <>
//                         开始时间：<Button
//                         onClick={() => {
//                             this.setState((prevState) => {
//                                 return {visible1: true}
//                             })
//                         }}
//                     >
//                         {this.state.startTime}
//                     </Button>
//                         <DatePicker
//                             visible={this.state.visible1}
//                             defaultValue={new Date(this.state.startTime + ":00")}
//                             precision='minute'
//                             onClose={() => {
//                                 this.setState((prevState) => {
//                                     return {visible1: false}
//                                 })
//                             }}
//
//                             onConfirm={val => {
//                                 // debugger
//                                 this.setState({
//                                     startTime: moment(val).format('YYYY-MM-DD HH:mm')
//                                 })
//                                 // debugger
//                             }}
//                         />
//                     </>
//                     <>
//                         结束时间：<Button
//                         onClick={() => {
//                             this.setState((prevState) => {
//                                 return {visible2: true}
//
//                             })
//                         }}
//                     >
//                         {this.state.endTime}
//                     </Button>
//                         <DatePicker
//                             visible={this.state.visible2}
//                             defaultValue={new Date(this.state.endTime + ":00")}
//                             precision='minute'
//                             onClose={() => {
//                                 this.setState((prevState) => {
//                                     return {visible2: false}
//                                 })
//                             }}
//
//                             onConfirm={val2 => {
//                                 this.setState({
//                                     endTime: moment(val2).format('YYYY-MM-DD HH:mm')
//                                 })
//                             }}
//                         />
//                     </>
//                 </Space>
//
//             </div>
//         );
//     }
//
// }
//
//
// export default OnLineSearch
//
//
//
//
//
