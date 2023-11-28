import React from "react"
import { Heading } from "../common/Heading"
import { layanan } from "../data/dummydata"

export const Layanan = () => {
  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading title='Why us ?' />
          <div className='content grid3'>
            {layanan.map((item) => (
              <div className='box' data-aos='flip-left'>
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} alt='' data-aos='fade-down' />
                </div>
                <div className='text'>
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <label data-aos='fade-left'>
                  </label>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
