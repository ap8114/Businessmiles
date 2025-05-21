import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaCartPlus,
  FaLaptopCode,
  FaBullhorn
} from "react-icons/fa";


const ServicesSection = () => {
 
   const [hovered, setHovered] = useState(null);

  const getButtonStyle = (index) => ({
    background: "linear-gradient(to right, #FFD700, #333333)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "all 0.3s ease",
    transform: hovered === index ? "scale(1.05)" : "scale(1)",
    textShadow: hovered === index ? "0 0 10px rgba(255, 215, 0, 0.8)" : "none",
  });

 
 
  return (
    <div
      className="py-5 text-white d-flex flex-column justify-content-between min-vh-100"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/cJGkJzLb/Whats-App-Image-2025-05-06-at-18-35-52-c91f6a87.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        {/* Section Title */}
        <h2
          className="display-5 fw-bold mb-3 py-1"
          style={{
            background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Boost your business with smarter technology—you're in the right place
        </h2>

        {/* Service Cards */}
            <div className="row g-4">

        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center border-warning shadow">
            <div className="card-body">
              <FaShieldAlt size={40} className="text-warning mb-3" />
              <h5 className="card-title fw-bold">MANAGED IT SERVICES & SECURITY</h5>
              <p className="card-text">
                We provide top-notch IT services and security solutions to safeguard your business.
              </p>
              <a
                href="#"
                className="btn btn-warning text-dark fw-bold shadow-sm"
                style={getButtonStyle(1)}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center border-warning shadow">
            <div className="card-body">
              <FaCartPlus size={40} className="text-warning mb-3" />
              <h5 className="card-title fw-bold">ECOMMERCE & CUSTOM WEBSITES</h5>
              <p className="card-text">
                Build your online store or a custom website with our expert development team.
              </p>
              <a
                href="#"
                className="btn btn-warning text-dark fw-bold shadow-sm"
                style={getButtonStyle(2)}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(null)}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center border-warning shadow">
            <div className="card-body">
              <FaLaptopCode size={40} className="text-warning mb-3" />
              <h5 className="card-title fw-bold">SOFTWARE DEVELOPMENT</h5>
              <p className="card-text">
                Transform your ideas into software solutions that work for your business.
              </p>
              <a
                href="#"
                className="btn btn-warning text-dark fw-bold shadow-sm"
                style={getButtonStyle(3)}
                onMouseEnter={() => setHovered(3)}
                onMouseLeave={() => setHovered(null)}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 text-center border-warning shadow">
            <div className="card-body">
              <FaBullhorn size={40} className="text-warning mb-3" />
              <h5 className="card-title fw-bold">DIGITAL MARKETING</h5>
              <p className="card-text">
                Grow your business with our targeted digital marketing strategies and campaigns.
              </p>
              <a
                href="#"
                className="btn btn-warning text-dark fw-bold shadow-sm"
                style={getButtonStyle(4)}
                onMouseEnter={() => setHovered(4)}
                onMouseLeave={() => setHovered(null)}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-5">
        <Link to="/contactus"

          className="btn btn-warning btn-lg text-dark fw-bold shadow-sm"
          style={getButtonStyle(5)}
          onMouseEnter={() => setHovered(5)}
          onMouseLeave={() => setHovered(null)}
        >
          CONTACT US
        </Link>
      </div>

      {/* CTA Button */}
   
      </div>
    </div>
  );
};

export default ServicesSection;
