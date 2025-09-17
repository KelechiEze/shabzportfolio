'use client'; // Required if using Next.js App Router

import { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import Image from 'next/image';
import './Navbar.css';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    'HOME', 'FEATURES', 'PORTFOLIO', 'RESUME', 'TESTIMONIAL', 
    'CLIENTS', 'PRICING', 'BLOG', 'CONTACTS'
  ];

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Image 
            src="/sha.png" // public folder image
            alt="INBIO Profile" 
            className="navbar-logo-image"
            priority     // preloads the image
            width={50}   // required
            height={50}  // required
          />
          <span className="navbar-logo-text">INBIO</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-desktop navbar-links">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="navbar-link"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <div className="navbar-cart">
            <ShoppingCart size={20} className="navbar-cart-icon" />
            <span className="navbar-cart-badge">0</span>
          </div>
          <button className="navbar-buy-button">
            BUY NOW
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="navbar-mobile navbar-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
