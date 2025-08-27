import React from "react";
import "./Footer.css"; // You'll need to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Job</h3>
          <p className="footer-text">
            Quiz enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mouris d...
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/candidates">For Candidates</a></li>
            <li><a href="/employers">For Employers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Job Categories</h3>
          <ul className="footer-links">
            <li><a href="/telecommunications">Telecommunications</a></li>
            <li><a href="/hotels-tourism">Hotels & Tourism</a></li>
            <li><a href="/construction">Construction</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/financial-services">Financial Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text">
            Dr. nurse pediatric nurse guides, Non-medius documentary visitpillator
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" className="email-input" />
            <button className="subscribee-btn btn-primary">Subscribe now</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © Copyright 1 Job Portal 2024. Disclosed by Tigma guru
        </p>
      </div>
    </footer>
  );
};

export default Footer;