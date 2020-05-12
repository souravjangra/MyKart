import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import Form from 'react-bootstrap/Form'

class Login extends Component {
    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <h1 style={{textAlign: 'center'}} className="mt-4">LOGIN</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </Form>
                    <h3 className="mt-4">Not having an account? <button className="btn btn-primary"
                                                                        onClick={()=>{this.props.history.push('register')}}
                    >Signup</button></h3>

                </Container>
            </div>
        );
    }
}

export default Login;
