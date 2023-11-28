import React from "react"
import { Contact } from "../pages/Contact"
import { Services } from "../pages/Services"
import { Hero } from "./Hero"
import {Client} from "../pages/Client"

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Client/>
      <Contact />
    </>
  )
}
