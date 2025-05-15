import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HealthcarePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#333' }}>
      {/* Header Section */}
      <div style={{ backgroundColor: '#fcb900', padding: '60px 20px', textAlign: 'center',backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover' }}>
        <h1 style={{ color: '#000', fontWeight: 'bold',  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" }}>Healthcare & Life Sciences</h1>
        <p style={{ fontSize: '1.2rem', color: '#333' }}>
          Secure, compliant systems that improve care and efficiency.
        </p>
      </div>

      {/* Content Section */}
      <Container className="py-5">
        <Row className="mb-4">
          <Col md={6}>
            <Card style={{ border: 'none', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title style={{ color: '#fcb900', fontWeight: 'bold' }}>HIPAA-compliant software</Card.Title>
                <Card.Text>
                  Our solutions ensure full compliance with HIPAA regulations to safeguard patient information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ border: 'none', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title style={{ color: '#fcb900', fontWeight: 'bold' }}>Patient portals & appointment apps</Card.Title>
                <Card.Text>
                  Empower patients with easy access to their data and convenient appointment booking.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Card style={{ border: 'none', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title style={{ color: '#fcb900', fontWeight: 'bold' }}>Health record integration (EHR/EMR)</Card.Title>
                <Card.Text>
                  Seamless integration with existing electronic health records for smooth data flow.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ border: 'none', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title style={{ color: '#fcb900', fontWeight: 'bold' }}>Telemedicine platforms</Card.Title>
                <Card.Text>
                  Enable virtual consultations and remote healthcare services with secure, reliable tools.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={12}>
            <Card style={{ border: 'none', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title style={{ color: '#fcb900', fontWeight: 'bold' }}>Healthcare CRM & billing</Card.Title>
                <Card.Text>
                  Streamline patient relationship management and billing with integrated tools designed for healthcare providers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center">
          <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Your data stays safe. Your services stay accessible. Your patients stay satisfied.
          </h4>
          <Button style={{ backgroundColor: '#fcb900', border: 'none', color: '#000', fontWeight: 'bold' }}>
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HealthcarePage;