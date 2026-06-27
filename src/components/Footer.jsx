// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Products Links */}
        <div className="footer-section">
          <h4>Our Products</h4>
          <ul className="footer-links">
            <li><Link to="/products?category=solar-inverters">Solar Inverters</Link></li>
            <li><Link to="/products?category=solar-panels">Solar Panels</Link></li>
            <li><Link to="/products?category=battery-storage">Battery Storage</Link></li>
            <li><Link to="/products?category=generators">Power Generators</Link></li>
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
          <p>&copy; {currentYear} Berc Group. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;