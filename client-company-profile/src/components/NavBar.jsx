import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import Logo from "../assets/img/logo.png";

export const NavBar = () => {
  const [isHidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 10) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <Navbar expand="md" className={isHidden ? 'navbar-hidden' : ""}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-auto nav-link">
            <Nav className={({isActive, isPending}) => (isPending ? "pending" : isActive ? "active" : "")}>
              <Nav.Link href="/">Tentang Perusahaan</Nav.Link>
              <Nav.Link href="/our-services">Layanan Kami</Nav.Link>
              <Nav.Link href="/contact-us">Kontak Kami</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
