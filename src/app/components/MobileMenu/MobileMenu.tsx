import { X } from 'lucide-react';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: string[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="mobile-menu-backdrop" onClick={onClose} />
      
      {/* Menu */}
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <h3 className="mobile-menu-title">Menu</h3>
          <button 
            className="mobile-menu-close"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="mobile-menu-nav">
          {navLinks.map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-menu-link"
              onClick={onClose}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;