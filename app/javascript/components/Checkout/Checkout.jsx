import React, {Component} from 'react';
import MyNav from "../Navbar/Navbar";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

class Checkout extends Component {
    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <h3 style={{textAlign: 'center'}}>Thanks for placing an order with us!</h3><br/>
                    <h3 style={{textAlign: 'center'}}>An email has been sent to your email id regarding the order!</h3>
                </Container>
            </div>
        );
    }
}

export default Checkout;
