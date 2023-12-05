import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { OurWorks } from "../OurWorks";
import Bg1 from '../../data/images/ourwork/mecanical/1.jpeg'
import Bg2 from '../../data/images/ourwork/mecanical/2.jpeg'
import Bg3 from '../../data/images/ourwork/mecanical/3.jpeg'
import Bg4 from '../../data/images/ourwork/mecanical/4.jpeg'
import Bg5 from '../../data/images/ourwork/mecanical/5.png'
import Bg6 from '../../data/images/ourwork/mecanical/6.jpeg'
import Bg7 from '../../data/images/ourwork/mecanical/7.jpeg'
import Bg8 from '../../data/images/ourwork/mecanical/8.jpeg'
import Bg9 from '../../data/images/ourwork/mecanical/9.jpeg'
import Bg10 from '../../data/images/ourwork/mecanical/10.jpeg'

import Picture from "../../data/images/mechanical-col.jpeg";

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
      </div>
    </>
  );
};
