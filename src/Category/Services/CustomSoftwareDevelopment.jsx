import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function CustomSoftwareDevelopment() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#fff8e5",
          padding: "60px 20px",
          textAlign: "center",
          color: "#333",
          backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')"
        }}
      >
        <h1 style={{ fontSize: "2.8rem", fontWeight: "bold",   background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" }}>
          Custom Software Development
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "15px" }}>
          Bespoke software. Built around your business.
        </p>
        <p style={{ fontSize: "1rem", maxWidth: "700px", margin: "20px auto 0" }}>
          We craft scalable, secure, and fully tailored applications to help you
          automate operations, enhance efficiency, and gain competitive advantage.
        </p>
      </div>

      {/* Solutions Section */}
      <div className="container py-5">
        <h2
          className="text-center mb-4"
          style={{ color: "#b38e00", fontWeight: "600" }}
        >
          Solutions We Build:
        </h2>
        <div className="row justify-content-center">
          {[
            "SaaS Applications",
            "ERP & CRM Systems",
            "Custom Dashboards & Portals",
            "API Integrations",
            "Web & Mobile Apps",
          ].map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#fff8e5",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  fontWeight: "500",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center mb-5">
        <button
          className="btn"
          style={{
            backgroundColor: "#ffb400",
            color: "#fff",
            padding: "12px 30px",
            fontWeight: "bold",
            borderRadius: "30px",
            border: "none",
          }}
        >
          Contact Us
        </button>
      </div>
      <section style={{ backgroundColor: '#fdf8ed', padding: '60px 0' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={10} className="text-center">
            <h2 style={{ color: '#2b2b2b', fontWeight: 'bold' }}>
              Managed IT Services &{' '}
              <span style={{ color: '#ffc107' }}>Cybersecurity</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#5a5a5a', marginTop: '15px' }}>
              Your systems, secured and supported — 24/7. <br />
              From helpdesk support to endpoint protection and server monitoring, we keep your IT ecosystem stable,
              secure, and future-proof.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card style={{ border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <h5 style={{ color: '#343a40', fontWeight: '600', marginBottom: '20px' }}>
                  Services Include:
                </h5>
                <ul style={{ fontSize: '1rem', color: '#4a4a4a', lineHeight: '1.8' }}>
                  <li>✅ 24/7 Remote IT Support</li>
                  <li>✅ Network Setup & Maintenance</li>
                  <li>✅ Cloud Backup & Disaster Recovery</li>
                  <li>✅ Firewall & Endpoint Security</li>
                  <li>✅ Threat Detection & Compliance (ISO, HIPAA, GDPR)</li>
                </ul>

                <div
                  style={{
                    marginTop: '30px',
                    backgroundColor: '#fff3cd',
                    borderLeft: '6px solid #ffc107',
                    padding: '15px 20px',
                    borderRadius: '8px',
                    fontStyle: 'italic',
                    color: '#856404'
                  }}
                >
                  🛡 We don’t just manage IT — we protect your business continuity.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Button
            style={{
              backgroundColor: '#ffb703',
              border: 'none',
              color: '#2b2b2b',
              fontWeight: '600',
              padding: '10px 30px',
              fontSize: '1rem',
              borderRadius: '25px'
            }}
          >
            Learn More
          </Button>
        </Row>
      </Container>
    </section>
    </div>

    
  );
}
