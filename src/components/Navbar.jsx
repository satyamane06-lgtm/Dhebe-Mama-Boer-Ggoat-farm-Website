import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS, getWhatsAppLink, getPhoneLink } from '../data/config';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Goats', href: '#goats' },
  { label: 'Goat Breeds', href: '#breeds' },
  { label: 'Our Farm', href: '#farm' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo" aria-label={BUSINESS.name}>
          <img
            src={BUSINESS.logoImage}
            alt={`${BUSINESS.nameMarathi} – ${BUSINESS.subtitle} logo`}
            className="navbar__logo-img"
          />
          <div className="navbar__logo-text">
            <span className="navbar__logo-marathi">{BUSINESS.nameMarathi}</span>
            <span className="navbar__logo-sub">{BUSINESS.subtitle}</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar__cta">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--sm"
            aria-label="WhatsApp us"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="navbar__mobile-actions">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-btn navbar__mobile-btn--wa"
            aria-label="WhatsApp us"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={getPhoneLink()}
            className="navbar__mobile-btn navbar__mobile-btn--call"
            aria-label="Call us"
          >
            <Phone size={18} />
          </a>
          <button
            className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleNavClick}>
            {link.label}
          </a>
        ))}
        <div className="navbar__mobile-menu-cta">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
            onClick={handleNavClick}
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          <a href={getPhoneLink()} className="btn btn--call" onClick={handleNavClick}>
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
