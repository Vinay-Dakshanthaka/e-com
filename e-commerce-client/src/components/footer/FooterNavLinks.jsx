import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterNavLinks = () => {
  return (
    <Nav className="flex-column">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/products">Products</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    </Nav>
  );
};

export default FooterNavLinks;
