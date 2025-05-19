import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function WhoWeAre() {
  return (
  <div style={{
  margin: '40px 20px', // top and side margin
  borderRadius: '40px',
  overflow: 'hidden',
}}>
  <Container
    className="py-5 text-center"
    style={{
      backgroundImage: 'url("https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderBottomLeftRadius: '40px',
      borderBottomRightRadius: '40px',
      padding: '60px 20px',
    }}
  >
    <h2
      style={{
        fontWeight: 'bold',
        background: "linear-gradient(to right, #FFD700, #333333)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      We make technology simple.
    </h2>
    <p className="mt-3">
      1. Consulting &nbsp;&nbsp; 2. Implementation &nbsp;&nbsp; 3. Support
    </p>
    <p style={{ maxWidth: '800px', margin: '20px auto' }}>
      As expert technical advisors, we decode the technology needs of your business and provide the roadmap, solutions, and support to move you forward. We make the complex simple — with clear strategies and measurable impact.
    </p>
  </Container>

      {/* Our Promise */}
      <Container className="text-center py-4" style={{ backgroundColor: '#fffbe0' }}>
        <h3 className="mb-4">Our Promise</h3>
        <Row>
          {[
            { icon: '✅', title: 'We Show Up', desc: '98% IT Response SLA, No Vendor Delays' },
            { icon: '⏰', title: 'We Respond', desc: '5 Second Avg Response Time, 24/7 IT Support' },
            { icon: '🏆', title: 'We Solve', desc: '87.5% 1st Contact Fixes' }
          ].map((item, idx) => (
            <Col key={idx} md={4} className="mb-3">
              <Card style={{ backgroundColor: '#fff', border: 'none' }}>
                <Card.Body>
                  <div style={{ fontSize: '40px' }}>{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="text-center py-5">
        <h3>Hear what our Raving Fans have to say</h3>
        <div className="my-4">
          <video width="320" controls>
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            MDT <br />
            “It really was seamless. I needed somebody working on a higher level who could bridge the people, priorities, and the technology—and that’s what Miles IT brought us.”
          </p>
        </div>
      </Container>

      {/* Google Reviews */}
      <Container className="text-center py-5" style={{ background: 'linear-gradient(to right, #fff7d6, #f9b233)' }}>
        <h4>Check out our Google reviews!</h4>
        <p>⭐ 4.8 on Google</p>
        <Row>
          {[
            { name: 'Robert M.', review: 'Outstanding service! They take time to understand our business and provide proactive solutions.' },
            { name: 'Kevin McCarthy', review: 'Amazing IT partner! Reliable, fast, and incredibly helpful. Their service has been top-notch.' },
            { name: 'Gina Thederhill', review: 'Very professional and always responsive. They helped our team navigate a big cloud migration smoothly.' }
          ].map((item, idx) => (
            <Col key={idx} md={4} className="mb-3">
              <Card style={{ padding: '20px', backgroundColor: '#fff', border: 'none' }}>
                <Card.Body>
                  <h6 style={{ fontWeight: 'bold' }}>{item.name}</h6>
                  <p>"{item.review}"</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button variant="dark">View More</Button>
      </Container>

      {/* Footer CTA */}
      <Container className="text-center py-5">
        <h4>Let’s build something great together</h4>
      </Container>

   
    </div>
  );
}