import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const EndToEndSupport = () => {
  const themeColor = '#fcb900'; // Same yellow shade from the image
  const darkGray = '#716f6f';

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#fff9f0', padding: '3rem 0' }}>
      <Container >
        <div className='py-3' style={{
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px', 
          backgroundImage: "url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
          backgroundSize: 'cover'
        }}>
          {/* Section Title */}
          <h2 style={{
            color: '#2b2b2b', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            <span style={{ WebkitTextFillColor: "transparent" }} >🔁</span> End-to-End Support
          </h2>

          {/* Description */}
          <p style={{ color: darkGray, textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            When you work with <strong>[Your Company Name]</strong>, you get more than a vendor — you get a proactive partner invested in your success.
          </p>

          {/* Features List */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              'Dedicated Project Managers',
              'Sprint-Based Development',
              'Transparent Billing & Reporting',
              '24/7 Helpdesk & SLA Coverage',
              'Ongoing Maintenance & Versioning'
            ].map((feature, idx) => (
              <Card
                key={idx}
                style={{ width: '18rem', background: '#ffffff', borderColor: themeColor, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
              >
                <Card.Body>
                  <Card.Text style={{ color: '#333', fontWeight: 500, textAlign: 'center' }}>{feature}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>


          <Button
            style={{ backgroundColor: themeColor, border: 'none', color: '#fff', padding: '0.75rem 1.5rem', fontWeight: '600', fontSize: '1rem', borderRadius: '0.5rem' }}
          >
            🗓 Book a Free Strategy Call
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default EndToEndSupport;
