import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const CaseStudiesSpotlight = () => {
  const caseStudies = [
    {
      title: "Startup Scaling",
      desc: "Helped a fintech startup reduce onboarding time by 40% using custom automation tools.",
      icon: "🚀"
    },
    {
      title: "Legacy Modernization",
      desc: "Transformed an outdated ERP for a manufacturing firm into a mobile-first cloud platform.",
      icon: "🛠"
    },
    {
      title: "Retail Optimization",
      desc: "Implemented AI-driven insights that improved inventory accuracy by 25%.",
      icon: "📊"
    },
  ];

  return (
    <div style={{ backgroundColor: "#f6f1e7", paddingTop: "60px", fontFamily: "Segoe UI, sans-serif" }}>
      {/* Hero */}
      <Container className="text-center mb-5 py-5" style={{    borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',    backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover'}}>
        <h1 style={{ fontWeight: "700", fontSize: "40px", color: "#1a1a1a",  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" }}>📖 Case Studies</h1>
        <p style={{ fontSize: "18px", color: "#4f4f4f", marginTop: "20px", maxWidth: "720px", margin: "auto" }}>
          Explore how we turned business challenges into digital success. From startups to enterprises —
          our solutions deliver measurable results.
        </p>
      </Container>

      {/* Highlights Banner */}
      <div style={{ backgroundColor: "#f9c31f", padding: "30px 20px", textAlign: "center" }}>
        <strong style={{ fontSize: "16px", color: "#1a1a1a" }}>
          🔍 Real business problems → Expert-built solutions → Quantifiable outcomes
        </strong>
      </div>

      {/* Case Grid */}
      <Container className="mt-5">
        <Row>
          {caseStudies.map((study, idx) => (
            <Col md={4} sm={12} className="mb-4" key={idx}>
              <Card
                style={{
                  border: "none",
                  borderRadius: "16px",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                  padding: "30px",
                  background: "#ffffff",
                  height: "100%",
                  transition: "transform 0.3s ease",
                }}
              >
                <div style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#f9c31f",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}>
                  {study.icon}
                </div>
                <h5 style={{ fontWeight: "700", color: "#1a1a1a" }}>{study.title}</h5>
                <p style={{ fontSize: "15px", color: "#4f4f4f", marginTop: "10px" }}>{study.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA */}
      <Container className="text-center my-5">
        <div style={{
          backgroundColor: "#f9c31f",
          borderRadius: "14px",
          padding: "40px 20px",
          display: "inline-block",
          maxWidth: "700px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ color: "#1a1a1a", fontWeight: 700, marginBottom: "20px" }}>
            Want to explore more client success stories?
          </h3>
          <Button
            style={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              padding: "10px 28px",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            👉 Browse Case Studies
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudiesSpotlight;