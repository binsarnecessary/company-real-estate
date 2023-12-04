import React from "react";
import { Services } from "./Services";

export const ServicesPage = () => {
  return (
    <>
      <div className="our-services">
        <h1 className="fw-bold container">
          The sole reason we're in business is to accomodate your needs
        </h1>
      </div>

      <div>
        <Services />
      </div>
    </>
  );
};
