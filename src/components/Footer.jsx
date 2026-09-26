import { Phone, MessageCircle, MapPin } from 'lucide-react';
import Instagram from './InstagramIcon';
import Youtube from './YoutubeIcon';
import { BUSINESS, getWhatsAppLink, getPhoneLink } from '../data/config';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Goats', href: '#goats' },
  { label: 'Breeds', href: '#breeds' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo-wrap">
              <img src={BUSINESS.logoImage} alt={`${BUSINESS.nameMarathi} logo`} className="footer__logo-img" />
              <div>
                <h3 style={{ margin: 0 }}>{BUSINESS.nameMarathi}</h3>
                <p style={{ margin: '2px 0 0', fontWeight: '600', color: '#f0a500', fontSize: '0.95rem' }}>{BUSINESS.subtitle}</p>
              </div>
            </div>
            <p>
              {BUSINESS.tagline}. Located in {BUSINESS.address.full}. We specialize
              in providing premium quality Boer goats with excellent genetics.
            </p>
            <div className="footer__social">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a href={getPhoneLink()} aria-label="Call us">
                <Phone size={18} />
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeds */}
          <div className="footer__col">
            <h4>Our Breeds</h4>
            <ul>
              <li><a href="#breeds">Boer Goats</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={getPhoneLink()}>
                  📞 +91 {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp Us
                </a>
              </li>
              <li>
                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">
                  📷 {BUSINESS.instagramHandle}
                </a>
              </li>
              <li>
                <a href={BUSINESS.youtube} target="_blank" rel="noopener noreferrer">
                  ▶️ {BUSINESS.youtubeHandle}
                </a>
              </li>
              <li>
                <a href={BUSINESS.googleMaps} target="_blank" rel="noopener noreferrer">
                  📍 {BUSINESS.address.full}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p>{BUSINESS.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
