import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const features = [
  "Custom storefronts (Shopify, WooCommerce, custom builds)",
  "Inventory & order automation",
  "POS system integration",
  "Omnichannel sales tracking",
  "Loyalty & coupon engines"
];

const RetailEcommercePage = () => {
  return (
    <div style={{ backgroundColor: '#fdfaf3', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Hero Section */}
      <Container fluid style={{ padding: '60px 15px 40px' }}>
        <Row className="align-items-center">
          <Col md={7}>
            <h2 style={{ color: '#292929', fontWeight: '700', fontSize: '2.5rem',  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" }}>
              🛒 Retail & E-Commerce
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
              <span style={{ color: '#f7a900', fontWeight: 600 }}>Sell more</span>, ship faster, and delight every customer.
            </p>
          </Col>
          <Col md={5} className="text-md-end text-center">
            <div style={{
              backgroundColor: '#f7a900',
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '30px',
              color: '#fff',
              fontWeight: '600',
              fontSize: '1rem'
            }}>
              E-Commerce Solutions
            </div>
          </Col>
        </Row>
      </Container>

      {/* Feature Grid Section */}
      <Container className="mt-4 pb-5">
        <Row>
          {features.map((feature, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <Card style={{
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                borderLeft: '6px solid #ffd600',
                backgroundColor: '#ffffff',
                height: '100%'
              }}>
                <Card.Body>
                  <Card.Text style={{ fontWeight: '500', color: '#444', fontSize: '1rem' }}>
                    {feature}
                  </Card.Text>
                </Card.Body>
              </Card>
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
        <h4 style={{ fontWeight: '700', fontSize: '1.5rem', marginBottom: '20px' }}>
          We turn <span style={{ color: '#ffd600' }}>browsers</span> into buyers — and first purchases into lifelong customers.
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
          Let’s Boost Your Sales
        </Button>
      </div>
    </div>
  );
};

export default RetailEcommercePage;
