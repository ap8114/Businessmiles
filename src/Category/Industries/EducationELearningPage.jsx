import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const features = [
  "LMS development",
  "Online course & exam platforms",
  "Live class integrations (Zoom, Teams)",
  "Student progress dashboards",
  "Mobile learning apps"
];

const EducationELearningPage = () => {
  return (
    <div style={{ backgroundColor: '#fffdf6', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Top Banner */}
      <div style={{
        backgroundColor: '#f7a900',
        padding: '40px 20px',
        color: '#fff',
        textAlign: 'center',
        borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px'
      }}>
        <h2 style={{ fontWeight: '700', fontSize: '2.4rem' }}>🎓 Education & E-Learning</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '10px auto' }}>
          Learning made digital. Engagement made easy.
        </p>
      </div>

      {/* Features */}
      <Container className="py-5">
        <Row className="g-4">
          {features.map((item, idx) => (
            <Col md={6} key={idx}>
              <div style={{
                backgroundColor: '#ffffff',
                padding: '20px 25px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                borderLeft: '6px solid #f7a900',
                height: '100%',
              }}>
                <p style={{ margin: 0, fontSize: '1rem', color: '#333', fontWeight: '500' }}>
                  {item}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA Footer */}
      <div style={{
        backgroundColor: '#292929',
        color: '#fff',
        textAlign: 'center',
        padding: '50px 20px',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px'
      }}>
        <h4 style={{ fontWeight: '600', fontSize: '1.3rem', marginBottom: '20px' }}>
          Scalable platforms to power schools, edtech startups, and corporate L&D
        </h4>
        <Button
          style={{
            backgroundColor: '#f7a900',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '30px',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          Schedule a Free Demo
        </Button>
      </div>
    </div>
  );
};

export default EducationELearningPage;
