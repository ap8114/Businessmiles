import React from "react";
import { Card } from "react-bootstrap";

const CloudInfrastructure = () => {
  return (
    <div
      style={{
        backgroundColor: "#f6f1e7", // matches light yellow/greyish section background
        padding: "60px 20px",
         borderBottomLeftRadius: '40px',
        borderBottomRightRadius: '40px',

      }}
    >
      <div className="container text-center">
        <div className='py-6' style={{
          backgroundImage: "url('https://i.postimg.cc/0jYTdB4F/Whats-App-Image-2025-05-06-at-18-36-42-b9d628b8.jpg')",
          backgroundSize: 'cover', borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px',
          padding: "60px",
        }}>
          <h2 style={{
            fontSize: "2.8rem",
            fontWeight: "bold", color: "#6b4e00", background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Cloud Infrastructure & DevOps
          </h2>
          <p style={{ maxWidth: "800px", margin: "15px auto", fontSize: "1.1rem" }}>
            <strong>Scale smarter. Operate faster. Deploy securely.</strong><br />
            We architect, deploy, and optimize cloud-native infrastructure using AWS, Azure, and Google Cloud — with a focus on performance, cost-efficiency, and DevOps automation.
          </p>
        </div>

        <Card
          style={{
            backgroundColor: "#ffffff",
            border: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            maxWidth: "600px",
            margin: "40px auto 20px",
            padding: "30px",
          }}
        >
          <Card.Body>
            <h5
              style={{
                color: "#ffb400",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Our Expertise:
            </h5>
            <ul style={{ listStyleType: "disc", textAlign: "left", paddingLeft: "20px", lineHeight: "1.8" }}>
              <li>Cloud Migration & Setup</li>
              <li>Kubernetes & Docker</li>
              <li>CI/CD Pipelines</li>
              <li>Monitoring & Scaling</li>
              <li>Serverless Architecture</li>
            </ul>
          </Card.Body>
        </Card>

        <p
          style={{
            fontWeight: "bold",
            color: "#6b4e00",
            fontSize: "1.1rem",
            marginTop: "20px",
          }}
        >
          ☁️ Cloud done right. No downtime, no surprises.
        </p>
      </div>
    </div>
  );
};

export default CloudInfrastructure;
