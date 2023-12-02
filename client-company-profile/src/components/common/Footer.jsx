import React from "react"
import { Container,Col,Row } from "react-bootstrap"
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from "../data/images/logo.png"

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5" className="d-flex flex-row align-items-start">
            <div className="company-info d-flex align-items-center">
              <img
                src={logo}
                alt="Company Logo"
                className="company-logo mr-10"
                style={{ maxWidth: '80px', maxHeight: '80px',marginTop:'-70px',marginRight:'10px' }}
              />
              <div className="text-right">
                <h5 className="fw-bold">PT DORMA MADA PERKASA</h5>
                <p className="desc">
                  Equity Tower Lantai 26 Unit H, Jalan Jendral Sudirman Senayan, Kebayoran Baru Kota Adm. Jakarta Selatan, DKI Jakarta
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5 mb-1 mt-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <div className="social " style={{marginTop:'-10px'}}>
              <div className="text-decoration-none ">
                <p className="m-0 ">aldolinovil@dorma.com</p>
                <p className="mb-1 ">ervanowijanarko@dorma.com</p>
                <p className="mb-1 ">maketing@dorma.com</p>
              </div>
            </div>
            <h5 className="fw-bold mb-3 " style={{marginTop:'40px'}}>Contact</h5>
            <div className="social-media mt-3">
              <div className="acont text-decoration-none">
                <FaInstagram style={{ marginRight: '15px', fontSize: '30px',color:'white',cursor:'pointer' }} />
                <FaFacebook style={{ marginRight: '15px', fontSize: '30px',color:'white',cursor:'pointer' }} />
                <FaTwitter style={{ marginRight: '15px', fontSize: '30px',color:'white',cursor:'pointer' }} />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
          <hr style={{ borderTop: '2px solid white', marginTop: '100px',color:'white' }} />
          <p className="text-center px-md-0 px-3" style={{ fontSize: 'small', marginTop: "10px" }}>
           &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">PT DORMA MADA PERKASA</span>
          </p>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
