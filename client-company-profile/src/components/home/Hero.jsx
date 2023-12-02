import React from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom/cjs/react-router-dom"
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
                strings:[`${val.name}`,`${val.design}`, `${val.desc}`],
                autoStart:true,
                loop:true,
              }}    
            />
          </h1>
          <p data-aos='fade-left'></p>
            <button className='primaryBtn' data-aos='fade-up-right' style={{ textDecoration: 'none', color: 'white'}}>
              <Link to='/contact'>contact</Link>
            </button>
        </div>
      ))}
      </div>
    </div>
  );
};

