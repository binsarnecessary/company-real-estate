import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../common/Footer";
import { Home } from "../home/Home";
import { About } from "./About";
import { Layanan } from "./Layanan";
import { Header } from "../common/Header";
import { ContactPage } from "./ContactPage";
import { BannerContact } from "./ContactPage/BannerContact";
import { ClientPage } from "./ClientPage";
import { ServicesPage } from "./ServicesPage";
import { MechanicalServices } from "./DetailServices/MechanicalServices";
import { ElectricalServices } from "./DetailServices/ElectricalServices";
import { ProcurementServices } from "./DetailServices/ProcurementServices";


export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/client" component={ClientPage} />
          <Route exact path="/layanan" component={Layanan} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/talk-to" component={BannerContact} />
          <Route exact path="/services/mechanical-services" component={MechanicalServices} />
          <Route exact path="/services/electrical-services" component={ElectricalServices} />
          <Route exact path="/services/procurement-services" component={ProcurementServices} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
