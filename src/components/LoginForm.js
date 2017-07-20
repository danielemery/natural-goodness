import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleErrorDismissed = this.handleErrorDismissed.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleResetPassword = this.handleResetPassword.bind(this);

    }

    render(props) {

        var alert = null;
        if(this.props.error && this.props.error.length > 0) {
            alert = (
                <Alert color='danger' isOpen={this.props.error && this.props.error.length > 0} toggle={this.handleErrorDismissed}>
                    <strong>Login Failed!</strong> {this.props.error}
                </Alert>
            );
        }

        return (
            <div>
                {alert}
                <Form>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input id='username' name='username' onChange={this.handleUsernameChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' id='password' name='password' onChange={this.handlePasswordChange} />
                    </FormGroup>
                    <Button onClick={this.handleLogin}>Login</Button>
                    <Button onClick={this.handleResetPassword}>Reset Password</Button>
                </Form>
            </div>
        );
    }

    handleLogin() {
        this.props.onLogin({
            ...this.state
        });
    }

    handleErrorDismissed() {
        this.props.onErrorDismiss();
    }

    handleResetPassword() {
        this.props.onResetPassword();
    }

    handleUsernameChange(e) {
        var newUserName = e.target.value;
        this.setState((prevState) => {
            return {
                ...prevState,
                username: newUserName
            }
        });
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
}

export default LoginForm;