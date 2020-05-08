import React,{Component} from 'react';
import Home from "../components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Router>
);

