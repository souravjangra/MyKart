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
import TextTruncate from 'react-text-truncate';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isNavOpen: false,
            isSetOpen: false,
            products: [],
            cartItems: [],
            textTruncated: true
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
            return <Card style={{width: '18rem', margin: '12px'}} className="h-100">
                <Card.Body class="p-3">
                    <Row>
                        <Col sm={6}>
                            <Card.Title><p>{product.name}</p></Card.Title>
                            <Card.Text>
                                {this.state.textTruncated ? <TextTruncate
                                    line={4}
                                    element="span"
                                    truncateText="…"
                                    text={product.description}
                                    textTruncateChild={<a className="text-primary" onClick={()=>{this.setState({textTruncated: false})}}>More</a>}
                                /> :
                                    <p>{product.description}<br/><a className="text-primary" onClick={()=>{this.setState({textTruncated: true})}}>Hide</a></p>
                                }
                            </Card.Text>
                            <Card.Text>
                                <p>&#8377;{product.price}</p>
                            </Card.Text>

                        </Col>
                        <Col sm={6}>
                            <Card.Img style={{height: 180, width: 110}} variant="top" src={product.image}
                                      class="float-right"/>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row className="d-flex mt-auto">
                        <Col>
                            <Button outline color="primary">Buy Now</Button>
                        </Col>
                        <Col>
                            <Button outline color="primary" onClick={() => {this.props.addToCart(this.props.cartItems,product)}}>Add to cart</Button>
                        </Col>
                    </Row>
                </Card.Footer>
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
