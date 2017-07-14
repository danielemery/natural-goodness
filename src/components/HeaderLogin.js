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

        var link = null;
        if(this.props.loginState === LoginState.LOGGED_IN) {
            link = <NavLink onClick={this.handleLogout}><Icon name='sign-out'/> Logout</NavLink>
        } else {
            link = <RouteNavLink className="nav-link" activeClassName="active" exact to="/login"><Icon name='sign-in' /> Login</RouteNavLink>;
        }

        return link;
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
