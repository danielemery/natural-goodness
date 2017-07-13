import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { NavLink } from 'react-router-dom'

class HeaderLogin extends Component {
    render() {
        return (
            <NavLink className="nav-link" activeClassName="active" exact to="/login"><Icon name='sign-in' /> Login</NavLink>
        );
    }
}

export default HeaderLogin;
