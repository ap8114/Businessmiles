import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const LogisticsPage = () => {
  return (
    <div style={{ backgroundColor: '#f5f0da', fontFamily: 'Arial, sans-serif', paddingBottom: '60px' }}>
      {/* Header */}
      <Container fluid style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center', borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',  backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#292929',  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" }}>
          Boost your <span style={{ color: '#f7a900' }}>logistics</span> operations with
          <br />
          <span style={{ color: '#ffd600' }}>smarter</span> supply chain technology
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#333', marginTop: '20px' }}>
          Real-time visibility. Smarter operations. Lower costs.
        </p>
      </Container>

      {/* Services Section */}
      <Container style={{ marginTop: '40px' }}>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card style={{ border: 'none', backgroundColor: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <Card.Body>
                <h5 style={{ fontWeight: 'bold', color: '#292929' }}>Fleet & Shipment Tracking</h5>
                <p style={{ color: '#555' }}>
                  Monitor your vehicles and deliveries in real-time with precision tracking systems.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ border: 'none', backgroundColor: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <Card.Body>
                <h5 style={{ fontWeight: 'bold', color: '#292929' }}>Route Optimization Tools</h5>
                <p style={{ color: '#555' }}>
                  Reduce fuel costs and improve delivery times with smart route planning.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ border: 'none', backgroundColor: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <Card.Body>
                <h5 style={{ fontWeight: 'bold', color: '#292929' }}>Warehouse Management</h5>
                <p style={{ color: '#555' }}>
                  Streamline storage, picking, and dispatch with robust warehouse solutions.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ border: 'none', backgroundColor: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <Card.Body>
                <h5 style={{ fontWeight: 'bold', color: '#292929' }}>IoT Integrations</h5>
                <p style={{ color: '#555' }}>
                  Integrate sensors and smart devices for automated, data-driven logistics.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ border: 'none', backgroundColor: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <Card.Body>
                <h5 style={{ fontWeight: 'bold', color: '#292929' }}>ERP & Inventory Automation</h5>
                <p style={{ color: '#555' }}>
                  Automate procurement, inventory, and distribution with scalable ERP systems.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Closing Statement */}
      <Container style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#292929' }}>
          We build logistics software that moves as fast as you do.
        </p>
       
      </Container>
    </div>
  );
};

export default LogisticsPage;
