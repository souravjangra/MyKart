import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import Basket from "../Products/Basket";

class Cart extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleCheckout = () => {

    }

    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <h1>Your Cart Details: </h1>
                    <Basket fromCart={true}/>
                </Container>
            </div>
        );
    }
}

export default Cart;
