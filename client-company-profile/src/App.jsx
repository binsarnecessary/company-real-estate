import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./dist/css/main.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import KontakKamiPage from "./pages/KontakKamiPage/KontakKamiPage";
import LayananPage from "./pages/LayananPage/LayananPage";
import { NavBar } from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/gallery" element={<GalleryPage />} />
            <Route exact path="/contact-us" element={<KontakKamiPage />} />
            <Route exact path="/our-services" element={<LayananPage />} />
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
