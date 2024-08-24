import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterNavLinks from './FooterNavLinks';
import SocialMediaLinks from './SocialMediaLinks';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <Container className="py-4">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <FooterNavLinks />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <SocialMediaLinks />
          </Col>
          <Col lg={4} md={12} sm={12}>
            <ContactInfo />
          </Col>
        </Row>
        <div className="text-center py-3">
          © 2024 Your Company Name. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
