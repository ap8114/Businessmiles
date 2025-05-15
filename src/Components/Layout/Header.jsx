import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Navbar, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaSignInAlt,
  FaBriefcase,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <div className="border-bottom bg-white shadow-sm m-0 p-0 w-100 ">
      <Container fluid className="p-0">
        {/* Top Right Row */}
        <div className="d-none d-lg-flex justify-content-end gap-4 py-2">
          <div className="text-dark fw-semibold d-flex align-items-center">
            <FaPhone className="me-2" />
            866-916-7414
          </div>
          <div className="text-dark fw-semibold d-flex align-items-center">
            <FaSignInAlt className="me-2" />
            <a href="#" className="text-dark text-decoration-none">
              Login
            </a>
          </div>
          <div className="text-dark fw-semibold d-flex align-items-center">
            <FaBriefcase className="me-2" />
            <a href="#" className="text-dark text-decoration-none">
              Careers
            </a>
          </div>
        </div>

        {/* Navbar */}
        <Navbar bg="white" className="py-2 px-0 navbar-shadow">
          <div className="d-flex flex-wrap w-100 align-items-center justify-content-between">
            {/* Logo */}
            <Link to="/" className="no-underline">
              <div
                className="d-flex align-items-center"
                style={{ width: "200px", height: "40px" }}
              >
                <img
                  src="https://i.postimg.cc/FFdgkZkb/Screenshot-2025-05-06-184748.png"
                  alt="Logo"
                  height="50"
                  className="me-2 mb-5"
                />
              </div>
            </Link>

            {/* Nav Items (Desktop) */}
            <ul className="nav gap-4 mx-auto d-none d-lg-flex">
              <li className="nav-item">
                <Link to="/whoweare" className="nav-link text-dark fw-normal">
                  Who We Are
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-normal"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/customsoftwaredevelopment" className="dropdown-item" href="#">
                      Custom Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to='./CloudInfrastructure' className="dropdown-item" href="#">
                      Cloud Infrastructure & DevOps
                    </Link>
                  </li>
                  <li>
                    <Link to='/WebECommerceDevelopment' className="dropdown-item" href="#">
                      Web & E-Commerce Development
                    </Link>
                  </li>
                  <li>
                    <Link to='/DigitalMarketing' className="dropdown-item" href="#">
                      Digital Marketing & Growth Strategy
                    </Link>
                  </li>
                  <li>
                    <Link to='/ConsultingPage' className="dropdown-item" href="#">
                      Technology & Business Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to='/EndToEndSupport' className="dropdown-item" href="#">
                      End-to-End Support
                    </Link>
                  </li>
                  
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-normal"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Consulting
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to='/ITStrategySection' className="dropdown-item" href="#">
                      IT Strategy & Roadmapping
                    </Link>
                  </li>
                  <li>
                    <Link to='/CloudConsulting' className="dropdown-item" href="#">
                      Cloud & Infrastructure Consulting
                    </Link>
                  </li>
                   <li>
                    <Link to='/CyberSecurityAdvisory' className="dropdown-item" href="#">
                       <li>
                    <a className="dropdown-item" href="#">
                       Cybersecurity & Compliance Advisory
                    </a>
                  </li>
                    </Link>
                  </li>
                   <li>
                    <Link to='/DigitalTransformationConsulting' className="dropdown-item" href="#">
                      Digital Transformation Consulting
                    </Link>
                  </li>
                <li>
                    <Link to='/FeasibilityConsultingPageAlt' className="dropdown-item" href="#">
                      FeasibilityConsultingPageAlt
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-normal"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Industries
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to='/HealthcarePage' className="dropdown-item" href="#">
                      Healthcare & Life Sciences
                    </Link>
                  </li>
                  <li>
                    <Link to='/LogisticsPage' className="dropdown-item" href="#">
                      Logistics & Supply Chain
                    </Link>
                  </li>
                   <li>
                    <Link to='/FinancePage' className="dropdown-item" href="#">
                      Finance & Insurance
                    </Link>
                  </li>
                   <li>
                    <Link to='/RealEstatePage' className="dropdown-item" href="#">
                      Real Estate & Property Tech
                    </Link>
                  </li>
                   <li>
                    <Link to='/RetailEcommercePage' className="dropdown-item" href="#">
                      Retail & E-Commerce
                    </Link>
                  </li>
                   <li>
                    <Link to='/ConstructionContractingPage' className="dropdown-item" href="#">
                      Construction & Contracting
                    </Link>
                  </li>
                  <li>
                    <Link to='/EducationELearningPage' className="dropdown-item" href="#">
                      Education & E-Learning
                    </Link>
                  </li>
                  <li>
                    <Link to='/LegalServicesPage' className="dropdown-item" href="#">
                      Legal & Professional Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-normal"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to='/CaseStudiesSpotlight' className="dropdown-item" href="#">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to='/CybersecurityAlertsLight' className="dropdown-item" href="#">
                      Cybersecurity Alerts
                    </Link>
                  </li>
                   <li>
                    <Link to='/IndustryReportsAndGuides' className="dropdown-item" href="#">
                      Industry Reports & Trend Guides
                    </Link>
                  </li>
                   <li>
                    <Link to='/BlogAndInsights' className="dropdown-item" href="#">
                      Blog & Insights
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Right Buttons */}
            {/* Right Buttons */}
            <div className="d-none d-lg-flex align-items-center gap-2">
            <Button
  variant="warning"
  className="fw-normal px-2 py-0"
  style={{
    background: "linear-gradient(to right, #FFD700, #FF8C00)",
    border: "none",
    color: "#333",
  }}
