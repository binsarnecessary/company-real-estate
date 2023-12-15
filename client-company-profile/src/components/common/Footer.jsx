import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../data/images/logo.png";

const Footer = () => {
  // Fungsi untuk menangani klik pada ikon media sosial
  const handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5" className="d-flex flex-row align-items-start">
            <div className="company-info d-flex align-items-center">
              <div className="nama text-right">
                <h5 className="fw-bold">PT DORMA MADA PERKASA</h5>
                <p className="desc">
                  Equity Tower Lantai 26 Unit H, Jalan Jendral Sudirman Senayan,
                  Kebayoran Baru Kota Adm. Jakarta Selatan, DKI Jakarta.
                </p>
                <p className="desc1 ">
                  Jl.Pejaten Raya No.12A,Pejaten barat., Ps.Minggu,Kota Jakarta
                  Selatan,DKI Jakarta.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5 mb-1 mt-4">
            <h5 className="fw-bold mb-3">Kontak</h5>
            <div className="social " style={{ marginTop: "-10px" }}>
              <div className="text-decoration-none ">
                <p className="m-0">business@dorma.com</p>
                <p className="mb-1 ">sales.marketing@dorma.com</p>
              </div>
            </div>
            <h5 className="fw-bold mb-3 " style={{ marginTop: "40px" }}>
              Sosial Media
            </h5>
            <div className="social-media mt-3">
              <div className="acont text-decoration-none">
                <FaInstagram
                  style={{
                    marginRight: "15px",
                    fontSize: "30px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleSocialMediaClick(
                      "https://www.instagram.com/dormamadaperkasa/"
                    )
                  }
                />
                <FaLinkedin
                  style={{
                    marginRight: "15px",
                    fontSize: "30px",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleSocialMediaClick(
                      "https://www.linkedin.com/company/pt-dorma-mada-perkasa/"
                    )
                  }
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr
              style={{
                borderTop: "2px solid white",
                marginTop: "100px",
                color: "white",
              }}
            />
            <p
              className="text-center px-md-0 px-3"
              style={{ fontSize: "small", marginTop: "10px" }}
            >
              &copy; Hak Cipta {new Date().getFullYear()} oleh{" "}
              <span className="fw-bold">PT DORMA MADA PERKASA</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
