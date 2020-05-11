import React, {Component} from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './Home.sass'
import Card from 'react-bootstrap/Card'
import {Container, Row, Col} from 'react-bootstrap';
import Basket from "./Products/Basket";
import {connect} from 'react-redux';
import {fetchProducts } from "../store/actions/productActions";
import {addToCart} from "../store/actions/cartActions";
import MyNav from "./Navbar/Navbar";

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isNavOpen: false,
            isSetOpen: false,
            products: [],
            cartItems: []
        }
    }

    componentDidMount() {
        this.fetchProductsCall();
        // if(localStorage.getItem('cartItems')) {
        //     this.setState({
        //         cartItems: JSON.parse(localStorage.getItem('cartItems'))
        //     });
        // }
    }

    handleRemoveFromCart (e, item) {
         // this.setState(state=>{
         //     const cartItems = state.cartItems.filter(el => el.id !== item.id);
         //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
         //     return {cartItems};
         // });
    }

    addToCart = async (id) => {
        // fetch(`http://localhost:5000/api/v1/products/add_to_cart/${id}`,{
        //     method: 'POST'
        // });
    }

    fetchProductsCall = async () => {
        this.props.fetchProducts();

        if(localStorage.getItem('cartItems')) {
            this.setState({
                cartItems: JSON.parse(localStorage.getItem('cartItems'))
            });
        }
    }

    renderProducts = () => {
        var products = this.props.products.map((product) => {
            return <Card style={{width: '18rem', margin: '12px'}}>
                <Card.Body class="d-flex flex-column p-3">
                    <div class="row">
                        <div class="col">
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                <p>&#8377;{product.price}</p>
                            </Card.Text>

                        </div>
                        <div class="col">
                            <Card.Img style={{height: 200, width: 120}} variant="top" src={product.image}
                                      class="float-right"/>
                        </div>
                    </div>
                    <div class="row justify-content-around mt-2">
                        <div class="col">
                            <Button outline color="primary">Buy Now</Button>
                        </div>
                        <div className="col">
                            <Button outline color="primary" onClick={() => {this.props.addToCart(this.props.cartItems,product)}}>Add to cart</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        });

        return products;
    }

    render() {
        return (
            <div>
                <MyNav />
                <Container fluid>
                    <h2>Product List: </h2>
                    <Row>
                        <Col>
                            <Row>
                                {
                                    this.renderProducts()
                                }
                            </Row>
                        </Col>
                        <Col xs={3}>
                            <Basket cartItems={this.props.cartItems}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    cartItems: state.cart.items
})

export default connect(mapStateToProps, {fetchProducts, addToCart})(Home);
