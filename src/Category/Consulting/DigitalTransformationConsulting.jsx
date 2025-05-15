import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const DigitalTransformationConsulting = () => {
  return (
    <div style={{ backgroundColor: "#fffdf5", paddingTop: "60px", paddingBottom: "80px", fontFamily: "Segoe UI, sans-serif" }}>
      
      {/* Hero Section */}
      <Container className="text-center mb-5 py-5" style={{backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover',        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',}}>
        <h1 style={{ fontWeight: 700, fontSize: "36px", color: "#1a1a1a" ,  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}}>
          Embrace Digital Transformation
        </h1>
        <p style={{ fontSize: "18px", color: "#4f4f4f", marginTop: "20px", maxWidth: "750px", margin: "auto" }}>
          Reimagine your business workflows, upgrade outdated systems, and unlock efficiency through smarter, scalable technology.
        </p>
      </Container>

      {/* Transformation Steps */}
      <Container style={{ background: "#ffffff", borderRadius: "16px", padding: "40px", boxShadow: "0px 10px 25px rgba(0,0,0,0.07)" }}>
        <Row>
          <Col md={6} className="mb-4">
            <h4 style={{ fontWeight: 600, color: "#f9c31f", marginBottom: "15px" }}>Our Approach</h4>
            <ul style={{ listStyleType: "none", padding: 0, color: "#333", fontSize: "16px", lineHeight: "1.8" }}>
              <li>✅ Process Automation Mapping</li>
              <li>✅ Legacy System Modernization</li>
              <li>✅ Product Lifecycle Design</li>
              <li>✅ KPI Tracking & Optimization</li>
            </ul>
          </Col>
          <Col md={6}>
            <div style={{
              backgroundColor: "#f9c31f",
              borderRadius: "12px",
              padding: "30px",
              color: "#1a1a1a",
              fontWeight: 600,
              textAlign: "center"
            }}>
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>Transformation with measurable impact</p>
              <p style={{ fontSize: "14px" }}>We combine modern design, data, and technology to build streamlined business experiences.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <Container className="text-center mt-5">
        <div style={{
          background: "#fff3cd",
          borderRadius: "14px",
          padding: "40px 30px",
          display: "inline-block",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          maxWidth: "700px"
        }}>
          <h3 style={{ color: "#1a1a1a", fontWeight: 700, marginBottom: "20px" }}>
            Ready to modernize your business?
          </h3>
          <p style={{ color: "#4f4f4f", fontSize: "16px", marginBottom: "30px" }}>
            Talk to our consulting team and explore how we can reshape your digital future with confidence and clarity.
          </p>
          <Button
            style={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              padding: "10px 30px",
              fontSize: "16px"
            }}
          >
            Talk to Us
          </Button>
        </div>
      </Container>

    </div>
  );
};

export default DigitalTransformationConsulting;