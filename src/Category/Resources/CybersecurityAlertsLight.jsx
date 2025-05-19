import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CybersecurityAlertsLight = () => {
  const alerts = [
    {
      title: "🔐 Ransomware Surge",
      desc: "Small businesses are now the top target for ransomware. Learn how to prepare and defend against new attacks."
    },
    {
      title: "📧 AI-Driven Phishing",
      desc: "Phishing emails are now generated using AI, making them harder to detect. Here's what to watch out for."
    },
    {
      title: "🔓 VPN Flaw Detected",
      desc: "A critical flaw in a popular VPN service has left systems exposed. See how to patch and stay safe."
    }
  ];

  return (
    <div style={{ backgroundColor: "#f6f1e7", fontFamily: "Segoe UI, sans-serif", paddingTop: "60px", paddingBottom: "60px" }}>
      
      {/* Header */}
      <Container className="text-center mb-5 py-5" style={{    borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',   backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover'}}>
        <h1 style={{ fontWeight: 700, fontSize: "36px", color: "#1a1a1a" ,  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}}>
          🛡 Cybersecurity Alerts
        </h1>
        <p style={{ fontSize: "17px", color: "#4f4f4f", marginTop: "15px", maxWidth: "720px", margin: "auto" }}>
          Stay one step ahead of digital threats. Get insights and best practices to protect your business from breaches, ransomware, phishing, and more.
        </p>
      </Container>

      {/* Alerts Grid */}
      <Container>
        <Row>
          {alerts.map((alert, index) => (
            <Col md={4} sm={12} className="mb-4" key={index}>
              <Card style={{
                backgroundColor: "#ffffff",
                border: "1px solid #f0f0f0",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                height: "100%"
              }}>
                <Card.Body>
                  <h5 style={{ color: "#1a1a1a", fontWeight: 600 }}>{alert.title}</h5>
                  <p style={{ color: "#555", fontSize: "15px", marginTop: "10px" }}>{alert.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Highlight Strip */}
      <Container className="mt-5">
        <div style={{
          backgroundColor: "#fff6db",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 6px 12px rgba(0,0,0,0.04)"
        }}>
          <h4 style={{ fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>🧠 Know the risks. Secure your assets.</h4>
          <p style={{ color: "#4f4f4f", fontSize: "15px", marginBottom: "20px" }}>
            Subscribe to alerts and get proactive cybersecurity insights directly in your inbox.
          </p>
          <Button
            style={{
              backgroundColor: "#f9c31f",
              color: "#1a1a1a",
              border: "none",
              borderRadius: "30px",
              padding: "10px 28px",
              fontWeight: 600
            }}
          >
            👉 See Cybersecurity Updates
          </Button>
        </div>
      </Container>

    </div>
  );
};

export default CybersecurityAlertsLight;