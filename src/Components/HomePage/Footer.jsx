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
    <footer className="text-dark position-relative pt-5 ">
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
        <div className="text-center mb-4">
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

        {/* All Columns in Single Row */}
        <div className="row text-start mt-5">
          {/* Logo & Company & Resources */}
          <div className="col-lg-2 col-md-4 mb-4">
            <img
              src="https://www.milesit.com/themes/custom/miles/logo.svg"
              alt="Miles IT"
              style={{ width: "100px", marginBottom: "10px" }}
            />
            <h6 className="fw-bold mt-3">Company</h6>
            <ul className="list-unstyled small">
              <li>Who We Are</li>
              <li>Careers</li>
              <li>Refer a Friend</li>
              <li>Logos</li>
              <li>Fonts</li>
              <li>Colors</li>
              <li>Templates</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-4 mb-4   " >
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled small">
              <li className='list-unstyled '>
                <Link className="text-black text-decoration-none" to="/customsoftwaredevelopment">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link  className="text-black text-decoration-none" to="/CloudInfrastructure">
                  Cloud Infrastructure & DevOps
                </Link>
              </li>
              <li>
                <Link className="text-black text-decoration-none"  to="/WebECommerceDevelopment">
                  Web & E-Commerce Development
                </Link>
              </li>
              <li>
                <Link className="text-black text-decoration-none" to="/DigitalMarketing">
                  Digital Marketing & Growth Strategy
                </Link>
              </li>
              <li>
                <Link className="text-black text-decoration-none" to="/ConsultingPage">
                  Technology & Business Consulting
                </Link>
              </li>
              <li>
                <Link className="text-black text-decoration-none" to="/EndToEndSupport">End-to-End Support</Link>
              </li>
            </ul>
          </div>

          {/* Consulting */}
          <div className="col-lg-2 col-md-4 mb-4">
            <h6 className="fw-bold">Consulting</h6>
            <ul className="list-unstyled small">
              <li>
                <Link className="text-black text-decoration-none" to="/ITStrategySection">IT Strategy & Roadmapping</Link>
              </li>
              <li>
                <Link  className="text-black text-decoration-none" to="/CloudConsulting">
                  Cloud & Infrastructure Consulting
                </Link>
              </li>
              <li>
                <Link className="text-black text-decoration-none" to="/CyberSecurityAdvisory">
                  Cybersecurity & Compliance Advisory
                </Link>
              </li>
              <li>
                <Link className="text-black text-decoration-none" to="/DigitalTransformationConsulting">
                  Digital Transformation Consulting
                </Link>
              </li>
              <li>
                <Link className="text-black text-decoration-none" to="/FeasibilityConsultingPageAlt">
                  FeasibilityConsultingPageAlt
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h6 className="fw-bold">Industries</h6>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled small ">
                  <li>
                    <Link className="text-black text-decoration-none" to="/HealthcarePage">Healthcare & Life Sciences</Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none"to="/LogisticsPage">Logistics & Supply Chain</Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none" to="/FinancePage">Finance & Insurance</Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none" to="/RealEstatePage">
                      Real Estate & Property Tech
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none" to="/RetailEcommercePage">Retail & E-Commerce</Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none" to="/ConstructionContractingPage">
                      Construction & Contracting
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none" to="/EducationELearningPage">
                      Education & E-Learning
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none" to="/LegalServicesPage">
                      Legal & Professional Services.
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-12 mb-4">
                <h6 className="fw-bold ">Resources</h6>
                <ul className="list-unstyled small">
                  <li>
                    <Link className="text-black text-decoration-none" to="/CaseStudiesSpotlight">Case Studies</Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none"  to="/CybersecurityAlertsLight">
                      Cybersecurity Alerts
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none"  to="/IndustryReportsAndGuides">
                      Industry Reports & Trend Guides
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black text-decoration-none" to="/BlogAndInsights">Blog & Insights</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 border-top">
          <div className="mb-2">
            <button
              className="btn btn-outline-secondary text-dark fw-bold"
              style={{
                background: "linear-gradient(to right, #FFD700, #FF8C00)",
                border: "none",
                color: "#333",
              }}
            >
              CONTACT US
            </button>
            <div className="small mt-1">
              866-955-1787 |{" "}
              <a href="#" className="text-dark text-decoration-none">
                Login
              </a>
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
        <span className="text-primary">
          Sitemap | Terms of Use | Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
