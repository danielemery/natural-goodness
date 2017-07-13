import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startAddOrder, cancelAddOrder, addOrder  } from '../reducers/orders';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Icon } from 'react-fa';
import AddOrderForm from './AddOrderForm';

class Orders extends Component {
    render() {

        var orderList = this.props.orders.orders.map(function(order){
            return (
                <ListGroupItem key={order.key}>
                    {order.name}
                    {!order.confirmed ? <Icon name='circle-o-notch' spin /> : null}
                </ListGroupItem>
            );
        });

        var addOrder = null;
        if(this.props.orders.adding) {
            addOrder =  (
                <ListGroupItem>
                    <AddOrderForm 
                        cancelOrder={this.props.cancelAddOrder}
                        addOrder={this.props.addOrder} />
                </ListGroupItem>
            );
        }

        return (
            <div>
                <h3>Orders</h3>
                <ListGroup>
                    { orderList }
                    { addOrder }
                </ListGroup>
                { !this.props.orders.adding ? <Button onClick={this.props.startAddOrder}>Add Order</Button> : null }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    orders: state.orders
});

const mapDispatchToProps = dispatch => bindActionCreators({
    startAddOrder,
    cancelAddOrder,
    addOrder
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Orders);