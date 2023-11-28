import React from "react";
import { Heading } from "../common/Heading";
import { visi } from "../data/dummydata";

export const Visi = ()=>{
    return (
        <>
            <section className='visi-misi'>
                <div className='container'>
                    <Heading title='VISI & MISI' />
                <div className='content grid3'>
                    {visi.map((item) => (
                      <div className='box' data-aos='flip-left'>
                        <i>{item.icon}</i>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    )
}