>
  Contact Us
</Button>
              <Button variant="light" className="border">
                <FaSearch />
              </Button>
            </div>

            {/* Hamburger for mobile only */}
            <Button
              className="d-lg-none position-relative border-0 bg-transparent"
              onClick={handleModalToggle}
            >
              <FaBars size={26} className="text-dark" />
            </Button>
          </div>
        </Navbar>

        {/* Mobile Modal Menu */}
        <Modal show={showModal} onHide={handleModalToggle}>
          <Modal.Header closeButton>
            <Modal.Title>Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul className="list-unstyled">
              <li>
                <Link to="/Whoweare" className="text-dark d-block py-2 fw-semibold text-decoration-none">
                  Who We Are
                </Link>
              </li>

              <li>
                <a
                  className="text-dark fw-bold d-block py-2 text-decoration-none"
                  data-bs-toggle="collapse"
                  href="#servicesCollapse"
                >
                  Services
                </a>
                <div className="collapse" id="servicesCollapse">
                  <ul className="list-unstyled ps-3">
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Managed IT Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        IT Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Co-Managed IT Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Software Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Custom Websites
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Cloud Computing & Migrations
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  className="text-dark fw-bold d-block py-2 text-decoration-none"
                  data-bs-toggle="collapse"
                  href="#consultingCollapse"
                >
                  Consulting
                </a>
                <div className="collapse" id="consultingCollapse">
                  <ul className="list-unstyled ps-3">
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Consulting 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Consulting 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  className="text-dark fw-bold d-block py-2 text-decoration-none"
                  data-bs-toggle="collapse"
                  href="#industriesCollapse"
                >
                  Industries
                </a>
                <div className="collapse" id="industriesCollapse">
                  <ul className="list-unstyled ps-3">
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Industry 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Industry 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  className="text-dark fw-bold d-block py-2 text-decoration-none"
                  data-bs-toggle="collapse"
                  href="#resourcesCollapse"
                >
                  Resources
                </a>
                <div className="collapse" id="resourcesCollapse">
                  <ul className="list-unstyled ps-3">
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark d-block py-1">
                        Whitepapers
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mt-3">
                <Button
                  variant="warning"
                  className="w-100 fw-normal"
                  style={{ backgroundColor: "#FADD8F" }}
                >
                  Contact Us
                </Button>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Header;
