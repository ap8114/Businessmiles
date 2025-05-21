import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FeasibilityConsultingPageAlt = () => {
  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" ,}}>
      {/* Top Banner*/}
      <div
        style={{
          backgroundColor: "#f9c31f",
          padding: "60px 20px",
          textAlign: "center",
          color: "#1a1a1a",
          backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover',
                borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "15px" ,  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}}>
          💡 Product & Software Feasibility Consulting
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          Got an idea? Let’s validate it — fast and lean. We support entrepreneurs,
          product owners, and innovation team in shaping viable, scalable, user-focused
          digital products.
        </p>
      </div>

      {/* Deliverables Section */}
      <Container style={{ padding: "60px 20px" }}>
        <Row className="mb-4">
          <Col>
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              What We Deliver
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <div
              style={{
                borderLeft: "5px solid #f9c31f",
                padding: "20px 25px",
                backgroundColor: "#fefefe",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h5 style={{ margin: 0, fontWeight: "500" }}>
                🛠 Product strategy and architecture
              </h5>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              style={{
                borderLeft: "5px solid #f9c31f",
                padding: "20px 25px",
                backgroundColor: "#fefefe",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h5 style={{ margin: 0, fontWeight: "500" }}>
                🧪 MVP design and prototyping
              </h5>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              style={{
                borderLeft: "5px solid #f9c31f",
                padding: "20px 25px",
                backgroundColor: "#fefefe",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h5 style={{ margin: 0, fontWeight: "500" }}>
                📊 Market-tech fit validation
              </h5>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div
              style={{
                borderLeft: "5px solid #f9c31f",
                padding: "20px 25px",
                backgroundColor: "#fefefe",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h5 style={{ margin: 0, fontWeight: "500" }}>
                🧭 Development roadmaps
              </h5>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "50px 20px",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px" }}>
          Validate Your Next Big Idea With Experts
        </h3>
        <p style={{ fontSize: "16px", marginBottom: "25px" }}>
          From concept to roadmap — we’ll guide you every step of the way.
        </p>
        <button
          style={{
            backgroundColor: "#f9c31f",
            border: "none",
            padding: "12px 30px",
            borderRadius: "5px",
            color: "#1a1a1a",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default FeasibilityConsultingPageAlt;