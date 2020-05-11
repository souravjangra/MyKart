import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

class MyNav extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isNavOpen: false,
            isSetOpen: false,
        }
    }

    navToggle = () => {
        this.setState(prevState => ({
            isNavOpen: !prevState.isNavOpen
        }));
    }

    render() {
        return (
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
        );
    }
}

export default MyNav;
