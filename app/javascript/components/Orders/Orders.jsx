import React, {Component} from 'react';
import {Container, Table} from "react-bootstrap";
import MyNav from "../Navbar/Navbar";
import {connect} from "react-redux";
import moment from "moment";
import util from "../../utils/util";

class Orders extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        this.fetchAllOrders();
    }

    fetchAllOrders = async () => {
        await fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user_id: this.props.user.id})
        }).then((res) => {return res.json()})
            .then((data)=>{
                this.setState({orders: data})
                console.log(data)
            });
    }

    renderOrders = () => {


    }

    render() {
        return (
            <div>
                <MyNav />
                <Container>
                    <h1>My Orders :</h1>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Order Id</th>
                                <th>Created On</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.orders.map((el,i)=>{
                                return <tr>
                                    <td>{i}</td>
                                    <td>{el.order_id}</td>
                                    <td>{moment(el.created_at).format('lll')}</td>
                                    <td><p>&#8377;{util.formatCurrency(el.amount)}</p></td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default connect(mapStateToProps)(Orders);
