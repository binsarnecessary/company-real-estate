import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import KontakKamiPage from "./pages/KontakKamiPage/KontakKamiPage";
import LayananPage from "./pages/LayananPage/LayananPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />

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
