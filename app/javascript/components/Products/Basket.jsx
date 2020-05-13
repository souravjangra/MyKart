import React, {Component} from 'react';
import util from "../../utils/util";
import {connect} from "react-redux";
import {removeFromCart} from "../../store/actions/cartActions";
import {withRouter} from "react-router-dom";

class Basket extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Cart is empty" : <div>You have {cartItems.length} products in your cart :</div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {
                                cartItems.map((item) =>
                                    <li>
                                        <p><b>{item.name}</b><br/> X {item.count} = &#8377;{util.formatCurrency(item.price*item.count)}
                                        <button className="btn btn-danger btn-sm ml-2"
                                        onClick={()=>this.props.removeFromCart(this.props.cartItems,item)}>X</button>
                                        </p>
                                    </li>
                                )
                            }
                        </ul>
                        <p>Total: &#8377;{util.formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}</p>
                        <br/>
                        {this.props.fromCart ? <button className="btn btn-primary" onClick={()=>{this.props.onCheckout()}}>
                            Checkout
                        </button> : <button className="btn btn-primary" onClick={()=>{this.props.history.push('/cart')}}>
                            Proceed
                        </button>
                        }
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items
});

export default connect(mapStateToProps,{removeFromCart})(withRouter(Basket));
