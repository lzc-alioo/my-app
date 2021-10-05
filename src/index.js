import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter, Route } from 'react-router-dom';


import HomePage from "./HomePage";
import OnLinePage from "./OnLinePage";
import Jsdemoc from "./jsdemoc";

ReactDOM.render(

    <BrowserRouter>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/:selectedTab' exact component={HomePage}></Route>
        <Route path='/online/:selectedTab' exact component={OnLinePage}></Route>
        <Route path='/detai/:id' exact component={Jsdemoc}></Route>
    </BrowserRouter>,

    document.getElementById('root')
);

