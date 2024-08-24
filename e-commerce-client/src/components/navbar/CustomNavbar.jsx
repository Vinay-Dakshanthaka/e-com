import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import UserSection from './UserSection';
// import './customNavbar.css';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/react.svg'; // Placeholder image


const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={profileImage} alt="Profile" className="profile-photo rounded-circle" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <SearchBar />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavLinks />
                    <UserSection />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
