import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Home } from "../home/Home"
import { About } from "./About"
import { Layanan } from "./Layanan"
import { Contact } from "./Contact"
import { Services } from "./Services"
import { Client } from "./Client"
import { Header } from "../common/Header"
export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/client' component={Client}/>
          <Route exact path='/layanan' component={Layanan} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
