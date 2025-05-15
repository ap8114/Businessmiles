import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ITStrategySection = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "60px 0",
        color: "#333",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center mb-5 py-3" style={{backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover'}}>
          <Col lg={8}>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "32px",
                color: "#f9c31f",
                background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}}
            >
              📊 IT Strategy & Roadmapping
            </h2>
            <p style={{ fontSize: "18px", marginTop: "10px" }}>
              Align your business goals with the right technology stack.
            </p>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
              We assess your current infrastructure, identify inefficiencies, and define a clear path to scalable,
              secure, and cost-effective IT operations.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
            <Card
              style={{
                border: "1px solid #f9c31f",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                padding: "30px",
              }}
            >
              <h5
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                What You Get:
              </h5>
              <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                <li>• Current-state analysis</li>
                <li>• Technology gap assessment</li>
                <li>• Budget-aligned IT roadmap</li>
                <li>• Architecture recommendations</li>
              </ul>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Button
            style={{
              backgroundColor: "#f9c31f",
              border: "none",
              padding: "12px 30px",
              borderRadius: "30px",
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            Contact Us
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ITStrategySection;