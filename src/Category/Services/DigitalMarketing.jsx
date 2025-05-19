import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DigitalMarketing = () => {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Header Section */}
      <section
        style={{
          margin: "40px 20px 0",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          padding: "60px 20px",
          textAlign: "center",
          backgroundImage:
            "url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#c59f00",
              background: "linear-gradient(to right, #FFD700, #333333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            💼 Digital Marketing & Growth Strategy
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginTop: "20px",
              maxWidth: "700px",
              margin: "0 auto",
              color: "#333",
            }}
          >
            Fuel your funnel. Grow your business.
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "10px",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#333",
            }}
          >
            We don’t guess. We use data, design, and targeted campaigns to get
            your business in front of the right people — and keep them coming
            back.
          </p>
        </Container>
      </section>

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
              <Card style={{
                border: '1px solid #eee',
                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                borderRadius: '10px',
                height: '100%',
              }}>
                <Card.Body>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    color: '#333',
                    padding: '10px',
                  }}>
                    📊 {item}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#ffb400', padding: '25px 0' }}>
        <Container className="text-center">
          <h4 style={{
            color: '#fff',
            fontWeight: '600',
            marginBottom: '0',
            fontSize: '1.3rem',
          }}>
            Every click. Every lead. Measured, optimized, maximized.
          </h4>
        </Container>
      </div>
    </div>
  );
};

export default DigitalMarketing;
