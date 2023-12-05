import React from "react";

import { Col, Image, Row } from "react-bootstrap";
import { OurWorks } from "../OurWorks";

import Picture from "../../data/images/mechanical-col.jpeg";

export const ElectircalService = () =>{
    return(
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
        </>
    )
}