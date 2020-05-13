import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import Basket from "../Products/Basket";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import CartDetails from "./CartDetails";

class Cart extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.fetchUser();
    }

    guidGenerator() {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4());
    }

    totalAmount = () => {
        var price = this.props.cartItems.reduce((a,c)=>a+c.price*c.count,0);
        return price;
    }

    handleCheckout = async () => {
        if(!localStorage.getItem('user')) {
            this.props.history.push('login');
        }
        await fetch('http://localhost:5000/checkout',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: this.props.cartItems, user_id: this.state.user.id, order_id: this.guidGenerator(),
                total: this.totalAmount()
            })
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            // localStorage.removeItem('cartItems');
            // this.props.history.push('checkout');
        }).finally(()=> {
            localStorage.removeItem('cartItems');
            this.props.history.push('checkout');
        });
    }

    fetchUser = async () => {
        const user = await localStorage.getItem("user");
        if (user) {
            this.setState({user: JSON.parse(user)});
        }
    }

    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <h1>Your Cart Details: </h1>
                    <CartDetails fromCart={true} onCheckout={this.handleCheckout}/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items
});

export default connect(mapStateToProps)(withRouter(Cart));
