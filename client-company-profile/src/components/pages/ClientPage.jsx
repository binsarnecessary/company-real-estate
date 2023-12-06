import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { logoClientNotSlider } from "../data/dummydata";
import { SliderLogo } from "./SliderLogo";
// import { OurWorks } from "./OurWorks";
import Esip from "../data/images/logoClient/siplah.jpeg";
import Catalog from "../data/images/logoClient/catalogue.jpeg";
import Padi from "../data/images/logoClient/Umk.jpeg";

export const ClientPage = () => {
  return (
    <>
      <div className="client-page">
        <div className="title-client container">
          <h1 className="text-white fw-bold">Smart Work, Hard Work</h1>
        </div>
      </div>

      <div className="about-our-client container mt-5 pt-5">
        <Row>
          <Col lg={4} xs={12}>
            <h1>Our Clients</h1>
            <p className="mt-3 text-black">
              Strong & Long term business relationship. More like our partners
              as we drive deep into assisting our clients to explore any
              possible opportunities to achieve targets together. Because their
              objectives are mine too. Building strong, long term business
              relationships. We treat our clients as our partners, assisting
              them to explore opportunities to achieve targets together. Your
              objective is our objectiv
            </p>
            <a href="/services">
              <Button className="mt-3 custom-button">See Our Works</Button>
            </a>
          </Col>
          <Col className="d-flex flex-wrap justify-content-center align-items-center mt-lg-0 mt-4">
            {logoClientNotSlider.map((data, index) => (
              <img
                alt=""
                key={index}
                src={data.logo}
                style={{ width: "100px", marginRight: "5px" }}
              />
            ))}
          </Col>
        </Row>
      </div>

      <div className="mt-5 pt-3 mb-5">
        <SliderLogo />
      </div>

      <div className="container mt-5 pt-3 mb-5">
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

      {/* <div className="mt-4 pt-3 mb-5 pb-3">
        <OurWorks />
      </div> */}
    </>
  );
};
