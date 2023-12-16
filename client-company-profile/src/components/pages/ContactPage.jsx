import React from "react";
import { SliderContact } from "./SliderContact";
import Esip from "../data/images/logoClient/siplah.jpeg";
import Catalog from "../data/images/logoClient/catalogue-removebg-preview.png";
import Padi from "../data/images/logoClient/Umk.jpeg";
import { Col, Row } from "react-bootstrap";

export const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        <div className="title-contact container text-white fw-bold">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="contact-staff container text-center fw-bold mt-5 pt-3 mb-5">
        <h2 className="fw-bold">Our office</h2>
        <SliderContact />
      </div>

      <div className="container mt-5 pt-4 mb-5 pb-3">
        <h2 className="fw-bold text-center">Our Office</h2>
        <div style={{marginTop:'10vh'}}>
          <Row>
            <Col lg={5} xs={12} style={{textAlign:'justify'}}>
              <h7 className="text-center">
                Equity Tower Lantai 26 Unit H, Jalan Jendral Sudirman Senayan,
                Kebayoran Baru Kota Adm. Jakarta Selatan, DKI Jakarta.
              </h7>
            </Col>
            <Col lg={2} xs={12}>
            </Col>
            <Col lg={5} xs={12} className=" mt-lg-0 mt-4" style={{textAlign:'justify'}}>
              <h7 className=" text-center">
                Jl.Pejaten Raya No.12A,Pejaten barat., Ps.Minggu,Kota Jakarta
                Slatan,DKI Jakarta.
              </h7>
            </Col>
          </Row>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-4">
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1414209083714!2d106.80633342894563!3d-6.226389794431496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505affffff%3A0x301b8a0f5d2c33ed!2sEquity%20Tower!5e0!3m2!1sen!2sid!4v1701348917358!5m2!1sen!2sid"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="Maps"
          ></iframe>
        </div>
      </div>

      <div className="container mt-5 pt-3 mb-5">
        <h2 className="fw-bold text-center">Our Government E-Catalogue</h2>
        <div className="image-client">
          <a href="https://t.ly/Ei75F">
            <img src={Esip} alt="" className="mt-5" />
          </a>
          <a href="https://t.ly/ymIei">
            <img src={Padi} alt="" />
          </a>
          <a href="https://e-katalog.lkpp.go.id/info/penyedia/890887">
            <img src={Catalog} alt="" className="mt-5 pt-lg-5" />
          </a>
        </div>
      </div>
    </>
  );
};
