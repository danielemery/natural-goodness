import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Icon } from 'react-fa';
import { CognitoState, Logout } from 'react-cognito';
import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';

import './Header.css';

class Header extends Component {

    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      }

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render() {

      var login;
      switch(this.props.loginState) {
        case CognitoState.AUTHENTICATED:
        case CognitoState.LOGGING_IN:
          break;
        case CognitoState.LOGGED_IN:
          login = (
            <Logout>
              <LogoutButton />
            </Logout>
          );
          break;
        case CognitoState.LOGGED_OUT:
        case CognitoState.NEW_PASSWORD_REQUIRED:
        case CognitoState.MFA_REQUIRED:
        case CognitoState.EMAIL_VERIFICATION_REQUIRED:
        case CognitoState.CONFIRMATION_REQUIRED:
        default:
          login = (
            <NavItem>
              <NavLink className="nav-link" activeClassName="active" exact to="/login"><Icon name='sign-in' /> Login</NavLink>
            </NavItem>
          );
          break;
      }

      return (
        <Navbar color="faded" light toggleable className="main-nav">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand>Natural Goodness</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" exact to="/"><Icon name='home'/> Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" exact to="/about"><Icon name='info' /> About</NavLink>
              </NavItem>
              {login}
              <NavItem>
                <a className="nav-link" href="https://github.com/danielemery/natural-goodness" target="_blank" rel="noopener noreferrer"><Icon name='github' /> GitHub</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      );
    }
}

const mapStateToProps = state => {
    return {
        loginState: state.cognito.state
    }
};

export default connect(
    mapStateToProps
)(Header);

