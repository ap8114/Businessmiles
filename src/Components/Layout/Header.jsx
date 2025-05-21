import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Navbar, Button, Modal, Row, Col, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaSignInAlt,
  FaBriefcase,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleModalToggle = () => setShowModal(!showModal);

  // Mobile menu accordion toggle
  const toggleMobileDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  // Nav links data structure for easier management
  const navLinks = [
    {
      id: "whoweare",
      title: "Who We Are",
      link: "/whoweare",
      isDropdown: false
    },
    {
      id: "services",
      title: "Services",
      isDropdown: true,
      items: [
        { title: "Custom Software Development", link: "/customsoftwaredevelopment" },
        { title: "Cloud Infrastructure & DevOps", link: "/CloudInfrastructure" },
        { title: "Web & E-Commerce Development", link: "/WebECommerceDevelopment" },
        { title: "Digital Marketing & Growth Strategy", link: "/DigitalMarketing" },
        { title: "Technology & Business Consulting", link: "/ConsultingPage" },
        { title: "End-to-End Support", link: "/EndToEndSupport" }
      ]
    },
    {
      id: "consulting",
      title: "Consulting",
      isDropdown: true,
      items: [
        { title: "IT Strategy & Roadmapping", link: "/ITStrategySection" },
        { title: "Cloud & Infrastructure Consulting", link: "/CloudConsulting" },
        { title: "Cybersecurity & Compliance Advisory", link: "/CyberSecurityAdvisory" },
        { title: "Digital Transformation Consulting", link: "/DigitalTransformationConsulting" },
        { title: "Feasibility Consulting", link: "/FeasibilityConsultingPageAlt" }
      ]
    },
    {
      id: "industries",
      title: "Industries",
      isDropdown: true,
      items: [
        { title: "Healthcare & Life Sciences", link: "/HealthcarePage" },
        { title: "Logistics & Supply Chain", link: "/LogisticsPage" },
        { title: "Finance & Insurance", link: "/FinancePage" },
        { title: "Real Estate & Property Tech", link: "/RealEstatePage" },
        { title: "Retail & E-Commerce", link: "/RetailEcommercePage" },
        { title: "Construction & Contracting", link: "/ConstructionContractingPage" },
        { title: "Education & E-Learning", link: "/EducationELearningPage" },
        { title: "Legal & Professional Services", link: "/LegalServicesPage" }
      ]
    },
    {
      id: "resources",
      title: "Resources",
      isDropdown: true,
      items: [
        { title: "Case Studies", link: "/CaseStudiesSpotlight" },
        { title: "Cybersecurity Alerts", link: "/CybersecurityAlertsLight" },
        { title: "Industry Reports & Trend Guides", link: "/IndustryReportsAndGuides" },
        { title: "Blog & Insights", link: "/BlogAndInsights" }
      ]
    }
  ];

  return (
    <div className={`border-bottom bg-white shadow-sm m-0 p-0 w-100 position-sticky top-0 z-3 ${scrolled ? 'scrolled' : ''}`}>
      <Container fluid className="px-0 px-md-3">
        {/* Top Right Row */}
        <div className="d-none d-lg-flex justify-content-end gap-3 py-2">
          <div className="text-dark fw-semibold d-flex align-items-center">
            <FaPhone className="me-2" />
            <a href="tel:866-916-7414" className="text-dark text-decoration-none">866-916-7414</a>
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
        <Navbar bg="white" expand={false} className="py-2 px-2 px-md-0 navbar-shadow">
          <Container fluid className="p-0">
            <Row className="w-100 mx-0 align-items-center">
              <Col xs="auto" className="px-0">
                {/* Logo */}
                <Link to="/" className="no-underline">
                  <div className="d-flex align-items-center" style={{ height: "40px" }}>
                    <img
                      src="https://i.postimg.cc/FFdgkZkb/Screenshot-2025-05-06-184748.png"
                      alt="Logo"
                      height="50"
                      className="me-2 mb-2"
                      style={{ maxWidth: "180px", objectFit: "contain" }}
                    />
                  </div>
                </Link>
              </Col>

              {/* Desktop Navigation */}
              <Col className="d-none d-lg-block">
                <ul className="nav justify-content-center">
                  {navLinks.map((navItem) => (
                    <li key={navItem.id} className="nav-item mx-1">
                      {navItem.isDropdown ? (
                        <div className="dropdown">
                          <a
                            className="nav-link text-dark fw-normal"
                            href="#"
                            id={`${navItem.id}Dropdown`}
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {navItem.title}
                          </a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            {navItem.items.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={item.link}
                                  className="dropdown-item"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link to={navItem.link} className="nav-link text-dark fw-normal">
                          {navItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>

              {/* Right side buttons */}
              <Col xs="auto" className="ms-auto d-flex align-items-center gap-2 px-0">
                <Link to="/contactus" className="d-none d-sm-block"> 
                  <Button
                    variant="warning"
                    className="fw-normal px-3 py-1"
                    style={{
                      background: "linear-gradient(to right, #FFD700, #FF8C00)",
                      border: "none",
                      color: "#333",
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>

                {/* Hamburger for mobile */}
                <Button
                  className="d-lg-none position-relative border-0 bg-transparent p-1"
                  onClick={handleModalToggle}
                >
                  <FaBars size={24} className="text-dark" />
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>

        {/* Mobile Menu Modal */}
        <Modal 
          show={showModal} 
          onHide={handleModalToggle} 
          fullscreen="md-down"
          className="mobile-menu-modal"
        >
          <Modal.Header className="border-0">
            <Modal.Title className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/" onClick={handleModalToggle}>
                  <img
                    src="https://i.postimg.cc/FFdgkZkb/Screenshot-2025-05-06-184748.png"
                    alt="Logo"
                    height="40"
                    style={{ maxWidth: "150px", objectFit: "contain" }}
                  />
                </Link>
                <Button variant="transparent" onClick={handleModalToggle} className="border-0 p-0">
                  <FaTimes size={24} />
                </Button>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0">
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center text-dark">
                  <FaPhone className="me-2" />
                  <a href="tel:866-916-7414" className="text-dark text-decoration-none">866-916-7414</a>
                </div>
                <div className="d-flex align-items-center text-dark">
                  <FaSignInAlt className="me-2" />
                  <a href="#" className="text-dark text-decoration-none">Login</a>
                </div>
              </div>
            </div>
            
                          {/* Mobile Nav Links */}
            <ul className="list-unstyled mb-4">
              {navLinks.map((navItem) => (
                <li key={navItem.id} className="border-bottom py-2">
                  {navItem.isDropdown ? (
                    <>
                      <div 
                        className="d-flex justify-content-between align-items-center cursor-pointer py-2"
                        onClick={() => toggleMobileDropdown(navItem.id)}
                      >
                        <span className="fw-semibold">{navItem.title}</span>
                        {activeDropdown === navItem.id ? <FaChevronDown /> : <FaChevronRight />}
                      </div>
                      
                      <Collapse in={activeDropdown === navItem.id}>
                        <div>
                          <ul className="styled-none ps-3 pt-2">
                            {navItem.items.map((item, idx) => (
                              <li key={idx} className="py-1">
                                <Link 
                                  to={item.link} 
                                  className="text-dark d-block" 
                                  onClick={handleModalToggle}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Collapse>
                    </>
                  ) : (
                    <Link 
                      to={navItem.link} 
                      className="text-dark fw-semibold d-block py-2" 
                      onClick={handleModalToggle}
                    >
                      {navItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="d-grid gap-2">
              <Link to="/contactus" onClick={handleModalToggle}>
                <Button
                  variant="warning"
                  className="w-100 fw-normal"
                  style={{
                    background: "linear-gradient(to right, #FFD700, #FF8C00)",
                    border: "none",
                    color: "#333",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Header;