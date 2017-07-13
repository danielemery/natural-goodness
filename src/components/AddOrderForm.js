import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { Form, FormGroup, Label, Input } from 'reactstrap';

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
            <Form inline>
                <FormGroup row>
                    <Label for='name'>Name: </Label>
                    <Input type='text' name='name' id='name' onChange={this.handleOrderNameChange} />
                    <Icon name='check' size='lg' onClick={this.handleAddOrder} />
                    <Icon name='times' size='lg' onClick={this.handleCancelOrder} />
                </FormGroup>
            </Form>
        );
    }
}

export default AddOrderForm;