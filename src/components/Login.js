import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {CognitoState, performLogin, Login as LoginWrapper, NewPasswordRequired} from 'react-cognito'

import LoginForm from './LoginForm';
import NewPasswordForm from './NewPasswordForm';

class Login extends Component {
    render() {
        var form;
        switch(this.props.loginState) {
            case CognitoState.LOGGED_OUT:
            default:
                form = (
                    <LoginWrapper>
                        <LoginForm onResetPassword={this.handlePasswordResetRequested} />
                    </LoginWrapper>
                )
                break;
            case CognitoState.NEW_PASSWORD_REQUIRED:
                form = (
                    <NewPasswordRequired>
                        <NewPasswordForm />
                    </NewPasswordRequired>
                )
                break;
        }
        return (
            <div>
                {/* <span>{this.props.loginState}</span> */}
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginState: state.cognito.state
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    performLogin
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
