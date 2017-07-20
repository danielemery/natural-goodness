import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ResetPasswordForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        this.handleResetCodeRequested = this.handleResetCodeRequested.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for='username'>Username or Email</Label>
                        <Input id='username' name='username' onChange={this.handleUsernameChange} />
                    </FormGroup>
                </Form>
                <Button onClick={this.handleResetCodeRequested}>Send Reset Code</Button>
                <Button onClick={this.props.onResetPasswordCancel}>Cancel</Button>
            </div>
        );
    }

    handleResetCodeRequested() {
        this.props.onResetPasswordStart(this.state.username);
    }

    handleUsernameChange(e) {
        var newUsername = e.target.value;
        this.setState((prevState) => {
            return {
                ...prevState,
                username: newUsername
            }
        });
    }
}

export default ResetPasswordForm;