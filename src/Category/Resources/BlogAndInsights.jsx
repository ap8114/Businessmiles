import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const blogPosts = [
  "5 Costly IT Mistakes to Avoid in 2024",
  "How We Saved a Retail Client $250K with Automation",
  "The Ultimate Checklist for Custom Software Projects",
  "How Secure is Your Cloud Infrastructure?",
  "Building an Internal App vs Buying One: Pros & Cons"
];

const BlogAndInsights = () => {
  return (
    <div style={{ backgroundColor: '#fdfdfd', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '60px 20px'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2 style={{ color: '#f7a900', fontWeight: '700', fontSize: '2.5rem' }}>
                🧠 Blog & Insights
              </h2>
              <p style={{ fontSize: '1.15rem', marginTop: '15px' }}>
                Smart ideas. Real expertise. Fresh weekly.
              </p>
              <p style={{ fontSize: '1rem', marginTop: '10px' }}>
                We publish original content from our developers, IT engineers, project managers, and marketing experts —
                covering emerging tech, product strategy, infrastructure tips, and digital growth.
              </p>
              <p style={{ fontWeight: '600', color: '#f7a900', marginTop: '10px' }}>
                🧠 Always educational. Never generic.
              </p>
              <Button
                style={{
                  backgroundColor: '#f7a900',
                  color: '#000',
                  border: 'none',
                  padding: '12px 30px',
                  marginTop: '20px',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}
              >
                👉 Read the Blog
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Content */}
      <Container className="py-5">
        <Row>
          <Col>
            <h4 style={{
              fontWeight: '700',
              borderBottom: '3px solid #f7a900',
              paddingBottom: '10px',
              display: 'inline-block',
              marginBottom: '30px'
            }}>
              ✨ Featured Content
            </h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {blogPosts.map((post, idx) => (
                <li key={idx} style={{
                  backgroundColor: '#fff',
                  padding: '15px 20px',
                  marginBottom: '15px',
                  borderLeft: '5px solid #f7a900',
                  borderRadius: '5px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  fontSize: '1.05rem'
                }}>
                  ✅ {post}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Subscribe Section */}
      <div style={{
        backgroundColor: '#f7a900',
        padding: '50px 20px',
        textAlign: 'center',
        borderRadius: '20px',
        margin: '40px auto',
        width: '90%'
      }}>
        <h4 style={{ fontWeight: '700' }}>💌 Want Resources Delivered?</h4>
        <p style={{ marginTop: '10px', fontSize: '1rem' }}>
          Subscribe to our monthly insights email — one actionable newsletter, packed with value.
          <br />
          🔒 No spam. Just smart updates.
        </p>
        <Button
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            marginTop: '20px',
            padding: '12px 30px',
            borderRadius: '30px',
            fontWeight: '600',
            fontSize: '1rem'
          }}
        >
          👉 Subscribe to Newsletter
        </Button>
      </div>

      {/* Contact Section */}
      <Container className="py-5">
        <Row>
          <Col md={7}>
            <h4 style={{ fontWeight: '700', marginBottom: '20px' }}>
              🧠 Need Help Applying These Insights?
            </h4>
            <p style={{ fontSize: '1rem' }}>
              Our consultants are here to help you turn knowledge into strategy.
              <br />
              Let’s talk about your goals — and how we can guide you forward.
            </p>
            <p style={{ marginTop: '20px' }}>
              📞 <strong>+91-XXXXXXXXXX</strong><br />
              📧 <strong>hello@yourcompany.com</strong>
            </p>
            <Button
              style={{
                backgroundColor: '#f7a900',
                color: '#000',
                border: 'none',
                marginTop: '10px',
                padding: '10px 25px',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              🗓 Book a Free Strategy Session
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogAndInsights;
