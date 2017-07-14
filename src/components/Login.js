import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { login } from '../reducers/users';
import { navigate } from '../reducers/navigate';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    render() {
        return (
            <Button onClick={this.handleLogin}>Login</Button>
        );
    }

    handleLogin = () => {
        this.props.login();
        this.props.navigate('/');
    }
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    navigate
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
