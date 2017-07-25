import React, { Component } from 'react';
import { login, dismissLoginError, startPasswordReset, completeNewPassword, LoginState } from '../reducers/users';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPasswordForm';
import NewPasswordForm from './NewPasswordForm';

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
        this.handlePasswordConfirmed = this.handlePasswordConfirmed.bind(this);
    }

    render() {
        switch(this.props.loginState) {
            case LoginState.LOGGED_OUT:
            default:
                switch(this.state.state) {
                    default:
                    case LOGIN:
                        return <LoginForm onLogin={this.handleLogin} error={this.props.loginError} onErrorDismiss={this.props.dismissLoginError} onResetPassword={this.handlePasswordResetRequested} />
                    case RESET:
                        return <ResetPasswordForm onResetPasswordStart={this.handlePasswordResetCodeRequested} onResetPasswordCancel={this.handlePasswordResetCancelled} />
                }
            case LoginState.NEW_PASSWORD_REQUIRED:
                return <NewPasswordForm onPasswordConfirmed={this.handlePasswordConfirmed} />
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

    handlePasswordConfirmed = (password) => {
        this.props.completeNewPassword(password);
    }
}

const mapStateToProps = state => {
    return {
        loginState: state.users.loginState,
        loginError: state.users.loginError
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    dismissLoginError,
    startPasswordReset,
    completeNewPassword
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
