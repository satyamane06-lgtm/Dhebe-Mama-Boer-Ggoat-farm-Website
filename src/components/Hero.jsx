import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, BUSINESS } from '../data/config';
import InstagramIcon from './InstagramIcon';
import YoutubeIcon from './YoutubeIcon';


export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background Image */}
      <div className="hero__bg">
        <img
          src={`${import.meta.env.BASE_URL}images/boer-herd-grazing.jpg`}
          alt="Dhebemama Goat Farm panoramic view with goats grazing in Sangli Maharashtra"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span>🐐</span>
          <span>Trusted Goat Farm in Maharashtra</span>
        </div>

        <h1 className="hero__title">
          Premium Goat Farming &{' '}
          <span>Quality Goats</span> in Maharashtra
        </h1>

        <p className="hero__subtitle">
          Healthy, well-maintained and quality goats raised with proper care
          and responsible farming practices at our farm in Turchi, Tasgaon, Sangli.
        </p>

        <div className="hero__buttons">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--lg"
          >
            <MessageCircle size={20} />
            Contact on WhatsApp
          </a>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--instagram btn--lg"
          >
            <InstagramIcon size={20} />
            See Instagram
          </a>
          <a
            href={BUSINESS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--youtube btn--lg"
          >
            <YoutubeIcon size={20} />
            YouTube Channel
          </a>
        </div>

        <div className="hero__trust">
          {['Quality', 'Care', 'Healthy Goats', 'Trusted Service'].map((item) => (
            <div key={item} className="hero__trust-item">
              <div className="hero__trust-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
