import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Logo from "../data/images/logo.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Header = () => {
  const [isShow, setShow] = useState(false);
  const [isScroll, setScroll] = useState(false); 


  localStorage.setItem("isShow", isShow);

  const onShow = () => {
    if (isShow) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const changeBacgroundColor = () => {
    if(window.scrollY > 10) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect (() => {
    changeBacgroundColor()

    window.addEventListener('scroll', changeBacgroundColor)
  })

  return (
    <div>
      {isShow ? <Sidebar isShow={isShow} /> : <></>}

      <div className={`navbar-logo d-flex align-items-center justify-content-between ${isScroll ? "color-active" : ""}`}>
        <div className="logo-brand" style={{ marginLeft: "30px",marginTop: "20px" }}>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="logo-hamburger" style={{ marginRight: "25px" }}>
          <Button
            className={isShow ? "btn-click" : "btn-no-click"}
            style={{
              background: "none",
              border: "none",
              padding: "0",
              outline: "none",
              transition: "margin-right 0.8s ease", // Apply transition here
              marginRight: isShow ? "260px" : "0", // Use margin-right directly
            }}
            onClick={onShow}
          >
            {isShow ? (
              <Icon.XLg size={40} color="white" />
            ) : (
              <Icon.List size={40} color="white" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
