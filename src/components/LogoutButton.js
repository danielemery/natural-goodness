import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';
import { Icon } from 'react-fa';

const LogoutButton = ({ onClick }) => (
  <NavItem>
      <NavLink onClick={onClick}><Icon name='sign-in' /> Logout</NavLink>
  </NavItem>
);
LogoutButton.propTypes = {
  onClick: PropTypes.func,
};

export default LogoutButton;
