import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DigitalMarketing = () => {
  return (
    <div style={{ backgroundColor: '#fff', }}>
      {/* Header Section */}
      <Container className="text-center py-5" style={{   backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover'}}>
        <h2>
          <span style={{ color: '#c59f00', fontWeight: 'bold' }}>Digital Marketing</span> & Growth Strategy
        </h2>
        <p className="mt-3" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Fuel your funnel. Grow your business.
        </p>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#333' }}>
          We don’t guess. We use data, design, and targeted campaigns to get your business in front of the right people — and keep them coming back.
        </p>
      </Container>

      {/* What We Offer Section */}
      <Container className="py-5">
        <h4 className="text-center mb-4" style={{ color: '#c59f00' }}>What We Offer:</h4>
        <Row className="g-4 justify-content-center">
          {[
            "SEO (On-page, Off-page, Technical)",
            "Google Ads, LinkedIn Ads, Retargeting",
            "Email Marketing & Automation",
            "Conversion Rate Optimization (CRO)",
            "Analytics, Funnels & Reporting"
          ].map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card style={{ border: '1px solid #eee', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', borderRadius: '8px' }}>
                <Card.Body>
                  <div style={{ fontSize: '1.2rem', fontWeight: '500', color: '#333' }}>
                    📊 {item}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#ffb400', padding: '40px 0' }}>
        <Container className="text-center">
          <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '20px' }}>
            Every click. Every lead. Measured, optimized, maximized.
          </h4>
          <Button
            style={{
              backgroundColor: '#fff',
              color: '#ffb400',
              border: '2px solid #fff',
              fontWeight: 'bold',
              padding: '10px 25px',
              borderRadius: '50px'
            }}
          >
            Contact Us
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default DigitalMarketing;
