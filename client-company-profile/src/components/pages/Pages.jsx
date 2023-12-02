import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Home } from "../home/Home"
import { About } from "./About"
import { Layanan } from "./Layanan"
import { Services } from "./Services"
import { Header } from "../common/Header"
import { ContactPage } from "./ContactPage"
import { BannerContact } from "./ContactPage/BannerContact"

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/layanan' component={Layanan} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/talk-to' component={BannerContact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
