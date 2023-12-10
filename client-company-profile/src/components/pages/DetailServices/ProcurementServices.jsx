import React from "react";

import { Col, Image, Row } from "react-bootstrap";
import { OurWorks } from "../OurWorks";

import Picture from "../../data/images/procurement-content.jpg";

export const ProcurementServices = () => {
  return (
    <>
      <div className="procurement-services">
        <h1 className="title-procurement text-white fw-bold container">
          Goods Procurement Services
        </h1>
      </div>

      <div className="content-procurement container mt-5 pt-5">
        <Row>
          <Col lg={6} xs={12}>
            <Image className="image-service" src={Picture} />
          </Col>
          <Col className="mt-lg-0 mt-5" lg={6} xs={12}>
            <h1 className="fw-bold">
            Empowering Success with Comprehensive Procurement Solutions
            </h1>
            <p style={{ textAlign: "justify" }} className="mt-3">
            DORMA stands as your trusted partner in delivering end-to-end procurement solutions, designed to streamline processes, optimize costs, and drive efficiency across your supply chain. Our commitment to excellence is evident in a comprehensive range of services tailored to meet the unique needs of our clients

            </p>
          </Col>
        </Row>
      </div>

      <div className="element-mechanical container mt-5 ">
        <Row className="row">
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Strategic Sourcing</h5>
            <p className="mb-5">o	Leveraging industry expertise to identify and partner with top-tier suppliers.</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Cost Optimization</h5>
            <p className="mb-5">o	Implementing cost-effective strategies without compromising quality.</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Supplier Management</h5>
            <p className="mb-5">o	Building and maintaining strong relationships with suppliers for seamless collaboration.</p>
          </Col>

          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Contract Negotiation</h5>
            <p className="mb-5">o	Expert negotiation to secure favorable terms and conditions.</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Supply Chain Integration</h5>
            <p className="mb-5">o	Streamlining processes and enhancing transparency for improved supply chain performance.</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Risk Management</h5>
            <p className="mb-5">o	Proactive identification and mitigation of potential risks in the procurement process.</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Technology Integration</h5>
            <p className="mb-5">o	Implementing cutting-edge procurement technologies for increased efficiency.</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold">Customized Solutions</h5>
            <p className="mb-5">o	Tailoring our services to align with the specific requirements of your business.</p>
          </Col>
        </Row>
      </div>

      <div claassName="mt-5">
        <OurWorks />
      </div>

      <div className="Galery">
      
      </div>
    </>
  );
};
