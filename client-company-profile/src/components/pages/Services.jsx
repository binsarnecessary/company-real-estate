import React from "react";
import Foto1 from "../data/images/services/6.jpg";
import Foto2 from "../data/images/services/7.jpg";
import Foto3 from "../data/images/services/8.jpg";
import { Col, Row } from "react-bootstrap";

export const Services = () => {
  return (
    <>
      <div className="services-content">
        <div className="text-white container fw-bold mb-4">
          <h1 className="mb-3">
            <u>We</u> Are PT Dorma Mada
          </h1>
          <h3>Our Services</h3>
          <h5>What We Do Best</h5>
        </div>

        <div className="card-container">
          <Row>
            <Col lg={4} xs={12} className="ml-lg- ml-3 mr-lg-0 mr-3">
              {" "}
              <a href="/about/mechanical-services">
                <div className="card">
                  <img
                    src={Foto1}
                    alt="Card Background"
                    className="card-background"
                  />
                  <div className="card-content">
                    <h3 className="text-black fw-bold">
                      Mechanical Construction Services.
                    </h3>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} xs={12} className="mt-lg-0 mt-5 ">
              <div className="card">
                <img
                  src={Foto2}
                  alt="Card Background"
                  className="card-background"
                />
                <div className="card-content">
                  <h3 className="text-black fw-bold">Electrical Services.</h3>
                </div>
              </div>
            </Col>
            <Col lg={4} xs={12} className="mt-lg-0 mt-5">
              <div className="card">
                <img
                  src={Foto3}
                  alt="Card Background"
                  className="card-background"
                />
                <div className="card-content">
                  <h3 className="text-black fw-bold">
                    Goods Procurement Services.
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
