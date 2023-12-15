import React from "react"
import { home } from "../data/dummydata"
import Vidiobg from "../data/images/home1.mp4"

export const Hero = () => {
  return (
    <div className="main">
      <video src={Vidiobg} autoPlay loop muted />
      <div className="bg">
      {home.map ((val,i)=> (
        <div className="heroContent">
          <h1>
          QUALITY IN EVERY PROJECT
          </h1>
          <p data-aos='fade-left'></p>
            <a href='/services' style={{ textDecoration: 'none' }}>
            <button className='primaryBtn' data-aos='fade-up-right'>Our Work</button>
            </a>
            <a href='/contact' style={{  textDecoration: 'none' }}>
            <button className='primaryBtn1' data-aos='fade-up-left'>Contact</button>
            </a>
        </div>
      ))}
      </div>
    </div>
  );
};

