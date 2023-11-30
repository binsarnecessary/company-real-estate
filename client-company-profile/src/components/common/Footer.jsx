import React from "react"
import { Container,Col,Row } from "react-bootstrap"
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from "../data/images/logo.png"

const Footer = () => {
  return (
        <div className="footer py-5">
          <Container>
            <Row className="d-flex justify-content-between">
              <Col lg="5" className="d-flex flex-column align-items-start">
                <div className="company-info">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="company-logo "
                    style={{ maxWidth: '80px', maxHeight: '80px' }}
                  />
                </div>
                <div class="container">
                  <div class="content">
                    <h5 className="fw-bold">DORMA MADA PERKASA</h5>
                    <p className="desc">Equity Tower Lantai 26 Unit H, Jalan Jendral Sudirman Senayan, Kebayoran Baru Kota Adm. Jakarta Selatan, DKI Jakarta</p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="mt-lg-0 mt-5 mb-1 mt-4">
                <h5 className=" contact fw-bold mb-3">Contact</h5>
                <div className="social mt-3">
                  <div className="acont text-decoration-none">
                    <p className="m-0">aldolinovil@dorma.com</p>
                    <p className="mb-1 mt-1">ervanowijanarko@dorma.com</p>
                    <p className="mb-1 mt-1">seles.maketing@dorma.com</p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="mt-lg-0 mt-5 mb-1 mt-4 contact-section">
                <h5 className="media-contact fw-bold mb-3">Social</h5>
                <div className="social-media mt-3">
                  <div className="acont text-decoration-none">
                    <FaInstagram style={{ marginRight: '5px' }} />
                    <FaFacebook style={{ marginRight: '5px' }} />
                    <FaTwitter />
                  </div>
                </div>
              </Col>
              <Col>
                <p className="text-center px-md-0 px-3" style={{ fontSize: 'small' }}>
                  &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">PT DORMA MADA PERKASA </span>
                </p>
          </Col>
            </Row>
          </Container>
        </div>  
  )
}

export default Footer
