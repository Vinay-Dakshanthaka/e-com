import React from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import profileImage from '../../assets/react.svg'; // Placeholder image

const UserSection = () => {
  const isLoggedIn = true; // Replace with actual login check
  const cartItemCount = 0; // Replace with actual cart item count logic

  return (
    <>
      <Nav className="align-items-center">
        {isLoggedIn ? (
          <NavDropdown 
            align="end"
            title={<img src={profileImage} alt="Profile" className="profile-photo rounded-circle" />} 
            id="basic-nav-dropdown"
            menuVariant="dark"
          >
            <NavDropdown.Item as={Link} to="/account">Account Settings</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/orders">My Orders</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </>
        )}
        <Nav.Link as={Link} to="/cart" className="position-relative">
          <FaShoppingCart size={24} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItemCount}
          </span>
        </Nav.Link>
      </Nav>
    </>
  );
};

export default UserSection;
