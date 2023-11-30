import React from "react";
import { SliderContact } from "./SliderContact";

export const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        <div className="title-contact container text-white fw-bold">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="contact-staff container text-center fw-bold mt-5 pt-3">
        <h2>Our Stuff</h2>
        <SliderContact />
      </div>
    </>
  );
};
