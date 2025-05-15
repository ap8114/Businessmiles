import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const features = [
  "Field data collection apps",
  "Project tracking dashboards",
  "Vendor & material management",
  "Compliance & safety logs",
  "Employee check-in/check-out systems"
];

const ConstructionContractingPage = () => {
  return (
    <div style={{ backgroundColor: '#fff8ec', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Golden Accent Bar */}
      <div style={{ height: '5px', backgroundColor: '#f7a900' }} />

      {/* Hero Section */}
      <Container className="py-5">
        <Row>
          <Col md={7}>
            <h2 style={{ color: '#333', fontWeight: '700', fontSize: '2.2rem' }}>
              🏗️ Construction & Contracting
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>
              From site to server — tech that builds better operations.
            </p>
          </Col>
          <Col md={5} className="text-md-end text-center mt-3 mt-md-0">
            <div style={{
              backgroundColor: '#f7a900',
              color: '#fff',
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '20px',
              fontWeight: '600'
            }}>
              Built for Builders
            </div>
          </Col>
        </Row>
      </Container>

      {/* Features List */}
      <Container className="pb-5">
        <Row className="g-4">
          {features.map((item, idx) => (
            <Col md={6} key={idx}>
              <div style={{
                backgroundColor: '#ffffff',
                borderLeft: '5px solid #f7a900',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                height: '100%',
                borderRadius: '6px'
              }}>
                <p style={{ margin: 0, color: '#333', fontSize: '1rem', fontWeight: 500 }}>
                  {item}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#292929',
        color: '#fff',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <h4 style={{ fontWeight: '700', fontSize: '1.4rem', marginBottom: '20px' }}>
          Let software handle the paperwork so your teams can build.
        </h4>
        <Button
          style={{
            backgroundColor: '#f7a900',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '30px',
            fontWeight: '600'
          }}
        >
          Book a Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default ConstructionContractingPage;
