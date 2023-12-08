import React from "react";

import { Col, Image, Row } from "react-bootstrap";
import { OurWorks } from "../OurWorks";

import Bg1 from "../../data/images/ourwork/supply/1.jpg"
import Bg2 from "../../data/images/ourwork/supply/2.jpg"
import Bg3 from "../../data/images/ourwork/supply/3.jpeg"
import Bg4 from "../../data/images/ourwork/supply/4.jpeg"
import Bg5 from "../../data/images/ourwork/supply/5.jpeg"
import Bg6 from "../../data/images/ourwork/supply/6.jpeg"
import Bg7 from "../../data/images/ourwork/supply/7.jpeg"
import Bg8 from "../../data/images/ourwork/supply/8.jpeg"
import Bg9 from "../../data/images/ourwork/supply/9.jpg"
import Bg10 from "../../data/images/ourwork/supply/10.jpg"
import Bg11 from "../../data/images/ourwork/supply/11.jpg"
import Bg12 from "../../data/images/ourwork/supply/12.jpg"
import Bg13 from "../../data/images/ourwork/supply/13.jpg"
import Bg14 from "../../data/images/ourwork/supply/14.jpg"
import Bg15 from "../../data/images/ourwork/supply/15.jpeg"
import Bg16 from "../../data/images/ourwork/supply/16.jpeg"
import Bg17 from "../../data/images/ourwork/supply/17.jpg"
import Bg18 from "../../data/images/ourwork/supply/18.jpg"
import Bg19 from "../../data/images/ourwork/supply/19.jpeg"
import Bg20 from "../../data/images/ourwork/supply/20.jpg"
import Bg21 from "../../data/images/ourwork/supply/21.jpeg"
import Bg22 from "../../data/images/ourwork/supply/22.jpg"
import Bg23 from "../../data/images/ourwork/supply/23.jpg"
import Bg24 from "../../data/images/ourwork/supply/24.jpg"
import Bg25 from "../../data/images/ourwork/supply/25.jpg"
import Bg26 from "../../data/images/ourwork/supply/26.jpg"
import Bg27 from "../../data/images/ourwork/supply/27.jpg"
import Bg28 from "../../data/images/ourwork/supply/28.jpg"
import Bg29 from "../../data/images/ourwork/supply/29.jpg"
import Bg30 from "../../data/images/ourwork/supply/30.jpg"
import Bg31 from "../../data/images/ourwork/supply/31.jpg"
import Bg32 from "../../data/images/ourwork/supply/32.jpg"
import Bg33 from "../../data/images/ourwork/supply/33.jpg"
import Bg34 from "../../data/images/ourwork/supply/34.jpg"
import Bg35 from "../../data/images/ourwork/supply/35.jpg"
import Bg36 from "../../data/images/ourwork/supply/36.jpg"
import Bg37 from "../../data/images/ourwork/supply/37.jpg"
import Bg38 from "../../data/images/ourwork/supply/38.jpg"
import Bg39 from "../../data/images/ourwork/supply/39.jpg"




import Picture from "../../data/images/procurement-content.jpg";



import Icon1 from "../../data/images/icon services/architect_2942441.png";
import Icon2 from "../../data/images/icon services/brickwork_8041229.png";
import Icon3 from "../../data/images/icon services/engineering_2783852.png";
import Icon4 from "../../data/images/icon services/helmet_2823675.png";
import Icon5 from "../../data/images/icon services/home_6215427.png";
import Icon6 from "../../data/images/icon services/woman_554741.png";

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
              Excellence in Goods, Seamless Procurement
            </h1>
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

      <div claassName="mt-5">
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
        <Image src={Bg36} alt="" />
        <Image src={Bg37} alt="" />
        <Image src={Bg38} alt="" />
        <Image src={Bg39} alt="" />
      </div>
    </>
  );
};
