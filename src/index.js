import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route} from 'react-router-dom';


import Jsdemo from './jsdemo';
import Jsdemob from './jsdemob';
import Jsdemoc from './jsdemoc';
import Nav from './nav';
import TabBarExample from "./TabBarExample";

ReactDOM.render(
    <React.StrictMode>
        {/*<App />,*/}
        <Router>
            <div>
                <Nav/>
                <Route exact path="/" component={Jsdemo} />
                <Route  path="/Jsdemob" component={Jsdemob} />
                <Route  path="/Jsdemoc" component={Jsdemoc} />
            </div>
        </Router>
        <TabBarExample/>
    </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
