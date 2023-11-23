import React, { Component } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import Layanan1 from "../../assets/img/layanan-1.png";
import Layanan2 from "../../assets/img/layanan-2.png";
import Layanan3 from "../../assets/img/layanan-3.png";
import KenapaKamiPage from "./KenapaKamiPage";

export default class LayananPage extends Component {
  render() {
    return (
      <div>
        <div className="layanan-page">
          <Container fluid>
            <Button
              className="title-layanan"
              variant="danger"
              disabled
              style={{ opacity: "10", borderRadius: "20px" }}
            >
              <h2 className="text-white fw-bold">Layanan Kami</h2>
            </Button>

            <Container className="main-content d-flex align-items-center">
              <Row className="d-flex align-items-center justify-content-center mb-4">
                <Col></Col>
                <Col lg={5} className="d-flex justify-content-center">
                  <div className="col-element">
                    <Image src={Layanan1} />
                  </div>
                </Col>
                <Col lg={5} className="text-white pt-lg-0 pt-5 col-element">
                  <div>
                    <h4 className="fw-bold">Jasa Kontruksi Mekanikal</h4>
                    <p>
                      Salah satu pengerjaan jasa mekanikal yang ditawarkan oleh
                      PT Dorma Mada Perkasa adalah renovasi kantor, instalasi
                      sliding door, konstruksi pembuatan tangga, access door,
                      dan sebagainya.
                    </p>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>

            <Container className="main-content d-flex align-items-center">
              <Row className="d-flex align-items-center justify-content-center mb-4">
                <Col></Col>

                <Col lg={5} className="col-element d-flex order-lg-last">
                  <div className="col-element">
                    <Image src={Layanan2} />
                  </div>
                </Col>
                <Col lg={5} className="text-white pt-lg-0 pt-5 col-element">
                  <div>
                    <h4 className="fw-bold">Jasa Elektrikal</h4>
                    <p>
                      PT Dorma Mada Perkasa menyediakan jasa elektrikal mulai
                      dari instalasi Air Conditioner, instalasi jaringan kabel
                      telepon, CCTV, komputer, peralatan elektronaik, dan
                      lain-lain beserta dengan perawatannya
                    </p>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>

            <Container className="main-content d-flex align-items-center">
              <Row className="d-flex align-items-center justify-content-center mb-4">
                <Col></Col>
                <Col lg={5} className="d-flex justify-content-center">
                  <div className="col-element">
                    <Image src={Layanan3} />
                  </div>
                </Col>
                <Col lg={5} className="text-white pt-lg-0 pt-5 col-element">
                  <div>
                    <h4 className="fw-bold">Jasa Pengadaan Barang</h4>
                    <p>
                      PT Dorma Mada Perkasa menyediakan jasa pengadaan barang
                      yang meliputi peralatan elektronik, komputer, printer,
                      finger print absen, access door, alat kebersihan rumah
                      sakit, sliding door, CCTV, kaos perlengkapan event,
                      jaringan kabel telepon, dan lain-lain.
                    </p>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Container>
        </div>
        <KenapaKamiPage />
      </div>
    );
  }
}
