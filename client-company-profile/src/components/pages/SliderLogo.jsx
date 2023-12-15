import React from "react";
import { logoClient } from "../data/dummydata";

export const SliderLogo = () => {
  const logos = [
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
    ...logoClient,
  ];

  return (
    <>
      <div className="slider-logo container">
        <div className="logos-slide">
          {logos.map((data, index) => (
            <img alt="" key={index} src={data.logo} />
          ))}
        </div>
      </div>
    </>
  );
};
