import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

class NewPasswordForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            verifyPassword: ''
        }

        this.handleCompleteNewPassword = this.handleCompleteNewPassword.bind(this);

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleVerifyPasswordChange = this.handleVerifyPasswordChange.bind(this);
    }

    render() {
        return (
            <div>
                <Alert color="info">As you are logging in for the first time or your password has been reset by an administrator you are required to set a new password.</Alert>
                <Form>
                    <FormGroup>
                        <Label for='username'>Password</Label>
                        <Input type="password" id='password' name='password' onChange={this.handlePasswordChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='verifyPassword'>Verify</Label>
                        <Input type="password" id='verifyPassword' name='verifyPassword' onChange={this.handleVerifyPasswordChange} />
                    </FormGroup>
                </Form>
                <Button onClick={this.handleCompleteNewPassword}>Confirm</Button>
            </div>
        );
    }

    handleCompleteNewPassword() {
        this.props.onSubmit(this.state.password);
        this.state = {
            password: '',
            verifyPassword: ''
        }
    }

    handlePasswordChange(e) {
        var newPassword = e.target.value;
        this.setState((prevState) => {
            return {
                ...prevState,
                password: newPassword
            }
        });
    }

    handleVerifyPasswordChange(e) {
        var newVerifyPassword = e.target.value;
        this.setState((prevState) => {
            return {
                ...prevState,
                verifyPassword: newVerifyPassword
            }
        });
    }
}

export default NewPasswordForm;