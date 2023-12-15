import React from "react";

import { Col, Image, Row,Button } from "react-bootstrap";
import { OurWorks } from "../OurWorks";

import Picture from "../../data/images/procurement-content.jpg";
import Supplay from "./Supplay";

export const ProcurementServices = () => {
  return (
    <>
      <div className="procurement-services">
        <h1 className="title-procurement text-white fw-bold container">
          Procurement Services
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
            <a href="/services">
              <Button className="mt-6 custom-button">Back</Button>
            </a>
          </Col>
        </Row>
      </div>

      <div className="element-mechanical container mt-5 ">
        <Row className="row">
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Strategic Sourcing</h5>
            <p className="mb-5 mekanikname">&#8226;	Leveraging industry expertise to identify and <span style={{marginLeft:'10px'}}>partner with top-tier suppliers.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Cost Optimization</h5>
            <p className="mb-5 mekanikname">&#8226;	Implementing cost-effective strategies <span style={{marginLeft:'10px'}}> without compromising quality.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Supplier Management</h5>
            <p className="mb-5 mekanikname">&#8226;	Building and maintaining strong <span style={{marginLeft:'10px'}}> relationships with suppliers for <br></br><span style={{marginLeft:'10px'}}> seamless collaboration.</span></span></p>
          </Col>

          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Contract Negotiation</h5>
            <p className="mb-5 mekanikname">&#8226;	Expert negotiation to secure favorable terms <span style={{marginLeft:'10px'}}>and conditions.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Supply Chain Integration</h5>
            <p className="mb-5 mekanikname">&#8226;	Streamlining processes and enhancing <span style={{marginLeft:'10px'}}>transparency for improved supply chain <span style={{marginLeft:'10px'}}> performance.</span></span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Risk Management</h5>
            <p className="mb-5 mekanikname">&#8226;	Proactive identification and mitigation of <span style={{marginLeft:'10px'}}> potential risks in the procurement process.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Technology Integration</h5>
            <p className="mb-5 mekanikname">&#8226;	Implementing cutting-edge procurement <span style={{marginLeft:'10px'}}> technologies for increased efficiency.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Customized Solutions</h5>
            <p className="mb-5 mekanikname">&#8226;	Tailoring our services to align with the <span style={{marginLeft:'10px'}}>specific requirements of your business.</span></p>
          </Col>
        </Row>
      </div>

      <div claassName="mt-5">
        <OurWorks />
      </div>
      <Supplay/>
    </>
  );
};
