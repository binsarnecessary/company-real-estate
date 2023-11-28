import React from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`,`${val.desc}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'></p>
            <button className='primaryBtn' data-aos='fade-up-right'>
              Contact
            </button>
          </div>
        ))}
      </section>
    </>
  )
}