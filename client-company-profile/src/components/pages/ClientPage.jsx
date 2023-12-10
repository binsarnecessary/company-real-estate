import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { logoClientNotSlider } from "../data/dummydata";
import { SliderLogo } from "./SliderLogo";
// import { OurWorks } from "./OurWorks";

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

      <div className="mt-5 pt-3 mb-5 pb-3">
        <SliderLogo />
      </div>
    </>
  );
};
