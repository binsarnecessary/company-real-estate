import React from "react";
import { Button } from "react-bootstrap";
import { Services } from "./Services";


export const ServicesPage = () => {
  return (
    <>
      <div className="our-services">
        <h1 className="fw-bold">OUR SERVICES TO COMPLETE WHAT YOU NEED</h1>
        <div>
          <a href="/client">
            <Button className="mt-3 custom-button-services">
              See Our Works
            </Button>
          </a>
          <a href="/contact" className="button-contact-us">
            <Button className="mt-3 custom-button-services">Contact Us</Button>
          </a>
        </div>
      </div>

      <div>
        <Services />
      </div>
     
    </>
  );
};
