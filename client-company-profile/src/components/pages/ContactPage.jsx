import React from "react";
import { SliderContact } from "./SliderContact";
import Esip from "../data/images/logoClient/siplah.jpeg";
import Catalog from "../data/images/logoClient/catalogue.jpeg";
import Padi from "../data/images/logoClient/Umk.jpeg";
import { Button, Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        <div className="title-contact container text-white fw-bold">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="contact-staff container text-center fw-bold mt-5 pt-3 mb-5">
        <h2 className="fw-bold">Our Stuff</h2>
        <SliderContact />
      </div>

      <div className="container mt-5 pt-4 mb-5 pb-3">
        <h2 className="fw-bold text-center">Our Office</h2>
        <div className="mt-3">
          <Row>
            <Col>
              <h4 className="text-center">
                Equity Tower Lantai 26 Unit H, Jalan Jendral Sudirman Senayan,
                Kebayoran Baru Kota Adm. Jakarta Selatan, DKI Jakarta.
              </h4>
            </Col>
            <Col className="mt-lg-0 mt-4">
              <h4 className="text-center">
                Jl.Pejaten Raya No.12A,Pejaten barat., Ps.Minggu,Kota Jakarta
                Selatan,DKI Jakarta.
              </h4>
            </Col>
          </Row>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aldolinovil@dorma.com">
            <Button className="d-flex mt-3" variant="success">
              <Icon.Send style={{ marginRight: "20px" }} size={30} />
              <h4>Email Us</h4>
            </Button>
          </a>
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
