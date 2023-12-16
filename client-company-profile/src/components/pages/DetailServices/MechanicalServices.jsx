import React from "react";
import { Col, Image, Row, Button } from "react-bootstrap";
import { OurWorks } from "../OurWorks";

import Picture from "../../data/images/mechanical-services.jpg";
import Imagecontruksi from "./Imagecontruksi";

export const MechanicalServices = () => {
  return (
    <>
      <div className="mechanical-services">
        <h1 className="title-mechanical text-white fw-bold container">
          Construction Services
        </h1>
      </div>

      <div className="content-mechanical container mt-5 pt-5">
        <Row>
          <Col lg={6} xs={12}>
            <Image className="image-service" src={Picture} />
          </Col>
          <Col className="mt-lg-0 mt-5" lg={6} xs={12}>
            <h1 className="fw-bold">CONSTRUCTIONS</h1>
            <p style={{ textAlign: "justify" }} className="mt-3">
              At DORMA, we are your premier partner in delivering end-to-end
              construction solutions tailored to meet the diverse needs of our
              clients. Our commitment to excellence is reflected in a wide array
              of services designed to bring your visions to life and ensure the
              success of your projects.
            </p>
            <a href="/services">
              <Button className="mt-3 custom-button">Back</Button>
            </a>
          </Col>
        </Row>
      </div>

      <div className="element-mechanical container mt-5 ">
        <Row className="row">
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik1">Design and Planning</h5>
            <p className="mb-5 mekanikname1">
              &#8226; Innovative designs and meticulous <br></br>
              <span style={{ marginLeft: "9px" }}>
                planning for seamless project execution
              </span>
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Construction Management</h5>
            <p className="mb-5 mekanikname">
              &#8226; Efficient management of construction{" "}
              <span style={{ marginLeft: "9px" }}>
                projects from initiation to completion.
              </span>
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold  mekanik1">General Contracting</h5>
            <p className="mb-5 mekanikname1">
              &#8226; Turnkey solutions for all construction needs,{" "}
              <span style={{ marginLeft: "10px" }}>
                ensuring a hassle-free.
              </span>
            </p>
          </Col>

          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Specialized Services</h5>
            <p className="mb-5 mekanikname">
              &#8226; Expertise in unique construction{" "}
              <span style={{ marginLeft: "10px" }}>
                requirements, from renovations
              </span>
              <br></br>
              <span style={{ marginLeft: "10px" }}></span>to specialized
              structures.
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik1">Quality Assurance</h5>
            <p className="mb-5 mekanikname1">
              &#8226; Stringent quality control measures to{" "}
              <span style={{ marginLeft: "10px" }}>
                guarantee the highest construction
              </span>{" "}
              <br></br>
              <span style={{ marginLeft: "10px" }}></span> standards
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Safety First</h5>
            <p className="mb-5 mekanikname">
              &#8226; Commitment to a safe working environment{" "}
              <span style={{ marginLeft: "10px" }}>
                for our team and all project stakeholders.
              </span>
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik1">Sustainability Solutions</h5>
            <p className="mb-5 mekanikname ">
              &#8226; Incorporating eco-friendly practices for{" "}
              <span style={{ marginLeft: "10px" }}>
                environmentally conscious construction
              </span>
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Customized Projects</h5>
            <p className="mb-5 mekanikname1">
              &#8226; Tailoring our services to meet the specific{" "}
              <span className="mekanik" style={{ marginLeft: "10px" }}>
                demands of each project.
              </span>
            </p>
          </Col>
        </Row>
      </div>

      <div className="mt-5 pt-4">
        <OurWorks />
      </div>
        <Imagecontruksi />
    </>
  );
};
