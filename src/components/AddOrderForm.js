import React, { Component } from 'react';

class AddOrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleOrderNameChange = this.handleOrderNameChange.bind(this);
        this.handleAddOrder = this.handleAddOrder.bind(this);
        this.handleCancelOrder = this.handleCancelOrder.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    clearForm() {
        this.setState({
            name: ''
        });
    }

    handleOrderNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleAddOrder() {
        this.clearForm();
        this.props.addOrder({
            name: this.state.name
        });
    }

    handleCancelOrder() {
        this.clearForm();
        this.props.cancelOrder();
    }

    render() {
        return (
            <span>
                <input onChange={this.handleOrderNameChange}></input>
                <a onClick={this.handleCancelOrder}>Cancel</a>
                <a onClick={this.handleAddOrder}>Add</a>
            </span>
        );
    }
}

export default AddOrderForm;