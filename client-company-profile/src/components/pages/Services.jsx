import React from "react";
import Foto1 from "../data/images/services/6.jpg";
import Foto2 from "../data/images/services/8.jpg";
import Foto3 from "../data/images/foto-suply.jpg";
import { Col, Row } from "react-bootstrap";

export const Services = () => {
  return (
    <>
      <div className="services-content" style={{ marginTop: "-10vh" }}>
        <div className="text-white container fw-bold mb-4">
          <h3>
            "Beyond Solutions, We Deliver Experiences: Your Partner in
            Exceptional Services."
          </h3>
        </div>

        <div className="card-container">
          <Row className="justify-content-center no-gutters mx-auto">
            {" "}
            {/* Menambahkan justify-content-center */}
            <Col lg={4} xs={12} className="mt-lg-0 mt-5">
              <a href="/services/mechanical-services">
                <div className="card">
                  <img
                    src={Foto1}
                    alt="Card Background"
                    className="card-background"
                  />
                  <div className="card-content">
                    <h3 className="text-black fw-bold">
                      Construction Services
                    </h3>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} xs={12} className="mt-lg-0 mt-5">
              <a href="/services/electrical-services">
                <div className="card">
                  <img
                    src={Foto2}
                    alt="Card Background"
                    className="card-background"
                  />
                  <div className="card-content">
                    <h3 className="text-black fw-bold">
                      {" "}
                      Mechanical, Electrical & Plumbing Services
                    </h3>
                  </div>
                </div>
              </a>
            </Col>
            <Col lg={4} xs={12} className="mt-lg-0 mt-5">
              <a href="/services/procurement-services">
                <div className="card">
                  <img
                    src={Foto3}
                    alt="Card Background"
                    className="card-background"
                  />
                  <div className="card-content">
                    <h3 className="text-black fw-bold">Procurement Services</h3>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
