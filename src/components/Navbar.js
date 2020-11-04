import React, { useState } from "react";
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
  NavbarText,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import * as CONFIG from "../constants/config";

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href={ROUTES.HOME}>{CONFIG.WEBNAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Classes</Nav.Link>
            <Nav.Link href="#pricing">Games</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={ROUTES.SIGN_IN}>
              <Button>Signin</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href={ROUTES.SIGN_UP}>
              <Button>Signup</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
