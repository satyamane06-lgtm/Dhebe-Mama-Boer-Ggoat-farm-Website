import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import Instagram from './InstagramIcon';
import Youtube from './YoutubeIcon';
import { BUSINESS, getWhatsAppLink, getPhoneLink } from '../data/config';

export default function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact information">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2>Contact Us</h2>
          <p>
            Reach out to us for goat enquiries, farm visits, pricing, or any
            questions about our goats and breeds.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <MapPin size={22} />
              </div>
              <div className="contact__info-text">
                <h3>Farm Location</h3>
                <p>{BUSINESS.address.full}</p>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <Phone size={22} />
              </div>
              <div className="contact__info-text">
                <h3>Mobile Number</h3>
                <a href={getPhoneLink()}>+91 {BUSINESS.phone}</a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <MessageCircle size={22} />
              </div>
              <div className="contact__info-text">
                <h3>WhatsApp</h3>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <Instagram size={22} />
              </div>
              <div className="contact__info-text">
                <h3>Instagram</h3>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <Youtube size={22} />
              </div>
              <div className="contact__info-text">
                <h3>YouTube</h3>
                <a
                  href={BUSINESS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BUSINESS.youtubeHandle}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="contact__buttons">
              <a href={getPhoneLink()} className="btn btn--call btn--sm">
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--sm"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
                style={{
                  borderColor: '#C13584',
                  color: '#C13584',
                }}
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href={BUSINESS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
                style={{
                  borderColor: '#FF0000',
                  color: '#FF0000',
                }}
              >
                <Youtube size={16} />
                YouTube
              </a>
              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="contact__map">
            <iframe
              src={BUSINESS.googleMapsEmbed}
              title={`${BUSINESS.name} location on Google Maps`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
