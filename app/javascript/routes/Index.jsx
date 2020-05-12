import React,{Component} from 'react';
import Home from "../components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../components/Authentication/Login";
import Admin from "../components/Backend/Admin";
import Cart from "../components/Cart/Cart";
import Register from "../components/Authentication/Register";
import MyAccount from "../components/MyAccount/MyAccount";
import Checkout from "../components/Checkout/Checkout";
import Orders from "../components/Orders/Orders";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/account" exact component={MyAccount}/>
            <Route path="/checkout" exact component={Checkout}/>
            <Route path="/orders" exact component={Orders}/>
        </Switch>
    </Router>
);

