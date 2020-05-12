import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import Form from 'react-bootstrap/Form'

class Register extends Component {
    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <h2 className="mt-4 mb-4" style={{textAlign: 'center'}}>SIGN UP</h2>
                    <Form>
                        <Row className="mb-2">
                            <Col>
                                <Form.Control placeholder="First name" required />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" required />
                            </Col>
                        </Row>
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

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <button className="btn btn-primary" type="submit">
                            Signup
                        </button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Register;
