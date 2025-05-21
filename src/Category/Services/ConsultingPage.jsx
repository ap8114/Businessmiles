import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ConsultingPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f6f1e7", padding: "60px 20px",  borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px'}}>
      {/* Header Section */}
      <Container
        className="container text-center"
        style={{
          padding: '60px',
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          backgroundImage:
            "url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
          backgroundSize: "cover",
          backgroundColor: "#f6f1e7"
        }}
      >
        <h2>
          <span style={{ color: "#c59f00", fontWeight: "bold" }}>
            Technology & Business
          </span>{" "}
          Consulting
        </h2>
        <p
          className="mt-3"
          style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}
        >
          Plan. Modernize. Transform.
        </p>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#333",
          }}
        >
          We help you make smarter tech decisions with deep industry insight,
          technical expertise, and outcome-focused planning.
        </p>
      </Container>

      {/* Services Section */}
      <Container className="py-5">
        <h4 className="text-center mb-4" style={{ color: "#c59f00" }}>
          Consulting Services
        </h4>
        <Row className="g-4 justify-content-center">
          {[
            "IT Audits & Modernization Plans",
            "Digital Transformation Strategy",
            "Software Feasibility Studies",
            "Cloud Cost Optimization",
            "Process Automation Planning",
          ].map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card
                style={{
                  border: "1px solid #eee",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                  borderRadius: "8px",
                  backgroundColor: "#fff9e6",
                }}
              >
                <Card.Body>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      color: "#333",
                    }}
                  >
                    🧩 {service}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#ffb400", padding: "25px 0" }}>
        <Container className="text-center">
          <h4
            style={{
              color: "#fff",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            🎯 From discovery to delivery
          </h4>
          <p
            style={{
              color: "#fff",
              fontSize: "16px",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            — your roadmap to results
          </p>
        </Container>
      </div>
    </div>
  );
};

export default ConsultingPage;
