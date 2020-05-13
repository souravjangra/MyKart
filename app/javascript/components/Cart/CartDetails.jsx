import React, {Component} from 'react';
import util from "../../utils/util";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart} from "../../store/actions/cartActions";
import {Table} from "react-bootstrap";

class CartDetails extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {/*{cartItems.length === 0 ? "Cart is empty" : <div>You have {cartItems.length} products in your cart :</div>}*/}
                {cartItems.length > 0 &&
                <div>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cartItems.map((item,i) =>
                            <tr>
                                <td>{i+1}</td>
                                <td><b>{item.name}</b></td>
                                <td>{item.count}</td>
                                <td><p>&#8377;{util.formatCurrency(item.price*item.count)}</p></td>
                                <td>
                                    <button className="btn btn-danger btn-sm ml-2"
                                                    onClick={()=>this.props.removeFromCart(this.props.cartItems,item)}>X</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={3}></td>
                            <td colSpan={2}><p>Total: &#8377;{util.formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}</p></td>
                        </tr>
                        </tfoot>
                    </Table>
                    <div className="d-flex justify-content-center">
                        {this.props.fromCart ? <button className="btn btn-primary" onClick={()=>{this.props.onCheckout()}}>
                            Checkout
                        </button> : <button className="btn btn-primary" onClick={()=>{this.props.history.push('/cart')}}>
                            Proceed
                        </button>
                        }
                    </div>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items
});

export default connect(mapStateToProps,{removeFromCart})(withRouter(CartDetails));
