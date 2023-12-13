import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

export const NamePage = (props) => {
  const { handleChangeMode } = props;

  const [name, setName] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    // Retrieve existing data from localStorage
    const bodyString = localStorage.getItem("body");
    if (bodyString) {
      const body = JSON.parse(bodyString);
      if (body.name) {
        setName(body.name);
      }
    }
  }, []);

  const handleNext = () => {
    // Check if the name is not empty before proceeding
    if (name.trim() !== "") {
      handleChangeMode("email");
      localStorage.setItem("body", JSON.stringify({ name: name }));
    } else {
      // Handle the case where the input is empty
      setError("Please Fill this field");
    }
  };
  return (
    <>
      <div className="mt-5 pt-4 container">
        <h2 className="fw-bold">Haloo, PT Dorma!</h2>
        <form>
          <Row className="mt-4">
            <Col lg={3} xs={12}>
              <h3 style={{ color: "rgba(54, 50, 50, 0.868)" }}>My Name Is</h3>
            </Col>
            <Col lg={9} xs={12}>
              <input
                type="text"
                style={{
                  borderBottom: "1px solid black",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  width: "100%",
                  outline: "none",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {error ? <p className="text-danger">{error}</p> : <></>}
            </Col>
          </Row>
          <Button className="mt-5 pt-2 custom-button" onClick={handleNext}>
            Next
          </Button>
        </form>

        <p className="mt-5" style={{ fontSize: "10px", color: "black" }}>
          By contacting us regarding a general enquiry, requesting information
          regarding new business opportunities, submitting your CV/applying for
          a job opening, or submitting other personal details, you agree that we
          may process your personal data in accordance with our privacy policy
          available here.
        </p>
      </div>
    </>
  );
};
