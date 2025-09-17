'use client';

import { Mail, Phone, Twitter, Facebook, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <p className="contact-subtitle">Contact</p>
        <h2 className="contact-title">Contact With Me</h2>

        <div className="contact-grid">
          {/* Left Card */}
          <div className="contact-left">
            <h3 className="contact-name">Nevine Acotanza</h3>
            <p className="contact-role">Chief Operating Officer</p>
            <p className="contact-description">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <Phone size={16} className="icon-red" />
                <span>+012 345 678 90</span>
              </div>
              <div className="contact-info-item">
                <Mail size={16} className="icon-red" />
                <span>admin@example.com</span>
              </div>
            </div>
            <p className="contact-find">Find With Me</p>
            <div className="contact-socials">
              <a href="#">
                <Twitter size={18} />
              </a>
              <a href="#">
                <Facebook size={18} />
              </a>
              <a href="#">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Card (Form) */}
          <div className="contact-right">
            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="contact-form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="Enter your phone" />
                </div>
              </div>

              <div className="contact-form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="contact-form-group">
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>

              <div className="contact-form-group">
                <label>Your Message</label>
                <textarea rows={5} placeholder="Write your message here"></textarea>
              </div>

              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
