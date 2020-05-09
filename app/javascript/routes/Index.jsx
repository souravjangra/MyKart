import React,{Component} from 'react';
import Home from "../components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../components/Authentication/Login";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login}/>
        </Switch>
    </Router>
);

