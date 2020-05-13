import React, {Component} from 'react';
import MyNav from "../Navbar/Navbar";
import {Container} from "react-bootstrap";

class MyAccount extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.fetchUser();
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
                    <h1>My Account</h1>
                    {this.state.user !== null && <h4>Welcome back, {this.state.user.first_name}{" "}{this.state.user.last_name} </h4>}
                </Container>
            </div>
        );
    }
}



export default MyAccount;
