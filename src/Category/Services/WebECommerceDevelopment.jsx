import React from "react";
import { Card, CardBody } from "react-bootstrap";

const WebECommerceDevelopment = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
      <section
        style={{
          background: "#fff8e6",
          padding: "60px 20px",
          textAlign: "center",
          color: "#4e4e4e",
           borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',
             backgroundImage:"url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
        backgroundSize:'cover'
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#c59f00",   background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent" }}>
            🌐 Web & E-Commerce Development
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginTop: "20px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Build a web presence that performs.
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "10px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            We design fast, user-friendly, SEO-optimized websites and e-commerce
            platforms that drive conversions and elevate your brand.
          </p>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#fff",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h3 style={{ color: "#c59f00", marginBottom: "30px" }}>
            Platforms & Features:
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {[
              "WordPress, Shopify, Custom CMS",
              "React.js / Next.js Frontend",
              "Headless Architecture",
              "Booking Systems, Payment Integration",
              "UI/UX Design & Responsive Development",
            ].map((item, idx) => (
              <Card
                key={idx}
                style={{
                  width: "18rem",
                  backgroundColor: "#fff8e6",
                  border: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                <CardBody>
                  <p style={{ color: "#4e4e4e", fontWeight: "bold" }}>{item}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#ffb400",
          color: "#fff",
          textAlign: "center",
          padding: "25px 10px",
        }}
      >
        <h3 style={{ fontSize: "1.75rem", fontWeight: "bold" }}>
          🛒 Built to attract. Built to convert. Built to grow.
        </h3>
      </section>
    </div>
  );
};

export default WebECommerceDevelopment;