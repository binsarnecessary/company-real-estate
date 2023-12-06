import React from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import Vidiobg from "../data/images/home1.mp4"

export const Hero = () => {
  return (
    <div className="main">
      <video src={Vidiobg} autoPlay loop muted />
      <div className="bg">
      {home.map ((val,i)=> (
        <div className="heroContent">
          <h1>
            <Typewriter
              options={{
                strings:[`${val.name}`],
                autoStart:true,
                loop:true,
              }}    
            />
          </h1>
          <div className="btn">
          <p data-aos='fade-left'></p>
            <button className='primaryBtn' data-aos='fade-up-right' style={{ textDecoration: 'none', color: 'white'}}>
              <a href='/services' style={{ color: 'white', textDecoration: 'none' }}>Our Work</a>
            </button>
            <button className='primaryBtn1'data-aos='fade-up-left'  style={{ textDecoration: 'none', color: 'white'}}>
              <a href='/contact' style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            </button>  
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

