import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CloudConsulting = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f6f1e7", padding: "60px",  borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px'}}>
      <Container>
        {/* Header */}
        <Row className="text-center mb-4 py-5" style={{
          backgroundImage: "url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
          backgroundSize: 'cover', borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px',
        }}>
          <Col>
            <h2 style={{
              color: "#f9c31f", fontWeight: "bold", fontSize: "32px", background: "linear-gradient(to right, #FFD700, #333333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              ☁ Cloud & Infrastructure Consulting
            </h2>
            <p style={{ fontSize: "18px", color: "#333", marginTop: "10px" }}>
              Move to the cloud with confidence — or optimize what you’ve already deployed.
            </p>
          </Col>
        </Row>

        {/* Description Box */}
        <Row className="justify-content-center">
          <Col md={10}>
            <Card
              style={{
                border: "none",
                backgroundColor: "#f9f9f9",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              }}
            >
              <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.7" }}>
                We help you design and implement high-performance, cost-efficient cloud environments on AWS, Azure, and GCP.
              </p>

              <h5
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                Services Include:
              </h5>
              <ul style={{ color: "#444", fontSize: "16px", lineHeight: "1.8" }}>
                <li>• Cloud readiness assessments</li>
                <li>• Migration strategy</li>
                <li>• Multi-cloud/hybrid architecture</li>
                <li>• DevOps & automation planning</li>
              </ul>
            </Card>
          </Col>
        </Row>

        {/* Highlighted Section */}
        <Row className="mt-5 justify-content-center text-center">
          <Col md={6}>
            <div
              style={{
                backgroundColor: "#f9c31f",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h4 style={{ color: "#000", fontWeight: "bold", marginBottom: "10px" }}>
                Ready to Transform Your Cloud Strategy?
              </h4>
              <p style={{ color: "#222", fontSize: "16px", marginBottom: "20px" }}>
                Let’s align your infrastructure with your business goals.
              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CloudConsulting;