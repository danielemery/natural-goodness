import React, { Component } from 'react';
import { login, dismissLoginError, startPasswordReset } from '../reducers/users';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPasswordForm';

const LOGIN = 'LOGIN';
const RESET = 'RESET';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            state: LOGIN
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handlePasswordResetRequested = this.handlePasswordResetRequested.bind(this);
        this.handlePasswordResetCodeRequested = this.handlePasswordResetCodeRequested.bind(this);
        this.handlePasswordResetCancelled = this.handlePasswordResetCancelled.bind(this);
    }

    render() {
        switch(this.state.state) {
            default:
            case LOGIN:
                return <LoginForm onLogin={this.handleLogin} error={this.props.loginError} onErrorDismiss={this.props.dismissLoginError} onResetPassword={this.handlePasswordResetRequested} />
            case RESET:
                return <ResetPasswordForm onResetPasswordStart={this.handlePasswordResetCodeRequested} onResetPasswordCancel={this.handlePasswordResetCancelled} />
        }
    }

    handleLogin = (credentials) => {
        this.props.login(credentials);
    }

    handlePasswordResetRequested = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                state: RESET
            }
        });
    }

    handlePasswordResetCancelled = () => {
        console.log("CANCELLED");
        this.setState((prevState) => {
            return {
                ...prevState,
                state: LOGIN
            }
        })
    }

    handlePasswordResetCodeRequested = (username) => {
        this.props.startPasswordReset(username);
    }
}

const mapStateToProps = state => ({
    loginState: state.users.loginState,
    loginError: state.users.loginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    dismissLoginError,
    startPasswordReset
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
