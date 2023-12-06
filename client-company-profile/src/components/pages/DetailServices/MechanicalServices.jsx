import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { OurWorks } from "../OurWorks";
import Bg1 from "../../data/images/ourwork/mecanical/1.jpeg";
import Bg2 from "../../data/images/ourwork/mecanical/2.jpeg";
import Bg3 from "../../data/images/ourwork/mecanical/3.jpeg";
import Bg4 from "../../data/images/ourwork/mecanical/4.jpeg";
import Bg5 from "../../data/images/ourwork/mecanical/5.png";
import Bg6 from "../../data/images/ourwork/mecanical/6.jpeg";
import Bg7 from "../../data/images/ourwork/mecanical/7.jpeg";
import Bg8 from "../../data/images/ourwork/mecanical/8.jpeg";
import Bg9 from "../../data/images/ourwork/mecanical/9.jpeg";
import Bg10 from "../../data/images/ourwork/mecanical/10.jpeg";

import Icon1 from "../../data/images/icon services/architect_2942441.png";
import Icon2 from "../../data/images/icon services/brickwork_8041229.png";
import Icon3 from "../../data/images/icon services/engineering_2783852.png";
import Icon4 from "../../data/images/icon services/helmet_2823675.png";
import Icon5 from "../../data/images/icon services/home_6215427.png";
import Icon6 from "../../data/images/icon services/woman_554741.png";

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
          <Col lg={6} xs={12}>
            <Image className="image-service" src={Picture} />
          </Col>
          <Col className="mt-lg-0 mt-5" lg={6} xs={12}>
            <h1 className="fw-bold">Work with Purpose</h1>
            <p style={{ textAlign: "justify" }} className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, alias aliquam impedit voluptate doloribus dolore debitis
              iste officiis culpa pariatur neque natus, cum ducimus inventore
              tempore? Pariatur nihil suscipit nostrum. Omnis quas quisquam quo!
              Laborum, accusamus quis quas voluptatum quibusdam inventore
              delectus veniam repellendus facere non, sapiente itaque reiciendis
              nostrum, harum nam perferendis ad totam ipsa numquam corporis
              natus mollitia? Enim nemo ex expedita eos neque soluta omnis quae
              doloribus, aliquid incidunt fugiat, exercitationem amet quia
              recusandae fuga explicabo dignissimos est natus nesciunt quisquam,
              eius aspernatur dicta. Ducimus soluta culpa debitis mollitia eum
              iusto! A sint aliquid in cum obcaecati.
            </p>
          </Col>
        </Row>
      </div>

      <div className="element-mechanical container mt-5 ">
        <Row className="row">
          <Col lg={4} xs={6}>
            <img src={Icon1} alt="" />
            <h5 className="mt-3 fw-bold">Brand Ambasador</h5>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col lg={4} xs={6}>
            <img src={Icon2} alt="" />
            <h5 className="mt-3 fw-bold">Construction</h5>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col lg={4} xs={6}>
            <img src={Icon3} alt="" />
            <h5 className="mt-3 fw-bold">Services Home</h5>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
          </Col>

          <Col lg={4} xs={6}>
            <img src={Icon4} alt="" />
            <h5 className="mt-3 fw-bold">Another Point</h5>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col lg={4} xs={6}>
            <img src={Icon5} alt="" />
            <h5 className="mt-3 fw-bold">Other Good</h5>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col lg={4} xs={6}>
            <img src={Icon6} alt="" />
            <h5 className="mt-3 fw-bold">And Other</h5>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
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
      </div>
    </>
  );
};
