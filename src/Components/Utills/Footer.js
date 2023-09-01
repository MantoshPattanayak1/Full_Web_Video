import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
     <div className="footer-container">
      <div className="footer-logo">
        <img alt="soul_logo" className="h-10" src="https://soulunileaders.com/wp-content/uploads/2022/04/soul_edited_edited-1.png" />
        Soul Ltd
      </div>
      {/* Rest of your content... */}
    </div>
      <div className="footer-links">
        <a href="#" className="footer-link">Home</a>
        <a href="#" className="footer-link">About Us</a>
        <a href="#" className="footer-link">Services</a>
        <a href="#" className="footer-link">Contact</a>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Soul Ltd. All rights reserved.
      </div>
      <div className="footer-social">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
