import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import BarIcon from '../components/svg-icons/bar-icon';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className='header'>
      <Container>
        <Navbar expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <a to="/" className='header-btn sign-up me-3'>sign up</a>
                <a to="/" className='header-btn sign-in'>sign up</a>
              </NavItem>
              <NavItem className='d-none d-md-block'>
                <BarIcon color="#fff" size="32" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;