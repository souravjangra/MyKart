import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import Basket from "../Products/Basket";
import {withRouter} from "react-router-dom";

class Cart extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleCheckout = () => {
        if(!localStorage.getItem('user')) {
            this.props.history.push('login');
        }
    }

    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <h1>Your Cart Details: </h1>
                    <Basket fromCart={true} onCheckout={this.handleCheckout}/>
                </Container>
            </div>
        );
    }
}

export default withRouter(Cart);
