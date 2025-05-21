import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-dark position-relative pt-5">
      {/* Background Wave Image */}
      <div
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/Hk5CC6DF/Whats-App-Image-2025-05-06-at-18-36-01-7ab0b10c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* CTA Section */}
        <div className="text-center mb-5">
          <h4
            className="fw-bold"
            style={{
              background: "linear-gradient(to right, #FFD700, #333333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let’s build something great together
          </h4>
        </div>

        <div className="row text-start">
          {/* Logo */}
          <div className="col-lg-2 col-md-6 col-12 mb-4">
            <img
              src="./src/Images/logo.png"
              alt="Miles IT"
              style={{ width: "100px", marginBottom: "10px" }}
            />
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 col-12 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/customsoftwaredevelopment" className="text-black text-decoration-none">Custom Software Development</Link>
              </li>
              <li>
                <Link to="/CloudInfrastructure" className="text-black text-decoration-none">Cloud Infrastructure & DevOps</Link>
              </li>
              <li>
                <Link to="/WebECommerceDevelopment" className="text-black text-decoration-none">Web & E-Commerce Development</Link>
              </li>
              <li>
                <Link to="/DigitalMarketing" className="text-black text-decoration-none">Digital Marketing & Growth Strategy</Link>
              </li>
              <li>
                <Link to="/ConsultingPage" className="text-black text-decoration-none">Technology & Business Consulting</Link>
              </li>
              <li>
                <Link to="/EndToEndSupport" className="text-black text-decoration-none">End-to-End Support</Link>
              </li>
            </ul>
          </div>

          {/* Consulting */}
          <div className="col-lg-2 col-md-6 col-12 mb-4">
            <h6 className="fw-bold">Consulting</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/ITStrategySection" className="text-black text-decoration-none">IT Strategy & Roadmapping</Link>
              </li>
              <li>
                <Link to="/CloudConsulting" className="text-black text-decoration-none">Cloud & Infrastructure Consulting</Link>
              </li>
              <li>
                <Link to="/CyberSecurityAdvisory" className="text-black text-decoration-none">Cybersecurity & Compliance Advisory</Link>
              </li>
              <li>
                <Link to="/DigitalTransformationConsulting" className="text-black text-decoration-none">Digital Transformation Consulting</Link>
              </li>
              <li>
                <Link to="/FeasibilityConsultingPageAlt" className="text-black text-decoration-none">Feasibility Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Industries & Resources */}
          <div className="col-lg-6 col-md-12 col-12 mb-4">
            <div className="row">
              {/* Industries */}
              <div className="col-md-4">
                <h6 className="fw-bold">Industries</h6>
                <ul className="list-unstyled small">
                  <li><Link to="/HealthcarePage" className="text-black text-decoration-none">Healthcare & Life Sciences</Link></li>
                  <li><Link to="/LogisticsPage" className="text-black text-decoration-none">Logistics & Supply Chain</Link></li>
                  <li><Link to="/FinancePage" className="text-black text-decoration-none">Finance & Insurance</Link></li>
                  <li><Link to="/RealEstatePage" className="text-black text-decoration-none">Real Estate & Property Tech</Link></li>
                  <li><Link to="/RetailEcommercePage" className="text-black text-decoration-none">Retail & E-Commerce</Link></li>
                  <li><Link to="/ConstructionContractingPage" className="text-black text-decoration-none">Construction & Contracting</Link></li>
                  <li><Link to="/EducationELearningPage" className="text-black text-decoration-none">Education & E-Learning</Link></li>
                  <li><Link to="/LegalServicesPage" className="text-black text-decoration-none">Legal & Professional Services</Link></li>
                </ul>
              </div>

               {/* Resources */}
            <div className="col-md-6 mb-4">
              <h6 className="fw-bold">Resources</h6>
              <ul className="list-unstyled small">
                <li><Link to="/CaseStudiesSpotlight" className="text-black text-decoration-none">Case Studies</Link></li>
                <li><Link to="/CybersecurityAlertsLight" className="text-black text-decoration-none">Cybersecurity Alerts</Link></li>
                <li><Link to="/IndustryReportsAndGuides" className="text-black text-decoration-none">Industry Reports & Trend Guides</Link></li>
                <li><Link to="/BlogAndInsights" className="text-black text-decoration-none">Blog & Insights</Link></li>
              </ul>
            </div>

            </div>
          </div>

  


        </div>

        {/* Contact & Social */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-4 border-top mt-4">
          <div className="mb-3 mb-md-0">
            <Link to="/contactus">
            <button
              className="btn btn-outline-secondary fw-bold"
              style={{
                background: "linear-gradient(to right, #FFD700, #FF8C00)",
                border: "none",
                color: "#333",
              }}
            >
              CONTACT US
            </button>
            </Link>
            <div className="small mt-2">
              866-955-1787 | <a href="#" className="text-dark text-decoration-none">Login</a>
            </div>
          </div>
          <div className="d-flex gap-3 text-dark">
            <FaFacebookF size={18} />
            <FaTwitter size={18} />
            <FaInstagram size={18} />
            <FaLinkedinIn size={18} />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-dark text-white text-center py-2 small border-top">
        © 2025 Miles IT Company. All Rights Reserved.{" "}
        <span className="text-primary">Sitemap | Terms of Use | Privacy Policy</span>
      </div>
    </footer >
  );
};

export default Footer;
