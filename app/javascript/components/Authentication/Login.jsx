import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import Form from 'react-bootstrap/Form'
import {Spinner} from "reactstrap";
import {connect} from "react-redux";
import {loginUser} from "../../store/actions/authActions";

class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
    }

    login = async () => {
        const email = this.state.email;
        const password = this.state.password;

        this.props.loginUser(email, password);
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.login();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <MyNav />
                {this.props.loading ? <div className="d-flex justify-content-center align-items-center">
                        <Spinner className="align-self-center mt-lg-5" style={{ width: '3rem', height: '3rem'}} color="primary" />
                    </div>
                    : <Container>
                    <h1 style={{textAlign: 'center'}} className="mt-4">LOGIN</h1>
                        {this.props.error && <div className="alert alert-danger" role="alert">
                            {this.props.errorMsg}
                        </div>}
                        {this.props.success && <div className="alert alert-success" role="alert">
                            {this.props.successMsg}
                        </div>}
                    <Form onSubmit={this.handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          name="email"
                                          placeholder="Enter email"
                                          value={this.state.email}
                                          onChange={(e)=> {this.onChange(e)}}
                                          required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          name="password"
                                          value={this.state.password}
                                          required onChange={this.onChange}/>
                        </Form.Group>
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </Form>
                    <h3 className="mt-4">Not having an account? <button className="btn btn-primary"
                                                                        onClick={()=>{this.props.history.push('register')}}
                    >Signup</button></h3>

                </Container>}
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

export default connect(mapStateToProps, {loginUser})(Login);
