import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FinancePage = () => {
  return (
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f6f1e7", padding: "60px 20px",  borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px'}}>
      {/* Intro Section */}
      <Container>
        <Row style={{
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px', backgroundImage: "url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
          backgroundSize: 'cover'
        }} className='py-5'>
          <Col md={6}>
            <div style={{ borderLeft: '5px solid #f7a900', paddingLeft: '20px', marginBottom: '30px' }}>
              <h2 style={{
                color: '#292929', fontWeight: '700', fontSize: '2.2rem', background: "linear-gradient(to right, #FFD700, #333333)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                🔹 Finance & Insurance
              </h2>
              <p style={{ color: '#555', fontSize: '1.2rem' }}>
                <span style={{ color: '#f7a900', fontWeight: '600' }}>Technology built</span> for trust,
                accuracy, and compliance.
              </p>
            </div>
          </Col>
        </Row>

        {/* Features Grid */}
        <Row className="mt-4">
          {[
            "Customer portals & policy platforms",
            "Document automation",
            "Fraud detection tools",
            "KYC/AML integration",
            "Secure data management (PCI DSS)"
          ].map((item, idx) => (
            <Col key={idx} md={6} style={{ marginBottom: '20px' }}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0px 3px 10px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#ffd600',
                  borderRadius: '50%',
                  marginRight: '15px'
                }}></div>
                <span style={{ color: '#292929', fontWeight: '500' }}>{item}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#f7a900',
        marginTop: '60px',
        padding: '25px 20px',
        textAlign: 'center',
        color: '#fff'
      }}>
        <h4 style={{ fontWeight: '700', fontSize: '1.5rem' }}>
          Your clients demand security. We deliver it by design.
        </h4>
      </div>
    </div>
  );
};

export default FinancePage;
