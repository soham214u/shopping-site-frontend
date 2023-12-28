import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h3>About Us</h3>
            <p>This is a basic e-commerce site <br/> developed for practice reason</p>
          </div>
          <div className="column">
            <h3>Contact Us</h3>
            <p>123 Main Street, Kolkata, India</p>
            <p>Email: shopnow@gmail.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
          <div className="column">
            <h3>Follow Us</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;