import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const MessagePage = (props) => {
  const { handleChangeMode } = props;

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve existing data from localStorage
    const bodyString = localStorage.getItem("body");
    if (bodyString) {
      const body = JSON.parse(bodyString);
      if (body.enquire) {
        setMessage(body.enquire);
      }
    }
  }, []);

  const existingDataString = localStorage.getItem("body");
  const existingData = existingDataString ? JSON.parse(existingDataString) : {};

  const handleNext = () => {
    if (message.trim() !== "") {
      handleChangeMode("");

      const updatedData = { ...existingData, message: message };

      localStorage.setItem("body", JSON.stringify(updatedData));
    } else {
      setError("Please fill in this field");
    }
  };

  return (
    <>
      <div className="mt-5 pt-4 container">
        <h2 className="fw-bold">Selamat Siang, PT Dorma!</h2>
        <form>
          <h3 style={{ color: "rgba(54, 50, 50, 0.868)", marginTop: "50px" }}>
            Tell us how we can help you
          </h3>

          <input
            type="textarea"
            style={{
              width: "100%",
              height: "250px",
              marginTop: "20px",
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {error && <p className="text-danger">{error}</p>}

          <Button
            className="mt-5 pt-2 custom-button"
            style={{ marginRight: "20px" }}
            onClick={() => handleChangeMode("enquire")}
          >
            Back
          </Button>
          <Button className="mt-5 pt-2 custom-button" onClick={handleNext}>
            Submit
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
