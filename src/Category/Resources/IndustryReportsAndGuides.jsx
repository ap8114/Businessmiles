import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const IndustryReportsAndGuides = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfc", padding: "70px 20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover' }}>
      <Container style={{ maxWidth: "900px", backgroundColor: "#ffffff", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        <Row>
          {/* Left Vertical Colored Bar with Icons */}
          <Col md={3} style={{ backgroundColor: "#f9c31f", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 10px" }}>
            <div style={{ marginBottom: "40px", textAlign: "center", color: "#222" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "50%", padding: "15px", marginBottom: "15px", display: "inline-block" }}>
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-report-business-and-finance-flaticons-lineal-color-flat-icons.png" alt="Reports" style={{ width: "40px", height: "40px" }} />
              </div>
              <h5 style={{ fontWeight: "700", fontSize: "16px", color: "#222" }}>Industry Reports</h5>
            </div>

            <div style={{ textAlign: "center", color: "#222" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "50%", padding: "15px", marginBottom: "15px", display: "inline-block" }}>
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-guide-business-flaticons-lineal-color-flat-icons.png" alt="Guides" style={{ width: "40px", height: "40px" }} />
              </div>
              <h5 style={{ fontWeight: "700", fontSize: "16px", color: "#222" }}>How-To Guides</h5>
            </div>
          </Col>

          {/* Right Content Section */}
          <Col md={9} style={{ padding: "50px 40px", color: "#333" }}>
            <section style={{ marginBottom: "60px" }}>
              <h2 style={{ fontWeight: "800", fontSize: "28px", marginBottom: "15px", color: "#1a1a1a" ,  background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"}}>📊 Industry Reports & Trend Guides</h2>
              <p style={{ fontSize: "17px", lineHeight: "1.6" }}>
                Stay informed. Stay competitive. From cloud adoption and AI tools to digital transformation trends and compliance changes —
                our research-backed reports keep you ahead of the curve.
              </p>
              <p style={{ fontWeight: "600", fontSize: "16px", marginTop: "15px" }}>
                📈 Download full PDFs with insights tailored for IT leaders and business executives.
              </p>
              <Button
                style={{
                  backgroundColor: "#f9c31f",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "30px",
                  fontWeight: "700",
                  fontSize: "16px",
                  marginTop: "20px",
                  color: "#222",
                  boxShadow: "0 6px 12px rgba(249,195,31,0.4)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundColor = "#d8ad00";
                  e.target.style.boxShadow = "0 8px 20px rgba(216,173,0,0.6)";
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundColor = "#f9c31f";
                  e.target.style.boxShadow = "0 6px 12px rgba(249,195,31,0.4)";
                }}
              >
                👉 Get Reports
              </Button>
            </section>

            <section>
              <h2 style={{ fontWeight: "800", fontSize: "28px", marginBottom: "15px", color: "#1a1a1a" }}>🎯 Ultimate How-To Guides</h2>
              <p style={{ fontSize: "17px", lineHeight: "1.6" }}>
                Step-by-step tech strategy playbooks. Whether you're planning a software project, choosing between cloud platforms,
                or mapping out an IT strategy, our practical guides offer clear direction.
              </p>
              <ul style={{ fontSize: "16px", lineHeight: "1.7", marginTop: "15px", paddingLeft: "20px" }}>
                <li>• Building MVPs</li>
                <li>• Choosing a tech stack</li>
                <li>• IT budgeting</li>
                <li>• Cloud vs On-prem</li>
                <li>• Compliance checklists</li>
              </ul>
              <Button
                style={{
                  backgroundColor: "#f9c31f",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "30px",
                  fontWeight: "700",
                  fontSize: "16px",
                  marginTop: "20px",
                  color: "#222",
                  boxShadow: "0 6px 12px rgba(249,195,31,0.4)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundColor = "#d8ad00";
                  e.target.style.boxShadow = "0 8px 20px rgba(216,173,0,0.6)";
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundColor = "#f9c31f";
                  e.target.style.boxShadow = "0 6px 12px rgba(249,195,31,0.4)";
                }}
              >
                👉 View All Guides
              </Button>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndustryReportsAndGuides;