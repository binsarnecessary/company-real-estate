import React from "react";

import { Col, Image, Row,Button } from "react-bootstrap";
import { OurWorks } from "../OurWorks";

import Picture from "../../data/images/electrical-content.jpg";
import Electrik from "../DetailServices/Electrik";



export const ElectricalServices = () => {
  return (
    <>
      <div className="electrical-services">
        <h1 className="title-electrical text-white fw-bold container">
          MECHANICAL ELECTRICAL & PLUMBING
        </h1>
      </div>

      <div className="content-electrical container mt-5 pt-5">
        <Row>
          <Col lg={6} xs={12}>
            <Image className="image-service" src={Picture} />
          </Col>
          <Col className="mt-lg-0 mt-5" lg={6} xs={12}>
            <h1 className="fw-bold">MECHANICAL ELECTRICAL & PLUMBING </h1>
            <p style={{ textAlign: "justify" }} className="mt-3">
            DORMA is your dedicated partner in providing holistic Mechanical, Electrical, and Plumbing (MEP) solutions designed to enhance the functionality and efficiency of your projects. Our commitment to excellence is reflected in a comprehensive suite of services, ensuring seamless integration and successful outcomes for our clients.
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
            <h5 className="mt-3 fw-bold mekanik1">Mechanical Services:</h5>
            <p className="mb-5 mekanikname1">
              &#8226; Precision Machining: Unparalleled expertise <span style={{marginLeft:'10px'}}>in mechanical systems for optimal</span> <span style={{marginLeft:'10px'}}>performance.</span><br></br>
              &#8226; Equipment Installation: Seamless integration <span style={{marginLeft:'10px'}}> of machinery and systems.</span>
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Electrical Services</h5>
            <p className="mb-5 mekanikname">
            &#8226;	Electrical System Design: Innovative solutions <span style={{marginLeft:'10px'}}>for reliable and efficient electrical systems.</span><br></br>
            &#8226;	Installation and Wiring: Expert electrical <span style={{marginLeft:'10px'}}>installation and meticulous wiring.</span>
            </p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik1">Plumbing Services</h5>
            <p className="mb-5 mekanikname1"> 
            &#8226;	Plumbing System Design: Comprehensive <span style={{marginLeft:'10px'}}>planning for efficient and sustainable</span> <span style={{marginLeft:'10px'}}>plumbing.</span><br></br>
            &#8226;	Installation and Maintenance: Expert <span style={{marginLeft:'10px'}}>installation and ongoing maintenance for</span> <span style={{marginLeft:'10px'}}>plumbing systems.</span>
            </p>
          </Col>

          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">MEP Integration</h5>
            <p className="mb-5 mekanikname">&#8226; Full-spectrum Mechanical, Electrical, and <span style={{marginLeft:'10px'}}> Plumbing solutions for cohesive <span style={{marginLeft:'10px'}}>infrastructure support.</span></span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Automation and Controls</h5>
            <p className="mb-5 mekanikname">&#8226;	Cutting-edge automation solutions for <span style={{marginLeft:'10px'}}> enhanced operational control and efficiency.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Routine Maintenance</h5>
            <p className="mb-5 mekanikname">&#8226;	Proactive maintenance programs to <span style={{marginLeft:'10px'}}>maximize equipment lifespan and minimize <span style={{marginLeft:'10px'}}>downtime.</span></span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Customized Solutions</h5>
            <p className="mb-5 mekanikname">&#8226;	Tailoring our services to address the specific <span style={{marginLeft:'10px'}}>needs and challenges of your projects.</span></p>
          </Col>
        </Row>
      </div>

      <div claassName="mt-5 mb-5">
        <OurWorks />
      </div>
        <Electrik/>
    </>
  );
};
