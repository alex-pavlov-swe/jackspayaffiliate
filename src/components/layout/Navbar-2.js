import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavbarWrapper = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.getElementById('collapse').style.backgroundColor = 'transparent';
    } else {
      document.getElementById('collapse').style.backgroundColor = '#272727';
    }
  };

  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-dark text-white"
      id="navbar-other"
    >
      <NavbarBrand className="navbar-brand text-white" href="/">
        <img
          className="navbar-logo"
          src={require('../../img/main_logo.png')}
          alt="JacksPay logo"
        />
        JACKS PAY AFFILIATE
      </NavbarBrand>
      <NavbarToggler id="navbar-toggler" onClick={toggle} />
      <Collapse id="collapse" isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              className="nav-item-ordinary text-white"
              href="/marketingTools/#marketing-tools"
            >
              MARKETING TOOLS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-item-ordinary text-white"
              href="/commisions/#about"
            >
              COMISSIONS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-item-ordinary text-white"
              href="/contacts/#about"
            >
              CONTACTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-item-login text-white" href="/user">
              LOGIN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-item-join text-white" href="/join">
              JOIN NOW
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarWrapper;
