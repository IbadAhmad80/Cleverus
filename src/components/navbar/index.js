import React from "react";
import "../../css/style.css";
import { FaEnvelope, FaFacebook, FaGithubAlt, FaTwitter } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navigation .bg-dark ">
      <div className="header-top  ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4">
              <div className="header-top-socials text-center text-lg-left text-md-left">
                <a
                  href="https://www.facebook.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ti-facebook">
                    <FaFacebook />
                  </i>
                </a>
                <a
                  href="https://twitter.com/themefisher"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ti-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a
                  href="https://github.com/themefisher/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ti-github">
                    <FaGithubAlt />
                  </i>
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 text-center">
              <div className="header-top-info my-md-0 mb-md-0 mb-2">
                <a href="tel:+23-345-67890">
                  Call Us : <span>+23-345-67890 </span>
                </a>
                <a href="mailto:support@gmail.com">
                  <i className="mx-2">
                    <FaEnvelope />
                  </i>
                  <span>support@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className=" px-4 px-sm-0"
          id="navbar"
          // fixed="top"
        >
          <Container>
            <Link to="/">
              <Navbar.Brand className="fs-2 text-capitalize fw-bolder py-2">
                Clever<span style={{ color: "#f75757" }}>Us.</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto text-center">
                <Nav.Link
                  className="px-2 nav-links text-uppercase nav-link"
                  href="#home"
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link
                  className="px-3 nav-links text-uppercase nav-link"
                  href="#contact"
                >
                  <Link to="/places" className="nav-link">
                    Find Place
                  </Link>
                </Nav.Link>
                <Nav.Link className="px-3 nav-links text-uppercase nav-link">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </Nav.Link>

                <Nav.Link className="px-3 nav-links text-uppercase nav-link">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav className="text-center mt-2 mt-lg-0 ">
                <Link to="/sign-in">
                  <button className="text-white fs-6 px-4 py-2 btn-solid-border btn-round-full">
                    My Profile
                  </button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
