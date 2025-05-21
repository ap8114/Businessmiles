import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="pt-5" style={{ backgroundColor: '#f6f1e7' }}>
      {/* Header Section */}
      <div className="container text-center py-5">
        <h2 className="fw-bold">Get in Touch</h2>
        <p className="text-muted">We’d love to hear from you. Reach out to us using the form below or via our contact information.</p>
      </div>

      {/* Contact Info and Form */}
      <div className="container py-4 bg-white">
        <div className="row gy-5 p-4">
          {/* Left - Contact Info */}
          <div className="col-md-5">
            <h5 className="fw-bold mb-3">Contact Information</h5>
            <div className="mb-3 d-flex align-items-start gap-2">
              <FaMapMarkerAlt className="text-warning mt-1" />
              <p className="mb-0">1234 Innovation Drive, Tech Valley, USA</p>
            </div>
            <div className="mb-3 d-flex align-items-start gap-2">
              <FaPhone className="text-warning mt-1" />
              <p className="mb-0">+1 (866) 955-1787</p>
            </div>
            <div className="mb-3 d-flex align-items-start gap-2">
              <FaEnvelope className="text-warning mt-1" />
              <p className="mb-0">contact@milesit.com</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="col-md-7">
            <h5 className="fw-bold mb-3">Send Us a Message</h5>
            <form>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button
                type="submit"
                className="btn fw-bold"
                style={{
                  background: "linear-gradient(to right, #FFD700, #FF8C00)",
                  color: "#333",
                  border: "none",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
