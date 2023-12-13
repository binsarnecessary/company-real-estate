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
          <button className='primaryBtn' data-aos='fade-up-right'>
            <a href='/services' style={{color:'white',  textDecoration: 'none' }}>Our Work</a>
          </button>
          <button className='primaryBtn1' data-aos='fade-up-left'>
            <a href='/contact' style={{color:'white',  textDecoration: 'none' }}>Contact</a>
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

