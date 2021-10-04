import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
// import { Router, Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';


import HomePage from "./HomePage";
import BasicExample from "./BasicExample";
import Jsdemoc from "./jsdemoc";

ReactDOM.render(

    <BrowserRouter>
        {/*<IndexRedirect to='/machine-list' />*/}
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/:selectedTab' exact component={HomePage}></Route>
        <Route path='/detai/:id' exact component={Jsdemoc}></Route>
    </BrowserRouter>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
