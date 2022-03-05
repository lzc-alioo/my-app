import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
// import 'antd/dist/antd.css';
import './index.css';
import { GlobalStyleIcon } from './iconfont/iconfont.css'


import { BrowserRouter, Route } from 'react-router-dom';


import HomePage from "./HomePage";
import OnLinePage from "./OnLinePage";
import OnLinePageTest from "./OnLinePageTest";
import Jsdemoc from "./jsdemoc";

ReactDOM.render(

    <BrowserRouter>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/home/:selectedTab' exact component={HomePage}></Route>
        <Route path='/online/:selectedTab' exact component={OnLinePage}></Route>
        <Route path='/online/test' exact component={OnLinePageTest}></Route>
        <Route path='/detai/:id' exact component={Jsdemoc}></Route>
    </BrowserRouter>,

    document.getElementById('root')
);

