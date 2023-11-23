import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import WhyUS1 from "../../assets/img/whyus-1.png";
import WhyUS2 from "../../assets/img/whyus-2.png";
import WhyUS3 from "../../assets/img/whyus-3.png";
import WhyUS4 from "../../assets/img/whyus-4.png";

export default function KenapaKamiPage() {
  return (
    <div>
      <div>
        <Container fluid className="p-2"></Container>
      </div>
      <div className="kenapa-kami-page">
        <Container fluid className="header">
          <div className="title-kenapa-kami">
            <h1
              className="fw-bold"
              style={{
                marginRight: "20px",
                marginLeft: "30px",
                color: "#E94747",
              }}
            >
              Kenapa
            </h1>
            <h1 className="text-white fw-bold">Kami</h1>
          </div>
          <Row>
            <Col lg={1}></Col>
            <Col>
              <h4 className="text-white fw-bold col-element">
                Sebagaimana perusahaan barang dan jasa kami selalu berusaha
                memenuhi kebutuhan dan ekspektasi klien. Selain itu, keunggulan
                PT Dorma Mada Perkasa adalah memiliki harga yang dapat bersaing,
                produk yang ditawarkan berkualitas, pengerjaan cepat dan rapi.
                Membangun sinergi dalam hubungan di dalam profesionalitas kerja
                merupakan kunci kam
              </h4>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>

        <Container fluid className="main">
          <div className="container">
            <Row>
              <Col>
                <Image src={WhyUS1} />
              </Col>
              <Col>
                <div className="d-flex">
                  <h3 className="fw-bold text-white">Produk</h3>
                  <h3
                    className="fw-bold"
                    style={{ color: "#E94747", marginLeft: "15px" }}
                  >
                    Berkualitas
                  </h3>
                </div>
                <p className="text-white" style={{ textAlign: "justify" }}>
                  Produk yang diberikan PT Dorma Mada Perkasa selalu berkualitas
                  sesuai dengan spesifikasi yang disesuaikan dengan budget
                  klien. Dengan memiliki standar khusus dimana produk yang kita
                  berikan mempunyai masa pakai yang sudah diperkirakan
                </p>
              </Col>
              <Col lg={2}></Col>
              <Col>
                <Image src={WhyUS2} />
              </Col>
              <Col>
                <div className="d-flex">
                  <h3 className="fw-bold text-white">Berkomitmen</h3>
                  <h3
                    className="fw-bold"
                    style={{ color: "#E94747", marginLeft: "15px" }}
                  >
                    Terpercaya
                  </h3>
                </div>
                <p className="text-white" style={{ textAlign: "justify" }}>
                  PT Dorma Mada Perkasa memiliki komitmen yang tinggi untuk
                  bekerja dan selalu berusaha untuk mengedepankan kepentingan
                  klien. Kepercayaan yang diberikan oleh klien akan kita jaga
                  guna membentuk hubungan yang harmonis.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
