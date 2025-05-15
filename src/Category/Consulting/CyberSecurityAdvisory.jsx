import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const CyberSecurityAdvisory = () => {
  return (
    <div style={{ backgroundColor: "#fdf9f0", padding: "60px 0", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Top Banner Section */}
      <div style={{
        background: "linear-gradient(135deg, #f9c31f 0%, #ffe382 100%)",
        padding: "50px 30px",
        borderRadius: "20px",
        margin: "0 5%",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ color: "#000", fontWeight: "bold", fontSize: "32px" ,  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}}>🔐 Cybersecurity & Compliance</h1>
        <p style={{ color: "#222", fontSize: "18px", marginTop: "15px", maxWidth: "800px", margin: "auto" }}>
          Security is not an add-on — it’s the foundation. We help you stay secure, compliant, and ahead of risks with trusted frameworks like ISO 27001, GDPR, HIPAA, and NIST.
        </p>
      </div>

      {/* Services Cards */}
      <Container className="mt-5">
        <Row className="g-4">
          {[
            { title: "Security Audits & Risk Analysis", desc: "Identify vulnerabilities before attackers do and stay ahead with real-time risk assessments." },
            { title: "Data Protection Strategies", desc: "Protect sensitive data with encryption, backup planning, and secure architecture." },
            { title: "Policy Creation & Implementation", desc: "Develop and enforce policies tailored to your industry compliance and employee behavior." },
            { title: "Employee Awareness Training", desc: "Educate your workforce to be the first line of defense with practical cybersecurity drills." },
          ].map((item, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card style={{
                backgroundColor: "#ffffff",
                borderRadius: "15px",
                border: "none",
                padding: "20px",
                minHeight: "230px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.06)"
              }}>
                <Card.Body>
                  <h5 style={{ color: "#000", fontWeight: "600" }}>{item.title}</h5>
                  <p style={{ color: "#444", fontSize: "14px", marginTop: "10px" }}>{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action */}
      <Container className="text-center mt-5">
        <div style={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "15px",
          padding: "40px 20px",
          maxWidth: "800px",
          margin: "auto",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
        }}>
          <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>Secure your infrastructure today</h3>
          <p style={{ marginTop: "10px", fontSize: "16px" }}>
            Our experts will tailor a cybersecurity plan that protects what matters most to your business.
          </p>
          <Button style={{
            backgroundColor: "#f9c31f",
            color: "#000",
            border: "none",
            borderRadius: "25px",
            padding: "10px 30px",
            fontWeight: "600",
            fontSize: "16px",
            marginTop: "20px"
          }}>
            Contact Our Team
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CyberSecurityAdvisory;