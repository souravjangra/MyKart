import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
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
import {Container, Row} from 'react-bootstrap';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isNavOpen: false,
            isSetOpen: false,
            products: []
        }
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/api/v1/products')
            .then((response) => {
                return response.json()
            })
        this.setState({products: res});
    }

    renderProducts = () => {
        var products = this.state.products.map((product) => {
            return <Card style={{width: '18rem', margin: '12px'}}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        });

        return products;
    }

    navToggle = () => {
        this.setState(prevState => ({
            isNavOpen: !prevState.isNavOpen
        }));
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">MyKart</NavbarBrand>
                    <NavbarToggler onClick={this.navToggle}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/" className="inactive" activeClassName="active"
                                         exact={true}>Home</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink to="/login" className="inactive" activeClassName="active"
                                         exact={true}>Login</NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink to="/cart" className="inactive" activeClassName="active"
                                         exact={true}>Cart</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container>
                    <h2>Product List: </h2>
                    <Row>
                        {
                            this.renderProducts()
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
