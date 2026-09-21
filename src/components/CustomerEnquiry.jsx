import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink } from '../data/config';

export default function CustomerEnquiry() {
  return (
    <section className="cta" aria-label="Customer enquiry call to action">
      <div className="container">
        <div className="cta__content">
          <h2>Looking for Quality Goats?</h2>
          <p>
            Contact us today to check available goats, breeds, prices and farm
            visit availability. We are happy to assist you.
          </p>
          <div className="cta__buttons">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--lg"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>
            <a href={getPhoneLink()} className="btn btn--outline-white btn--lg">
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
