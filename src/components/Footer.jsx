import React from 'react';
import "../styles/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <h3>About Us</h3>
            <p>Welcome to TechShow! We are passionate <br /> about delivering an exceptional online shopping <br /> experience. Discover a wide range of high-quality <br /> products, enjoy seamless navigation. Shop with <br /> confidence at TechShow and embark on a journey  <br /> of convenience and satisfaction.</p>
          </div>
          <div className="column">
            <h3>Contact Us</h3>
            <p>123 Main Street, Kolkata, India</p>
            <p>Email: techshow@gmail.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
          <div className="column">
            <h3>Follow Us</h3>
            <FaFacebook className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaSquareXTwitter className="footer-icon" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechShow. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;