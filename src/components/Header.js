import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Icon } from 'react-fa';
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
                <NavItem>
                  <a className="nav-link" href="https://github.com/danielemery/natural-goodness" target="_blank" rel="noopener noreferrer"><Icon name='github' /> GitHub</a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        );
    }
}

export default Header;
