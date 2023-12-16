import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { HeaderAbout } from "./HeaderAbout";
import { Col,Image, Row } from "react-bootstrap";
import Komisaris from "../data/images/2.png";
import Dirut from "../data/images/1.png";
import Direktur from "../data/images/3.png";

export const About = () => {
  return (
    <>
      <HeaderAbout />

      <section className="about mb-lg-0 mb-5 mt-lg-0 mt-5">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right about1" data-aos="fade-down-left">
                <Heading title="About" />
                <p className="text-black">{val.desc}</p>
                <p className="text-black">{val.desc1}</p>
              </div>
            </>
          ))}
        </div>
      </section>

      <div className="pt-lg-0 pt-5"></div>

      <div className="about-our-vision">
        <div className="title-vision container">
          <h4>Our Vision</h4>
        </div>
        <div className="main-vision container text-white">
          <Col lg={8}>
            <h2>
            Where Caring Meets Craftsmanship. Elevating Projects with Sophisticated Expertise, Turning Ideas into Reality in Building Automation and Commercial Construction
            </h2>
          </Col>
        </div>
      </div>

      <div className="about-our-mission container pt-4 mt-5 mb-3">
        <Row>
          <Col xs={12} lg={2} className="mt-lg-0 mt-3">
            <h2 className="fw-bold">Our Mision</h2>
          </Col>
          <Col xs={12} lg={2} className="mt-lg-0 mt-3">
            <h6 > 
            &#8226; Unveiling the Most <span className="textmecanical" style={{marginLeft:'2.5vh'}}>Effective <span style={{marginLeft:'2.5vh'}}>and <span style={{marginLeft:'2vh'}}>Modern Ideas</span></span></span> 
            </h6>
          </Col>
          <Col xs={12} lg={2} className="mt-lg-0 mt-3">
            <h6>
            &#8226;<span style={{marginLeft:'0.7vh'}}>Offering Pinnacle-</span> <span style={{marginLeft:'2vh'}}>Quality <span className="textabout">Equipment</span>  <span style={{marginLeft:'2vh'}}>at Competitive <span style={{marginLeft:'2vh'}}> Prices </span></span></span>
            </h6>
          </Col>
          <Col xs={12} lg={3} className="text2 mt-lg-0 mt-3">
            <h6 style={{marginLeft:'1vh'}}>
            &#8226;<span style={{marginLeft:'1vh'}}>Embracing Honesty and <span style={{marginLeft:'2vh'}}>Professionalism for Long Term <span style={{marginLeft:'2vh'}}>Partnership</span></span> </span>
            </h6>
          </Col>
          <Col xs={12} lg={3} className=" text2 mt-lg-0 mt-3">
            <h6 style={{marginLeft:'1vh'}}>
            &#8226;<span style={{marginLeft:'1vh'}}>Synergizing with Diverse <span style={{marginLeft:'2vh'}}>Stakeholders and Partners to <span style={{marginLeft:'2vh'}}>Deliver Excellence in Service</span></span> </span>
            </h6>
          </Col>
        </Row>
      </div>

      <div className="about-our-leaders container mt-5 pt-4 mb-5">
        <h1 className="fw-bold mb-5">Our Key Leaders</h1>
        <Row>
          <Col lg={2}></Col>
          <Col lg={3} xs={12}>
            <div className="card mt-lg-0 mt-5">
              <Image
                src={Komisaris}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "200px",
                  display: "block",
                  margin: "0 auto",
                }}
                className="mx-auto"
              />
              <h6 className="mt-2 fw-bold text-center text-black">
                Ervano Laras Wijanarko
              </h6>
              <h6 className="mt-1 text-center text-black">CEO</h6>
            </div>
          </Col>
          <Col lg={3} xs={12}>
            <div className="card mt-lg-0 mt-5">
              <Image
                src={Dirut}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "200px",
                  display: "block",
                  margin: "0 auto",
                }}
                className="mx-auto"
              />
              <h6 className="mt-2 fw-bold text-center text-black">
                Ahmad Fajar
              </h6>
              <h6 className="mt-1 text-center text-black">COMMISSIONER</h6>
            </div>
          </Col>
          <Col lg={3} xs={12}>
            <div className="card mt-lg-0 mt-5">
              <Image
                src={Direktur}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "200px",
                  display: "block",
                  margin: "0 auto",
                }}
                className="mx-auto"
              />
              <h6 className="mt-2 fw-bold text-center text-black">
                Aldolinovil
              </h6>
              <h6 className="mt-1 text-center text-black">COO</h6>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
