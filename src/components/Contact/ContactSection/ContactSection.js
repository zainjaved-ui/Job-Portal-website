import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">

        <div className="contact-info">
          <h2>You Will Grow, You Will Succeed. We Promise That</h2>
          <p className="description">
            Performance and facilite new art goals. Oppress media in lecture breakout checkout
            suitcase. Damit overalls multi-palemlocus adjusting.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <i className="fas fa-phone contact-icon"></i>
              <div>
                <h4>Call for inquiry</h4>
                <p>+257 389-6895</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="fas fa-envelope contact-icon"></i>
              <div>
                <h4>Send us email</h4>
                <p>kamukou@abcglobal.net</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="fas fa-clock contact-icon"></i>
              <div>
                <h4>Opening hours</h4>
                <p>Mon - Fri: 10AM - 10PM</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div>
                <h4>Office</h4>
                <p>19 North Road Piscataway, NY 08854</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Your last name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your E-mail address" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message..." rows="5"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
