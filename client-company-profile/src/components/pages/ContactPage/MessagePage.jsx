import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useHistory } from "react-router-dom";

export const MessagePage = (props) => {
  const { handleChangeMode } = props;
  const history = useHistory();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [existingData, setExistingData] = useState({});
  const [contactEmail, setContactEmail] = useState(
    localStorage.getItem("contactEmail")
  );

  const form = useRef();

  useEffect(() => {
    // Retrieve existing data from localStorage
    const bodyString = localStorage.getItem("body");
    const body = JSON.parse(bodyString) || {};
    setExistingData(body);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pgs31ns",
        "template_vxmp59t",
        form.current,
        "zCFH66PEAE7FCe5VO"
      )
      .then(
        (result) => {
          e.target.reset();
          Swal.fire({
            title: "Success!",
            text: "Your Message Successfully Sent",
            icon: "success",
            confirmButtonText: "Ok",
          });

          history.push("/contact");
        },
        (error) => {
          Swal.fire({
            title: "Failed!",
            text: "Your Message Failed To Send",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  };

  return (
    <>
      <div className="mt-5 pt-4 container">
        <h2 className="fw-bold">Haloo, PT Dorma!</h2>
        <form ref={form} onSubmit={sendEmail}>
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
            name="message"
          />
          {error && <p className="text-danger">{error}</p>}

          {/* Hidden Fields */}
          <input type="hidden" name="to_email" value={contactEmail} />
          <input type="hidden" name="from_name" value={existingData.name} />
          <input type="hidden" name="from_email" value={existingData.email} />
          <input type="hidden" name="enquire" value={existingData.enquire} />
          {/* Add more hidden fields as needed */}

          <Button
            className="mt-5 pt-2 custom-button"
            style={{ marginRight: "20px" }}
            onClick={() => handleChangeMode("enquire")}
          >
            Back
          </Button>
          <Button type="submit" className="mt-5 pt-2 custom-button">
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
