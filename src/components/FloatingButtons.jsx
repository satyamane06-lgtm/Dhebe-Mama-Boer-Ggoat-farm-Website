import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppLink, getPhoneLink } from '../data/config';

export default function FloatingButtons() {
  return (
    <div className="floating" aria-label="Quick contact buttons">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating__btn floating__btn--whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="floating__btn-tooltip">WhatsApp Us</span>
      </a>
      <a
        href={getPhoneLink()}
        className="floating__btn floating__btn--call"
        aria-label="Call us now"
      >
        <Phone size={24} />
        <span className="floating__btn-tooltip">Call Now</span>
      </a>
    </div>
  );
}
