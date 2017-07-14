import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginState, logout } from '../reducers/users';
import { NavLink } from 'reactstrap';

class HeaderLogin extends Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    render() {
        switch(this.props.loginState) {
            case LoginState.LOGGED_IN:
                return <NavLink onClick={this.handleLogout}><Icon name='sign-out'/> Logout</NavLink>
            case LoginState.LOGGING_IN:
                return <NavLink><Icon name='circle-o-notch' spin /></NavLink>
            case LoginState.LOGGED_OUT:
                return <RouteNavLink className="nav-link" activeClassName="active" exact to="/login"><Icon name='sign-in' /> Login</RouteNavLink>;
            default:
                return null;
        }
    }

    handleLogout() {
        this.props.logout();
    }
}

const mapStateToProps = state => ({
    loginState: state.users.loginState
});

const mapDispatchToProps = dispatch => bindActionCreators({
    logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogin);
