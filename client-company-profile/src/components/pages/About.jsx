import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { HeaderAbout } from "./HeaderAbout";
import { Col, Image, Row } from "react-bootstrap";
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
              As a contractor that provides care, we also empower with services
              that deliver sophisticated expertise to your project needs.
              Whether you're searching for building automation system experts or
              commercial construction contractors, Egan Company specializes in
              making ideas into reality and problems into solution
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
            <h6>
              Prioritize interests consumers by giving the most effective,
              current, and ideas most modern
            </h6>
          </Col>
          <Col xs={12} lg={2} className="mt-lg-0 mt-3">
            <h6>
              Provide equipment with best quality and of course with competitive
              prices
            </h6>
          </Col>
          <Col xs={12} lg={3} className="mt-lg-0 mt-3">
            <h6>
              Prioritize honesty and professionalism so that sustainable
              relationships are established
            </h6>
          </Col>
          <Col xs={12} lg={3} className="mt-lg-0 mt-3">
            <h6>
              Synergize with various interested parties and work partners to
              provide and produce the best service for consumers
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
