import React, { Component } from 'react';
import { login, dismissLoginError } from '../reducers/users';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    render() {
        return (
            <LoginForm onLogin={this.handleLogin} error={this.props.loginError} onErrorDismiss={this.props.dismissLoginError} />
        );
    }

    handleLogin = (credentials) => {
        this.props.login(credentials);
    }
}

const mapStateToProps = state => ({
    loginState: state.users.loginState,
    loginError: state.users.loginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    dismissLoginError
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
