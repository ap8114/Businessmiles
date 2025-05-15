import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ConsultingPage = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#fefae0", color: "#333" }}>
      <div style={{ backgroundColor: "#fff8dc", padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", color: "#f7b500" }}>Technology & Business Consulting</h1>
        <h4 style={{ marginTop: "15px", color: "#7a5d1a" }}>
          Plan. Modernize. Transform.
        </h4>
        <p style={{ fontSize: "16px", maxWidth: "700px", margin: "15px auto", color: "#444" }}>
          We help you make smarter tech decisions with deep industry insight,
          technical expertise, and outcome-focused planning.
        </p>
        <Button style={{ backgroundColor: "#f7b500", border: "none", padding: "10px 20px", marginTop: "15px", color: "#000" }}>
          Contact Us
        </Button>
      </div>

      <Container style={{ padding: "50px 15px" }}>
        <h3 className="text-center mb-4" style={{ color: "#7a5d1a" }}>
          Consulting Services
        </h3>
        <Row className="g-4">
          {[
            "IT Audits & Modernization Plans",
            "Digital Transformation Strategy",
            "Software Feasibility Studies",
            "Cloud Cost Optimization",
            "Process Automation Planning"
          ].map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <Card style={{ border: "1px solid #f7b500", backgroundColor: "#fff9e6", borderRadius: "12px" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "18px", color: "#333", fontWeight: "600" }}>
                    {service}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div style={{ backgroundColor: "#fff8dc", padding: "40px 20px", textAlign: "center" }}>
        <h4 style={{ color: "#f7b500", marginBottom: "10px" }}>🎯 From discovery to delivery</h4>
        <p style={{ color: "#333", fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}>
          — your roadmap to results
        </p>
      </div>
    </div>
  );
};

export default ConsultingPage;
