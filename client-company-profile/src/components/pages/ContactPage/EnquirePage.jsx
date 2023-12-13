import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

export const EnquirePage = (props) => {
  const { handleChangeMode } = props;

  const [enquire, setEnquire] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve existing data from localStorage
    const bodyString = localStorage.getItem("body");
    if (bodyString) {
      const body = JSON.parse(bodyString);
      if (body.enquire) {
        setEnquire(body.enquire);
      }
    }
  }, []);

  const existingDataString = localStorage.getItem("body");
  const existingData = existingDataString ? JSON.parse(existingDataString) : {};

  const handleNext = () => {
    if (enquire.trim() !== "") {
      handleChangeMode("message");

      const updatedData = { ...existingData, enquire: enquire };

      localStorage.setItem("body", JSON.stringify(updatedData));
    } else {
      setError("Please fill in this field");
    }
  };

  return (
    <>
      <div className="mt-5 pt-4 container">
        <h2 className="fw-bold">Haloo, PT Dorma!</h2>
        <form>
          <Row className="mt-4">
            <Col lg={5} xs={12}>
              <h3 style={{ color: "rgba(54, 50, 50, 0.868)" }}>
                I would Like to enquire regarding
              </h3>
            </Col>
            <Col lg={7} xs={12}>
              <input
                type="email"
                style={{
                  borderBottom: "1px solid black",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  width: "100%",
                  outline: "none",
                }}
                value={enquire}
                onChange={(e) => setEnquire(e.target.value)}
                required
              />
              {error && <p className="text-danger">{error}</p>}
            </Col>
          </Row>
          <Button
            className="mt-5 pt-2 custom-button"
            style={{ marginRight: "20px" }}
            onClick={() => handleChangeMode("email")}
          >
            Back
          </Button>
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
