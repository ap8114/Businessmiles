import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const features = [
  "Booking and inquiry platforms",
  "Property listing portals",
  "Real estate CRMs",
  "Rental & payment systems",
  "Agent and client dashboards"
];

const RealEstatePage = () => {
  return (
    <div style={{ backgroundColor: '#f5f0da', paddingTop: '60px', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Hero Section */}
      <Container fluid style={{backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover'}} className='py-5'>
        <Row className="align-items-center">
          <Col md={1} style={{ borderLeft: '5px solid #f7a900', height: '100%' }}></Col>
          <Col md={11}>
            <h2 style={{
              color: '#292929',
              fontWeight: '700',
              fontSize: '2.5rem',
              marginBottom: '10px',
                background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
            }}>
              🔹 Real Estate & Property Tech
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#444' }}>
              <span style={{ color: '#f7a900', fontWeight: '600' }}>Smart tools</span> to manage properties,
              engage clients, and close deals.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Features Zigzag Layout */}
      <Container style={{ marginTop: '50px' }}>
        {features.map((feature, idx) => (
          <Row key={idx} className="align-items-center mb-4">
            {idx % 2 === 0 ? (
              <>
                <Col md={1}></Col>
                <Col md={5}>
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderLeft: '6px solid #ffd600',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                  }}>
                    <p style={{ margin: 0, fontWeight: 500 }}>{feature}</p>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col md={{ span: 5, offset: 6 }}>
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderRight: '6px solid #ffd600',
                    borderRadius: '10px',
                    textAlign: 'right',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                  }}>
                    <p style={{ margin: 0, fontWeight: 500 }}>{feature}</p>
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>

      {/* CTA Section */}
      <div style={{
        backgroundColor: '#292929',
        color: '#fff',
        marginTop: '60px',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h4 style={{ fontWeight: '700', fontSize: '1.5rem' }}>
          From residential to commercial, we digitize every square foot.
        </h4>
        <Button
          style={{
            backgroundColor: '#f7a900',
            border: 'none',
            padding: '12px 30px',
            marginTop: '20px',
            borderRadius: '25px',
            fontWeight: '600'
          }}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default RealEstatePage;
