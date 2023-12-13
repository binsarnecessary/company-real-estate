import React from "react";
import { Col, Image, Row,Button } from "react-bootstrap";
import { OurWorks } from "../OurWorks";
import Bg1 from "../../data/images/ourwork/mecanical/1.jpg";
import Bg2 from "../../data/images/ourwork/mecanical/2.jpg";
import Bg3 from "../../data/images/ourwork/mecanical/3.jpg";
import Bg4 from "../../data/images/ourwork/mecanical/4.jpg";
import Bg5 from "../../data/images/ourwork/mecanical/5.jpg";
import Bg6 from "../../data/images/ourwork/mecanical/6.jpg";
import Bg7 from "../../data/images/ourwork/mecanical/7.jpg";
import Bg8 from "../../data/images/ourwork/mecanical/8.jpg";
import Bg9 from "../../data/images/ourwork/mecanical/9.jpg";
import Bg10 from "../../data/images/ourwork/mecanical/10.jpg";
import Bg11 from "../../data/images/ourwork/mecanical/11.jpg";
import Bg12 from "../../data/images/ourwork/mecanical/12.jpg";
import Bg13 from "../../data/images/ourwork/mecanical/13.jpg";
import Bg14 from "../../data/images/ourwork/mecanical/14.jpg";
import Bg15 from "../../data/images/ourwork/mecanical/15.jpg";
import Bg16 from "../../data/images/ourwork/mecanical/16.jpeg";
import Bg17 from "../../data/images/ourwork/mecanical/17.jpg";
import Bg18 from "../../data/images/ourwork/mecanical/18.jpg";
import Bg19 from "../../data/images/ourwork/mecanical/19.jpg";
import Bg20 from "../../data/images/ourwork/mecanical/20.jpg";
import Bg21 from "../../data/images/ourwork/mecanical/21.jpg";
import Bg22 from "../../data/images/ourwork/mecanical/22.jpg";
import Bg23 from "../../data/images/ourwork/mecanical/23.jpg";
import Bg24 from "../../data/images/ourwork/mecanical/24.jpg";
import Bg25 from "../../data/images/ourwork/mecanical/25.jpg";
import Bg26 from "../../data/images/ourwork/mecanical/26.jpg";
import Bg27 from "../../data/images/ourwork/mecanical/27.jpg";
import Bg28 from "../../data/images/ourwork/mecanical/28.jpg";
import Bg29 from "../../data/images/ourwork/mecanical/29.jpg";
import Bg30 from "../../data/images/ourwork/mecanical/30.jpg";
import Bg31 from "../../data/images/ourwork/mecanical/31.jpg";
import Bg32 from "../../data/images/ourwork/mecanical/32.jpg";
import Bg33 from "../../data/images/ourwork/mecanical/33.jpg";
import Bg34 from "../../data/images/ourwork/mecanical/34.jpg";
import Bg35 from "../../data/images/ourwork/mecanical/35.jpg";


import Picture from "../../data/images/mechanical-col.jpeg";

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
            At DORMA, we are your premier partner in delivering end-to-end construction solutions tailored to meet the diverse needs of our clients. Our commitment to excellence is reflected in a wide array of services designed to bring your visions to life and ensure the success of your projects.
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
            <p className="mb-5 mekanikname1" >&#8226; Innovative designs and meticulous <br></br><span  style={{marginLeft:'9px'}}>planning for  seamless project execution</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Construction Management</h5>
            <p className="mb-5 mekanikname">&#8226; Efficient management of construction <span style={{marginLeft:'9px'}}>projects from initiation to completion.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold  mekanik1">General Contracting</h5>
            <p className="mb-5 mekanikname1">&#8226; Turnkey solutions for all construction needs, <span style={{marginLeft:'10px'}}>ensuring a hassle-free.</span></p>
          </Col> 

          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Specialized Services</h5>
            <p className="mb-5 mekanikname">&#8226; Expertise in unique construction <span style={{marginLeft:'10px'}}>requirements, from renovations</span><br></br><span style={{marginLeft:'10px'}}></span>to specialized structures.</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik1">Quality Assurance</h5>
            <p className="mb-5 mekanikname1">&#8226; Stringent quality control measures to <span style={{marginLeft:'10px'}}>guarantee the highest construction</span> <br></br><span style={{marginLeft:'10px'}}></span> standards</p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Safety First</h5>
            <p className="mb-5 mekanikname">&#8226; Commitment to a safe working environment <span style={{marginLeft:'10px'}}>for our team and all project stakeholders.</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik1">Sustainability Solutions</h5>
            <p className="mb-5 mekanikname ">&#8226; Incorporating eco-friendly practices for <span style={{marginLeft:'10px'}}>environmentally conscious construction</span></p>
          </Col>
          <Col lg={4} xs={6}>
            <h5 className="mt-3 fw-bold mekanik">Customized Projects</h5>
            <p className="mb-5 mekanikname1">&#8226; Tailoring our services to meet the specific <span className="mekanik" style={{marginLeft:'10px'}}>demands of each project.</span></p>
          </Col>
        </Row>
      </div>

      <div className="mt-5 pt-4">
        <OurWorks />
      </div>

      <div className="Galery">
        <Image src={Bg1} alt="" />
        <Image src={Bg2} alt="" />
        <Image src={Bg3} alt="" />
        <Image src={Bg4} alt="" />
        <Image src={Bg5} alt="" />
        <Image src={Bg6} alt="" />
        <Image src={Bg7} alt="" />
        <Image src={Bg8} alt="" />
        <Image src={Bg9} alt="" />
        <Image src={Bg10} alt="" />
        <Image src={Bg11} alt="" />
        <Image src={Bg12} alt="" />
        <Image src={Bg13} alt="" />
        <Image src={Bg14} alt="" />
        <Image src={Bg15} alt="" />
        <Image src={Bg16} alt="" />
        <Image src={Bg17} alt="" />
        <Image src={Bg18} alt="" />
        <Image src={Bg19} alt="" />
        <Image src={Bg20} alt="" />
        <Image src={Bg21} alt="" />
        <Image src={Bg22} alt="" />
        <Image src={Bg23} alt="" />
        <Image src={Bg24} alt="" />
        <Image src={Bg25} alt="" />
        <Image src={Bg26} alt="" />
        <Image src={Bg27} alt="" />
        <Image src={Bg28} alt="" />
        <Image src={Bg29} alt="" />
        <Image src={Bg30} alt="" />
        <Image src={Bg31} alt="" />
        <Image src={Bg32} alt="" />
        <Image src={Bg33} alt="" />
        <Image src={Bg34} alt="" />
        <Image src={Bg35} alt="" />
      </div>
    </>
  );
};
