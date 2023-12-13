import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Heading } from "../common/Heading";



export const Contact = () => {
  const form = useRef();
  const unique = 1;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pgs31ns",
        "template_ulc3y7d",
        form.current,
        "zCFH66PEAE7FCe5VO"
      )
      .then(
        (result) => {
          e.target.reset();
          Swal.fire({
            title: "Success!",
            text: "Your Message Succes Send",
            icon: "success",
            confirmButtonText: "Ok",
          });
        },
        (error) => {
          Swal.fire({
            title: "Failed!",
            text: "Your Message Fail To Send",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  };

  return (
    <>
      <div className="contact" style={{marginTop:"-2vh"}}>
        <div className="container">
          <Heading title="Contact Us" />
          <Row>
            <Col lg={6} xs={12} sm={12}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    data-aos="flip-left"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                    name="user_email"
                    required
                  />
                </div>
                <textarea name="message" placeholder="Message" required />
                <input
                  type="submit"
                  value="Submit"
                  data-aos="zoom-in-up"
                  style={{ backgroundColor: "orange" }}
                />
              </form>
            </Col>
            <Col lg={1}></Col>
            <Col lg={5} xs={12} sm={12} className="mt-lg-0 mt-3">
              <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1414209083714!2d106.80633342894563!3d-6.226389794431496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505affffff%3A0x301b8a0f5d2c33ed!2sEquity%20Tower!5e0!3m2!1sen!2sid!4v1701348917358!5m2!1sen!2sid"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                height="250px"
                width="300px"
                key={unique}
                title="Maps"
              ></iframe>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
