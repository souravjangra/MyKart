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
} from "reactstrap";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";

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

    checkUserLoggedIn = () => {
        if(localStorage.getItem("user")){
            return true;
        }
        return false;
    }

    onLogout = () => {
        this.props.logout();
        this.props.history.push();
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarToggler onClick={this.navToggle}/>
                    <NavbarBrand>MyKart</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="mt-2">
                                <NavLink to="/" className="inactive" activeClassName="active"
                                         exact={true}>Home</NavLink>
                            </NavItem>
                            <NavItem className="ml-3 mt-2">
                                <NavLink to="/login" className="inactive" activeClassName="active"
                                         exact={true}>Login</NavLink>
                            </NavItem>
                            <NavItem className="ml-3 mt-2">
                                <NavLink to="/cart" className="inactive" activeClassName="active"
                                         exact={true}>Cart</NavLink>
                            </NavItem>
                            {/*{this.checkUserLoggedIn() && <NavItem className="ml-3">*/}
                            {/*    <NavLink to="/account" className="inactive" activeClassName="active"*/}
                            {/*             exact={true}>My Account</NavLink>*/}
                            {/*</NavItem>*/}
                            {/*}*/}
                            {this.checkUserLoggedIn() &&
                                    <UncontrolledDropdown nav inNavbar className="ml-3">
                                        <DropdownToggle className="inactive" activeClassName="active" nav caret>
                                            My Account
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem onClick={()=>{this.props.history.push('account')}}>
                                                Account
                                            </DropdownItem>
                                            <DropdownItem onClick={()=>{this.props.history.push('orders')}}>
                                                Orders
                                            </DropdownItem>
                                            <DropdownItem
                                            onClick={this.onLogout}>
                                                Logout
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {logout})(withRouter(MyNav));
