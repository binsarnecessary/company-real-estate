import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { OurWorks } from "../OurWorks";

import Picture from "../../data/images/mechanical-col.jpeg";
import Bg1 from "../../data/images/ourwork/mecanical/1.jpeg"
import Bg2 from "../../data/images/ourwork/mecanical/2.jpeg"

export const MechanicalServices = () => {
  return (
    <>
      <div className="mechanical-services">
        <h1 className="title-mechanical text-white fw-bold container">
          Mechanical Services
        </h1>
      </div>

      <div className="content-mechanical container mt-5 pt-5">
        <Row>
          <Col>
            <Image src={Picture} />
          </Col>
          <Col>
            <h1 className="fw-bold">Work with Purpose</h1>
          </Col>
        </Row>
      </div>

      <div className="element-mechanical">

      </div>

      <div className="mt-5 pt-4">
        <OurWorks />
      </div>
      <div className="wraper">
        <div className="perent">
        </div>
        <div className="perent1">
        </div>
        <div className="perent">
        </div>
        <div className="perent">
        </div>
      </div>
    </>
  );
};
