import React from "react";
import * as Icon from "react-bootstrap-icons"

export default function Sidebar(props) {
  const { isShow } = props;

  return (
    <div>
      <nav className={`${isShow ? "sidebar-show" : ""}`}>
        <ul style={{ listStyle: "none" }}>
          <li>
            <a className="text-decoration-none" href="/">
              HOME
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="/about">
              ABOUT
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="/services">
              SERVICES
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="/client">
              CLIENT
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="/contact">
              CONTACT
            </a>
          </li>
          <li>
          </li>
        </ul>

        <div className="contact-sidebar text-decoration-none">
          <a href="/"><Icon.Facebook /></a>
          <a href="/"><Icon.Twitter /></a>
          <a href="/"><Icon.Instagram /></a>
          <a href="/"><Icon.Youtube /></a>
          <a href="/"><Icon.Envelope /></a>
        </div>
      </nav>
    </div>
  );
}
