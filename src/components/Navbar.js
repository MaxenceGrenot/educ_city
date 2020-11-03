import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const TopNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Educ'City</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact to={ROUTES.HOME}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/MaxenceGrenot/educ_city" target="_blank">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>   
        </Navbar>
      </div>
    );
  }
  
  export default TopNav;