import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from ".././assets/img/kelas/hero.png"

export const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5" className="d-flex flex-column align-items-start">
            <div className="company-info">
              <img
                src={logo}
                alt="Company Logo"
                className="company-logo mr-3"
                style={{ maxWidth: '80px', maxHeight: '80px' }}
              />
              <div>
                <h5 className="fw-bold">PT DORMA MADA PERKASA</h5>
                <p className="desc">
                  Equity Tower Lantai 26 Unit H, Jalan Jendral Sudirman Senayan, Kebayoran Baru Kota Adm. Jakarta Selatan, DKI Jakarta
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5 mb-1 mt-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <div className="social mt-3">
              <Link className="text-decoration-none">
                <p className="m-0">dormamadaperkasa@gmail.com</p>
                <p className="mb-1 mt-3">+62 812-9859-7114</p>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3" style={{ fontSize: 'small' }}>
  &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">PT DORMA MADA PERKASA </span>
</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
