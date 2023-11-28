import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { Visi } from "./Visi";
import { HeaderAbout } from "./HeaderAbout";

export const About = () => {
  return (
    <>
      <HeaderAbout />

      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
              </div>
            </>
          ))}
        </div>
      </section>
      <Visi />
    </>
  );
};
