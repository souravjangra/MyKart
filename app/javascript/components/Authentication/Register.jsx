import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import Form from 'react-bootstrap/Form'
import {connect} from "react-redux";
import {signupUser} from "../../store/actions/authActions";
import {Spinner} from "reactstrap";

class Register extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            first_name: "",
            last_name: ""
        }
    }

    componentDidMount() {

    }

    signup = async () => {
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        const first_name = this.state.first_name;
        const last_name = this.state.last_name;

        this.props.signupUser(email, password, confirmPassword, first_name, last_name);
    }

    handleSignup = (e) => {
        e.preventDefault();
        this.signup();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <MyNav />
                    <h2 className="mt-4 mb-4" style={{textAlign: 'center'}}>SIGN UP</h2>
                    { this.props.loading ? <div className="d-flex justify-content-center align-items-center">
                            <Spinner className="align-self-center mt-lg-5" style={{ width: '3rem', height: '3rem'}} color="primary" />
                        </div>
                        : <Container>
                            <Form onSubmit={this.handleSignup}>
                            {this.props.error && <div className="alert alert-danger" role="alert">
                                {this.props.errorMsg}
                            </div>}
                            {this.props.success && <div className="alert alert-success" role="alert">
                                {this.props.successMsg}
                            </div>}
                        <Row className="mb-2">
                        <Col>
                        <Form.Control placeholder="First name" required
                                      name="first_name"
                                      value={this.state.first_name}
                                      onChange={(e)=> {this.onChange(e)}}
                        />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" required
                                      name="last_name"
                                      value={this.state.last_name}
                                      onChange={(e)=> {this.onChange(e)}}/>
                        </Col>
                        </Row>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required
                                      value={this.state.email}
                                      name="email"
                                      onChange={(e)=> {this.onChange(e)}}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      value={this.state.password}
                                      name="password"
                                      required
                                      onChange={this.onChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      name="confirmPassword"
                                      value={this.state.confirmPassword}
                                      required
                                      onChange={this.onChange}/>
                        </Form.Group>

                        <button className="btn btn-primary" type="submit">
                        Signup
                        </button>
                        </Form>
                        </Container>
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.error,
    errorMsg: state.auth.errorMsg,
    success: state.auth.success,
    successMsg: state.auth.successMsg
});

export default connect(mapStateToProps,{signupUser})(Register);
