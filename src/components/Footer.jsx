// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-logo">⚡ Berc<span> Group</span></h3>
          <p className="footer-description">
            Leading provider of innovative power solutions, specializing in solar energy systems, 
            advanced inverters, and reliable generators for homes and businesses.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📸</a>
            <a href="#" className="social-icon">🔗</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Products Links */}
        <div className="footer-section">
          <h4>Our Products</h4>
          <ul className="footer-links">
            <li><a href="#solar-inverters">Solar Inverters</a></li>
            <li><a href="#solar-panels">Solar Panels</a></li>
            <li><a href="#battery-storage">Battery Storage</a></li>
            <li><a href="#generators">Power Generators</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📍</span>
              <span>Berc, Sarvodya Colony, Meerut Road, Hapur - 245304</span>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <span>+91 8475843925</span>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <span>info@bercsolutions.com</span>
            </li>
            <li>
              <span className="contact-icon">⏰</span>
              <span>Mon-Sat: 9AM - 7PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} PowerGrid Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;