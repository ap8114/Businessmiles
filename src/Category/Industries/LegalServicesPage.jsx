import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const features = [
  "Client management portals",
  "Case tracking software",
  "Digital contract signing",
  "Billing & invoicing automation",
  "Compliance & audit tools"
];

const LegalServicesPage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Banner */}
      <div style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '60px 20px',
        textAlign: 'left'
      }}>
        <Container>
          <Row>
            <Col md={8}>
              <h2 style={{ color: '#f7a900', fontWeight: '700', fontSize: '2.5rem' ,  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}}>
                🔹 Legal & Professional Services
              </h2>
              <p style={{ fontSize: '1.1rem', marginTop: '15px' }}>
                Efficiency, compliance, and document security — simplified.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features */}
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              {features.map((item, idx) => (
                <li key={idx} style={{
                  backgroundColor: '#ffffff',
                  marginBottom: '15px',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  borderLeft: '5px solid #f7a900',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p style={{
              fontSize: '1.05rem',
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
              lineHeight: '1.7'
            }}>
              Spend less time on operations,<br />
              more time on clients.
            </p>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#f7a900',
        color: '#000',
        padding: '40px 20px',
        textAlign: 'center',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px'
      }}>
        <h4 style={{ fontWeight: '600', marginBottom: '20px' }}>
          Let’s build your next secure, compliant platform together.
        </h4>
        <Button
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '30px',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          Get Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default LegalServicesPage;
