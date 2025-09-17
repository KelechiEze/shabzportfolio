"use client";

import React from "react";
import "./Footer.css";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Image
              src="/profile.jpg" // Replace with your logo/profile path in public folder
              alt="Profile"
              width={50}
              height={50}
              className="footer-profile-img"
            />
            <span className="footer-title">INBIO</span>
          </div>

          <div className="footer-icons">
            <a href="#" aria-label="Facebook" className="icon-btn">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="icon-btn">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="icon-btn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4 className="footer-heading">QUICK LINK</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">RESOURCES</h4>
            <ul>
              <li><a href="#">Authentication</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Over Right</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">DEVELOPERS</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Authentication</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Open Source</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
