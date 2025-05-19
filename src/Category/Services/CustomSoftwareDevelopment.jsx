import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CustomSoftwareDevelopment() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#fff8e5",
          padding: "60px 20px",
          textAlign: "center",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          backgroundImage:
            "url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
          backgroundSize: "cover",
        }} className="mt-5"
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Custom Software Development
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "15px" }}>
          Bespoke software. Built around your business.
        </p>
        <p
          style={{
            fontSize: "1rem",
            maxWidth: "700px",
            margin: "20px auto 0",
            color: "#444",
          }}
        >
          We craft scalable, secure, and fully tailored applications to help you
          automate operations, enhance efficiency, and gain competitive advantage.
        </p>
      </div>

      {/* Solutions Section */}
      <Container style={{ padding: "50px 15px" }}>
        <h3 className="text-center mb-4" style={{ color: "#b38e00", fontWeight: "600" }}>
          Solutions We Build:
        </h3>
        <Row className="g-4 justify-content-center">
          {[
            "SaaS Applications",
            "ERP & CRM Systems",
            "Custom Dashboards & Portals",
            "API Integrations",
            "Web & Mobile Apps",
          ].map((item, index) => (
            <Col key={index} md={6} lg={4}>
              <Card
                className="h-100"
                style={{
                  backgroundColor: "#fff8e5",
                  borderRadius: "12px",
                  border: "1px solid #ffecb3",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <Card.Body
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    fontWeight: "500",
                    color: "#333",
                    textAlign: "center",
                    padding: "30px",
                  }}
                >
                  {item}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Managed IT & Cybersecurity Section */}
      <div style={{ backgroundColor: "#fdf8ed", padding: "60px 0" }}>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={10} className="text-center">
              <h2 style={{ color: "#2b2b2b", fontWeight: "bold" }}>
                Managed IT Services & <span style={{ color: "#ffc107" }}>Cybersecurity</span>
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#5a5a5a",
                  marginTop: "15px",
                }}
              >
                Your systems, secured and supported — 24/7. <br />
                From helpdesk support to endpoint protection and server monitoring,
                we keep your IT ecosystem stable, secure, and future-proof.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8}>
              <Card
                style={{
                  border: "none",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <Card.Body>
                  <h5
                    style={{
                      color: "#343a40",
                      fontWeight: "600",
                      marginBottom: "20px",
                    }}
                  >
                    Services Include:
                  </h5>
                  <ul
                    style={{
                      fontSize: "1rem",
                      color: "#4a4a4a",
                      lineHeight: "1.8",
                    }}
                  >
                    <li>✅ 24/7 Remote IT Support</li>
                    <li>✅ Network Setup & Maintenance</li>
                    <li>✅ Cloud Backup & Disaster Recovery</li>
                    <li>✅ Firewall & Endpoint Security</li>
                    <li>✅ Threat Detection & Compliance (ISO, HIPAA, GDPR)</li>
                  </ul>
                  <div
                    style={{
                      marginTop: "30px",
                      backgroundColor: "#fff3cd",
                      borderLeft: "6px solid #ffc107",
                      padding: "15px 20px",
                      borderRadius: "8px",
                      fontStyle: "italic",
                      color: "#856404",
                    }}
                  >
                    🛡 We don’t just manage IT — we protect your business continuity.
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
