import React from "react";
import Foto1 from "../data/images/services/4.png";
import Foto2 from "../data/images/services/5.png";
import Foto3 from "../data/images/services/1.png";

export const Services = () => {
  return (
    <>
      <div className="services-content">
        <div className="text-white container fw-bold mb-4">
          <h1 className="mb-3">
            <u>We</u> Are PT Dorma Mada
          </h1>
          <h3>Our Services</h3>
          <h5>What We Do Best</h5>
        </div>

        <div className="card-container">
          <div className="card">
            <img
              src={Foto1}
              alt="Card Background"
              className="card-background"
            />
            <div className="card-content">
              <h3 className="text-black fw-bold">
                Mechanical Construction Services.
              </h3>
            </div>
          </div>

          <div className="card">
            <img
              src={Foto2}
              alt="Card Background"
              className="card-background"
            />
            <div className="card-content">
              <h3 className="text-black fw-bold">Electrical Services.</h3>
            </div>
          </div>

          <div className="card">
            <img
              src={Foto3}
              alt="Card Background"
              className="card-background"
            />
            <div className="card-content">
              <h3 className="text-black fw-bold">
                Goods Procurement Services.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
